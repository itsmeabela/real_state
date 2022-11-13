import Link from "next/link";

import style from "../styles/Home.module.css";
import image from "../Assets/images/no_image.jpg";
//componetns
import Property from "../components/Property";
//api
import { baseUrl, fetchApi } from "../utils/fetchApi";

const Banner = ({
  purpose,
  title,
  title2,
  desc1,
  linkName,
  buttonText,
  desc2,
  imageUrl,
}) => (
  <>
    <div
      className={style.container}
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        width: "100%",
        height: "90vh",
        borderRadius: "10px",
      }}
    >
      {/* <Image src={imageUrl} width={500} height={300} alt="Banner" /> */}
      <div className={style.content}>
        <div className={style.info}>
          <h1 className={style.title}>{purpose}</h1>
          <h2 className={style.subtitle}>
            {title} <br /> {title2}
          </h2>
          <p className={style.description}>
            {desc1} <br /> {desc2}
          </p>
        </div>

        <Link href={linkName}>{buttonText}</Link>
      </div>
    </div>
  </>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <div>
      <Banner
        purpose="RENT A HOME"
        title="Rent Homes For"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://img.freepik.com/free-photo/living-room-with-yellow-armchair-empty-dark-blue-wall-background-3d-rendering_41470-3901.jpg?w=900&t=st=1668329853~exp=1668330453~hmac=aae4ec659b03ee2de31736be67bf11f8a54acbc806edf226b55612c44534f381"
      />

      <h1>Featured</h1>
      <div className={style.underline} />

      <div className={style.list}>
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
      <Banner
        purpose="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://img.freepik.com/free-photo/modern-kitchen-interior-bright-colors_181624-61502.jpg?w=740&t=st=1668339116~exp=1668339716~hmac=2edd3fc6042cb170fd07ec360272abd02bb706ad5931066c35e508ff29d5a023"
      />
      <h1>Featured</h1>
      <div className={style.underline} />
      <div className={style.list}>
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

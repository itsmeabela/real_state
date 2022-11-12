import Link from "next/link";
import Image from "next/image";
import style from "../styles/Home.module.css";

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
    <div className={style.container}>
      <Image src={imageUrl} width={500} height={300} alt="Banner" />
      <div>
        <h1>{purpose}</h1>
        <h2>
          {title} <br /> {title2}
        </h2>
        <p>
          {desc1} <br /> {desc2}
        </p>
        <button>
          <Link href={linkName}>{buttonText}</Link>
        </button>
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
        desc1="Explore Apartments,Villas,Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <hr />
      <br />
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
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <div className={style.list}>
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
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

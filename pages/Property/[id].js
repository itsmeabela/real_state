import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";
import Image from "next/image";

const PropertyDetail = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    puropse,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  return (
    <>
      <div>{photos && <ImageScrollbar data={photos} />}</div>
      <div>
        <div>
          <div>{isVerified && <GoVerified />}</div>
          <span>
            AED {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </span>
        </div>
        <div>
          <div>
            <Image src={agency?.logo?.url} width={70} height={50} alt="logo" />
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </div>
          <h3>{title > 10 ? `${title.slice(0, 10)}...` : title}</h3>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
export default PropertyDetail;

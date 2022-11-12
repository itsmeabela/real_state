import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../utils/fetchApi";

const PropertyDetail = ({ propertyDetails }) => {
  console.log(propertyDetails);
  return <div></div>;
};
export async function getStaticProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/datail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}

export default PropertyDetail;

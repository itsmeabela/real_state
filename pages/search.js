import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsFilter } from "react-icons/bs";
import SearchFilter from "../components/SearchFilter";
import style from "../styles/Search.module.css";
import Property from "../components/Property";
import noItem from "../Assets/images/no_item.webp";
import { fetchApi, baseUrl } from "../utils/fetchApi";

const Search = ({ properties }) => {
  const [searchFilter, setSearchFilter] = useState(false);
  const router = useRouter();
  return (
    <div>
      <div
        className={style.container}
        onClick={() => setSearchFilter((prevState) => !prevState)}
      >
        <h3>Search Property By Filters </h3>
        <BsFilter />
      </div>
      {searchFilter && <SearchFilter />}
      <h3>Properties {router.query.purpose}</h3>
      <div>
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>
      {properties.length === 0 && (
        <div style={style.container}>
          <Image src={noItem} alt="no image" width={50} height={50} />
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
export default Search;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";
import { FaSearch, FaSpinner } from "react-icons/fa";

import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilter = () => {
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  console.log(router);

  const searchProperty = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  useEffect(() => {
    if (searchTerm !== "") {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(
          `${baseUrl}/auto-complete?query=${searchTerm}`
        );
        setLoading(false);
        setLocationData(data?.hits);
      };

      fetchData();
    }
  }, [searchTerm]);

  return (
    <div>
      {filters.map((filter) => (
        <div key={filter.queryName}>
          <select
            placeholder={filter.queryName}
            onChange={(e) =>
              searchProperty({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <>
                <option
                  value={item.value}
                  key={item.value}
                  disabled={item.disabled}
                >
                  {item.disabled ? item.value : item.name}
                </option>
              </>
            ))}
          </select>
        </div>
      ))}
      <div flexDir="column">
        <FaSearch
          onClick={() => setShowLocations(!showLocations)}
          border="1px"
          borderColor="gray.200"
          marginTop="2"
        />
        {showLocations && (
          <div>
            <input
              placeholder="Type Here"
              value={searchTerm}
              w="300px"
              focusBorderColor="gray.300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm !== "" && (
              <MdCancel
                pos="absolute"
                cursor="pointer"
                right="5"
                top="5"
                zIndex="100"
                onClick={() => setSearchTerm("")}
              />
            )}
            {loading && <FaSpinner margin="auto" marginTop="3" />}
            {showLocations && (
              <div>
                {locationData?.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => {
                      searchProperties({
                        locationExternalIDs: location.externalID,
                      });
                      setShowLocations(false);
                      setSearchTerm(location.name);
                    }}
                  >
                    <h3>{location.name}</h3>
                  </div>
                ))}
                {!loading && !locationData?.length && (
                  <div>
                    <Image src={noresult} />
                    <h3 fontSize="xl" marginTop="3">
                      Waiting to search!
                    </h3>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;

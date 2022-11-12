import { useState } from "react";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import Image from "next/image";

import { filterData, getFilterValues } from "../utils/filterData";
const SearchFilter = () => {
  const [filters, setFilter] = useState(filterData);
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
    </div>
  );
};

export default SearchFilter;

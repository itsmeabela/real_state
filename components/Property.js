import Link from "next/link";
import Image from "next/image";
//style
import style from "../styles/property.module.css";
//icons
import { FaBath, FaBed } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
//images
import NoImage from "../Assets/images/no_image.jpg";
import millify from "millify";
const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <div className={style.container}>
    <Link href={`/property/${externalID}`}>
      <Image
        className={style.img}
        src={coverPhoto ? coverPhoto.url : NoImage}
        alt="house"
        width={900}
        height={360}
      />

      <div className={style.content}>
        <div className={style.green}>{isVerified && <GoVerified />}</div>
        <span className={style.grey}>
          AED {millify(price)}
          {rentFrequency && `/${rentFrequency}`}
        </span>
      </div>
      <div className={style.flex1}>
        <div className={style.flex2}>
          <div>
            <Image src={agency?.logo?.url} width={70} height={50} alt="logo" />
          </div>

          <h4>
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
            <BsGridFill />
          </h4>
        </div>
        <h3>{title > 30 ? `${title.slice(0, 10)}...` : title}</h3>
      </div>
    </Link>
  </div>
);

export default Property;

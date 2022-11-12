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
  <Link href={`/property/${externalID}`}>
    <div className={style.container}>
      <Image
        className={style.img}
        src={coverPhoto ? coverPhoto.url : NoImage}
        alt="house"
        width={400}
        height={260}
      />

      <div className={style.content}>
        <div>{isVerified && <GoVerified />}</div>
        <span className={style.grey}>
          AED {millify(price)}
          {rentFrequency && `/${rentFrequency}`}
        </span>
      </div>
      <div className={style.flex1}>
        <div className={style.flex2}>
          <Image src={agency?.logo?.url} width={70} height={50} alt="logo" />
          {rooms}
          <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </div>
        <h3>{title > 10 ? `${title.slice(0, 10)}...` : title}</h3>
      </div>
    </div>
  </Link>
);

export default Property;

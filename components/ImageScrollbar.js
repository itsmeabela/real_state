import { useContext } from "react";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <div>
      <FaArrowAltCircleLeft
        onClick={() => scrollPrev()}
        fontSize="2X1"
        cursor="pointer"
      />
    </div>
  );
};
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <div>
      <FaArrowAltCircleRight
        onClick={() => scrollNext()}
        fontSize="2X1"
        cursor="pointer"
      />
    </div>
  );
};
const ImageScrollbar = ({ data }) => {
  // console.log(data);
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overFlow: "hidden" }}
    >
      {data.map((item) => (
        <div
          key={item.id}
          style={{ width: "810px", overflow: "hidden", padding: "1" }}
          itemID={item.id}
        >
          <Image
            alt="property"
            placeholder="blur"
            blurDataURL={item.url}
            src={item.url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
          />
        </div>
      ))}
    </ScrollMenu>
  );
};

export default ImageScrollbar;

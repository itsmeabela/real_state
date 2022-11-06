import { useState } from "react";
import Link from "next/link";
import { FcMenu, FcHome, FcAbout } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
//styles
import styles from "../styles/Navbar.module.css";

const Menu = () => (
  <>
    <p>
      <Link href={"/"}>
        Home <FcHome />
      </Link>
    </p>
    <p>
      <Link href={"/search"}>
        Search <BsSearch />
      </Link>
    </p>
    <p>
      <Link href={"/search?purpose=for-sale"}>
        Buy a Property <FcAbout />
      </Link>
    </p>
    <p>
      <Link href={"/search?purpose=for-rent"}>
        Rent A Property <FiKey />
      </Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarlinks}>
        <div className={styles.logo}>
          <Link href={"/"}>Real Estate</Link>
        </div>
        <div className={styles.linksContainer}>
          <Menu />
        </div>
      </div>
      <div className={styles.menu}>
        {toggleMenu ? (
          <FcMenu color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <FcMenu color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className={styles.scalemenu}>
            <Menu />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

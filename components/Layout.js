import Head from "next/head";
//conponents
import Navbar from "./Navbar";
//styles
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Estates | website</title>
      </Head>
      <div>
        <marquee
          behavior="sliding"
          direction="vertical"
          style={{ backgroundColor: "red", color: "white" }}
        >
          ⚠️ Still on Work ⚠️
        </marquee>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer style={{ textAlign: "center", marginTop: "2rem" }}>
          CopyRight {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
};
export default Layout;

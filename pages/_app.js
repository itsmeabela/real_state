import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Layout>
        <div style={{ maxWidth: "1280px", margin: "auto" }}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;

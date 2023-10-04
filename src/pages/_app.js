import "@/styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header1/>
      {/* <Header /> */}
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

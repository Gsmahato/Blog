import "@/styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogFooter from "../../components/BlogFooter"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer />
      {/* <BlogFooter/> */}
    </>
  );
}

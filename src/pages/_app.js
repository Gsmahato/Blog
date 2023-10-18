import "@/styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function App({ Component, pageProps,}) {
  const { item, data } = pageProps;
  const blogitem = item.items
  return (
    <>
      <Header blogitem={blogitem} data={data}/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

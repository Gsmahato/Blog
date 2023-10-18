import "@/styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function App({ Component, pageProps,}) {
  const {item,data} =pageProps;  
  return (
    <>
      <Header item={item} data={data}/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

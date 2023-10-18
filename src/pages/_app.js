import "@/styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function App({ Component, pageProps,}) {
  const items = pageProps.item.items;
  const {data} =pageProps;  
  return (
    <>
      <Header items={items} data={data}/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

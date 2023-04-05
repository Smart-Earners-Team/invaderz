import PreLoader from "@/components/PreLoader";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PreLoader />
      <Component {...pageProps} />
    </>
  );
}

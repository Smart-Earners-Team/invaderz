import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="  "></div>
      <main>{children}</main>
      <Footer />
    </>
  );
}

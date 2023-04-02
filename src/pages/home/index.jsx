import Benefit from "@/components/Benefit";
import Layout from "@/components/Layout";
import HowItWork from "@/components/HowItWork";
import About from "@/components/About";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <main>
        <Layout>
          <div className=" bg-bg-img bg-cover lg:bg-contain w-[100%]  ">
            <Header />
          </div>
          <div className=" bg-bg-img1 w-[100%] h-[85vh]">
            <About />
          </div>
          <div className=" bg-bg-img2 w-[100%] h-[100vh] mt-2">
            <HowItWork />
          </div>
          <div className=" bg-bg-img3 w-[100%] h-[100vh] mt-2">
            <Benefit />
          </div>
        </Layout>
      </main>
    </>
  );
}

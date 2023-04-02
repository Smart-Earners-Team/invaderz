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
          <div className="bg-blue-200  ">
            <Header />
          </div>
          <div className=" bg-blue-500 w-[100%] h-[85vh]">
            <About />
          </div>
        </Layout>
      </main>
    </>
  );
}

import Head from "next/head";
import Header from "../components/sections/Header";
import Footer from "../components/layouts/Footer";
import DescriptionSection from "../components/sections/DescriptionSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <Header/>
      <DescriptionSection/>
      <Footer />
      </div>
    </div>
  );
}

import Head from "next/head";
import Header from "../components/sections/Header";
import Footer from "../components/layouts/Footer";
import Project from "../components/sections/Project";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Footer />
        <Project />
      </div>
    </div>
  );
}

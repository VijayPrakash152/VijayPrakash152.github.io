import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Head from "next/head";

const Home = () => {
  return (
    <Layout>
      <Head>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
    <meta property="og:title" content="👨🏼‍💻 Vijay Prakash | Portfolio 🎇"/>
<meta property="og:description" content="Portfolio Website of Vijay Prakash"/>
<meta property="og:image"  itemprop="image" content="http://vijay-prakash.me/images/logo.png"/>
    <meta property="og:image:secure_url"  itemprop="image" content="https://vijay-prakash.me/images/logo.png"/>
    <meta property="og:image:width" content="300"/>
    <meta property="og:image:height" content="300"/>
    <meta property="og:image:alt" content="LOGO"/>
    <meta property="og:type" content="website"/>
    
<meta property="og:url" content="https://vijay-prakash.me/"/>

        <meta
          name="description"
          content="Developer Portfolio Of Vijay Prakash"
        />
        <meta
          name="keywords"
          content="dev,portfolio,nextjs,styled-components"
        />
        <meta name="author" content="Vijay Prakash" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Vijay Prakash | Portfolio</title>
      </Head>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;

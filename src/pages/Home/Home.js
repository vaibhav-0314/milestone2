import React from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner */}
        <section id="homeSection">
          <Section1 />
        </section>

        {/* Home Section About */}
        <section id="aboutSection">
          <Section2 />
        </section>

        {/* Home Section Menu */}
        <section id="menuSection">
          <Section3 />
        </section>

        {/* Home Section Promotion */}
        <section id="promotionSection">
          <Section4 />
        </section>

        {/* Home Section Shop */}
        <section id="shopSection">
          <Section5 />
        </section>

        {/* Home Section Blog */}
        <section id="blogSection">
          <Section6 />
        </section>

        {/* Home Section Contact */}
        <section id="contactSection">
          <Section7 />
        </section>
      </Layout>
    </>
  );
};

export default Home;

import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  const theme = document.documentElement.getAttribute("data-theme");
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon={theme === "light" ? "developer_light.svg" : "developer_dark.svg"}
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
        id="about"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        description={AboutContent.description}
        content={AboutContent.text}
        icon={theme === "light" ? "graphs_light.svg" : "graphs_dark.svg"}
        id="white-box"
      />
      <ContentBlock
        direction="right"
        title={MissionContent.title}
        description={MissionContent.description}
        content={MissionContent.text}
        icon={
          theme === "light"
            ? "product-launch_light.svg"
            : "product-launch_dark.svg"
        }
        id="black-box"
      />
      <ContentBlock
        direction="left"
        title={ProductContent.title}
        description={ProductContent.description}
        content={ProductContent.text}
        icon={theme === "light" ? "waving_light.svg" : "waving_dark.svg"}
        id="algo-scratch"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;

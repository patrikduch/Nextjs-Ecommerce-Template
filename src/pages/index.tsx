import BodyContainer from "@components/skeleton/body/Body-Container";
import FooterContainer from "@components/skeleton/footer/Footer-Container";
import HeaderTitle from "@components/common/typography/Header-Title";
import PageContainer from "@components/Page-Container";
import React from "react";
import { useTranslation } from "../i18n";
import TopMenuBar from "@components/layout/TopMenu-Bar";
import LeftMenuBar from "@components/layout/LeftMenu-Bar";

/**
 * @function Home  Page component for root path.
 */
const Home: React.FC = () => {
  const { t } = useTranslation(["common"]);
  return (
    <PageContainer>
      <TopMenuBar />
      <LeftMenuBar />
      <BodyContainer>
        <HeaderTitle>Patrik Duch, Solutions Architect</HeaderTitle>
      </BodyContainer>

      <FooterContainer>
        <p> {t("author")}: Patrik Duch</p>
      </FooterContainer>
    </PageContainer>
  );
};

export default Home;

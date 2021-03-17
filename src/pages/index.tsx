import BodyContainer from "@components/skeleton/body/Body-Container";
import FooterContainer from "@components/skeleton/footer/Footer-Container";
import HeaderTitle from "@components/common/typography/Header-Title";
import PageContainer from "@components/Page-Container";
import React from "react";
import { useTranslation } from "../i18n";
/**
 * @function Home  Page component for root path.
 */
const Home: React.FC = () => {
  const { t } = useTranslation(["common"]);
  return (
    <PageContainer>
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

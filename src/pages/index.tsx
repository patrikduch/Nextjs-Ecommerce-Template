import HeaderTitle from '../components/common/typography/Header-Title'
import BodyContainer from '../components/skeleton/body/Body-Container';
import FooterContainer from '../components/skeleton/footer/Footer-Container';
import { useTranslation } from '../i18n';

const Home: React.FC = () => {

  const { t } = useTranslation(['common']);
  
  return (
    <div className="container">
      <BodyContainer>
        <HeaderTitle>
              Patrik Duch, Solutions Architect    
          </HeaderTitle>
      </BodyContainer>

      <FooterContainer>
        <p> { t('author')}: Patrik Duch</p>
      </FooterContainer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}


export default Home;

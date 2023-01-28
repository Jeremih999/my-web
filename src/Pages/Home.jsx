import NavBar from '../components/navbar';
import Header from '../components/Header';
import PortfolioSection from '../components/PortfolioSection';
import About from '../components/About';
import Socials from '../components/Socials';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Header />
      <PortfolioSection />
      <About />
      <Socials />
    </>
  );
}

export default Home;
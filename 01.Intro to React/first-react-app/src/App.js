import Header from "./components/Hader";
import Nav from "./components/Nav";
import BannerSection from "./components/BannerSection";
import AboutSection from "./components/AboutSection";
import OurServices from "./components/OurServices";
import DiscountSection from "./components/DiscountSections";
import ClientSection from "./components/ClientSection";
import ContactSection from "./components/ContactSection";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <BannerSection/>
      <AboutSection/>
      <OurServices/>
      <DiscountSection/>
      <ClientSection/>
      <ContactSection/>
      <Join/>
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default App;

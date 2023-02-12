import About from './sections/about/about';
import Contact from './sections/contact/contact';
import Faq from './sections/faq/faq';
import Footer from './sections/footer/footer';
import Header from './sections/header/header';
import Nav from './sections/nav/nav';
import Navbar from './sections/navbar/navbar';
import Portfolio from './sections/portfolio/portfolio';
import Services from './sections/services/services';
import Testimonials from './sections/testimonials/testimonials';

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <Nav />
    </main>
  );
};

export default App;

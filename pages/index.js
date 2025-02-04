import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Team from '../sections/Team';
import About from '../sections/About';
import Blogs from '../sections/Blogs';
import Careers from '../sections/Careers';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <Blogs />
      <Careers />
      <Contact />
      <Footer />
    </main>
  );
}

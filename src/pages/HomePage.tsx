import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Testimonials from '../components/sections/Testimonials';
import Gallery from '../components/sections/Gallery';
import Team from '../components/sections/Team';
import Contact from '../components/sections/Contact';

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Gallery />
            <Team />
            <Contact />
        </>
    );
}

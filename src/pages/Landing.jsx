import Hero from "../components/Hero";
import Nav from "../components/Nav";

const Landing = ({ setLoaded }) => {
    return (
      <div className="relative h-screen" id="home">
        <Hero />
        <Nav setLoaded={setLoaded} />
        <div className="absolute inset-0 bg-black/40 -z-10" />
      </div>
    );
};

export default Landing;
import About from "./components/About";
import Expertise from "./components/Expertise";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const navbarStyle = {
    position: "fixed",
    top: "0", // Ensure the navbar stays at the top
    left: "0", // Ensure the navbar starts from the left
    width: "100%", // Ensure the navbar spans the full width
    zIndex: 50, // Add z-index to ensure it's above other content
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <Navbar style={navbarStyle} />
      <Hero />
      <Expertise />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

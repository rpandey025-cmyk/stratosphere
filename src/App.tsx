import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Positioning from "./components/Positioning";
import Experience from "./components/Experience";
import CorePillars from "./components/CorePillars";
import Services from "./components/Services";
import AIEdge from "./components/AIEdge";
import ClientFilter from "./components/ClientFilter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-bg-deep selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Positioning />
        <Experience />
        <CorePillars />
        <Services />
        <AIEdge />
        <ClientFilter />
      </main>
      <Footer />
    </div>
  );
}

export default App;

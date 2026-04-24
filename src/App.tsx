import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Positioning from "./components/Positioning";
import Experience from "./components/Experience";
import CorePillars from "./components/CorePillars";
import Services from "./components/Services";
import AIEdge from "./components/AIEdge";
import ClientFilter from "./components/ClientFilter";
import Footer from "./components/Footer";
import Privacy from "./components/Privacy";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setPath(window.location.pathname);
    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  return (
    <div className="min-h-screen bg-bg-deep selection:bg-accent selection:text-black">
      <Navbar />
      <main>
        {path === "/privacy" ? (
          <Privacy />
        ) : (
          <>
            <Hero />
            <Positioning />
            <Experience />
            <CorePillars />
            <Services />
            <AIEdge />
            <ClientFilter />
          </>
        )}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;

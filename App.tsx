import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Courses from "./components/Courses";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AIChat from "./components/AIChat";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState("home");
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleNavigate = (viewId: string) => {
    if (viewId === "contact") {
      setIsContactOpen(true);
    } else {
      setCurrentView(viewId);
      window.scrollTo(0, 0);
    }
  };

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <Hero onNavigate={handleNavigate} />;
      case "about":
        return <About onOpenContact={() => setIsContactOpen(true)} />;
      case "courses":
        return <Courses />;
      case "projects":
        return <Projects />;
      default:
        return <Hero onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen font-sans relative bg-background text-foreground transition-colors duration-300">
        <Navbar currentView={currentView} onNavigate={handleNavigate} />

        <main className="relative z-10">{renderView()}</main>

        <Footer onNavigate={handleNavigate} />

        {/* Modals & Floating Elements */}
        <Contact
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />

        <div className="dark bottom-4 right-4 z-50 pointer-events-none">
          <div
            className="pointer-events-auto w-[92vw] max-w-lg h-[520px] sm:w-96 sm:h-[580px]
                  bg-background text-foreground
                  border border-border rounded-2xl shadow-2xl
                  overflow-hidden flex flex-col
                  [sm:bg-white]:!bg-background"
          >
            <AIChat />
          </div>
        </div>

        {/* Theme Switcher */}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;

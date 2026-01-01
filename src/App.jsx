import React, { useMemo, useState } from "react";
import Gate from "./components/Gate.jsx";
import Navbar from "./components/Navbar.jsx";
import PortfolioView from "./views/PortfolioView.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";

const STORAGE_KEY = "portfolio_visitor_type"; // "recruiter" | "student"

export default function App() {
  const initial = useMemo(() => {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "recruiter" || v === "student" ? v : null;
  }, []);

  const [visitorType, setVisitorType] = useState(initial);
  const [gateOpen, setGateOpen] = useState(initial ? false : true);

  function enter(type) {
    localStorage.setItem(STORAGE_KEY, type);
    setVisitorType(type);
    setGateOpen(false);
  }

  function switchType(type) {
    localStorage.setItem(STORAGE_KEY, type);
    setVisitorType(type);
  }

  function resetGate() {
    localStorage.removeItem(STORAGE_KEY);
    setVisitorType(null);
    setGateOpen(true);
  }

  return (
    <div className="min-h-screen bg-bg text-fg">
      <ScrollProgress />
      
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(170,195,210,0.42),rgba(248,249,247,0.96)_45%,rgba(205,215,220,0.55))] dark:bg-[radial-gradient(circle_at_top,rgba(85,110,125,0.35),rgba(13,17,20,0.96)_50%,rgba(55,65,72,0.45))]">
        
        <Gate
          open={gateOpen}
          defaultChoice={visitorType ?? "recruiter"}
          onEnter={enter}
          />
        
        <Navbar
          onReset={resetGate}
          rightPillLabel="Tools Stack"
          rightCTA="Let’s connect"
          />
        
        <main className="mx-auto w-full max-w-[85rem] px-6 lg:px-8 pt-20">
          <PortfolioView
            visitorType={visitorType ?? "recruiter"}
            onSwitch={switchType}
            />
        </main>
      </div>
    </div>
  );
}

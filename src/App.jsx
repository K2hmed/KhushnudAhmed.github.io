import React, { useMemo, useState } from "react";
import Gate from "./components/Gate.jsx";
import Navbar from "./components/Navbar.jsx";
import PortfolioView from "./views/PortfolioView.jsx";

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
      <div className="min-h-screen bg-[radial-gradient(1100px_circle_at_50%_0%,rgba(120,140,160,0.5),transparent_62%),linear-gradient(to_bottom,#B0C0D5,#E0DED8,#BFC2C8)] dark:bg-[radial-gradient(1100px_circle_at_50%_0%,rgba(100,120,140,0.2),transparent_62%),linear-gradient(to_bottom,#0B1018,#0D121B,#111521)]">
        
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

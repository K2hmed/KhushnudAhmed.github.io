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
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(224,122,95,0.16),rgba(246,244,239,0.92)_55%,rgba(58,125,124,0.12))] dark:bg-[radial-gradient(circle_at_top,rgba(240,142,116,0.12),rgba(14,18,22,0.92)_55%,rgba(116,196,192,0.10))]">
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

        <main className="mx-auto w-full max-w-[85rem] px-6 lg:px-8 pt-24 pb-16 min-h-screen"">
          <PortfolioView
            visitorType={visitorType ?? "recruiter"}
            onSwitch={switchType}
          />
        </main>
      </div>
    </div>
  );
}

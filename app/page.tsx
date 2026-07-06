"use client";
import { useState } from "react";
import {
  Cloud,
  ChevronRight,
  Activity,
  BrainCircuit,
  ShieldCheck,
  Cpu,
  Box,
  BarChart3,
  Search,
  Fingerprint,
  Lock,
  CheckCircle2,
  Server,
  CloudOff,
  Navigation,
  Download,
  Network,
  Database,
  MapPin,
  ArrowRight,
  ShieldAlert,
  FileText,
  ActivitySquare,
  AlertTriangle,
  MessageSquare,
  Bot,
  Folder,
  Library,
  TrendingUp,
  Megaphone,
  Headphones,
  Plus,
  Settings,
  Users,
  UploadCloud,
  ArrowUpRight,
  Send,
  Paperclip,
  ChevronDown,
  Check,
  Globe,
  Menu,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tenant, setTenant] = useState({ name: "", type: "" });
  const [activeView, setActiveView] = useState("Zentrale Übersicht");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleLogin = (name: string, type: string) => {
    setTenant({ name, type });
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return (
      <div className="fixed inset-0 z-50 bg-[#f5f5f7]/80 backdrop-blur-[15px] flex items-center justify-center font-sans">
        <div className="bg-white p-10 rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] w-full max-w-[400px] text-center border border-[rgba(0,0,0,0.05)]">
          <div className="text-[40px] mb-2 leading-none text-[#0071e3]">
            <Cloud className="mx-auto" size={56} strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold text-[#1d1d1f] mb-2 mt-4 tracking-tight">
            Sovereign AI Cockpit
          </h2>
          <p className="text-[#86868b] mb-8 text-[14px]">
            Bitte wählen Sie Ihre Mandanten-Umgebung.
          </p>

          <button
            onClick={() =>
              handleLogin("Asklepios Training Hub", "Pflege & Kommunikation")
            }
            className="w-full py-3.5 px-4 mt-4 bg-[#0071e3] hover:bg-[#005bb5] hover:scale-[0.98] text-white rounded-xl text-[16px] font-semibold transition-all flex items-center justify-between"
          >
            <span>Login: Asklepios Training Hub</span>
            <ChevronRight size={18} />
          </button>

          <button
            onClick={() =>
              handleLogin("Enterprise Corp. DE", "Operations & IT")
            }
            className="w-full py-3.5 px-4 mt-3 bg-[#f0f0f5] hover:bg-[#e5e5ea] text-[#1d1d1f] rounded-xl text-[16px] font-medium transition-all flex items-center justify-between"
          >
            <span>Login: Enterprise Corp. DE</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans flex overflow-hidden">
      {/* =======================================================
           SIDEBAR NAVIGATION (Apple Style)
           ======================================================= */}
      <aside
        className={`${isSidebarCollapsed ? "w-[80px]" : "w-[260px]"} bg-[#f5f5f7] border-r border-[rgba(0,0,0,0.05)] flex flex-col h-screen shrink-0 ${isSidebarCollapsed ? "p-3" : "p-5"} z-20 transition-all duration-300 relative`}
      >
        <div
          className={`text-[18px] font-bold mb-10 flex items-center gap-2.5 text-[#1d1d1f] ${isSidebarCollapsed ? "justify-center" : ""}`}
        >
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-1 hover:bg-[rgba(0,0,0,0.05)] rounded-lg transition-colors text-[#0071e3]"
              title="Menü umschalten"
            >
              {isSidebarCollapsed ? (
                <Menu size={24} />
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#0071e3">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
            {!isSidebarCollapsed && <span>AI Cockpit</span>}
          </div>
        </div>
        <nav className="flex-1 space-y-2">
          <NavItem
            icon="🎛️"
            label="Zentrale Übersicht"
            collapsed={isSidebarCollapsed}
            active={activeView === "Zentrale Übersicht"}
            onClick={() => {
              setActiveView("Zentrale Übersicht");
              setIsSidebarCollapsed(true);
            }}
          />
          <NavItem
            icon="🧠"
            label="Corporate LLM"
            collapsed={isSidebarCollapsed}
            active={activeView === "Corporate LLM"}
            onClick={() => {
              setActiveView("Corporate LLM");
              setIsSidebarCollapsed(true);
            }}
          />
          <NavItem
            icon="🎙️"
            label="Voice Agent Routing"
            collapsed={isSidebarCollapsed}
            onClick={() => {
              setActiveView("Voice Agent Routing");
              setIsSidebarCollapsed(true);
            }}
          />
          <NavItem
            icon="📈"
            label="AIVO Visibility"
            collapsed={isSidebarCollapsed}
            onClick={() => {
              setActiveView("AIVO Visibility");
              setIsSidebarCollapsed(true);
            }}
          />
          <NavItem
            icon="🛡️"
            label="KI-Auditor (NIS2)"
            collapsed={isSidebarCollapsed}
            onClick={() => {
              setActiveView("KI-Auditor (NIS2)");
              setIsSidebarCollapsed(true);
            }}
          />
          <NavItem
            icon="📦"
            label="Agent Marketplace"
            collapsed={isSidebarCollapsed}
            onClick={() => {
              setActiveView("Agent Marketplace");
              setIsSidebarCollapsed(true);
            }}
          />
        </nav>

        {/* Status Anzeige Unten */}
        <div
          className={`mt-auto block ${isSidebarCollapsed ? "px-0 py-4 text-center" : "p-4"} bg-[#f9f9fb] rounded-2xl text-[12px] border border-[rgba(0,0,0,0.05)] transition-all`}
        >
          {isSidebarCollapsed ? (
            <div
              className="w-2.5 h-2.5 bg-[#34c759] rounded-full mx-auto shadow-[0_0_8px_rgba(52,199,89,0.4)]"
              title="System Status: Online"
            ></div>
          ) : (
            <>
              <div className="text-[#86868b] mb-1.5 font-medium">
                System Status
              </div>
              <div className="flex items-center gap-2 font-semibold text-[#1d1d1f]">
                <div className="w-2.5 h-2.5 bg-[#34c759] rounded-full shadow-[0_0_8px_rgba(52,199,89,0.4)]"></div>
                Wasm-Nodes Online
              </div>
            </>
          )}
        </div>
      </aside>

      {/* =======================================================
           HAUPTBEREICH
           ======================================================= */}
      <main className="flex-1 h-screen overflow-hidden flex flex-col relative bg-[#f5f5f7]">
        {activeView === "Zentrale Übersicht" && <DashboardView tenant={tenant} />}
        {activeView === "Corporate LLM" && <CorporateLLMView />}
        {activeView === "Voice Agent Routing" && <VoiceAgentView />}
        {activeView === "AIVO Visibility" && <AIVOVisibilityView />}
        {activeView === "KI-Auditor (NIS2)" && <KIAuditorView />}
        {activeView === "Agent Marketplace" && <AgentMarketplaceView />}
      </main>

      <LocalChatWidget />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Spezial Chat Bubble CSS für Apple Style */
        .chat-bubble {
            padding: 12px 16px; 
            border-radius: 18px; 
            max-width: 85%; 
            font-size: 14px; 
            line-height: 1.5;
            box-shadow: 0 1px 2px rgba(0,0,0,0.05);
        }
        .chat-ai {
            background: #ffffff; 
            border: 1px solid rgba(0, 0, 0, 0.05);
            border-bottom-left-radius: 4px; 
            align-self: flex-start;
            color: #1d1d1f;
        }
        .chat-user {
            background: #0071e3; 
            color: white;
            border-bottom-right-radius: 4px; 
            align-self: flex-end;
        }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; height: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d2d2d7; border-radius: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #86868b; }
      `,
        }}
      />
    </div>
  );
}

// ----------------------------------------------------------------------------
// VIEWS
// ----------------------------------------------------------------------------

function DashboardView({ tenant }: { tenant: { name: string; type: string } }) {
  return (
    <div className="h-full overflow-y-auto px-8 py-8 md:px-10 custom-scrollbar">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-[28px] font-bold tracking-tight text-[#1d1d1f] mb-1">
              Cockpit: {tenant.name}
            </h1>
            <p className="text-[#86868b] font-medium text-[15px]">
              Bereich: {tenant.type} <span className="mx-2 opacity-50">|</span>{" "}
              Mandanten-ID: {Math.floor(Math.random() * 10000)}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#86868b]"
                size={16}
              />
              <input
                type="text"
                placeholder="Suchen..."
                className="bg-white border border-[rgba(0,0,0,0.05)] rounded-full shadow-sm py-2 pl-9 pr-4 text-[14px] outline-none focus:border-[#0071e3] transition-colors w-64"
              />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#f0f0f5] border-2 border-white shadow-[0_4px_14px_rgba(0,0,0,0.05)] overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&h=80&q=80"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Top-Level KPIs (Business Concept Overview) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-[16px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider">
                Security Score
              </span>
              <ShieldCheck size={16} className="text-[#34c759]" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-bold text-[#1d1d1f] leading-none">
                98%
              </span>
              <span className="text-[12px] font-medium text-[#34c759] mb-0.5">
                Konform
              </span>
            </div>
          </div>
          <div className="bg-white rounded-[16px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider">
                Active Agents
              </span>
              <ActivitySquare size={16} className="text-[#0071e3]" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-bold text-[#1d1d1f] leading-none">
                17
              </span>
              <span className="text-[12px] font-medium text-[#34c759] mb-0.5">
                +3 (7 Tage)
              </span>
            </div>
          </div>
          <div className="bg-white rounded-[16px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider">
                Edge Nodes
              </span>
              <Server size={16} className="text-[#ff9500]" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-bold text-[#1d1d1f] leading-none">
                42
              </span>
              <span className="text-[12px] font-medium text-[#ff3b30] mb-0.5">
                3 Offline
              </span>
            </div>
          </div>
          <div className="bg-white rounded-[16px] p-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[12px] font-bold text-[#86868b] uppercase tracking-wider">
                Monthly Requests
              </span>
              <TrendingUp size={16} className="text-[#af52de]" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-[24px] font-bold text-[#1d1d1f] leading-none">
                24.8K
              </span>
              <span className="text-[12px] font-medium text-[#34c759] mb-0.5">
                +12%
              </span>
            </div>
          </div>
        </div>

        {/* Section: Intelligence & Agents */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-4 bg-[#0071e3] rounded-full"></div>
          <h2 className="text-[15px] font-bold text-[#1d1d1f] uppercase tracking-wide">
            Intelligence & Agents
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
          {/* MODUL 1: CORPORATE LLM ASSISTENT */}
          <div className="xl:col-span-2 bg-white rounded-[20px] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.05)] flex flex-col gap-4 transform transition-all hover:-translate-y-0.5">
            <div className="flex justify-between items-center">
              <span className="text-[18px] font-semibold text-[#1d1d1f]">
                ✨ Corporate LLM (Wissendatenbank)
              </span>
              <span className="bg-[#f0f0f5] text-[#86868b] px-3 py-1.5 rounded-full text-[12px] font-semibold flex items-center gap-1.5">
                <Database size={14} /> Qdrant RAG
              </span>
            </div>

            {/* Chat Oberfläche */}
            <div className="flex-1 bg-[#f9f9fb] rounded-[16px] p-5 flex flex-col gap-3 min-h-[350px] max-h-[450px] overflow-y-auto border border-[rgba(0,0,0,0.03)] custom-scrollbar">
              <div className="chat-bubble chat-ai">
                <strong>System-Assistent:</strong> Guten Tag! Ich bin Ihr
                lokaler KI-Helfer. Ich habe Zugriff auf unsere internen
                Schulungshandbücher und Kommunikationsrichtlinien für
                internationale Pflegekräfte. Wie kann ich helfen?
              </div>
              <div className="chat-bubble chat-user">
                Wie erkläre ich den neuen Kollegen am besten den Ablauf der
                Dokumentenübergabe?
              </div>

              <div className="flex items-center gap-2 text-[#86868b] text-[12px] font-semibold my-1">
                <Search className="animate-pulse" size={14} /> Durchsuche Qdrant
                Vektor-DB (4.200 Dokumente)...
              </div>

              <div className="chat-bubble chat-ai">
                <div className="flex items-center gap-2 mb-2 text-[#86868b] text-[12px] font-semibold uppercase">
                  <CheckCircle2 size={14} className="text-[#34c759]" /> Quelle:
                  Onboarding_V2.pdf gefunden
                </div>
                Hier ist ein vorgeschlagener, leicht verständlicher Ablauf,
                basierend auf unserer internen Richtlinie:
                <br />
                <br />
                1. <strong>Sammeln:</strong> Alle Dokumente im Dienstzimmer
                bereitlegen.
                <br />
                2. <strong>Prüfen:</strong> Kurzer Gegencheck mit der
                Checkliste.
                <br />
                <br />
                Möchtest du, dass ich das in einfache Sprache (B1 Niveau)
                übersetze?
              </div>
              <div className="chat-bubble chat-user">
                Ja bitte, das wäre sehr hilfreich.
              </div>
              <div className="chat-bubble chat-ai">
                Gern! Hier ist die einfache Erklärung (Sprachniveau B1):
                <br />
                <br />
                "Hallo! Wenn wir den Dienst wechseln, machen wir die Übergabe
                der Papiere so:
                <br />
                1. <strong>Sammeln:</strong> Bitte legen Sie alle
                Unterschriftsmappen auf den Tisch im Büro.
                <br />
                2. <strong>Kontrollieren:</strong> Wir schauen kurz auf die
                Liste. Fehlt etwas?
                <br />
                Wenn alles da ist, unterschreiben wir am Ende."
              </div>
            </div>
            <div className="flex gap-3 mt-1">
              <input
                type="text"
                className="flex-1 px-5 py-3.5 rounded-[20px] border border-[#d2d2d7] outline-none text-[14px] focus:border-[#0071e3] transition-colors bg-[#f9f9fb] focus:bg-white"
                placeholder="Fragen Sie das Corporate-LLM..."
              />
              <button className="bg-[#0071e3] hover:bg-[#005bb5] text-white border-none rounded-[20px] px-6 font-semibold cursor-pointer transition-colors shadow-sm">
                Senden
              </button>
            </div>
          </div>

          {/* MODUL 5: AI AGENT MARKETPLACE */}
          <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.05)] flex flex-col gap-4 transform transition-all hover:-translate-y-0.5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[18px] font-semibold text-[#1d1d1f]">
                AI-Agent Marketplace
              </span>
              <span className="bg-[#af52de]/10 text-[#af52de] px-3 py-1.5 rounded-full text-[12px] font-semibold flex items-center gap-1.5">
                <Box size={14} /> Store
              </span>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto">
              <AgentCard
                name="SEO Optimierer Agent"
                description="Automatische Content-Verbesserung"
                installs="1.2k"
                author="Internal"
                active
              />
              <AgentCard
                name="NIS2 Compliance Bot"
                description="Prüft Dokumente auf Richtlinien"
                installs="84"
                author="SecOps"
              />
              <AgentCard
                name="HR Onboarding Helfer"
                description="Beantwortet offene Urlaubsfragen"
                installs="890"
                author="HR Dept"
              />
              <AgentCard
                name="Code Review Assistant"
                description="PR Analysen via Wasm"
                installs="341"
                author="DevOps"
              />
            </div>

            <button className="w-full mt-2 py-3 bg-white border-2 border-[#f0f0f5] hover:border-[#d2d2d7] text-[#0071e3] font-semibold rounded-xl text-[14px] transition-all flex items-center justify-center gap-2">
              <Download size={16} /> Alle Agenten durchsuchen
            </button>
          </div>
        </div>

        {/* Section: Infrastructure, Security & Compliance */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1.5 h-4 bg-[#af52de] rounded-full"></div>
          <h2 className="text-[15px] font-bold text-[#1d1d1f] uppercase tracking-wide">
            Infrastructure, Security & Compliance
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* MODUL 2: XAI / CAUSAL & MCP */}
          <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.05)] flex flex-col gap-4 transform transition-all hover:-translate-y-0.5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[18px] font-semibold text-[#1d1d1f]">
                XAI / Causal & MCP
              </span>
              <span className="bg-[#0071e3]/10 text-[#0071e3] px-3 py-1.5 rounded-full text-[12px] font-semibold flex items-center gap-1.5">
                <Network size={14} /> Gateway
              </span>
            </div>

            {/* MCP Security Gateway an der Spitze */}
            <div className="bg-[#f9f9fb] p-3.5 rounded-xl border border-[#d2d2d7]/40 mb-2">
              <div className="text-[12px] text-[#86868b] font-bold uppercase tracking-wider mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-[#34c759]" /> MCP
                  Security Gateway
                </div>
                <div className="flex items-center gap-1.5 bg-[#ff3b30]/10 text-[#ff3b30] px-2 py-0.5 rounded-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3b30] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3b30]"></span>
                  </span>
                  <span className="text-[10px] font-bold leading-none">
                    3 NEU
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center text-[13px] mb-1.5">
                <span className="text-[#1d1d1f] font-medium">
                  Policy Engine
                </span>
                <span className="text-[#34c759] font-bold">Aktiv</span>
              </div>
              <div className="flex justify-between items-center text-[13px] mb-1.5">
                <span className="text-[#1d1d1f] font-medium">
                  DSGVO Data Masking
                </span>
                <span className="text-[#0071e3] font-bold">98%</span>
              </div>
              <div className="flex justify-between items-center text-[13px]">
                <span className="text-[#1d1d1f] font-medium">
                  Blockierte Threats
                </span>
                <span className="text-[#ff3b30] font-bold">12 (Heute)</span>
              </div>
            </div>

            {/* XAI Progress Bars */}
            <div>
              <div className="text-[12px] text-[#86868b] font-bold uppercase tracking-wider mb-2">
                Entscheidungsgründe (XAI)
              </div>
              <div className="mb-2.5">
                <div className="flex justify-between text-[12px] font-medium mb-1">
                  <span>Preis attraktiv</span>
                  <span>45%</span>
                </div>
                <div className="h-1.5 w-full bg-[#f0f0f5] rounded-full overflow-hidden">
                  <div className="h-full bg-[#0071e3] w-[45%]"></div>
                </div>
              </div>
              <div className="mb-2.5">
                <div className="flex justify-between text-[12px] font-medium mb-1">
                  <span>Lieferzeit gut</span>
                  <span>25%</span>
                </div>
                <div className="h-1.5 w-full bg-[#f0f0f5] rounded-full overflow-hidden">
                  <div className="h-full bg-[#af52de] w-[25%]"></div>
                </div>
              </div>
              <div className="mb-1">
                <div className="flex justify-between text-[12px] font-medium mb-1">
                  <span>Qualität / Risiko</span>
                  <span>20%</span>
                </div>
                <div className="h-1.5 w-full bg-[#f0f0f5] rounded-full overflow-hidden">
                  <div className="h-full bg-[#ff9500] w-[20%]"></div>
                </div>
              </div>
            </div>

            {/* Causal Engine Graph */}
            <div className="mt-1 pt-3 border-t border-[rgba(0,0,0,0.05)]">
              <div className="text-[12px] text-[#86868b] font-bold uppercase tracking-wider mb-3">
                Causal Engine (Ursache-Wirkung)
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="text-[11px] font-semibold bg-[#e8f0fe] text-[#0071e3] px-2 py-1 rounded">
                    Preis sinkt
                  </div>
                  <ArrowRight size={14} className="text-[#86868b]" />
                  <div className="text-[11px] font-semibold bg-[#f0f0f5] text-[#1d1d1f] px-2 py-1 rounded">
                    Gewinn steigt
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[11px] font-semibold bg-[#e8f0fe] text-[#0071e3] px-2 py-1 rounded">
                    Lieferzeit OK
                  </div>
                  <ArrowRight size={14} className="text-[#86868b]" />
                  <div className="text-[11px] font-semibold bg-[#d4f8d4] text-[#28a745] px-2 py-1 rounded border border-[#28a745]/30">
                    Empfehlung: Lieferant A
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MODUL 3: EDGE NODES ÜBERSICHT */}
          <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.05)] flex flex-col gap-4 transform transition-all hover:-translate-y-0.5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-[18px] font-semibold text-[#1d1d1f]">
                Edge-AI-Runtime Plattform
              </span>
              <span className="bg-[#34c759]/10 text-[#34c759] px-3 py-1.5 rounded-full text-[12px] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#34c759] animate-pulse"></span>{" "}
                42 Online
              </span>
            </div>

            <div className="flex justify-between items-center bg-[#f9f9fb] p-3 rounded-xl border border-[rgba(0,0,0,0.03)] my-2">
              <div className="text-center">
                <div className="text-[20px] font-bold text-[#1d1d1f]">45</div>
                <div className="text-[11px] text-[#86868b] font-semibold uppercase">
                  Gesamt
                </div>
              </div>
              <div className="text-center">
                <div className="text-[20px] font-bold text-[#34c759]">42</div>
                <div className="text-[11px] text-[#86868b] font-semibold uppercase">
                  Online
                </div>
              </div>
              <div className="text-center">
                <div className="text-[20px] font-bold text-[#ff3b30]">3</div>
                <div className="text-[11px] text-[#86868b] font-semibold uppercase">
                  Offline
                </div>
              </div>
              <div className="text-center">
                <div className="text-[20px] font-bold text-[#1d1d1f]">32%</div>
                <div className="text-[11px] text-[#86868b] font-semibold uppercase">
                  Ø CPU Load
                </div>
              </div>
            </div>

            <div className="space-y-3 flex-1 overflow-y-auto">
              <EdgeNodeCard
                name="Edge-Factory-01"
                location="Deutschland"
                status="Online"
                cpu="28%"
              />
              <EdgeNodeCard
                name="Edge-Office-02"
                location="Vietnam"
                status="Online"
                cpu="34%"
              />
              <EdgeNodeCard
                name="Edge-Retail-03"
                location="Deutschland"
                status="Online"
                cpu="22%"
              />
              <EdgeNodeCard
                name="Edge-Logistics-04"
                location="Vietnam"
                status="Offline"
                cpu="-"
                isOffline
              />
            </div>

            <button className="mt-auto w-full py-2.5 bg-[#f0f0f5] hover:bg-[#e5e5ea] text-[#1d1d1f] font-semibold rounded-xl text-[13px] transition-colors">
              Details ansehen
            </button>
          </div>

          {/* MODUL 4: AI-AGENT AUDITOR & MONITORING */}
          <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_14px_rgba(0,0,0,0.04)] border border-[rgba(0,0,0,0.05)] flex flex-col gap-4 transform transition-all hover:-translate-y-0.5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[18px] font-semibold text-[#1d1d1f]">
                Auditor & Monitoring
              </span>
              <span className="bg-[#ff9500]/10 text-[#ff9500] px-3 py-1.5 rounded-full text-[12px] font-semibold">
                Visibility & Audit
              </span>
            </div>

            <div className="flex gap-4 items-center my-2">
              <div
                className="w-[100px] h-[100px] shrink-0 rounded-full flex items-center justify-center shadow-inner"
                style={{
                  background:
                    "conic-gradient(#0071e3 0% 68%, #e5e5ea 68% 100%)",
                }}
              >
                <div className="w-[75px] h-[75px] bg-white rounded-full flex flex-col items-center justify-center text-[#1d1d1f] shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                  <span className="text-[20px] font-bold leading-none">
                    68%
                  </span>
                  <span className="text-[9px] font-bold text-[#86868b] uppercase mt-1">
                    Score
                  </span>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-[12px] font-semibold text-[#86868b] uppercase tracking-wider mb-1">
                  Share of Voice
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[60px] text-[11px] font-medium">
                    ChatGPT
                  </div>
                  <div className="h-1.5 flex-1 bg-[#f0f0f5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#0071e3] w-[75%]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[60px] text-[11px] font-medium">
                    Perplex
                  </div>
                  <div className="h-1.5 flex-1 bg-[#f0f0f5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#af52de] w-[66%]"></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-[60px] text-[11px] font-medium">Claude</div>
                  <div className="h-1.5 flex-1 bg-[#f0f0f5] rounded-full overflow-hidden">
                    <div className="h-full bg-[#ff9500] w-[42%]"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-[rgba(0,0,0,0.05)]">
              <div className="text-[12px] text-[#86868b] font-bold uppercase tracking-wider mb-2">
                NIS2 Compliance Zustand
              </div>
              <div className="bg-[#f0f0f5] rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-[#1d1d1f]" />
                  <span className="text-[13px] font-medium text-[#1d1d1f]">
                    Audit Logs intakt
                  </span>
                </div>
                <div className="text-[#34c759] flex items-center gap-1">
                  <CheckCircle2 size={16} />
                  <span className="text-[12px] font-bold">Konform</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CorporateLLMView() {
  const [activeSubView, setActiveSubView] = useState("Team");

  return (
    <div className="w-full h-full flex bg-[#f8fafe] overflow-hidden rounded-tl-[30px] border-none shadow-[inset_0_4px_20px_rgba(0,0,0,0.02)]">
      {/* Inner Sidebar */}
      <div className="w-[240px] border-r border-[#e5e7eb]/60 p-4 hidden lg:flex lg:flex-col shrink-0 bg-white relative z-20">
        <div className="flex items-center gap-3 mb-6 px-2 mt-2">
           <div className="w-8 h-8 rounded-lg bg-[#0052ff] text-white flex items-center justify-center font-bold text-lg shadow-[0_4px_12px_rgba(0,82,255,0.3)]">
            C
          </div>
          <span className="font-bold text-[#0052ff] text-[16px] tracking-tight truncate">
            Corporate LLM
          </span>
        </div>

        {activeSubView !== "Chat" && (
          <div className="bg-gray-100/60 hover:bg-gray-100 rounded-[14px] p-2 mb-6 cursor-pointer transition-colors flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-[#82a4ff] text-white flex flex-col items-center justify-center text-[9px] font-bold shrink-0 leading-tight">
               <span>Cor</span>
               <span>p</span>
             </div>
             <div>
               <div className="text-[13px] font-bold text-[#1d1d1f] truncate leading-tight">
                 Tiep /{' '}
                 <a
                   href="https://vuxuantiep.de"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hover:underline"
                 >
                   vuxuantiep.de
                 </a>
               </div>
               <div className="text-[10px] text-[#86868b] font-medium mt-0.5">
                 Pro · 15 Seats
               </div>
             </div>
          </div>
        )}

        {activeSubView === "Chat" && (
          <button
            className="flex items-center justify-center w-full gap-2 bg-[#4884ff] text-white py-3 rounded-[12px] shadow-[0_4px_12px_rgba(72,132,255,0.3)] text-[14px] font-semibold hover:bg-[#3b72e5] mb-6 transition-all"
            onClick={() => setActiveSubView("Chat")}
          >
            <Plus size={16} /> Neuer Chat
          </button>
        )}

        <div className={`space-y-1 ${activeSubView === "Chat" ? "mb-6" : "flex-1"}`}>
          <InnerNavItem
            icon={<MessageSquare size={18} />}
            label="Chat"
            active={activeSubView === "Chat"}
            onClick={() => setActiveSubView("Chat")}
          />
          <InnerNavItem
            icon={<Bot size={18} />}
            label="Agents"
            active={activeSubView === "Agents"}
            onClick={() => setActiveSubView("Agents")}
          />
          <InnerNavItem
            icon={<Folder size={18} />}
            label="Spaces"
            active={activeSubView === "Spaces"}
            onClick={() => setActiveSubView("Spaces")}
          />
          <InnerNavItem
            icon={<Users size={18} />}
            label="Team"
            active={activeSubView === "Team"}
            onClick={() => setActiveSubView("Team")}
          />
        </div>

        {activeSubView === "Chat" && (
          <div className="flex-1 overflow-y-auto mt-2 custom-scrollbar -mx-2 px-2">
            <div className="px-3 text-[10px] font-bold text-[#86868b] uppercase tracking-widest mb-3">
              Verläufe
            </div>
            <div className="space-y-0.5">
              <div className="px-3 py-2 rounded-lg bg-gray-50 flex items-center gap-2 text-[13px] font-semibold text-[#1d1d1f] cursor-pointer">
                <MessageSquare size={14} className="text-gray-400" /> Q3 Sales-Strategie
              </div>
              <div className="px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-[13px] font-medium text-gray-500 cursor-pointer transition-colors">
                <MessageSquare size={14} className="text-gray-400" /> Onboarding-Mail Entwurf
              </div>
              <div className="px-3 py-2 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-[13px] font-medium text-gray-500 cursor-pointer transition-colors">
                <MessageSquare size={14} className="text-gray-400" /> Wettbewerbsanalyse
              </div>
            </div>
          </div>
        )}

        <div className="mt-auto pt-4 flex flex-col gap-1">
          {activeSubView !== "Chat" && (
            <InnerNavItem icon={<Settings size={18} />} label="Einstellungen" />
          )}
          <div className="flex items-center gap-3 px-3 py-3 mt-2 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors border-t border-[#e5e7eb]/60">
            <div className="w-8 h-8 rounded-full bg-[#0052ff] text-white flex items-center justify-center font-bold text-[11px] shadow-sm">
              MK
            </div>
            <div>
              <div className="text-[13px] font-bold text-gray-900 leading-tight">
                Tiep
              </div>
              <div className="text-[11px] text-gray-500">
                Tiep /{' '}
                <a
                  href="https://vuxuantiep.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  vuxuantiep.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        {activeSubView === "Agents" && <CorporateLLMAgentsView />}
        {activeSubView === "Team" && <CorporateLLMTeamView />}
        {activeSubView === "Chat" && <CorporateLLMChatView />}
        {activeSubView === "Spaces" && <CorporateLLMSpacesView />}
      </div>
    </div>
  );
}

function CorporateLLMAgentsView() {
  return (
    <div className="flex flex-col h-full overflow-y-auto custom-scrollbar relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-[#0052ff]/5 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute top-40 right-[10%] w-[400px] h-[400px] bg-[#af52de]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="hidden sm:flex items-center justify-between px-10 py-5 shrink-0 relative z-10 border-b border-[rgba(0,0,0,0.02)]">
        <div className="relative w-full max-w-md">
          <Search
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
            size={14}
          />
          <input
            type="text"
            placeholder="Agents durchsuchen ..."
            className="w-full pl-9 pr-4 py-2 bg-[#f0f4ff]/50 border border-transparent focus:bg-white focus:border-[#0052ff]/20 focus:shadow-sm outline-none rounded-xl text-[13px] transition-all"
          />
        </div>
        <div className="text-[12px] font-bold text-gray-400 tracking-wider">
          vuxuantiep.de
        </div>
      </div>

      <div className="px-6 sm:px-10 pb-10 relative z-10 flex-1 pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4 mt-4 sm:mt-0">
          <div>
            <h1 className="text-[36px] font-extrabold text-gray-900 mb-1 tracking-tight">
              Agents
            </h1>
            <p className="text-gray-500 text-[14px]">
              Spezialisierte KI-Assistenten für jeden Use-Case
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#0052ff] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-[13px] font-semibold shadow-[0_6px_15px_rgba(0,82,255,0.3)] transition-all transform hover:-translate-y-0.5 shrink-0">
            <span className="text-[18px] leading-none mb-0.5">+</span> Agent
            erstellen
          </button>
        </div>

        <div className="flex overflow-x-auto gap-2 mb-8 pb-2 custom-scrollbar">
          <TabButton label="Alle" active />
          <TabButton label="Vertrieb" />
          <TabButton label="Marketing" />
          <TabButton label="Support" />
          <TabButton label="Eigene" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AgentDirectoryCard
            icon={<TrendingUp size={20} className="text-[#0052ff]" />}
            title="Vertrieb"
            description="Qualifiziert Leads, schreibt Angebote und bereitet Pitches vor."
            badge="Vorgefertigt"
            users={3}
            extraUsers={1}
            shared="Geteilt mit Team"
          />
          <AgentDirectoryCard
            icon={<Megaphone size={20} className="text-[#0052ff]" />}
            title="Marketing"
            description="Erstellt Kampagnen, Social Posts und SEO-Texte im Markenton."
            badge="Vorgefertigt"
            users={3}
            extraUsers={0}
            shared="Geteilt mit Team"
          />
          <AgentDirectoryCard
            icon={<Headphones size={20} className="text-[#0052ff]" />}
            title="Support"
            description="Beantwortet Kundenanfragen auf Basis eurer eigenen Wissensbasis."
            badge="Vorgefertigt"
            users={3}
            extraUsers={2}
            shared="Geteilt mit Team"
          />
          <AgentDirectoryCard
            icon={<Users size={20} className="text-[#0052ff]" />}
            title="HR-Assistent"
            description="Formuliert Stellenanzeigen und beantwortet Mitarbeiterfragen."
            badge="Eigen"
            badgeType="blue"
            users={2}
            extraUsers={0}
            shared="Geteilt mit Team"
          />
          <AgentDirectoryCard
            icon={<FileText size={20} className="text-[#0052ff]" />}
            title="Vertrags-Prüfer"
            description="Analysiert Verträge und markiert kritische Klauseln."
            badge="Eigen"
            badgeType="blue"
            users={0}
            extraUsers={0}
            shared="Privat"
            sharedIcon={<Lock size={12} />}
          />

          <div className="bg-transparent border-2 border-dashed border-[#0052ff]/30 rounded-[24px] p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#0052ff]/5 transition-colors min-h-[220px]">
            <div className="w-12 h-12 bg-[#0052ff]/10 text-[#0052ff] rounded-[14px] flex items-center justify-center mb-4">
              <Plus size={24} />
            </div>
            <div className="text-[#0052ff] font-bold text-[15px] mb-1">
              Neuen Agent erstellen
            </div>
            <div className="text-[#86868b] text-[13px]">
              Eigenen KI-Assistenten konfigurieren
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CorporateLLMTeamView() {
  return (
    <div className="flex flex-col h-full overflow-y-auto custom-scrollbar relative">
      <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-[#0052ff]/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="px-6 sm:px-10 pb-10 relative z-10 flex-1 pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
          <div>
            <h1 className="text-[32px] font-extrabold text-[#1d1d1f] mb-1 tracking-tight">
              Team & Verwaltung
            </h1>
            <p className="text-[#86868b] text-[14px]">
              Tiep /{' '}
              <a
                href="https://vuxuantiep.de"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                vuxuantiep.de
              </a>
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#0052ff] hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-[13px] font-semibold shadow-[0_6px_15px_rgba(0,82,255,0.3)] transition-all transform hover:-translate-y-0.5 shrink-0">
            <span className="text-[18px] leading-none mb-0.5">+</span> Mitglied
            einladen
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center mb-4">
              🪑
            </div>
            <div>
              <div className="text-[32px] font-bold text-[#1d1d1f] leading-none mb-1">
                9{" "}
                <span className="text-[20px] text-[#86868b] font-semibold">
                  /15
                </span>
              </div>
              <div className="text-[13px] text-[#86868b] font-medium mb-3">
                Seats belegt
              </div>
              <div className="h-1.5 w-full bg-[#f0f0f5] rounded-full overflow-hidden">
                <div className="h-full bg-[#0052ff] w-[60%]"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              🤖
            </div>
            <div>
              <div className="text-[32px] font-bold text-[#1d1d1f] leading-none mb-1">
                8
              </div>
              <div className="text-[13px] text-[#86868b] font-medium">
                Geteilte Agents
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
              📁
            </div>
            <div>
              <div className="text-[32px] font-bold text-[#1d1d1f] leading-none mb-1">
                6
              </div>
              <div className="text-[13px] text-[#86868b] font-medium">
                Geteilte Spaces
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 bg-white rounded-[24px] p-6 shadow-sm border border-black/5">
            <h3 className="text-[16px] font-bold text-[#1d1d1f] mb-6">
              Mitglieder
            </h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[11px] font-bold text-[#86868b] uppercase tracking-wider border-b border-black/5">
                  <th className="pb-3 px-2">Name</th>
                  <th className="pb-3 px-2">E-Mail</th>
                  <th className="pb-3 px-2">Rolle</th>
                  <th className="pb-3 px-2">Status</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                <MemberRow
                  name="Tiep"
                  email="tiep@vuxuantiep.de"
                  role="Admin"
                  status="Aktiv"
                  initials="MK"
                  bgColor="bg-[#0052ff] text-white"
                />
                <MemberRow
                  name="Lena Vogt"
                  email="lena@vuxuantiep.de"
                  role="Mitglied"
                  status="Aktiv"
                  initials="LV"
                  bgColor="bg-blue-400 text-white"
                />
                <MemberRow
                  name="Tobias Reich"
                  email="tobias@vuxuantiep.de"
                  role="Mitglied"
                  status="Aktiv"
                  initials="TR"
                  bgColor="bg-[#0052ff] text-white"
                />
                <MemberRow
                  name="Sara Brandt"
                  email="sara@vuxuantiep.de"
                  role="Mitglied"
                  status="Eingeladen"
                  initials="SB"
                  bgColor="bg-orange-500 text-white"
                />
                <MemberRow
                  name="Jonas Funk"
                  email="jonas@vuxuantiep.de"
                  role="Mitglied"
                  status="Aktiv"
                  initials="JF"
                  bgColor="bg-[#0052ff] text-white"
                />
              </tbody>
            </table>
          </div>

          <div className="w-full lg:w-[300px] flex flex-col gap-6">
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5">
              <h3 className="text-[14px] font-bold text-[#1d1d1f] mb-4">
                Geteilte Agents
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] font-semibold">
                    <span className="text-[16px]">📈</span> Sales-Profi
                  </div>
                  <div className="flex -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-blue-500 border border-white"></div>
                    <div className="w-5 h-5 rounded-full bg-blue-400 border border-white"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] font-semibold">
                    <span className="text-[16px]">✍️</span> Content-Stratege
                  </div>
                  <div className="flex -space-x-1.5">
                    <div className="w-5 h-5 rounded-full bg-blue-500 border border-white"></div>
                    <div className="w-5 h-5 rounded-full bg-orange-400 border border-white"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] font-semibold">
                    <span className="text-[16px]">🎧</span> Support-Held
                  </div>
                  <div className="flex -space-x-1.5 items-center">
                    <div className="w-5 h-5 rounded-full bg-blue-500 border border-white"></div>
                    <div className="w-5 h-5 rounded-full bg-blue-400 border border-white"></div>
                    <span className="text-[10px] font-bold text-[#0052ff] ml-2">
                      +1
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5">
              <h3 className="text-[14px] font-bold text-[#1d1d1f] mb-4">
                Geteilte Spaces
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] font-semibold">
                    <Folder size={14} className="text-[#86868b]" />{" "}
                    Produkt-Wissensbasis
                  </div>
                  <div className="text-[11px] text-[#86868b]">12 Dok.</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] font-semibold">
                    <Folder size={14} className="text-[#86868b]" /> Onboarding
                  </div>
                  <div className="text-[11px] text-[#86868b]">7 Dok.</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[13px] font-semibold">
                    <Folder size={14} className="text-[#86868b]" /> Recht &
                    Verträge
                  </div>
                  <div className="text-[11px] text-[#86868b]">9 Dok.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MemberRow({ name, email, role, status, initials, bgColor }: any) {
  const isInvited = status === "Eingeladen";
  return (
    <tr className="border-b border-black/5 last:border-0 hover:bg-black/[0.02] transition-colors">
      <td className="py-3 px-2">
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-full ${bgColor} flex items-center justify-center text-[11px] font-bold tracking-wider`}
          >
            {initials}
          </div>
          <span className="font-semibold text-[#1d1d1f] text-[13px]">
            {name}
          </span>
        </div>
      </td>
      <td className="py-3 px-2 text-[#86868b] text-[13px]">{email}</td>
      <td className="py-3 px-2">
        <span
          className={`text-[12px] font-semibold px-2 py-1 rounded-md ${role === "Admin" ? "bg-[#f0f4ff] text-[#0052ff]" : "bg-gray-100 text-gray-600"}`}
        >
          {role}
        </span>
      </td>
      <td className="py-3 px-2">
        <div
          className={`flex items-center gap-1.5 text-[12px] font-semibold ${isInvited ? "text-orange-500" : "text-[#0052ff]"}`}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full ${isInvited ? "bg-orange-500" : "bg-[#0052ff]"}`}
          ></div>
          {status}
        </div>
      </td>
    </tr>
  );
}

function CorporateLLMChatView() {
  const [selectedModel, setSelectedModel] = useState("Mistral KI");
  const [modelDropdownOpen, setModelDropdownOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([
    {
      role: "assistant",
      text: "Willkommen im Corporate LLM Chat. Mistral KI ist bereit für deine Anfrage.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const localModels = [
    "Hermes (Lokal)",
    "Ollama Qwen2.5-coder",
    "Gemma4",
    "Mistral KI",
    "DeepSeek",
    "LLaMa 2",
    "Odysseus Core",
  ];

  const ollamaModelNames = [
    "Ollama Qwen2.5-coder",
    "Gemma4",
    "Mistral KI",
    "DeepSeek",
    "LLaMa 2",
  ];

  const getApiRoute = () => {
    return ollamaModelNames.includes(selectedModel) ? "/api/ollama" : "/api/local-model";
  };

  const getModelSlug = () => {
    if (selectedModel === "Ollama Qwen2.5-coder") {
      return "qwen2.5-coder";
    }
    if (selectedModel === "Gemma4") {
      return "gemma4:latest";
    }
    if (selectedModel === "Mistral KI") {
      return "mistral:latest";
    }
    if (selectedModel === "DeepSeek") {
      return "deepseek-coder:latest";
    }
    if (selectedModel === "LLaMa 2") {
      return "llama2:latest";
    }
    return undefined;
  };

  const sendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage = { role: "user", text: chatInput.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setChatInput("");
    setIsLoading(true);

    try {
      const res = await fetch(getApiRoute(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.text,
          model: getModelSlug(),
        }),
      });

      const data = await res.json();
      const reply = data.reply || data.error || "Keine Antwort erhalten.";
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `Fehler beim Abrufen des Modells: ${error?.message ?? "Unbekannt"}`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full bg-[#f8fafe]">
      {/* Chat Area */}
      <div className="flex-1 flex flex-col h-full bg-white rounded-tl-2xl shadow-[-4px_0_24px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 shrink-0">
          <h2 className="text-[18px] font-bold text-[#1d1d1f]">
            Q3 Sales-Strategie
          </h2>

          <div className="relative">
            <button
              onClick={() => setModelDropdownOpen(!modelDropdownOpen)}
              className="flex items-center gap-2 bg-[#f0f4ff] hover:bg-[#e0e8ff] text-[#0052ff] px-3 py-1.5 rounded-full text-[13px] font-semibold transition-colors border border-[#0052ff]/10"
            >
              <Server size={14} /> {selectedModel} <ChevronDown size={14} />
            </button>

            {modelDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-[220px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden z-20">
                <div className="px-3 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-50 flex items-center justify-between bg-gray-50/50">
                  Odysseus Backend
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-[#34c759]">Online</span>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#34c759]"></span>
                    </span>
                  </div>
                </div>
                <div className="p-1.5">
                  {localModels.map((model) => (
                    <button
                      key={model}
                      className={`w-full text-left px-3 py-2 text-[13px] font-semibold rounded-lg hover:bg-gray-50 transition-colors ${selectedModel === model ? "text-[#0052ff] bg-[#f0f4ff]" : "text-gray-700"}`}
                      onClick={() => {
                        setSelectedModel(model);
                        setModelDropdownOpen(false);
                      }}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-6 flex flex-col custom-scrollbar">
          {messages.map((message, index) => {
            const isUser = message.role === "user";
            return (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[85%] ${isUser ? "self-end" : "self-start"}`}
              >
                <div className={`flex items-center gap-2 mb-3 ${isUser ? "justify-end" : "justify-start"}`}>
                  {!isUser && (
                    <>
                      <div className="w-6 h-6 rounded-md bg-[#0052ff] text-white flex items-center justify-center font-bold text-[10px]">
                        C
                      </div>
                      <span className="text-[13px] font-bold text-[#0052ff]">
                        Corporate LLM
                      </span>
                    </>
                  )}
                </div>
                <div
                  className={`px-5 py-3 rounded-2xl text-[14px] leading-relaxed ${
                    isUser
                      ? "bg-[#f0f4ff] text-[#1d1d1f] rounded-tr-sm"
                      : "bg-[#f7f8fc] text-[#1d1d1f] rounded-bl-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            );
          })}
        </div>

        {/* Chat Input */}
        <div className="p-4 md:p-6 bg-white shrink-0">
          <div className="max-w-3xl mx-auto rounded-[24px] bg-[#f9f9fb] border border-gray-200 p-2 shadow-sm focus-within:border-[#0052ff]/30 focus-within:shadow-md transition-shadow">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Schreib eine Nachricht ..."
              className="w-full bg-transparent border-none outline-none px-4 py-2 text-[14px] text-gray-800 placeholder:text-gray-400 mb-2"
            />
            <div className="flex items-center justify-between px-2 pb-1">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 px-3 py-1.5 rounded-full text-[12px] font-semibold text-gray-700 transition-colors pointer-events-none">
                  <Server size={12} className="text-[#0052ff]" />{" "}
                  {selectedModel}
                </button>
                <button className="flex items-center gap-1.5 bg-[#f0f4ff] text-[#0052ff] hover:bg-blue-100 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors">
                  <Globe size={12} /> Web-Recherche
                </button>
                <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100">
                  <Paperclip size={16} />
                </button>
                <button className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100">
                  <Globe size={16} />
                </button>
              </div>
              <button
                onClick={sendMessage}
                disabled={isLoading || !chatInput.trim()}
                className="w-8 h-8 rounded-full bg-[#0052ff] hover:bg-blue-700 text-white flex items-center justify-center transition-colors shadow-sm disabled:cursor-not-allowed disabled:bg-[#a1c7ff]"
              >
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CorporateLLMSpacesView() {
  return (
    <div className="flex flex-col h-full bg-[#f8fafe]">
      {/* Top Header for Spaces */}
      <div className="px-8 py-5 border-b border-black/5 bg-white flex justify-between items-center shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-[14px] bg-[#f0f4ff] text-[#0052ff] flex items-center justify-center shadow-inner">
            <Folder size={24} />
          </div>
          <div>
            <h2 className="text-[20px] font-bold text-[#1d1d1f] tracking-tight mb-0.5">
              Produkt-Wissensbasis
            </h2>
            <div className="text-[12px] text-gray-500 font-medium">
              12 Dokumente · 4,2 MB
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
            Indiziert mit
          </div>
          <div className="flex gap-1.5">
            <div className="w-7 h-7 bg-gray-100 rounded-md flex items-center justify-center text-[14px]">
              🤖
            </div>
            <div className="w-7 h-7 bg-orange-100 rounded-md flex items-center justify-center text-[14px] text-orange-500">
              ✳️
            </div>
            <div className="w-7 h-7 bg-blue-100 rounded-md flex items-center justify-center text-[14px] text-[#0052ff]">
              ✨
            </div>
            <div className="w-7 h-7 bg-purple-100 rounded-md flex items-center justify-center text-[14px] text-purple-600 text-bold font-serif">
              M
            </div>
          </div>
        </div>
      </div>

      {/* Main Spaces Content */}
      <div className="flex-1 flex overflow-hidden p-6 gap-6">
        {/* Left: Files List */}
        <div className="w-1/3 min-w-[280px] flex flex-col gap-4">
          <div className="text-[12px] font-bold text-gray-400 uppercase tracking-wider ml-1">
            Dokumente
          </div>
          <div className="bg-white rounded-[20px] p-2 flex-1 shadow-sm border border-black/5 overflow-y-auto custom-scrollbar flex flex-col gap-1.5">
            <FileItem
              name="Produkthandbuch_2026.pdf"
              size="2,1 MB"
              icon="📄"
              iconBg="bg-red-50 text-red-500"
              indexed
            />
            <FileItem
              name="Preisliste_Q3.docx"
              size="340 KB"
              icon="📝"
              iconBg="bg-blue-50 text-blue-500"
              indexed
            />
            <FileItem
              name="AGB_final.pdf"
              size="880 KB"
              icon="📄"
              iconBg="bg-red-50 text-red-500"
              indexed
            />
            <FileItem
              name="Architektur-Diagramm.png"
              size="620 KB"
              icon="🖼️"
              iconBg="bg-green-50 text-green-600"
              indexed
            />

            <div className="mt-4 mx-2 border-2 border-dashed border-[#0052ff]/30 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#f0f4ff]/50 transition-colors">
              <UploadCloud size={24} className="text-[#0052ff] mb-2" />
              <div className="text-[13px] font-bold text-[#1d1d1f]">
                Dateien hierher ziehen
              </div>
              <div className="text-[11px] text-gray-400 mt-0.5">
                PDF, Word, Bilder
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-blue-50 text-[#0052ff] px-4 py-3 rounded-xl text-[12px] font-bold justify-center cursor-pointer hover:bg-blue-100 transition-colors shrink-0">
            <span className="text-[16px] leading-none">🇪🇺</span> 100% DSGVO <CheckCircle2 size={14} />
          </div>
        </div>

        {/* Right: Space Chat */}
        <div className="flex-1 bg-white rounded-[24px] shadow-sm border border-black/5 flex flex-col relative overflow-hidden">
          <div className="flex-1 overflow-y-auto p-8 flex flex-col space-y-6 custom-scrollbar">
            {/* User Query */}
            <div className="self-end bg-[#0052ff] text-white px-5 py-3 rounded-2xl rounded-tr-sm text-[14px] font-semibold max-w-[80%] shadow-[0_4px_12px_rgba(0,82,255,0.2)]">
              Welche Kündigungsfrist gilt im Enterprise-Tarif?
            </div>

            {/* AI Response based on Docs */}
            <div className="self-start max-w-[90%] space-y-4">
              <div className="text-[#1d1d1f] text-[15px] leading-relaxed font-medium">
                Im Enterprise-Tarif beträgt die Kündigungsfrist{" "}
                <strong className="font-extrabold text-black">
                  30 Tage zum Quartalsende{" "}
                  <span className="text-[10px] bg-[#0052ff] text-white px-1 py-0.5 rounded ml-0.5 align-super">
                    [1]
                  </span>
                </strong>
                . Bestehende Verträge verlängern sich automatisch um 12 Monate,
                sofern nicht fristgerecht gekündigt wird{" "}
                <span className="text-[10px] bg-[#0052ff] text-white px-1 py-0.5 rounded ml-0.5 align-super">
                  [2]
                </span>
                .
              </div>

              {/* Sources Section */}
              <div className="mt-4 border border-gray-100 rounded-xl p-4 bg-gray-50/50">
                <div className="flex items-center gap-1.5 text-[12px] font-bold text-gray-500 mb-3 uppercase tracking-wider">
                  <Folder size={12} /> Quellen
                </div>

                <div className="space-y-2">
                  <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm flex gap-3">
                    <div className="w-6 h-6 rounded bg-[#0052ff] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-gray-900 flex items-center gap-1.5">
                        AGB_final.pdf{" "}
                        <span className="text-[11px] text-gray-400 font-medium font-serif">
                          · Seite 7
                        </span>
                      </div>
                      <div className="text-[12px] text-gray-500 italic mt-1 leading-snug">
                        "... mit einer Frist von 30 Tagen zum Ende eines
                        Kalenderquartals ..."
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-lg p-3 shadow-sm flex gap-3">
                    <div className="w-6 h-6 rounded bg-[#0052ff] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-gray-900 flex items-center gap-1.5">
                        Produkthandbuch_2026.pdf{" "}
                        <span className="text-[11px] text-gray-400 font-medium font-serif">
                          · Seite 24
                        </span>
                      </div>
                      <div className="text-[12px] text-gray-500 italic mt-1 leading-snug">
                        "... automatische Verlängerung um jeweils 12 Monate ..."
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Space Chat Input */}
          <div className="p-4 bg-white border-t border-black/5 shrink-0">
            <div className="relative flex items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-1 flex-1 shadow-sm focus-within:border-[#0052ff]/30 focus-within:bg-white transition-all">
              <Search size={16} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Frag deine Wissensbasis ..."
                className="w-full bg-transparent outline-none px-3 py-2.5 text-[14px] placeholder:text-gray-400"
              />
              <button className="w-8 h-8 rounded-lg bg-[#0052ff] text-white flex items-center justify-center shrink-0 hover:bg-blue-700 transition-colors shadow-sm">
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileItem({ name, size, icon, iconBg, indexed }: any) {
  return (
    <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all cursor-pointer group">
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center text-[16px] shrink-0 ${iconBg}`}
      >
        {icon}
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="text-[13px] font-bold text-[#1d1d1f] truncate">
          {name}
        </div>
        <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5 font-medium">
          {size} <span className="w-1 h-1 rounded-full bg-gray-300"></span>{" "}
          {indexed ? "indiziert" : "ausstehend"}
        </div>
      </div>
      {indexed && (
        <div className="w-6 h-6 rounded-full bg-[#f0f4ff] text-[#0052ff] flex items-center justify-center shrink-0 group-hover:bg-[#0052ff] group-hover:text-white transition-colors">
          <Check size={12} strokeWidth={3} />
        </div>
      )}
    </div>
  );
}

// ======================================================
// Neue Modul-Views
// ======================================================

function VoiceAgentView() {
  return (
    <div className="h-full overflow-y-auto p-8">
      <h1 className="text-2xl font-bold mb-4">🎙️ Voice Agent Routing</h1>
      <p className="text-gray-600 mb-6">Konfiguriere Voice-Workflows und Sprach-Routing zu Agenten.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="font-semibold mb-2">Inbound Routing</h3>
          <p className="text-sm text-gray-500 mb-4">Beispiel: Anruf an Support → IVR → Sales Agent</p>
          <button className="px-4 py-2 bg-[#0052ff] text-white rounded-full">Neue Regel erstellen</button>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h3 className="font-semibold mb-2">Spracherkennung (ASR) & NLU</h3>
          <p className="text-sm text-gray-500 mb-4">Integration mit lokalen STT/NLU-Modellen möglich.</p>
          <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded">Endpoint: <code>/api/voice/recognize</code></div>
        </div>
      </div>
    </div>
  );
}

function AIVOVisibilityView() {
  return (
    <div className="h-full overflow-y-auto p-8">
      <h1 className="text-2xl font-bold mb-4">📈 AIVO Visibility</h1>
      <p className="text-gray-600 mb-6">Visualisiere Agent-Performance, Latenzen und Anfrage-Traces.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h4 className="font-semibold">Request Rate</h4>
          <div className="text-3xl font-bold mt-4">1.2K / h</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h4 className="font-semibold">Average Latency</h4>
          <div className="text-3xl font-bold mt-4">120 ms</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h4 className="font-semibold">Error Rate</h4>
          <div className="text-3xl font-bold mt-4 text-red-500">0.8%</div>
        </div>
      </div>
    </div>
  );
}

function KIAuditorView() {
  return (
    <div className="h-full overflow-y-auto p-8">
      <h1 className="text-2xl font-bold mb-4">🛡️ KI-Auditor (NIS2)</h1>
      <p className="text-gray-600 mb-6">Audit-Reports, Compliance-Checks und Risikobewertung.</p>

      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <h4 className="font-semibold mb-2">Letzter Audit</h4>
        <p className="text-sm text-gray-500 mb-4">2026-06-01 — Keine kritischen Findings</p>
        <button className="px-4 py-2 bg-[#34c759] text-white rounded-full">Audit erneuern</button>
      </div>
    </div>
  );
}

function AgentMarketplaceView() {
  return (
    <div className="h-full overflow-y-auto p-8">
      <h1 className="text-2xl font-bold mb-4">📦 Agent Marketplace</h1>
      <p className="text-gray-600 mb-6">Fertige Agent-Vorlagen, Installationsbeispiele und Demo-Agenten.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h4 className="font-semibold">Sales Agent</h4>
          <p className="text-sm text-gray-500 mb-4">Lead-Qualifizierung und Angebotserstellung.</p>
          <button className="px-3 py-1 bg-[#0052ff] text-white rounded">Installieren</button>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h4 className="font-semibold">Support Agent</h4>
          <p className="text-sm text-gray-500 mb-4">Ticket-Antworten basierend auf Wissensbasis.</p>
          <button className="px-3 py-1 bg-[#0052ff] text-white rounded">Installieren</button>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border">
          <h4 className="font-semibold">Onboarding Agent</h4>
          <p className="text-sm text-gray-500 mb-4">HR/Onboarding-Automatisierung.</p>
          <button className="px-3 py-1 bg-[#0052ff] text-white rounded">Installieren</button>
        </div>
      </div>
    </div>
  );
}

// ======================================================
// Local Chat Widget - verbindet mit app/api/local-model
// ======================================================

function LocalChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");

  const send = async () => {
    if (!input) return;
    const userMsg = { role: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    const res = await fetch("/api/local-model", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });
    const data = await res.json();
    setMessages((m) => [...m, { role: "assistant", text: data.reply }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open && (
        <div className="w-[360px] h-[420px] bg-white rounded-2xl shadow-lg border p-3 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold">Lokaler Chat (LocalModel)</div>
            <button className="text-sm text-gray-500" onClick={() => setOpen(false)}>Schließen</button>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <div className={`inline-block p-2 rounded ${m.role === "user" ? "bg-[#f0f4ff]" : "bg-[#f3f3f6]"}`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Nachricht..." className="flex-1 px-3 py-2 border rounded-xl" />
            <button onClick={send} className="px-4 py-2 bg-[#0052ff] text-white rounded-xl">Senden</button>
          </div>
        </div>
      )}
      {!open && (
        <button onClick={() => setOpen(true)} className="w-14 h-14 rounded-full bg-[#0052ff] text-white shadow-lg">💬</button>
      )}
    </div>
  );
}


// ----------------------------------------------------------------------------
// REUSABLE UI COMPONENTS
// ----------------------------------------------------------------------------

function NavItem({
  icon,
  label,
  active = false,
  onClick,
  collapsed = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  collapsed?: boolean;
}) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-[14px] font-medium ${collapsed ? "justify-center px-0" : ""} ${active ? "bg-[#e8f0fe] text-[#0071e3]" : "text-[#1d1d1f] hover:bg-[rgba(0,0,0,0.04)] border border-transparent"}`}
      title={collapsed ? label : undefined}
    >
      <span className="text-base leading-none">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </a>
  );
}

function InnerNavItem({ icon, label, active = false, onClick }: any) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-[10px] cursor-pointer transition-colors text-[13px] font-medium ${active ? "bg-[#e8f0fe] text-[#0052ff]" : "text-gray-600 hover:bg-gray-100/60"}`}
    >
      {icon}
      <span>{label}</span>
      {active && (
        <div className="ml-auto w-1 h-4 bg-[#0052ff] rounded-full"></div>
      )}
    </div>
  );
}

function TabButton({ label, active }: { label: string; active?: boolean }) {
  return (
    <button
      className={`px-5 py-1.5 rounded-full text-[13px] font-semibold transition-all whitespace-nowrap ${active ? "bg-[#e8f0fe] text-[#0052ff]" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200/60 shadow-sm"}`}
    >
      {label}
    </button>
  );
}

function AgentDirectoryCard({
  icon,
  title,
  description,
  badge,
  badgeType = "gray",
  users,
  extraUsers,
  shared,
  sharedIcon,
}: any) {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-transparent hover:border-[#0052ff]/20 hover:shadow-[0_8px_30px_rgba(0,82,255,0.08)] transition-all cursor-pointer flex flex-col h-full min-h-[220px] relative overflow-hidden group">
      {/* Decorative gradient blob inside card */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#0052ff]/5 rounded-full blur-2xl pointer-events-none transition-all group-hover:bg-[#0052ff]/10 group-hover:scale-150"></div>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="w-11 h-11 bg-[#f0f4ff] rounded-[14px] flex items-center justify-center text-[#0052ff]">
          {icon}
        </div>
        <div
          className={`text-[11px] font-bold px-3 py-1.5 rounded-full ${badgeType === "gray" ? "bg-gray-100/80 text-gray-500" : "bg-blue-50/80 text-[#0052ff] border border-blue-100/50"}`}
        >
          {badge}
        </div>
      </div>
      <div className="relative z-10 mb-2">
        <h3 className="text-[18px] font-bold text-gray-900 tracking-tight">
          {title}
        </h3>
      </div>
      <p className="text-[13px] text-gray-500 leading-relaxed relative z-10 flex-1 font-medium">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-3 relative z-10">
        {users > 0 ? (
          <div className="flex -space-x-2">
            {[...Array(users)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-[#0052ff] border-2 border-white shadow-sm flex items-center justify-center overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#0052ff] to-[#4080ff] opacity-80"></div>
              </div>
            ))}
            {extraUsers > 0 && (
              <div className="w-8 h-8 rounded-full bg-blue-50 border-2 border-white shadow-sm flex items-center justify-center text-[10px] font-bold text-[#0052ff]">
                +{extraUsers}
              </div>
            )}
          </div>
        ) : (
          <div className="w-8 h-8 rounded-xl bg-gray-100/80 flex items-center justify-center text-[#86868b]">
            {sharedIcon || <FileText size={14} />}
          </div>
        )}
        <span className="text-[12px] font-semibold text-gray-400 flex items-center gap-1">
          {sharedIcon && shared === "Privat" && (
            <Lock size={12} className="shrink-0" />
          )}
          <span className="truncate">{shared}</span>
        </span>
      </div>
    </div>
  );
}

function AgentCard({
  name,
  description,
  installs,
  author,
  active,
}: {
  name: string;
  description: string;
  installs: string;
  author: string;
  active?: boolean;
}) {
  return (
    <div
      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex gap-3 ${active ? "bg-[#af52de]/5 border-[#af52de]/20" : "bg-white border-[rgba(0,0,0,0.05)] hover:border-[#d2d2d7] hover:shadow-sm"}`}
    >
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${active ? "bg-[#af52de]/10 text-[#af52de]" : "bg-[#f0f0f5] text-[#1d1d1f]"}`}
      >
        <Box size={20} />
      </div>
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-start mb-0.5">
          <div
            className={`text-[14px] font-semibold truncate ${active ? "text-[#af52de]" : "text-[#1d1d1f]"}`}
          >
            {name}
          </div>
          <div className="text-[11px] font-bold bg-[#f0f0f5] text-[#86868b] px-2 py-0.5 rounded-md">
            {installs}
          </div>
        </div>
        <div className="text-[12px] text-[#86868b] truncate">{description}</div>
      </div>
    </div>
  );
}

function EdgeNodeCard({
  name,
  location,
  status,
  cpu,
  isOffline = false,
}: {
  name: string;
  location: string;
  status: string;
  cpu: string;
  isOffline?: boolean;
}) {
  return (
    <div className="flex items-center justify-between p-2.5 rounded-xl border border-[rgba(0,0,0,0.05)] bg-[#f9f9fb] hover:bg-white hover:border-[#d2d2d7] transition-all">
      <div className="flex items-center gap-3">
        <div
          className={`w-2 h-2 rounded-full ${isOffline ? "bg-[#ff3b30]" : "bg-[#34c759]"}`}
        ></div>
        <div>
          <div className="text-[13px] font-semibold text-[#1d1d1f]">{name}</div>
          <div className="text-[11px] text-[#86868b] flex items-center gap-1">
            <MapPin size={10} /> {location}
          </div>
        </div>
      </div>
      <div className="text-right">
        <div
          className={`text-[12px] font-bold ${isOffline ? "text-[#ff3b30]" : "text-[#34c759]"}`}
        >
          {status}
        </div>
        <div className="text-[11px] text-[#86868b] font-medium">{cpu} CPU</div>
      </div>
    </div>
  );
}

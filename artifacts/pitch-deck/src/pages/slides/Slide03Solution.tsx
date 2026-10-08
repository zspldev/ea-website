export default function Slide03Solution() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-body" style={{ background: "#ffffff" }}>
      <div className="absolute top-0 left-0 bottom-0" style={{ width: "0.6vw", background: "#0077A8" }} />
      {/* Right accent panel */}
      <div className="absolute top-0 right-0 bottom-0 flex flex-col justify-center items-center" style={{ width: "30vw", background: "#F2F8FB", gap: "4vh" }}>
        <div className="font-body font-bold uppercase tracking-widest text-center" style={{ color: "#0077A8", fontSize: "1.8vw", letterSpacing: "0.15em" }}>15 Languages</div>
        <div style={{ width: "3vw", height: "2px", background: "#C8DDE6" }} />
        <div className="font-body font-bold uppercase tracking-widest text-center" style={{ color: "#0077A8", fontSize: "1.8vw", letterSpacing: "0.15em" }}>Zero Scribes</div>
        <div style={{ width: "3vw", height: "2px", background: "#C8DDE6" }} />
        <div className="font-body font-bold uppercase tracking-widest text-center" style={{ color: "#0077A8", fontSize: "1.8vw", letterSpacing: "0.15em" }}>All Exam Types</div>
      </div>
      {/* Main content */}
      <div className="absolute flex flex-col justify-center" style={{ top: "10vh", left: "5.5vw", right: "34vw", bottom: "10vh" }}>
        <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.8vw", letterSpacing: "0.16em", marginBottom: "3vh" }}>The Solution</div>
        <h2 className="font-display font-black tracking-tight" style={{ color: "#0F2B3D", fontSize: "6.5vw", lineHeight: 1.05, textWrap: "balance", marginBottom: "4vh" }}>Independence. Dignity. Education.</h2>
        <div style={{ width: "5vw", height: "3px", background: "#0077A8", marginBottom: "4vh" }} />
        <p className="font-body font-normal" style={{ color: "#2D4F61", fontSize: "2.6vw", lineHeight: 1.55, marginBottom: "2.5vh" }}>Enabelo Apps replaces the scribe with voice-powered AI — students speak their answers, independently, in their own language.</p>
        <p className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2.2vw", lineHeight: 1.5 }}>11 Indian languages · 4 foreign languages · Complete exam coverage</p>
      </div>
    </div>
  );
}

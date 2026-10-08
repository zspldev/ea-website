export default function Slide02Problem() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-body" style={{ background: "#F2F8FB" }}>
      {/* Left teal strip */}
      <div className="absolute top-0 left-0 bottom-0" style={{ width: "0.6vw", background: "#0077A8" }} />
      {/* Content */}
      <div className="absolute flex flex-col" style={{ top: "10vh", left: "5.5vw", right: "5vw", bottom: "8vh" }}>
        <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.8vw", letterSpacing: "0.16em", marginBottom: "1.5vh" }}>The Problem</div>
        <h2 className="font-display font-bold tracking-tight" style={{ color: "#0F2B3D", fontSize: "5vw", lineHeight: 1.1, textWrap: "balance", marginBottom: "1.5vh" }}>A System That Fails Students Every Day</h2>
        <div style={{ width: "5vw", height: "3px", background: "#0077A8", marginBottom: "6vh" }} />
        {/* Three cards */}
        <div className="flex gap-[3vw]" style={{ flex: 1 }}>
          {/* Card 1 */}
          <div className="flex flex-col" style={{ flex: 1, background: "#ffffff", borderTop: "4px solid #D97706", borderRadius: "0.4vw", padding: "3vh 2.5vw" }}>
            <div className="font-display font-black" style={{ color: "#D97706", fontSize: "7vw", lineHeight: 1, marginBottom: "2vh" }}>8M+</div>
            <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.2vw", lineHeight: 1.3, marginBottom: "1.5vh" }}>Students Affected</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.5 }}>Visually impaired and writing&#8209;disabled students in India dependent on the scribe system</div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col" style={{ flex: 1, background: "#ffffff", borderTop: "4px solid #D97706", borderRadius: "0.4vw", padding: "3vh 2.5vw" }}>
            <div className="font-display font-black" style={{ color: "#D97706", fontSize: "3vw", lineHeight: 1.2, marginBottom: "2vh" }}>Scribes are scarce, unreliable &amp; undignified</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.5 }}>Colleges struggle to find qualified scribes. Students depend on strangers to write their exams</div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col" style={{ flex: 1, background: "#ffffff", borderTop: "4px solid #D97706", borderRadius: "0.4vw", padding: "3vh 2.5vw" }}>
            <div className="font-display font-black" style={{ color: "#D97706", fontSize: "3vw", lineHeight: 1.2, marginBottom: "2vh" }}>Students miss exams, repeat years, drop out</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.5 }}>Not from inability — from a structural failure that technology can now solve</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Slide07WhyNow() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-body" style={{ background: "#F2F8FB" }}>
      <div className="absolute top-0 left-0 bottom-0" style={{ width: "0.6vw", background: "#0077A8" }} />
      <div className="absolute flex flex-row" style={{ top: "10vh", left: "5.5vw", right: "5vw", bottom: "8vh", gap: "6vw" }}>
        {/* Left: title */}
        <div className="flex flex-col justify-center" style={{ width: "35vw", flexShrink: 0 }}>
          <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.8vw", letterSpacing: "0.16em", marginBottom: "2.5vh" }}>Why Now</div>
          <h2 className="font-display font-bold tracking-tight" style={{ color: "#0F2B3D", fontSize: "5.2vw", lineHeight: 1.08, textWrap: "balance", marginBottom: "3vh" }}>The Conditions Are Right</h2>
          <div style={{ width: "5vw", height: "3px", background: "#0077A8", marginBottom: "3vh" }} />
          <p className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2.2vw", lineHeight: 1.55 }}>Four converging forces make this the right moment for institutional adoption.</p>
        </div>
        {/* Right: 4 points */}
        <div className="flex flex-col justify-center gap-[3.5vh]" style={{ flex: 1 }}>
          <div className="flex gap-[2vw] items-start">
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", background: "#0077A8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="font-display font-black" style={{ color: "#ffffff", fontSize: "1.8vw" }}>1</span>
            </div>
            <div>
              <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.3vw", marginBottom: "0.5vh" }}>Digital India Infrastructure</div>
              <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.45 }}>Connectivity now reaches rural campuses, enabling cloud-based AI at scale</div>
            </div>
          </div>
          <div className="flex gap-[2vw] items-start">
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", background: "#0077A8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="font-display font-black" style={{ color: "#ffffff", fontSize: "1.8vw" }}>2</span>
            </div>
            <div>
              <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.3vw", marginBottom: "0.5vh" }}>NAAC Accreditation Mandates</div>
              <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.45 }}>Inclusive practices are now audited criteria. Institutions need demonstrable solutions</div>
            </div>
          </div>
          <div className="flex gap-[2vw] items-start">
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", background: "#0077A8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="font-display font-black" style={{ color: "#ffffff", fontSize: "1.8vw" }}>3</span>
            </div>
            <div>
              <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.3vw", marginBottom: "0.5vh" }}>Technology-Assisted Assessment Normalised</div>
              <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.45 }}>Post-COVID, universities have embraced digital exam tools more readily</div>
            </div>
          </div>
          <div className="flex gap-[2vw] items-start">
            <div style={{ width: "3.5vw", height: "3.5vw", borderRadius: "50%", background: "#0077A8", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span className="font-display font-black" style={{ color: "#ffffff", fontSize: "1.8vw" }}>4</span>
            </div>
            <div>
              <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.3vw", marginBottom: "0.5vh" }}>No Comparable Solution Exists</div>
              <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.45 }}>No voice-AI platform at this language depth covers Indian exam formats</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

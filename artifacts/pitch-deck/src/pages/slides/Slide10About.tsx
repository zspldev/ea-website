export default function Slide10About() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-body" style={{ background: "#F2F8FB" }}>
      <div className="absolute top-0 left-0 bottom-0" style={{ width: "0.6vw", background: "#0077A8" }} />
      <div className="absolute flex flex-col" style={{ top: "9vh", left: "5.5vw", right: "5vw", bottom: "7vh" }}>
        <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.7vw", letterSpacing: "0.16em", marginBottom: "1vh" }}>About the Team</div>
        <h2 className="font-display font-bold tracking-tight" style={{ color: "#0F2B3D", fontSize: "4.2vw", lineHeight: 1.1, marginBottom: "0.8vh" }}>Zapurzaa Systems Pvt. Ltd.</h2>
        <p className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "1.9vw", lineHeight: 1.45, marginBottom: "1.5vh", maxWidth: "80vw" }}>A software company specialising in Natural Language Processing with a focus on Indic languages — building AI products for India's linguistic diversity.</p>
        <div style={{ width: "5vw", height: "3px", background: "#0077A8", marginBottom: "3vh" }} />
        <div className="flex gap-[2.5vw]" style={{ flex: 1 }}>
          {/* Card 1 */}
          <div className="flex flex-col" style={{ flex: 1, background: "#003D57", borderRadius: "0.4vw", padding: "2.5vh 2.2vw" }}>
            <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.3vw", letterSpacing: "0.12em", marginBottom: "1.5vh" }}>Flagship Product</div>
            <div className="font-display font-bold" style={{ color: "#ffffff", fontSize: "2.4vw", lineHeight: 1.2, marginBottom: "1.2vh" }}>Enabelo Apps</div>
            <div className="font-body font-normal" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.8vw", lineHeight: 1.45 }}>Voice-AI exam platform for visually impaired and writing&#8209;disabled students. 15 languages. Patent Pending.</div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-col" style={{ flex: 1, background: "#003D57", borderRadius: "0.4vw", padding: "2.5vh 2.2vw" }}>
            <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.3vw", letterSpacing: "0.12em", marginBottom: "1.5vh" }}>Indic NLP</div>
            <div className="font-display font-bold" style={{ color: "#ffffff", fontSize: "2.4vw", lineHeight: 1.2, marginBottom: "1.2vh" }}>11 Indian Languages</div>
            <div className="font-body font-normal" style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.8vw", lineHeight: 1.45 }}>Speech recognition and NLP for Marathi, Hindi, Tamil, Telugu, Kannada, and more — trained on real Indian language data.</div>
          </div>
          {/* Card 3 */}
          <div className="flex flex-col" style={{ flex: 1, background: "#ffffff", borderRadius: "0.4vw", padding: "2.5vh 2.2vw", borderTop: "4px solid #0077A8" }}>
            <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.3vw", letterSpacing: "0.12em", marginBottom: "1.5vh" }}>Core Technology</div>
            <div className="font-display font-bold" style={{ color: "#0F2B3D", fontSize: "2.4vw", lineHeight: 1.2, marginBottom: "1.2vh" }}>Voice-First AI</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "1.8vw", lineHeight: 1.45 }}>End-to-end speech-to-text NLP designed for real-world Indian accents, mixed inputs, and low-bandwidth conditions.</div>
          </div>
          {/* Card 4 */}
          <div className="flex flex-col" style={{ flex: 1, background: "#ffffff", borderRadius: "0.4vw", padding: "2.5vh 2.2vw", borderTop: "4px solid #0077A8" }}>
            <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.3vw", letterSpacing: "0.12em", marginBottom: "1.5vh" }}>Mission</div>
            <div className="font-display font-bold" style={{ color: "#0F2B3D", fontSize: "2.4vw", lineHeight: 1.2, marginBottom: "1.2vh" }}>AI for Bharat</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "1.8vw", lineHeight: 1.45 }}>Building NLP products that serve India's multilingual population — starting with the students who need it most.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

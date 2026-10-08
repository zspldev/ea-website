import spputBoard from "@assets/SPPU-Board-Image_1782336842207.jpg";

export default function Slide05SPPU() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-body flex">
      {/* Left half: image */}
      <div className="relative" style={{ width: "48vw", overflow: "hidden" }}>
        <img src={spputBoard} crossOrigin="anonymous" alt="Savitribai Phule Pune University — Department of Foreign Languages" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
        {/* Gradient overlay to white (right edge) */}
        <div className="absolute top-0 right-0 bottom-0" style={{ width: "14vw", background: "linear-gradient(to right, transparent, #ffffff)" }} />
      </div>
      {/* Right half: text on white */}
      <div className="absolute flex flex-col justify-center" style={{ top: "10vh", left: "50vw", right: "5vw", bottom: "10vh" }}>
        <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.7vw", letterSpacing: "0.16em", marginBottom: "2.5vh" }}>First Paid Institutional User</div>
        <h2 className="font-display font-bold tracking-tight" style={{ color: "#0F2B3D", fontSize: "4.5vw", lineHeight: 1.1, textWrap: "balance", marginBottom: "3.5vh" }}>German Language Dept., SPPU Pune</h2>
        <div style={{ width: "5vw", height: "3px", background: "#0077A8", marginBottom: "3.5vh" }} />
        <p className="font-body font-normal" style={{ color: "#2D4F61", fontSize: "2.5vw", lineHeight: 1.55, marginBottom: "2vh" }}>Savitribai Phule Pune University's Department of Foreign Languages integrated Enabelo Apps into their German language course.</p>
        <div className="flex items-center gap-[2vw]" style={{ marginTop: "1.5vh" }}>
          <div style={{ textAlign: "center" }}>
            <div className="font-display font-black" style={{ color: "#0077A8", fontSize: "6vw", lineHeight: 1 }}>9</div>
            <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#5B7A8C", fontSize: "1.6vw", letterSpacing: "0.1em" }}>Visually Impaired</div>
            <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#5B7A8C", fontSize: "1.6vw", letterSpacing: "0.1em" }}>Students</div>
          </div>
          <div style={{ width: "1px", height: "10vh", background: "#C8DDE6" }} />
          <div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2.2vw", lineHeight: 1.5 }}>Used Enabelo Apps in coursework and assessment — independently, without a scribe.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

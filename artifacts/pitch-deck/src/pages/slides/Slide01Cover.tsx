const base = import.meta.env.BASE_URL;

export default function Slide01Cover() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-body flex">
      {/* Left panel — light background so original logo colors show */}
      <div
        className="relative flex flex-col"
        style={{ width: "38vw", background: "#F2F8FB", borderRight: "2px solid #C8DDE6", padding: "5vh 4vw" }}
      >
        {/* Enabelo Apps logo — large, centered */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <img
            src={`${base}logo-enabelo.png`}
            crossOrigin="anonymous"
            alt="Enabelo Apps"
            style={{ height: "50vh", width: "auto", maxWidth: "90%", objectFit: "contain" }}
          />
        </div>
        {/* Bottom: Developed by + ZSPL logo */}
        <div className="flex flex-col" style={{ gap: "1.2vh" }}>
          <div className="font-body font-normal" style={{ color: "#8AABB9", fontSize: "1.8vw" }}>Developed by</div>
          <img
            src={`${base}logo-zspl.png`}
            crossOrigin="anonymous"
            alt="Zapurzaa Systems Pvt. Ltd."
            style={{ height: "7vh", width: "auto", objectFit: "contain", objectPosition: "left center" }}
          />
        </div>
      </div>

      {/* Right white panel */}
      <div className="flex flex-col justify-center" style={{ flex: 1, background: "#ffffff", padding: "6vh 5vw 6vh 6vw" }}>
        <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.7vw", letterSpacing: "0.16em", marginBottom: "3vh" }}>Accessible Education · India</div>
        <h1 className="font-display font-bold tracking-tight" style={{ color: "#0F2B3D", fontSize: "5.8vw", lineHeight: 1.05, textWrap: "balance", marginBottom: "3.5vh" }}>Restoring the Right to Learn</h1>
        <div style={{ width: "6vw", height: "3px", background: "#0077A8", marginBottom: "3.5vh" }} />
        <p className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2.4vw", lineHeight: 1.55, maxWidth: "50vw" }}>AI-powered voice technology replacing the scribe system — giving visually impaired and writing&#8209;disabled students academic independence.</p>
        <div className="font-body font-normal" style={{ color: "#aac4ce", fontSize: "1.8vw", marginTop: "4vh" }}>enabeloapps.com</div>
      </div>
    </div>
  );
}

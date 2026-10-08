export default function Slide10SponsorStudent() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-body" style={{ background: "#ffffff" }}>
      <div className="absolute top-0 left-0 bottom-0" style={{ width: "0.6vw", background: "#0077A8" }} />
      <div className="absolute flex flex-row" style={{ top: "10vh", left: "5.5vw", right: "5vw", bottom: "10vh", gap: "6vw" }}>
        {/* Left: hero ask */}
        <div className="flex flex-col justify-center" style={{ width: "44vw", flexShrink: 0 }}>
          <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.8vw", letterSpacing: "0.16em", marginBottom: "3vh" }}>How You Can Help</div>
          <div className="font-body font-bold" style={{ color: "#5B7A8C", fontSize: "2.5vw", marginBottom: "1.5vh" }}>Sponsor a Student</div>
          <div className="font-display font-black tracking-tight" style={{ color: "#0F2B3D", fontSize: "9vw", lineHeight: 0.95, marginBottom: "0.5vh" }}>&#8377;9,900</div>
          <div className="font-body font-bold" style={{ color: "#0077A8", fontSize: "2.8vw", marginBottom: "4vh" }}>per student, per year</div>
          <div style={{ width: "6vw", height: "3px", background: "#0077A8", marginBottom: "4vh" }} />
          <p className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2.3vw", lineHeight: 1.55 }}>One sponsorship gives a visually impaired or writing&#8209;disabled student a full year of independent access to Enabelo Apps — no scribe required.</p>
        </div>
        {/* Right: what it covers */}
        <div className="flex flex-col justify-center gap-[3vh]" style={{ flex: 1 }}>
          <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#8AABB9", fontSize: "1.6vw", letterSpacing: "0.14em", marginBottom: "1vh" }}>What the sponsorship covers</div>
          <div style={{ borderLeft: "3px solid #0077A8", paddingLeft: "2.5vw" }}>
            <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.3vw", marginBottom: "0.6vh" }}>Full platform access</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.45 }}>Unlimited exams, all supported languages, all exam formats</div>
          </div>
          <div style={{ borderLeft: "3px solid #0077A8", paddingLeft: "2.5vw" }}>
            <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.3vw", marginBottom: "0.6vh" }}>Onboarding &amp; training</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.45 }}>Student orientation and institutional coordinator support</div>
          </div>
          <div style={{ borderLeft: "3px solid #0077A8", paddingLeft: "2.5vw" }}>
            <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.3vw", marginBottom: "0.6vh" }}>Named impact acknowledgement</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.45 }}>Sponsor recognition and year-end impact report per student</div>
          </div>
        </div>
      </div>
    </div>
  );
}

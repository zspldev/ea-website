export default function Slide06Compliance() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-body" style={{ background: "#F2F8FB" }}>
      <div className="absolute top-0 left-0 bottom-0" style={{ width: "0.6vw", background: "#0077A8" }} />
      <div className="absolute flex flex-col" style={{ top: "10vh", left: "5.5vw", right: "5vw", bottom: "8vh" }}>
        <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.8vw", letterSpacing: "0.16em", marginBottom: "1.5vh" }}>Grounded in Law &amp; Policy</div>
        <h2 className="font-display font-bold tracking-tight" style={{ color: "#0F2B3D", fontSize: "4.8vw", lineHeight: 1.1, marginBottom: "1.5vh" }}>Compliance, Not Workaround</h2>
        <div style={{ width: "5vw", height: "3px", background: "#0077A8", marginBottom: "5vh" }} />
        <div className="flex gap-[3vw]" style={{ flex: 1 }}>
          {/* RPWD */}
          <div className="flex flex-col" style={{ flex: 1, background: "#ffffff", borderRadius: "0.4vw", padding: "3.5vh 2.5vw", borderBottom: "4px solid #0077A8" }}>
            <div className="font-display font-black" style={{ color: "#0077A8", fontSize: "3vw", lineHeight: 1.1, marginBottom: "2vh" }}>RPWD Act 2016</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.5 }}>Rights of Persons with Disabilities Act mandates accessible assessment for all students</div>
          </div>
          {/* NEP */}
          <div className="flex flex-col" style={{ flex: 1, background: "#ffffff", borderRadius: "0.4vw", padding: "3.5vh 2.5vw", borderBottom: "4px solid #0077A8" }}>
            <div className="font-display font-black" style={{ color: "#0077A8", fontSize: "3vw", lineHeight: 1.1, marginBottom: "2vh" }}>NEP 2020</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.5 }}>National Education Policy establishes inclusive education as a national priority</div>
          </div>
          {/* SDG 4 */}
          <div className="flex flex-col" style={{ flex: 1, background: "#ffffff", borderRadius: "0.4vw", padding: "3.5vh 2.5vw", borderBottom: "4px solid #C5192D" }}>
            <div className="font-display font-black" style={{ color: "#C5192D", fontSize: "3vw", lineHeight: 1.1, marginBottom: "2vh" }}>UN SDG 4</div>
            <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.1vw", marginBottom: "1vh" }}>Quality Education</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.5 }}>Directly supports equal access to quality education for persons with disabilities</div>
          </div>
          {/* SDG 10 */}
          <div className="flex flex-col" style={{ flex: 1, background: "#ffffff", borderRadius: "0.4vw", padding: "3.5vh 2.5vw", borderBottom: "4px solid #DD1367" }}>
            <div className="font-display font-black" style={{ color: "#DD1367", fontSize: "3vw", lineHeight: 1.1, marginBottom: "2vh" }}>UN SDG 10</div>
            <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.1vw", marginBottom: "1vh" }}>Reduced Inequalities</div>
            <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "2vw", lineHeight: 1.5 }}>Addresses structural inequality in education for historically marginalised learners</div>
          </div>
        </div>
      </div>
    </div>
  );
}

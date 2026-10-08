export default function Slide05Testimonials() {
  return (
    <div className="relative w-screen h-screen overflow-hidden font-body" style={{ background: "#ffffff" }}>
      {/* Left teal strip */}
      <div className="absolute top-0 left-0 bottom-0" style={{ width: "0.6vw", background: "#0077A8" }} />
      {/* Decorative large quote mark */}
      <div className="absolute font-display font-black" style={{ top: "-4vh", left: "3vw", fontSize: "28vw", color: "rgba(0,119,168,0.06)", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>&ldquo;</div>
      <div className="absolute flex flex-col" style={{ top: "10vh", left: "5.5vw", right: "5vw", bottom: "8vh" }}>
        <div className="font-body font-bold uppercase tracking-widest" style={{ color: "#0077A8", fontSize: "1.8vw", letterSpacing: "0.16em", marginBottom: "1.5vh" }}>What They Say</div>
        <h2 className="font-display font-bold" style={{ color: "#0F2B3D", fontSize: "4.2vw", lineHeight: 1.15, marginBottom: "1.5vh" }}>Institutions and Students Respond</h2>
        <div style={{ width: "5vw", height: "3px", background: "#0077A8", marginBottom: "5vh" }} />
        <div className="flex gap-[3.5vw]" style={{ flex: 1 }}>
          {/* Quote 1 */}
          <div className="flex flex-col justify-between" style={{ flex: 1, background: "#F2F8FB", borderLeft: "4px solid #0077A8", padding: "3.5vh 3vw", borderRadius: "0 0.4vw 0.4vw 0" }}>
            <p className="font-body font-normal" style={{ color: "#2D4F61", fontSize: "2.1vw", lineHeight: 1.6, fontStyle: "italic" }}>&ldquo;The app combines accessibility, assessment, and language learning — allowing visually impaired students to fully participate in learning and testing German.&rdquo;</p>
            <div className="flex flex-col" style={{ marginTop: "3vh" }}>
              <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.1vw" }}>Dr. Kirti Vaidya</div>
              <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "1.9vw" }}>German Language Teacher</div>
              <div className="font-body font-normal" style={{ color: "#8AABB9", fontSize: "1.8vw" }}>German Department, SPPU, Pune</div>
            </div>
          </div>
          {/* Quote 2 */}
          <div className="flex flex-col justify-between" style={{ flex: 1, background: "#F2F8FB", borderLeft: "4px solid #0077A8", padding: "3.5vh 3vw", borderRadius: "0 0.4vw 0.4vw 0" }}>
            <p className="font-body font-normal" style={{ color: "#2D4F61", fontSize: "2.1vw", lineHeight: 1.6, fontStyle: "italic" }}>&ldquo;We used to look for scribes all over the college but did not find any. Enabelo Apps has solved it. It will help us write exams without scribes. Thank you!&rdquo;</p>
            <div className="flex flex-col" style={{ marginTop: "3vh" }}>
              <div className="font-body font-bold" style={{ color: "#0F2B3D", fontSize: "2.1vw" }}>Salman Shakeel Sheikh</div>
              <div className="font-body font-normal" style={{ color: "#5B7A8C", fontSize: "1.9vw" }}>College Student</div>
              <div className="font-body font-normal" style={{ color: "#8AABB9", fontSize: "1.8vw" }}>A Large College, Pune</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

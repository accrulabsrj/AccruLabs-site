"use client";

const nodes = [
  { key: "consent",   label: "Consent",    top: "-8px",  left: "50%",  transform: "translateX(-50%)", labelStyle: { top: "-22px", left: "50%", transform: "translateX(-50%)" } },
  { key: "erasure",   label: "Erasure",    top: "50%",   right: "-8px", transform: "translateY(-50%)", labelStyle: { top: "-22px", right: "18px" } },
  { key: "flows",     label: "Data Flows", bottom: "-8px", left: "50%", transform: "translateX(-50%)", labelStyle: { bottom: "-22px", left: "50%", transform: "translateX(-50%)" } },
  { key: "vendors",   label: "Vendors",    top: "50%",   left: "-8px",  transform: "translateY(-50%)", labelStyle: { top: "-22px", left: "16px" } },
];

export default function PrivacyVisual() {
  return (
    <>
      <style>{`
        @keyframes orbitRingPulse {
          0%,100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.03); }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes counterSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes shieldGlow {
          0%,100% { filter: drop-shadow(0 0 10px rgba(173,232,42,0.4)); }
          50%      { filter: drop-shadow(0 0 24px rgba(173,232,42,0.85)); }
        }
        .orbit-ring-1 { animation: orbitRingPulse 4s ease-in-out infinite 0s; }
        .orbit-ring-2 { animation: orbitRingPulse 4s ease-in-out infinite 0.8s; }
        .orbit-ring-3 { animation: orbitRingPulse 4s ease-in-out infinite 1.6s; }
        .orbit-shield { animation: shieldGlow 3s ease-in-out infinite; }
        .orbit-nodes  { animation: orbitSpin 26s linear infinite; }
        .orbit-label  { animation: counterSpin 26s linear infinite; }
      `}</style>

      {/* Outer container */}
      <div style={{ position: "relative", width: 380, height: 380, flexShrink: 0 }} aria-hidden="true">

        {/* Ring 1 — outermost */}
        <div className="orbit-ring-1" style={{
          position: "absolute",
          width: 380, height: 380,
          top: 0, left: 0,
          borderRadius: "50%",
          border: "1px solid rgba(182,229,185,0.2)",
        }} />

        {/* Ring 2 — mid */}
        <div className="orbit-ring-2" style={{
          position: "absolute",
          width: 280, height: 280,
          top: 50, left: 50,
          borderRadius: "50%",
          border: "1px solid rgba(182,229,185,0.35)",
        }} />

        {/* Ring 3 — inner */}
        <div className="orbit-ring-3" style={{
          position: "absolute",
          width: 180, height: 180,
          top: 100, left: 100,
          borderRadius: "50%",
          border: "1px solid rgba(182,229,185,0.55)",
        }} />

        {/* Central shield */}
        <div style={{
          position: "absolute",
          width: 80, height: 80,
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <svg className="orbit-shield" width="56" height="66" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 4L6 14V32C6 46.5 16.5 60 30 64C43.5 60 54 46.5 54 32V14L30 4Z"
              stroke="#ade82a"
              strokeWidth="2.5"
              fill="rgba(173,232,42,0.08)"
            />
            <path
              d="M20 34L27 41L40 28"
              stroke="#ade82a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Orbiting nodes container */}
        <div className="orbit-nodes" style={{ position: "absolute", inset: 0 }}>
          {nodes.map((node) => (
            <div
              key={node.key}
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                top: node.top,
                bottom: (node as any).bottom,
                left: node.left,
                right: (node as any).right,
                transform: node.transform,
              }}
            >
              {/* Glowing dot */}
              <div style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#ade82a",
                boxShadow: "0 0 12px rgba(173,232,42,0.85)",
                flexShrink: 0,
              }} />
              {/* Counter-rotating label */}
              <span
                className="orbit-label"
                style={{
                  position: "absolute",
                  fontSize: "9.5px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#ade82a",
                  whiteSpace: "nowrap",
                  opacity: 0.9,
                  ...node.labelStyle,
                }}
              >
                {node.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

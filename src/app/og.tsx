import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 60px",
          background:
            "radial-gradient(circle at 18% 18%, rgba(52, 211, 235, 0.18), transparent 26%), radial-gradient(circle at 82% 22%, rgba(120, 119, 198, 0.18), transparent 24%), linear-gradient(180deg, #07111b 0%, #0e1724 100%)",
          color: "#f5f7fb",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 28,
              border: "2px solid rgba(52, 211, 235, 0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
              fontWeight: 700,
              letterSpacing: "-0.08em",
              background:
                "radial-gradient(circle at 30% 20%, rgba(52, 211, 235, 0.24), transparent 50%), linear-gradient(135deg, rgba(9, 20, 30, 0.95) 0%, rgba(16, 29, 42, 0.98) 100%)",
            }}
          >
            FBO
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ fontSize: 24, letterSpacing: "0.18em", textTransform: "uppercase", color: "#9cb0c7" }}>
              Foluso Portfolio
            </div>
            <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.04, letterSpacing: "-0.04em", maxWidth: 840 }}>
              Building secure, data-driven systems and real-time products.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 760 }}>
            <div style={{ fontSize: 30, color: "#c9d3df", lineHeight: 1.35 }}>
              Full-stack engineering intern and ML researcher focused on backend systems, product delivery, and applied security research.
            </div>
            <div style={{ fontSize: 24, color: "#8aa0b8" }}>
              Nashville, TN
            </div>
          </div>
          <div style={{ display: "flex", gap: 18 }}>
            {["Backend + data systems", "ML security research", "Real-time mobile apps"].map((label) => (
              <div
                key={label}
                style={{
                  padding: "14px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(148, 163, 184, 0.26)",
                  background: "rgba(9, 18, 28, 0.54)",
                  fontSize: 22,
                  color: "#d8e1ea",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size
  );
}

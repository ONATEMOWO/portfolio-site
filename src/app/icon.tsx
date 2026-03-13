import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 16,
          background:
            "radial-gradient(circle at 30% 20%, rgba(52, 211, 235, 0.32), transparent 48%), linear-gradient(135deg, #051018 0%, #0d1724 100%)",
          color: "#f5f7fb",
          fontSize: 28,
          fontWeight: 700,
          letterSpacing: "-0.08em",
          border: "2px solid rgba(52, 211, 235, 0.28)",
        }}
      >
        FBO
      </div>
    ),
    size
  );
}

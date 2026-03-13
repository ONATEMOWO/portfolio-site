import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background:
            "radial-gradient(circle at 25% 15%, rgba(52, 211, 235, 0.34), transparent 42%), linear-gradient(145deg, #07121c 0%, #101c2a 100%)",
          color: "#f5f7fb",
          fontSize: 76,
          fontWeight: 700,
          letterSpacing: "-0.08em",
          border: "4px solid rgba(52, 211, 235, 0.24)",
        }}
      >
        FBO
      </div>
    ),
    size
  );
}

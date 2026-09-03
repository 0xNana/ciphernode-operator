import { ImageResponse } from "next/og";

export const alt = "Ciphernode Operator Guide — Privacy doesn’t run itself";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const operators = ["CN1", "CN2", "CN3", "CN4", "CN5", "CN6"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101615",
          color: "#f1f5f9",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 25, fontWeight: 700 }}>
            The Interfold&nbsp;<span style={{ color: "#d9fce8" }}>/ Ciphernode Operator Guide</span>
          </div>
          <div style={{ color: "#94a3b8", fontSize: 18, letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Orient · Understand · Activate
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ maxWidth: 920, fontSize: 76, lineHeight: 1.02, letterSpacing: "-0.045em", fontWeight: 800 }}>
            Privacy doesn’t run itself.
          </div>
          <div style={{ marginTop: 22, color: "#94a3b8", fontSize: 27 }}>
            Inside Interfold’s ciphernode operator layer
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", gap: 10 }}>
            {operators.map((operator, index) => (
              <div
                key={operator}
                style={{
                  width: 74,
                  height: 58,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: index === 1 || index === 3 || index === 5 ? "2px solid #d9fce8" : "1px solid #35403d",
                  background: index === 1 || index === 3 || index === 5 ? "#1d2923" : "#171d1b",
                  borderRadius: 8,
                  color: index === 1 || index === 3 || index === 5 ? "#d9fce8" : "#aab7b3",
                  fontWeight: 700,
                }}
              >
                {operator}
              </div>
            ))}
          </div>
          <div style={{ color: "#d9fce8", fontSize: 25 }}>→</div>
          <div style={{ color: "#d9fce8", fontSize: 16, fontWeight: 800, letterSpacing: "0.12em" }}>SORTITION</div>
          <div style={{ color: "#d9fce8", fontSize: 25 }}>→</div>
          <div style={{ display: "flex", flexDirection: "column", border: "2px solid #d9fce8", borderRadius: 8, padding: "12px 18px", background: "#1d2923" }}>
            <span style={{ color: "#94a3b8", fontSize: 12, letterSpacing: "0.12em" }}>E3 COMMITTEE</span>
            <strong style={{ marginTop: 5, fontSize: 18 }}>CN2 · CN4 · CN6</strong>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

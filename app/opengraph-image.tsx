import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "ARCTURUS #11918 | Tom Glenn High School Robotics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public", "logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#08090c",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 60,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#82aaff",
          }}
        >
          FTC Team #11918
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={170} height={170} alt="" style={{ marginBottom: 8 }} />
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 700,
              color: "#f4f6f9",
              letterSpacing: -2,
            }}
          >
            ARCTURUS
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              fontWeight: 700,
              color: "#ff6417",
              marginTop: 4,
            }}
          >
            #11918
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 24,
              letterSpacing: 10,
              textTransform: "uppercase",
              color: "#c7cbd3",
            }}
          >
            Build. Code. Compete.
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 56,
            fontSize: 20,
            color: "#6b7280",
          }}
        >
          Tom Glenn High School &middot; Leander, Texas
        </div>
      </div>
    ),
    { ...size }
  );
}

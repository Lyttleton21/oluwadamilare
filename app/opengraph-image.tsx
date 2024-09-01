/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Damlilare";
// export const size = {
//   width: 1200,
//   height: 630,
// };
export const contentType = "image/png";

export default async function Image() {
  // const logoSrc = await fetch(
  //   new URL("../public/assets/OGIMG.jpg", import.meta.url)
  // ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
          fontSize: 60,
          letterSpacing: -2,
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        <img src={logoSrc} height="100" width="100" />
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(0, 124, 240), rgb(0, 223, 216))",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            color: "transparent",
          }}
        >
          Hello, I'm
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(121, 40, 202), rgb(255, 0, 128))",
            backgroundClip: "text",
            "-webkit-background-clip": "text",
            color: "transparent",
          }}
        >
          Oluwadamilare
        </div>
      </div>
    )
  );
}

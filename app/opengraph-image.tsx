/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "About Damlilare";

export default async function Image() {
  const logoSrc = await fetch(new URL("/assets/OG.jpg", import.meta.url)).then(
    (res) => res.arrayBuffer()
  );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logoSrc} height="100" />
      </div>
    )
  );
}

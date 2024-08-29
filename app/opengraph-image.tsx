import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function Image() {
  const logoSrc = await fetch(
    new URL("/public/assets/OpenG.png", import.meta.url)
  ).then((res) => res.arrayBuffer().toString());

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

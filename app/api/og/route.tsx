/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(reg: Request) {
  try {
    const image = await fetch(
      new URL("../../../public/assets/OpenG.png", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img src={image} height="650" width={650} />
        </div>
      )
    );
  } catch (error) {}
}

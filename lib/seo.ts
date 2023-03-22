import { createOgImage } from "@/lib/createOgImage"
import type { DefaultSeoProps } from "next-seo"

const title = `aksxaay`
const description = `Welcome to my digital garden where I share about what I learn. Digital Nomad trying to make it in tech. Web Development.`
const domain = `aksxaay.dev`
const twitter = `@juanweeb`
const meta = `Software Developer`

export const seo: DefaultSeoProps = {
  title: title + " | " + meta,
  description,
  openGraph: {
    title,
    type: "website",
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: createOgImage({ title, meta }),
        width: 1600,
        height: 836,
        alt: title,
      },
    ],
  },
  twitter: {
    handle: twitter,
    cardType: "summary_large_image",
  },
}

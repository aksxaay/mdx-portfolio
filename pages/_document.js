import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en" className="scroll-p-24">
      <Head>
        <link rel="icon" type="image/png" href="/assets/favicon.png?v=1" />
        <meta name="theme-color" content="#1c1917" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9"
          // href="https://as1.ftcdn.net/v2/jpg/04/28/22/08/1000_F_428220871_7cmRuWAncfw4MtcQL0YzlGyIPkvZDGuA.jpg"
        />
      </Head>

      <body className="bg-neutral-900 antialiased selection:bg-purple-500/90 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

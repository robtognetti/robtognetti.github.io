import Script from "next/script";
import About from "./components/About";
import Documents from "./components/Documents";
import Footer from "./components/Footer";
import FunFacts from "./components/FunFacts";
import { Hero } from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
    {/* Google tag (gtag.js) */}
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-HCQ6KVJ685"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HCQ6KVJ685');
      `}
    </Script>
      <main>
        <Hero />
        <About />
        <Projects />
        <Documents />
        <FunFacts />
      </main>
      <Footer />
    </>
  )
}

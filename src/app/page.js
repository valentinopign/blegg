"use client"
import Image from "next/image";

import { gsap} from "gsap";

import { useGSAP } from "@gsap/react";

import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    gsap.to(".site-content",{y: 100,x: 150,repeat: -1,yoyo:true});
    },[])

  return (
    <main>
      <div className="container"> </div>
      <div className="preLoader">
      <div className="loader"></div>
      <div className="loader-bg"></div>
      </div>
      <div className="loader-content">
      <div className="count"></div>
      <div className="copy"><p className="ml16">New Reality</p></div>
      <div className="loader-2"></div>
      </div>
      <div className="site-content">
        <nav>
          <div className="logo">
            <a href="#">Info</a>
            <a href="#"> Portfolio</a>
            <a href="#"> Contact</a>
            </div>
            </nav>
            <div>
            <h1>N</h1>
            <h1>e</h1>
            <h1>w</h1>
            <h1>R</h1>
            <h1>e</h1>
            <h1>a</h1>
            <h1>l</h1>
            </div>
  <footer>
    <div className="footer-copy">
      <p>New Reality is a design studio based in Tokyo, Japan. We work with 
        many companies to build and proactively deliver engaging brand experiences. 
        We are unique in our ability to take a strategic approach while being visually driven.
        </p>
        </div>
        <div className="footer-nav">
          <div className="img"></div>
          <div className="img"></div>
        </div>
  </footer>
      </div>

    </main>
  );
}

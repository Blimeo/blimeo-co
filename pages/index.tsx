import Image from "next/image";
import styles from "../styles/Home.module.css";
// import { greet } from "../blimeo-wasm/pkg";
import React, { useRef, useState } from "react";
import { SocialIcon } from "react-social-icons";

import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="container mx-auto md:w-2/3 p-8 my-8 bg-slate-100">
      <div className="max-w-full h-12">
        <div className="grid text-blue-500 text-center grid-cols-6 gap-4 text-md">
          <div className="text-lg">🎼Matthew Ye</div>
          <div className="text-blue-400">(about)</div>
          <div>
            <u>
              <a href="/projects">projects</a>
            </u>
          </div>
          <div>
            <u>music</u>
          </div>
          <div>
            <u>
              <a href="http://blog.blimeo.co/">travel blog</a>
            </u>
          </div>
        </div>
      </div>
      <hr className="mb-4 bg-slate-500" />
      <div className="flex gap-4 p-4">
        <div className="w-2/3">
          <p className="text-md text-justify">
            Hi, I'm Matthew. I like programming, languages, music, travel, and literature. I graduated from UC Berkeley in 2022 with a
            bachelor's in computer science and will begin working as a software
            engineer at YouTube in September 2023.
          </p>
          <br />
          <p className="text-md text-justify">
            You can find my resume{" "}
            <a
              href="https://drive.google.com/file/d/1txXqH0SRE6Xnr1kEOC1TpZPLZs1jmJgR/view?usp=sharing"
              target="_blank"
            >
              <u>here</u>
            </a>
            .
          </p>
          <p className="leading-5 py-8 text-lg">🔗links</p>
          <div>
            <div className="">
              <SocialIcon
                target="_blank"
                style={{ height: 30, width: 30 }}
                url="mailto:my1@berkeley.edu"
              />{" "}
              email{" "}
              <SocialIcon
                target="_blank"
                style={{ height: 30, width: 30 }}
                url="https://github.com/blimeo"
              />{" "}
              github{" "}
              <SocialIcon
                target="_blank"
                style={{ height: 30, width: 30 }}
                url="https://www.linkedin.com/in/matthewye2001/"
              />{" "}
              linkedin{" "}
              <SocialIcon
                target="_blank"
                style={{ height: 30, width: 30 }}
                url="https://soundcloud.com/blimeo"
              />{" "}
              soundcloud{" "}
              <SocialIcon
                target="_blank"
                style={{ height: 30, width: 30 }}
                url="https://open.spotify.com/user/blimeo"
              />{" "}
              spotify
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <Image
            className="w-full object-contain min-h-0"
            src="/capybara.webp"
            alt=""
            width="250"
            height="250"
          />
        </div>
      </div>
    </div>
  );
}

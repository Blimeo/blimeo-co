import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useRef, useState } from "react";
import { SocialIcon } from "react-social-icons";

import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";

export default function Home() {
  return (
    <div className="container mx-auto md:w-2/3 p-8 my-8 bg-slate-100">
      <div className="max-w-full h-12">
        <div className="grid text-blue-500 text-center grid-cols-6 gap-4 text-md">
          <div className="text-lg">🎼Matthew Ye</div>
          <div>
            <a href="/">
              <u>about</u>
            </a>
          </div>
          <div className="text-blue-400">(projects)</div>
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
        <div className="w-3/3">
          <p className="leading-1 pb-4 text-lg">🔨 projects</p>
          <p>
            <a
              className="text-blue-500"
              target="_none"
              href="https://github.com/Blimeo/fitme"
            >
              <u>fitme</u>
            </a>
            : A social network allowing users to share and discover fashion
            inspiration, built using React/Redux, Flask, MongoDB, and S3. Uses
            Facebook's Detectron2 object segmentation model to identify clothing
            items in users’ uploaded images.
          </p>
          <br />
          <p>
            <a
              className="text-blue-500"
              target="_none"
              href="https://blimeo.github.io/sketch-completion-web/"
            >
              <u>Sketch Completion</u>
            </a>
            : Webapp that converts user-drawn sketches into realistic (ish)
            images using a generative adversarial network (GAN) model trained on
            the CIFAR-10 dataset. Live demo uses React.js canvas and Flask
            backend.
          </p>
        </div>
      </div>
    </div>
  );
}

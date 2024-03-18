"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/SlideShow";

export function ImagesSliderDemo() {
    const images = [
        "/landing/2.jpg",
        "/landing/7.jpg",
        "/landing/9.jpg"
    ];
    return (
        <ImagesSlider className="h-[40rem]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    “La patience est une lumière.”  <span className="text-2xl italic font-light ">Ibn Khaldoun</span>
                </motion.p>
            </motion.div>
        </ImagesSlider>
    );
}

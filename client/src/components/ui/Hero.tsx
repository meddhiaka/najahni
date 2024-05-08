"use client"
import { HeroHighlight, Highlight } from "../Hero";
import {motion} from 'framer-motion'

export default function Hero() {
    return (
        <div>
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-lg px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
                >
                    Bienvenue sur NAJAHNI, la plateforme éducative de la FSB !{" "}
                    <br />
                    <Highlight className="text-black dark:text-white">
                        Votre avenir commence ici !
                    </Highlight>
                </motion.h1>
            </HeroHighlight>
        </div>
    )
}
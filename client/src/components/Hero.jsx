import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const Hero = () => {
    return (
        <motion.div variants={fadeIn("up", "spring")}>
            <section className={`relative w-full h-screen mx-auto`}>
                <div
                    className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
                >


                    <div>
                        <h1 className={`${styles.heroHeadText} text-white fade-in-text`}>
                            <br></br>
                            Welcome to
                            <br></br>
                            <span className={`${styles.heroTitleText} text-[#FF2768] fade-in-title`}>Songtiment</span>
                        </h1>

                    </div>
                </div>

                <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                    <a href='#about'>
                        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className='w-3 h-3 rounded-full bg-secondary mb-1'
                            />
                        </div>
                    </a>
                </div>

            </section>
        </motion.div>
    );
};

export default Hero;
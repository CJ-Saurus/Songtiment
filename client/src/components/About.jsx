import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h2 className={styles.sectionHeadText}>About Songtiment</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
            >
                This app was developed by CJ Perez. It's use was intended for a songs lyrics to be judged solely on sentiment.
                It takes the entirety of the song and lets you know whether the message/sentiment of the song can
                be considered positive or negative.
            </motion.p>

        </>
    );
};


export default SectionWrapper(About, "about");
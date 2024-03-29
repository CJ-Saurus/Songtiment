import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles.js";
import { SectionWrapper } from "../hoc/index.js";
import { slideIn } from "../utils/motion.js";
// import { comments } from "/"

const Comments = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.post('/api/comments', form, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                setLoading(false);
                alert('Thank you. Your comment has been submitted.');

                setForm({
                    name: '',
                    email: '',
                    message: '',
                });
            },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert('Ahh, something went wrong. Please try again.');
                }
            );
    };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
                <p className={styles.sectionSubText}>Leave your</p>
                <h3 className={styles.sectionHeadText}>Comments.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className='bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email address"
                            className='bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='Enter your comment'
                            className='bg-tertiary py-4 px-6 placeholder:text-white text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Sending..." : "Send"}
                    </button>
                </form>

            </motion.div>

            <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
                {/* Content for the right container */}
                <div className='bg-black-100 p-8 rounded-2xl'>
                    {/* You can add your content for the right container here */}
                    {/* ... */}
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Comments, "comments");
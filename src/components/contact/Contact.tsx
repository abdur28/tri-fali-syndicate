'use client'

import { useAlert } from "@/hooks/useAlert";
import { sendEmail } from "@/lib/action";
import { motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import Alert from "../Alert";

const Contact = () => {
    const ref: any = useRef();
    const formRef: any = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

    const [state, formAction] = useFormState(sendEmail, undefined);
    const { show, showAlert, hideAlert, text, type } = useAlert();

    const [form, setForm] = useState({ name: "", email: "", message: "", phone: ""})

    const [loading, setLoading] = useState(false);

    const sendingEmail = () => {
        showAlert({
            show: true,
            text: "Sending emall...",
            type: "success",
        });
        const formData = new FormData(formRef.current);
        formData.append("name", form.name); 
        formData.append("email", form.email); 
        formData.append("message", form.message); 
        formData.append("phone", form.phone); 
        formAction(formData);
    };

    const handleChange = (e: any): void => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true);
        sendingEmail()
    };

    useEffect(() => {
        if (state) {
            hideAlert();
            if (state.status === "success"){
                showAlert({
                    text: "Thank you for your message 😃",
                    type: "success",
                    show: true
                });
                setTimeout(() => {
                hideAlert();
                setForm({
                    name: "",
                    email: "",
                    message: "",
                    phone: "",
                });
                }, 5000);
                setLoading(false);
            
            } else {

                    showAlert({
                        show: true,
                        text: state.message,
                        type: "danger",
                    });
                    setTimeout(() => {
                    hideAlert();
                    }, 5000);
                    setLoading(false);
                    // router.refresh()
            }
        }
    },[state])

    const variants = {
        initial: {
          y: 500,
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            staggerChildren: 0.1,
          },
        },
      };

    return (
        <div className="w-full h-[110vh] md:h-[120vh] mt-20">
            {show && <Alert text={text} type={type} />}
            <div className="flex h-full w-full flex-col justify-center items-center gap-10">
                <h1 className="md:text-9xl text-6xl text-center font-semibold text-gray-100">CONTACT</h1>
                <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-0 md:gap-10 ">
                   <motion.div
                   initial={{opacity: 0, x: -100}}
                   whileInView={{opacity: 1, x: 0, transition: {duration: 1, ease: "easeInOut"}}}
                   viewport={{once: true}}
                   className="w-full md:w-1/2 h-max md:h-full flex flex-col gap-5 px-10 lg:px-28 justify-center items-center md:items-start text-center md:text-left">
                        <p className="text-xl lg:text-2xl">
                            {`Let's discuss more. We'd love to hear from you!`}
                        </p>
                        <p className=" lg:text-xl ">
                            {`Abuja Address: No. 20 Sambrereo Crescent, Maitama, Abuja`}
                        </p>
                        <p className=" lg:text-xl ">
                            {`Kano Address: Suite 5, No. 108 Dan Amarya Plaza, Maiduguri Road`}
                        </p>
                        <p className=" lg:text-xl ">
                            {`Email: trifalisyndicate@gmail.com`}
                        </p>
                        <p className="lg:text-xl ">
                            {`Phone: 08140028470, 08092503418, 08120791565`}
                        </p>
                   </motion.div>
                   <div className="w-full md:w-1/2 h-full flex justify-center items-center">
                   <motion.div
                    ref={ref}
                    className="contact"
                    variants={variants}
                    initial={{ y: 0, opacity: 1 }}
                    // whileInView="animate"
                    viewport={{ once: true }}
                    >
                    <div className="w-full h-full">
                        <motion.div
                        className="phoneSvg"
                        initial={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 0, x: 500 }}
                        transition={{ delay: 3, duration: 0.5, ease: "easeInOut" }}
                        >
                        <svg className="svg md:scale-75" viewBox="0 0 32.666 32.666">
                            <motion.path
                            strokeWidth={0.2}
                            fill="none"
                            stroke="orange"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                            d="M28.189,16.504h-1.666c0-5.437-4.422-9.858-9.856-9.858l-0.001-1.664C23.021,4.979,28.189,10.149,28.189,16.504z
                            M16.666,7.856L16.665,9.52c3.853,0,6.983,3.133,6.981,6.983l1.666-0.001C25.312,11.735,21.436,7.856,16.666,7.856z M16.333,0
                            C7.326,0,0,7.326,0,16.334c0,9.006,7.326,16.332,16.333,16.332c0.557,0,1.007-0.45,1.007-1.006c0-0.559-0.45-1.01-1.007-1.01
                            c-7.896,0-14.318-6.424-14.318-14.316c0-7.896,6.422-14.319,14.318-14.319c7.896,0,14.317,6.424,14.317,14.319
                            c0,3.299-1.756,6.568-4.269,7.954c-0.913,0.502-1.903,0.751-2.959,0.761c0.634-0.377,1.183-0.887,1.591-1.529
                            c0.08-0.121,0.186-0.228,0.238-0.359c0.328-0.789,0.357-1.684,0.555-2.518c0.243-1.064-4.658-3.143-5.084-1.814
                            c-0.154,0.492-0.39,2.048-0.699,2.458c-0.275,0.366-0.953,0.192-1.377-0.168c-1.117-0.952-2.364-2.351-3.458-3.457l0.002-0.001
                            c-0.028-0.029-0.062-0.061-0.092-0.092c-0.031-0.029-0.062-0.062-0.093-0.092v0.002c-1.106-1.096-2.506-2.34-3.457-3.459
                            c-0.36-0.424-0.534-1.102-0.168-1.377c0.41-0.311,1.966-0.543,2.458-0.699c1.326-0.424-0.75-5.328-1.816-5.084
                            c-0.832,0.195-1.727,0.227-2.516,0.553c-0.134,0.057-0.238,0.16-0.359,0.24c-2.799,1.774-3.16,6.082-0.428,9.292
                            c1.041,1.228,2.127,2.416,3.245,3.576l-0.006,0.004c0.031,0.031,0.063,0.06,0.095,0.09c0.03,0.031,0.059,0.062,0.088,0.095
                            l0.006-0.006c1.16,1.118,2.535,2.765,4.769,4.255c4.703,3.141,8.312,2.264,10.438,1.098c3.67-2.021,5.312-6.338,5.312-9.719
                            C32.666,7.326,25.339,0,16.333,0z"
                            />
                        </svg>
                        </motion.div>
                        <motion.div className="lg:-mt-[34rem] -mt-[25rem] w-full h-full" 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 4, duration: 1 }}
                        >
                            <form 
                            ref={formRef}
                            onSubmit={handleSubmit}
                            action=""
                            className="flex flex-col w-[80vw] md:w-[40vw] h-full  rounded-2xl bg-gray-100 shadow-inner shadow-gray-500 p-5 gap-3"
                            >
                                <h1 className="text-2xl font-semibold mb-5">Get in touch</h1>
                                <input
                                type="text"
                                value={form.name}
                                name="name"
                                placeholder="Full Name"
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border-2 border-gray-400"
                                required
                                />
                                <input
                                type="email"
                                value={form.email}
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border-2 border-gray-400"
                                required
                                />
                                <input
                                type="tel"
                                value={form.phone}
                                name="phone"
                                placeholder="Phone Number"
                                onChange={handleChange}
                                className="w-full p-3 rounded-lg border-2 border-gray-400"
                                required
                                />
                                <textarea
                                placeholder="Message"
                                value={form.message}
                                onChange={handleChange}
                                name="message"
                                rows={5}
                                className="w-full p-3 rounded-lg border-2 border-gray-400"
                                required
                                />
                                <button
                                type="submit"
                                disabled={loading}
                                className={`${loading ? "bg-red-500 cursor-not-allowed" : "bg-black"} px-4 py-2 rounded-lg text-lg text-white font-semibold hover:bg-secondary transition-colors`}
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                    
                    </motion.div>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
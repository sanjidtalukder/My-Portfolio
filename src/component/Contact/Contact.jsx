import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { FaGithub, FaLinkedin, FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          form.current.reset();
        },
        () => {
          toast.error('Failed to send message!');
        }
      );
  };

  return (
    <section className="py-16 px-4 rounded-2xl shadow-2xl md:px-10 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-right" />
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Contact Me
      </h2>

      <div className="flex flex-col items-stretch lg:flex-row gap-10  justify-between">
        {/* Left Side - Contact Info */}
        <div className="lg:w-1/2 w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-5">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Get in Touch</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to reach out through any platform below or send me an email directly.
          </p>
          <div className="space-y-3 mt-6">
            <p className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <FaGithub className="text-xl" /> 
              <a href="https://github.com/sanjidtalukder" target="_blank" rel="noreferrer">GitHub</a>
            </p>
            <p className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <FaLinkedin className="text-xl" /> 
              <a href="https://www.linkedin.com/in/md-sanjid-talukder-08b681320" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
            <p className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <FaWhatsapp className="text-xl" /> 
              <a href="https://wa.me/8801889876289" target="_blank" rel="noreferrer">+8801889876289</a>
            </p>
            <p className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <FaPhone className="text-xl" /> 
              +8801889876289
            </p>
            <p className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <FaEnvelope className="text-xl" /> 
              <a href="mailto:mdsanjidt@gmail.com">mdsanjidt@gmail.com</a>
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="lg:w-1/2 w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

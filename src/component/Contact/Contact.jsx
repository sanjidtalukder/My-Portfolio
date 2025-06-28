import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      (result) => {
        toast.success('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        toast.error('Failed to send message!');
      }
    );
  };

  return (
    <section className="py-16 px-4 rounded-2xl shadow-2xl md:px-10 lg:px-20 bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-right" />
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Contact Me
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md space-y-6"
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
    </section>
  );
};

export default Contact;

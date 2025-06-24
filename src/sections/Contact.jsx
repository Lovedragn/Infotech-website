import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could add logic to send the form data to a backend or email service
  };

  return (
    <section className="relative pt-32 pb-20 max-lg:pt-24 max-lg:pb-16 max-md:pt-16 max-md:pb-10 scale-[90%] bg-black-100 min-h-[70vh] flex items-center justify-center">
      <div className="container flex flex-col md:flex-row gap-10 md:gap-24 items-start justify-center px-4 md:px-0 w-full">
        {/* Contact Info */}
        <div className="w-full md:mt-10 md:flex-1 max-w-md mb-10 md:mb-0">
          <h2 className="h3 text-p4 uppercase mb-7 max-md:h3">Contact Us</h2>
          <div className="mb-6">
            <p className="body-1 mb-2 text-[#2ae2ff]">Our Email</p>
            <p className="body-1 mb-4">info@techinta.com</p>
            <p className="body-1 mb-2 text-[#2ae2ff]">Address</p>
            <p className="body-1 mb-4">Ruby School Road, Saravanampatti, Coimbatore</p>
            <p className="body-1 mb-2 text-[#2ae2ff]">Call Us</p>
            <p className="body-1">+91 9363538468</p>
          </div>
        </div>
        {/* Contact Form */}
        <div className="w-full md:flex-1  max-w-lg bg-s2/60 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur-md">
          <h3 className=" text-p4 mb-6 max-md:hidden h3">Send us a message</h3>
          {submitted ? (
            <div className="text-p4 body-1">Thank you for reaching out! We'll get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-p4">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black-200 text-white border border-s4/50 bg-s2/10 focus:outline-none focus:ring-2 focus:ring-[#2ae2ff]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-p4">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black-200 text-white border border-s4/50 bg-s2/10 focus:outline-none focus:ring-2 focus:ring-[#2ae2ff]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-p4">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-black-200 text-white border border-s4/50 bg-s2/10 focus:outline-none focus:ring-2 focus:ring-[#2ae2ff] resize-none h-32"
                />
              </div>
              <button
                type="submit"
                className="base-bold text-p4 uppercase bg-[#2ae2ff] hover:bg-[#1bc9e5] transition-colors duration-300 px-8 py-3 rounded-lg shadow-lg"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact; 
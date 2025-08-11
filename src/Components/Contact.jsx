import React from "react";

const Contact = () => {
  return (
    <section className="page p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
      <h4 className="text-xl mb-6 text-primary">Get in Touch</h4>

      <form className="space-y-6">
        <div className="form-control w-full">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label htmlFor="message" className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:aalapjshastri@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(
      message
    )}`;
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center"
    >
      <h2 className="text-2xl font-bold text-gray-50 mb-4">
        Let's Work Together
      </h2>
      <p className="max-w-md mx-auto mb-8 text-gray-300">
        Whether you have a question or just want to say hi, feel free to drop me
        a message!
      </p>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            className="w-full h-40 px-4 py-3 bg-gray-800 text-gray-100 rounded-lg focus:ring-2 focus:ring-teal-300 focus:outline-none placeholder-gray-400"
            required
          />
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-indigo-950 text-white rounded-lg transition-all border border-indigo-800 hover:border-indigo-600 hover:shadow-[0_0_10px_rgba(79,70,229,0.2)]"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

import React, { useEffect } from "react";

function ContactUsSection() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="w-full bg-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold font-cursive mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-10">
          We love hearing from our customers, partners, and wellness community.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <form className="flex-1 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#4a1c08] text-white px-6 py-3 rounded-md w-48"
            >
              SEND NOW
            </button>
          </form>

          {/* Google Map */}
          <div className="flex-1 h-[400px] rounded-md overflow-hidden">
            <iframe
              title="Esaplling Pvt Ltd Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?sca_esv=6db176930c53557b&rlz=1C1OPNX_enIN1104IN1104&output=embed&q=esaplling+pvt+ltd&source=lnms"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;

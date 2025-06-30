import React, { useEffect } from "react";

function ContactUsSection() {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <>
     <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* 📞 Left Side - Contact Details */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
          <div>
            <p className="text-lg font-semibold text-gray-600">Phone:</p>
            <p className="text-gray-700">+91 98765 43210</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-600">Email:</p>
            <p className="text-gray-700">contact@example.com</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-600">Address:</p>
            <p className="text-gray-700">123 Green Street, Mumbai, Maharashtra, India</p>
          </div>
        </div>

        {/* 🗺️ Right Side - Embedded Google Map */}
        <div className="w-full h-64 md:h-80">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609726196!2d72.74109908498194!3d19.082197839779246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63fdd32b7b5%3A0x4b264fb7a3fa91a2!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719734023857!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
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
    </>
  );
}

export default ContactUsSection;

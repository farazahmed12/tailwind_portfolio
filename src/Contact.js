import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex flex-col items-center p-4"
    >
      <form className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Fill up the form below to get in touch.
          </p>
        </div>
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          name="name"
          type="text"
          placeholder="Name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          name="email"
          type="email"
          placeholder="E-mail"
        />
        <textarea
          className="p-2 bg-[#ccd6f6]"
          name="message"
          placeholder="Message"
          rows="8"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex">
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;

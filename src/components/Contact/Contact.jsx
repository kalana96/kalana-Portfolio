import React, { useRef } from "react";
import Button from "./reusable/Button.jsx";
import FormInput from "./reusable/FormInput.jsx";
// import ContactForm from "./ContacFormt";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-secondary dark:bg-gray-900 dark:text-white py-10"
    >
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-5xl text-center font-semibold mb-3 border-b-2 border-primary pb-1">
          Contact
        </h1>
        <p className="text-slate-500 text-lg text-center md:w-[50%] mx-auto dark:text-white/70">
          Feel free to reach out to me for any questions or opportunities!
        </p>
        <div className="w-full lg:w-1/2">
          <div className="leading-loose">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="max-w-xl m-4 p-6 sm:p-10 bg-secondary-light rounded-xl shadow-xl text-left dark:bg-slate-800"
            >
              <FormInput
                // inputLabel="Full Name"
                labelFor="name"
                inputType="text"
                inputId="name"
                inputName="name"
                placeholderText="Your Name"
                ariaLabelName="Name"
              />
              <FormInput
                // inputLabel="Email"
                labelFor="email"
                inputType="email"
                inputId="email"
                inputName="email"
                placeholderText="Your email"
                ariaLabelName="Email"
              />
              {/* <FormInput
                inputLabel="Subject"
                labelFor="subject"
                inputType="text"
                inputId="subject"
                inputName="subject"
                placeholderText="Subject"
                ariaLabelName="Subject"
              /> */}

              <div className="mt-6">
                <label
                  className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                  htmlFor="message"
                >
                  {/* Message */}
                </label>
                <textarea
                  className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md dark:text-black"
                  id="message"
                  placeholder="Message"
                  name="message"
                  cols="14"
                  rows="6"
                  // aria-label="Message"
                ></textarea>
              </div>

              <div className="font-general-medium w-40 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                <Button
                  title="Send Message"
                  type="submit"
                  aria-label="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

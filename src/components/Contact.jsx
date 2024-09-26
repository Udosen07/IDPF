import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_alaqk8s";

    const templateId = "template_xmhz8wh";

    const publicKey = "noKavezmyNQMcjh77";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Damon",
      message: message,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      console.log("SUCCESS!", response.status, response.text);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Email sent successfully!");
    } catch (error) {
      console.log("FAILED...", error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dark:bg-darkBgSecondary bg-gray-200 " id="contact">
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }} // Set animation duration
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="lg:w-[40%] md:w-[70%] mx-auto md:py-20 w-[90%] py-10 dark:text-textColor">
          <h3 className="font-bold text-3xl text-center mb-5">Get in Touch</h3>
          <p className="font-semibold text-[16px] md:text-[20px] text-center md:mb-[68px] mb-[32px]">
            Feel free to reach out to me if you're looking for a developer, have
            a query, or simply want to connect.
          </p>

          <div className="md:w-full w-[80%] mx-auto">
            <form className="space-y-[24px]" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="p-3 bg-[#F3F3F3] rounded-md border-gray-300 border-[0.7px] w-full "
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="p-3 bg-[#F3F3F3] rounded-md border-[0.7px] border-gray-300 w-full "
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="p-3 rounded-md bg-[#F3F3F3] border-[0.7px] h-[194px] resize-none border-gray-300 w-full "
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                className="w-full h-[42px] text-base text-center font-bold bg-primary dark:hover:bg-[#AED136] hover:bg-[#AED136] rounded-xl dark:bg-white dark:text-black  bg-darkBgDefault text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;

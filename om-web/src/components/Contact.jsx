import React from "react";
import emailjs from 'emailjs-com';
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
  const [status, setStatus] = React.useState("");

  const serviceKey = import.meta.env.VITE_EMAIL_SERVICE_KEY;
  const templeteKey = import.meta.env.VITE_EMAIL_TEMPLATE_KEY;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const formhandle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      number: formData.get("number"),
    };
    if (!data.name || !data.email || !data.subject || !data.number) {
      setStatus("Please fill all fields.");
      setTimeout(() => {
        setStatus("");
      }, 2000); // Clear status after 2 seconds
      return; // Stop form submission if validation fails
    }
    console.log("Form Data Submitted:", data);

    emailjs.send(
    serviceKey,
    templeteKey,
  {
    name: data.name,
    email: data.email,
    subject: data.subject,
    number: data.number,
  },
  publicKey
)
.then((result) => {
    setStatus("Message sent successfully!");
    setTimeout(() => {
      setStatus("");
    }, 2000); // Clear status after 3 seconds
}, (error) => {
    setStatus("Failed to send message.");
});

    // Here you can add your form submission logic, like sending data to an API or email
    e.target.reset(); // Reset the form after submission
  };
  return (
    <div id="contact" className=" py-12 px-6 md:px-20">
        <div className="text-center mb-8">
             <h1 
             data-aos="flip-right"
             className="text-3xl md:text-3xl font-bold text-[#035c5a] mb-2 ">
            Let’s Spark Something Amazing Together
          </h1>
          <p data-aos="fade-down" data-aos-duration="2000" className="text-secondary font-bold text-lg">
            Have an idea, project, or collaboration in mind? We'd love to hear
            from you! Whether <br/>you're looking to elevate your brand, create
            stunning visuals, or simply want to say hello — Spark Visuals is
            just a message away.
          </p>
        </div>
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8">
       
        {/* Left Contact Info */}
        <div data-aos="flip-down" data-aos-duration="2000" className="primary-bg text-white rounded-2xl p-6 md:w-1/3 space-y-4 flex flex-col justify-center">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <p className="flex items-center gap-2">
            <a href="https://wa.me/918817969120" target="_blank" className="flex items-center gap-2">
              <i className="fa-brands fa-whatsapp mt-1"></i>
              <span>+91 8817969120</span>
            </a>
          </p>
          <p className="flex items-center gap-2">
            <a href="tel:+917470421019" target="_blank" className="flex items-center gap-2">
              <i className="fa-solid fa-phone"></i>
              <span>+91 7470421019</span>
            </a>
          </p>
          <p className="flex items-center gap-2">
            <a href="mailto:sparkvisualss@gmail.com" target="_blank" className="flex items-center gap-2">
              <i className="fa-solid fa-envelope"></i>
              <span>sparkvisualss@gmail.com</span>
            </a>
          </p>
          <p className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot"></i>
            <span>Gohalpur, Jabalpur, M.P.</span>
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-2/3 space-y-4 ">

          {status == "Message sent successfully!" && (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-4">
              {status}
            </div>
          )}

          {status == "Failed to send message." && (
            <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-4">
              {status}
            </div>
          )}

          {status == "Please fill all fields." && (
            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg mb-4">
              {status}
            </div>
          )}
          <form onSubmit={formhandle} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="border-b-2 p-2 outline-none bg-transparent"
            />
            <input
              type="tel"
              name="number"
              placeholder="Your Number"
              className="border-b-2 p-2 outline-none bg-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="border-b-2 p-2 outline-none bg-transparent col-span-1 md:col-span-2"
            />
            <input
              type="text"
              name="subject"
              placeholder="Your Subject"
              className="border-b-2 p-2 outline-none bg-transparent col-span-1 md:col-span-2"
            />
            <button
              type="submit"
              className="primary-bg text-white px-6 py-2 rounded-xl cursor-pointer   transition col-span-1 md:col-span-2 w-fit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
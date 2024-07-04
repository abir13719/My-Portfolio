import { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send("service_6i3rdx7", "template_m1bnpfn", formData, "_Yd5zUbVzWgd3zdDT").then(
      (response) => {
        console.log("Email sent successfully:", response.status, response.text);
        showSuccessAlert();
      },
      (error) => {
        console.error("Email failed to send:", error);
        showErrorAlert();
      }
    );

    setFormData({ name: "", email: "", message: "" });

    const showSuccessAlert = () => {
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Email sent successfully!",
        timer: 3000,
        showConfirmButton: false,
      });
    };

    const showErrorAlert = () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to send email. Please try again later.",
        confirmButtonText: "OK",
      });
    };
  };

  return (
    <section className="container mx-auto px-10 py-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

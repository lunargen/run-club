import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 hover:text-gray-200">Contact Us</h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-4 hover:text-gray-200">For inquiries and further information, please contact us:</p>
        <ul className="list-disc pl-6">
          <li className="hover:text-gray-200">Email: ragonecharlie@gmail.com</li>
          <li className="hover:text-gray-200">Phone: (518)878-7754</li>
          <li className="hover:text-gray-200 text-info font-bold"><a href="https://www.instagram.com/runclubtc/">Instagram</a></li>
          <li className="hover:text-gray-200 text-info font-bold"><a href="https://www.facebook.com/groups/259027783894516">Facebook</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage; 

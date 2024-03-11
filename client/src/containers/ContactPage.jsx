import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-4">For inquiries and further information, please contact us:</p>
        <ul className="list-disc pl-6">
          <li>Email: ragonecharlie@example.com</li>
          <li>Phone: (518)878-7754</li>
          <li><a href="https://www.instagram.com/runclubtc/">Instagram Click Here</a></li>
          <li><a href="https://www.facebook.com/groups/259027783894516">Facebook Click Here</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;

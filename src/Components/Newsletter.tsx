import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-300 mb-8">
          Get the latest lotustalents insights and strategies delivered to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 bg-white text-black focus:outline-none"
          />
          <button className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
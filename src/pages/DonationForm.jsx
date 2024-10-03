import React, { useState } from "react";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("one-time");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your donation of $${amount}`);
    // Handle payment gateway logic here
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 lg:p-12 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-black">Make a Donation</h2>

      <div className="mb-6">
        <p className="text-lg mb-4 text-black text-center">
          Your contribution helps us achieve our mission. Every donation counts in making a difference.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Donation Amount */}
        <div className="mb-6">
          <label htmlFor="amount" className="block text-sm font-semibold text-black mb-2">Donation Amount</label>
          <div className="flex flex-wrap gap-4 justify-start">
            <button
              type="button"
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-300 mb-2 sm:mb-0"
              onClick={() => setAmount(25)}
            >
              $25
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 mb-2 sm:mb-0"
              onClick={() => setAmount(50)}
            >
              $50
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 mb-2 sm:mb-0"
              onClick={() => setAmount(100)}
            >
              $100
            </button>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Other Amount"
              className="flex-1 px-4 py-2 border rounded-lg text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0"
            />
          </div>
        </div>

        {/* Donation Frequency */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-black mb-2">Donation Frequency</label>
          <div className="flex items-center gap-6">
            <label className="flex items-center text-black">
              <input
                type="radio"
                name="frequency"
                value="one-time"
                checked={frequency === "one-time"}
                onChange={() => setFrequency("one-time")}
                className="mr-2"
              />
              One-Time Donation
            </label>
            <label className="flex items-center text-black">
              <input
                type="radio"
                name="frequency"
                value="recurring"
                checked={frequency === "recurring"}
                onChange={() => setFrequency("recurring")}
                className="mr-2"
              />
              Recurring Donation
            </label>
          </div>
        </div>

        {/* Donor Information */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="billingAddress" className="block text-sm font-semibold text-black mb-2">Billing Address</label>
          <input
            type="text"
            id="billingAddress"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            placeholder="Billing Address"
            className="w-full px-4 py-2 border rounded-lg text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Anonymous Donation */}
        <div className="mb-6">
          <label className="flex items-center text-black">
            <input
              type="checkbox"
              checked={isAnonymous}
              onChange={() => setIsAnonymous(!isAnonymous)}
              className="mr-2"
            />
            I wish to remain anonymous
          </label>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <label htmlFor="paymentMethod" className="block text-sm font-semibold text-black mb-2">Payment Method</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-black shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="jazzcash">JazzCash</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Donate Now
          </button>
        </div>
      </form>

      {/* Post-Donation Engagement */}
      <div className="text-center mt-8">
        <p className="text-sm text-black">Thank you for your support! Your donation makes a significant impact.</p>
      </div>
    </div>
  );
};

export default DonationForm;

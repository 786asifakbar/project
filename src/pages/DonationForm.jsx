import { useState } from 'react';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    currency: 'USD',
    paymentMethod: '',
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.amount) newErrors.amount = 'Amount is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Payment Method is required';
    return newErrors;
  };

  const openConfirmationDialog = (e) => {
    e.preventDefault(); // Prevent form submission
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsModalOpen(true);
  };

  const closeConfirmationDialog = () => {
    setIsModalOpen(false);
  };

  const confirmDonation = () => {
    alert(`Thank you, ${formData.name}! Your donation of ${formData.amount} ${formData.currency} has been processed.`);
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      amount: '',
      currency: 'USD',
      paymentMethod: '',
    }); // Reset the form fields
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Donate to Support Human Rights
      </h1>

      <form onSubmit={openConfirmationDialog} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="amount">Donation Amount</label>
          <input
            id="amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            className={`w-full border ${errors.amount ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
          />
          {errors.amount && <span className="text-red-500 text-sm">{errors.amount}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="currency">Currency</label>
          <select
            id="currency"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2"
          >
            <option value="PKR">PKR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className={`w-full border ${errors.paymentMethod ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2`}
          >
            <option value="">Select a method</option>
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
          {errors.paymentMethod && <span className="text-red-500 text-sm">{errors.paymentMethod}</span>}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Donate
          </button>
        </div>
      </form>

      {/* Confirmation Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-md p-5 w-80">
            <h2 className="text-lg font-bold mb-4">Confirm Your Donation</h2>
            <p>Please confirm your donation of {formData.amount} {formData.currency} using {formData.paymentMethod}.</p>
            <div className="flex justify-between mt-4">
              <button onClick={closeConfirmationDialog} className="text-gray-600 hover:text-gray-800">Cancel</button>
              <button onClick={confirmDonation} className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Confirm & Donate</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationForm;

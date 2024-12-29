import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const formdata = { name, email, message };
    handleError();
    setEmail("");
    setMessage("");
    setName("");
    alert(`Thank you ${name}`);
  };
  const handleError = () => {
    const newError = {};
    if (!name) {
      newError.name = "Name is required";
    }
    if (!email) {
      newError.email = "Email is required";
    }
    if (!message) {
      newError.message = "Please drop a  message";
    }
    setError(newError);
    return Object.keys(newError).length === 0;
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm w-full p-6 bg-white border border-gray-300 rounded-lg shadow-md"
      >
        <h2 className="text-lg font-semibold mb-4 text-center text-gray-800">
          Contact Us
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
          />
          {error?.name && <p className="text-red-500 italic">{error.name}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
          {error.email && <p className="text-red-500 italic">{error.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your message"
            rows="4"
          ></textarea>
          {error.message && (
            <p className="text-red-500 italic">{error.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

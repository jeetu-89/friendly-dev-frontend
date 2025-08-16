import { Form } from "react-router";
import type { Route } from "./+types";
import { div } from "framer-motion/client";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  const data = {
    name,
    email,
    subject,
    message,
  };

  return { message: "Form Successfully Submitted", data };
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  return (
    <div className="max-w-3xl bg-gray-900 py-10 px-6 rounded">
      <h2 className="text-3xl font-bold text-center mb-8">Contact me</h2>
      
      {actionData?.message ? (
        <div className="mb-6 bg-green-600 text-center py-2 rounded-md font-bold">
          {actionData.message}
        </div>
      ) : null}

      <Form method="post" className="space-y-6">
        {/* Name */}
        <div>
          <label
            className="block mb-1 text-gray-300 font-bold text-lg"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            className="bg-gray-800 w-full px-6 py-2 rounded-lg focus:outline-0 border border-gray-700"
            type="text"
          />
        </div>

        {/* Email */}
        <div>
          <label
            className="block mb-1 text-gray-300 font-bold text-lg"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            className="bg-gray-800 w-full px-6 py-2 rounded-lg focus:outline-0 border border-gray-700"
            type="text"
          />
        </div>

        {/* Subject */}
        <div>
          <label
            className="block mb-1 text-gray-300 font-bold text-lg"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            className="bg-gray-800 w-full px-6 py-2 rounded-lg focus:outline-0 border border-gray-700"
            type="text"
          />
        </div>

        {/* Message */}
        <div>
          <label
            className="block mb-1 text-gray-300 font-bold text-lg"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-gray-800 w-full px-6 py-2 rounded-lg focus:outline-0 border border-gray-700"
          />
        </div>
        <button className="bg-blue-600 py-2 w-full rounded-md hover:bg-blue-700 cursor-pointer transition">
          Send message
        </button>
      </Form>
    </div>
  );
};

export default ContactPage;

// import { Form } from "react-router";
import type { Route } from "./+types";

// export async function action({ request }: Route.ActionArgs) {
//   const formData = await request.formData();

//   const name = formData.get("name") as string;
//   const email = formData.get("email") as string;
//   const subject = formData.get("subject") as string;
//   const message = formData.get("message") as string;

//   const errors: Record<string, string> = {};

//   if (!name) errors.name = "Name is Required";
//   if (!email) {
//     errors.email = "Email is Required";
//   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     errors.email = "Invalid email provided";
//   }
//   if (!subject) errors.subject = "Subject is Required";
//   if (!message) errors.message = "Message is Required";

//   if (Object.keys(errors).length > 0) return { errors };

//   const data = {
//     name,
//     email,
//     subject,
//     message,
//   };

//   return { message: "Form Successfully Submitted", data };
// }

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  // const errors = actionData?.errors ?? {};
  return (
    <div className="max-w-3xl bg-gray-900 py-10 px-6 rounded">
      <h2 className="text-3xl font-bold text-center mb-8">Contact me</h2>

      {/* {actionData?.message ? (
        <div className="mb-6 bg-green-600 text-center py-2 rounded-md font-bold">
          {actionData.message}
        </div>
      ) : null} */}

      <form
        action="https://formspree.io/f/meozyapo"
        method="post"
        className="space-y-6"
      >
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
          {/* {errors.name && (
            <p className="text-sm text-red-500 mt-2 ">{errors.name}</p>
          )} */}
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
          {/* {errors.email && (
            <p className="text-sm text-red-500 mt-2 ">{errors.email}</p>
          )} */}
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
          {/* {errors.subject && (
            <p className="text-sm text-red-500 mt-2 ">{errors.subject}</p>
          )} */}
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
          {/* {errors.message && (
            <p className="text-sm text-red-500 mt-2 ">{errors.message}</p>
          )} */}
        </div>
        <button className="bg-blue-600 py-2 w-full rounded-md hover:bg-blue-700 cursor-pointer transition">
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;

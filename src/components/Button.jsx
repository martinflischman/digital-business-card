import { FaEnvelope } from "react-icons/fa";

export default function Button() {
  return (
    <div className="flex justify-center">
      <a className="w-4/5" href="mailto:devpublic.swiftness382@passfwd.com">
        <button className="btn btn-ghost bg-gray-100 text-gray-800 w-full">
          <FaEnvelope />
          Email
        </button>
      </a>
    </div>
  );
}

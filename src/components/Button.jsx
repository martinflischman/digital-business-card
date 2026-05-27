import { FaEnvelope } from "react-icons/fa";

export default function Button() {
  return (
    <>
      <div className="flex justify-center">
        <button className="btn btn-ghost bg-gray-100 text-gray-800 w-4/5">
          <FaEnvelope />
          Email
        </button>
      </div>
    </>
  );
}

import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="flex gap-4 justify-center pb-4 pt-4 bg-neutral-900">
        <a
          className="text-3xl opacity-50"
          href="https://github.com/martinflischman"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="text-3xl opacity-50"
          href="https://x.com/martinflischman"
          target="_blank"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </>
  );
}

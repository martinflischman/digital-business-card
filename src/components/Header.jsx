import avatar from "../assets/avatar.png";

export default function Header() {
  return (
    <>
      <figure>
        <img
          className="w-full max-h-80 object-cover"
          src={avatar}
          alt="profile photo"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">Martin Flischman</h2>
        <p className="text-warning">Full-stack Developer</p>
      </div>
    </>
  );
}

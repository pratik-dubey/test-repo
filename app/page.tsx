import Link from "next/link";
export default function Home() {
  return (
    <div>
      Links :-
      <Link className="text-md m-2 border" href="/signup">
        Signup
      </Link>
      <Link className="text-md m-2 border" href="/signup">
        Signin
      </Link>
    </div>
  );
}

import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  const isLoggedIn = false;
  return (
    <header className="container py-8 flex justify-between items-center">
      <div>
        <Link href="/">
          <span className="text-2xl font-bold tracking-wide">CV Builder</span>
        </Link>
      </div>

      {isLoggedIn ? <LoggedIn /> : <LoggedOut />}
    </header>
  );
}

export default Header;

function LoggedIn() {
  return (
    <div className="flex space-x-4">
      <Link href="/my-cvs">
        <Button>My CV&apos;s</Button>
      </Link>
      <Button variant="outline">Logout</Button>
    </div>
  );
}

function LoggedOut() {
  return (
    <div className="flex space-x-4">
      <Link href="/register">
        <Button>Create Account</Button>
      </Link>
      <Link href="/login">
        <Button variant="outline">Login</Button>
      </Link>
    </div>
  );
}

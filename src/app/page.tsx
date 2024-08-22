import { Button } from "@/components/ui/button";
import Link from "next/link";

function Home() {
  return (
    <div className="container mt-12">
      <Link href="/create-cv">
        <Button>Create A CV</Button>
      </Link>
    </div>
  );
}

export default Home;

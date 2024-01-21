import { Button } from "./ui/button";

function Customize() {
  return (
    <aside className="bg-white h-screen py-6 px-4 border-l">
      <div className="flex justify-between items-center gap-x-4">
        <h1 className="text-3xl font-bold">Customize</h1>
        <Button size="sm" variant="destructive">Reset</Button>
      </div>
    </aside>
  );
}

export default Customize;

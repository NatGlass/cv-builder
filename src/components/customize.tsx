import CustomizeForm from "./customize-form";

function Customize() {
  return (
    <aside className="bg-white h-screen py-6 px-4 border-l border-b">
      <h1 className="text-3xl font-bold">Customize</h1>

      <div className="my-8 min-w-[300px]">
        <CustomizeForm />
      </div>
    </aside>
  );
}

export default Customize;

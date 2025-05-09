// import TodoList from "@/Components/TodoList";
import Task from "./task/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] mt-22 pt-10 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <Task />
    </div>
  );
}

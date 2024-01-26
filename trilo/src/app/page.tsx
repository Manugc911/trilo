
import TaskList from "./taskList";

export default function Home() {
  return (
    <main className="inline-block w-full">
      <div className="w-40 border-r-indigo-800 border-solid border-2 h-screen fixed " ></div>
      <div className=" min-w-fit  grid min-h-screen grid-cols-3 gap-8 items-center justify-between p-10 ml-40">
      <TaskList title="TO DO"></TaskList>
      <TaskList title="DOING"></TaskList>
      <TaskList title="DONE"></TaskList>
      </div>
    </main>
  );
}

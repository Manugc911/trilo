
import TaskList from "./taskList";
type list = 'TODO' | 'DOING' | 'DONE';
export default function Home() {
    const handleclick= ()=>{
      
    }
  return (
    <main className="inline-block w-full">
      <div className="w-40 border-r-indigo-800 border-solid border-2 h-screen fixed " ></div>
      <div className=" min-w-fit  grid min-h-screen grid-cols-3 gap-8 items-center justify-between p-10 ml-40">
      <TaskList title="TODO"></TaskList>
      <TaskList title="DOING"></TaskList>
      <TaskList title="DONE"></TaskList>
      </div>
    </main>
  );
}

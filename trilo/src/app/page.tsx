
import TaskList from "./taskList";
type list = 'TODO' | 'DOING' | 'DONE';
export default function Home() {
    const handleclick= ()=>{
      
    }
  return (
    <main className="inline-block w-full">
      
      <div className=" min-w-fit  grid md:min-h-screen h-fit grid-cols-1 md:grid-cols-3  gap-5 md:gap-10 justify-between p-4 md:p-10 ">
      <TaskList title="TODO"></TaskList>
      <TaskList title="DOING"></TaskList>
      <TaskList title="DONE"></TaskList>
      </div>
    </main>
  );
}

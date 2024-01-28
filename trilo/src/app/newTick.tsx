'use client'
export default function NewTick(props: { checked?, addTick }) {
    const { checked = false, addTick } = props;

    const keydownHandler = (event) => {
        console.log(event.keyCode);
        if (event.keyCode == 13) {
            addTick(event.target.value); event.target.value = "";
        }
    }
    const click = (event) => {
    
            addTick(event.target.parentElement.querySelector("input").value); event.target.parentElement.querySelector("input").value = "";
        
    }
    return (
        <div className="flex flex-nowrap">
            <span className="text-nowrap font-bold text-lg text-red-700 mt-0.5">{checked ? "X " : "O "}</span><span className="mt-0.5">&nbsp;|</span>
            <input type="text" placeholder="Add a new Tick" onKeyDown={keydownHandler} className="ml-2 px-2 rounded-md placeholder-slate-500 w-full "></input>
            <button onClick={click} className="ml-3 rounded-full p-1 text-sm border-white border-2 border-solid ">Add</button>
        </div>
    )
}
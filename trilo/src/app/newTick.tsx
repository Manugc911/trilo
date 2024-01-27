'use client'
export default function NewTick(props:{checked?,addTick}){
    const {checked=false,addTick} = props;

const keydownHandler= (event)=>{
    console.log(event.keyCode);
    if(event.keyCode==13){
        addTick(event.target.value);event.target.value="";
    }
    
}

    return(
        <div className="flex flex-nowrap">
            <span className="text-nowrap font-bold text-lg text-red-700">{checked?"X ":"O "}</span><span>&nbsp;|</span>
            <span><input type="text" placeholder="Add a new Tick" onKeyDown={keydownHandler} className="ml-2 px-2 rounded-md placeholder-slate-500 w-full"></input></span>
        </div>
    )
}
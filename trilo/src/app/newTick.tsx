'use client'
export default function NewTick(props:{checked?,addTick}){
    const {checked=false,addTick} = props;



    return(
        <div>
            <span>{checked?"X":"O"}</span>
            <span><input type="text" placeholder="Add a new Tick" onBlur={(event)=>{addTick(event.target.value);event.target.value="";}}></input></span>
        </div>
    )
}
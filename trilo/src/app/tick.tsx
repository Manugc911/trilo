
export default function Tick(props:{text:String,idkey:string,identifier:string,checked?:Boolean,handleClick?:any,dragEnd?:any}){
    
    const {text,idkey,identifier,checked=false,handleClick,dragEnd} = props;
  
    const drag = (event)=>{
        console.log(checked,"drag")
        event.dataTransfer.setData("text",text);
        event.dataTransfer.setData("checked",String(checked));
    }
    return(
        <div id={identifier} data-idkey={idkey} draggable={true} onDragStart={drag} onDragEnd={dragEnd} onClick={handleClick} >
            <span>{checked?"X":"O"}</span>
            <span> | {text}</span>
        </div>
    )
}
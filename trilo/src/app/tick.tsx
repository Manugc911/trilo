
export default function Tick(props:{text:String,idkey:string,identifier:string,checked?:Boolean,handleClick?:any,dragEnd?:any}){
    
    const {text,idkey,identifier,checked=false,handleClick,dragEnd} = props;
  
    const drag = (event)=>{
        event.dataTransfer.setData("text",text);
        event.dataTransfer.setData("checked",String(checked));
    }
    return(
        <div id={identifier} data-idkey={idkey} draggable={true} onDragStart={drag} onDragEnd={dragEnd} onClick={handleClick} className="mb-2 touch-manipulation min-w-full" >
            <span className={"font-bold text-lg touch-manipulation "+(checked?"text-green-600":"text-red-700")}>{checked?"X":"O"}</span>
            <span className="touch-manipulation"> | {text}</span>
        </div>
    )
}

export default function Tick(props:{text:String,checked?:Boolean}){
    
    const {text,checked=false} = props;
    return(
        <div>
            <span>{checked?"X":"O"}</span>
            <span> | {text}</span>
        </div>
    )
}
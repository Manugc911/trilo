'use client'
import Tick from "./tick";
import NewTick from "./newTick";
import { ReactNode, useEffect, useState } from "react";

class ValueTick  {
  text: any;
  checked: boolean;
  constructor(text,checked) {
    this.text = text;
    this.checked = false;
  }
  getText(){
    return this.text;
  }
}

export default  function TaskList(Props:{title:String,content?:Array<ValueTick>}) {
    const {title="Empty Title",content} = Props;
    
    const[ticks,addTicks]= useState([ new ValueTick("1",false)]);
   
    

    const addTick = (text)=>{
        console.log(text);
      
         let mynewtick =  new ValueTick(text,true);
        
        addTicks([...ticks,mynewtick]);
    }
    
    return (
      <section className=" min-h-screen justify-between  p-10 border-dashed border-cyan-400 border-2 border-radius-2">
       <div className="w-full">
        <h2 className="text-center">{title}</h2>
       </div>
       <div>
        <Tick text="Maiuu"></Tick>
        
        {ticks.map((tick,key) => (
        <Tick key={key} text={tick.getText()}></Tick>
      ))}
        
        <NewTick addTick={addTick}></NewTick>
       </div>
      </section>
    );
  }
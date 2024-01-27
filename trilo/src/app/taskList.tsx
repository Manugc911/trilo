'use client'
import Tick from "./tick";
import NewTick from "./newTick";
import { ReactNode, useEffect, useState } from "react";

class ValueTick {
  key: number;
  text: any;
  checked: boolean;
  constructor(text, checked, key) {
    this.text = text;
    this.checked = checked;
    this.key = key;
  }
  getchecked() {
    return this.checked;
  }
  getText() {
    return this.text;
  }
  getkey() {
    return this.key;
  }

}

export default function TaskList(Props: { title: string, content?: Array<ValueTick> }) {
  const { title = "Empty Title", content } = Props;

  const [ticks, addTicks] = useState([new ValueTick("1", false, null), new ValueTick("2", true, null)]);




  const addNewTick = (text) => {
    let mynewtick = new ValueTick(text, false, null);

    addTicks([...ticks, mynewtick]);
    console.log(ticks);
  }

  const removeTick = (index:number) => {
    ticks.splice(index,1);
    //console.log(ticks);

  }
  const dragEnd = (event)=>{
    console.log(event.target)
    removeTick(Number(event.target.id.split("_")[1]))
    addTicks([...ticks]);
  }
  const drop = (event) => {
    let data = event.dataTransfer;
    console.log(data.getData("checked")=='true'?true:false);
    let mynewtick = new ValueTick(data.getData("text"), data.getData("checked")=='true'?true:false, data.getData("key"));


    addTicks([...ticks, mynewtick]);

    ticks.map((tick, key, array) => (
      array[key].key = key
    ));
    event.preventDefault();

  }
  const allowDrop = (event) => {
    event.preventDefault();
  }
  const handleClick = (event) => {
    console.log(event.target.parentElement.id);
    let key = event.target.parentElement.id.split("_")[1];
    ticks[key].checked = !ticks[key].checked;
    addTicks([...ticks]);

  }
  return (
    <section onDrop={drop} onDragOver={allowDrop} className="min-h-screen justify-between  p-10 border-dashed border-cyan-400 border-2 border-radius-2">
      <div className="w-full">
        <h2 className="text-center">{title}</h2>
      </div>
      <div>

        {ticks.map((tick, key, array) => (

          <Tick dragEnd={dragEnd} handleClick={handleClick} key={key} checked={tick.getchecked()} identifier={title + "_" + key} idkey={"" + key} text={tick.getText()}></Tick>

        ))}

        <NewTick addTick={addNewTick}></NewTick>
      </div>
    </section>
  );
}
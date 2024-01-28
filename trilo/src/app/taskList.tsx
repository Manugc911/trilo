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
  getChecked() {
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

  const [ticks, addTicks] = useState([]);
  useEffect(() => {
    //localStorage.clear();
    console.log("read " + title)
    readLocalStorage(ticks, addTicks);
  }, []);
  
  useEffect(() => {
    console.log("write" + title)
    localStorage.setItem('ticks' + title, JSON.stringify(ticks));
  }, [ticks])

  let colorBorder = "";
  switch (title) {
    case "TODO":
      
      colorBorder= "border-green-400 shadow-green-400 ";
      break;
    case "DOING":
      colorBorder= "border-cyan-400 shadow-cyan-400 ";
      break;
    case "DONE":
      colorBorder= "border-red-400 shadow-red-400 ";
      break;

  }
  const readLocalStorage = (ticks, addTicks) => {
    const ticksString = localStorage.getItem('ticks' + title);

    const newticks = JSON.parse(ticksString);



    if (newticks != null) {
      let valueTickArray = [];
      newticks.forEach(tick => {
        let valueTick = new ValueTick(tick.text, tick.checked, tick.key);


        valueTickArray = [...valueTickArray, valueTick]
      });
      
      addTicks([...ticks, ...valueTickArray]);
    }

  }

  const addNewTick = (text) => {
    let mynewtick = new ValueTick(text, false, null);
    addTicks([...ticks, mynewtick]);

  }

  const removeTick = (index: number) => {
    ticks.splice(index, 1);

  }
  const dragEnd = (event) => {
    console.log(event.target)
    removeTick(Number(event.target.id.split("_")[1]))
    addTicks([...ticks]);
  }
  const drop = (event) => {
    let data = event.dataTransfer;
    console.log(data.getData("checked") == 'true' ? true : false);
    let mynewtick = new ValueTick(data.getData("text"), data.getData("checked") == 'true' ? true : false, data.getData("key"));
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
    ticks[key].checked = !Boolean(ticks[key].checked);
    addTicks([...ticks]);

  }

  return (
    <section onDrop={drop} onDragOver={allowDrop} className={colorBorder + " touch-manipulation h-full  justify-between rounded-lg p-6 border-solid border-2 shadow-lg shadow-black"}>
      <div className="w-full">
        <h2 className="text-center font-bold text-lg mb-4">{title}</h2>
      </div>
      <div>

        {ticks.map((mytick, key, array) => (

          <Tick dragEnd={dragEnd} handleClick={handleClick} key={key} checked={mytick.getChecked()} identifier={title + "_" + key} idkey={"" + key} text={mytick.getText()}></Tick>

        ))}

        <NewTick addTick={addNewTick}></NewTick>
      </div>
    </section>
  );
}


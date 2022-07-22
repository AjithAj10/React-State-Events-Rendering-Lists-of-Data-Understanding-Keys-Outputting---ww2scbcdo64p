import React,{ useState } from "react";
import Item from "./Item";
const { v4: uuidv4 } = require('uuid');

import "./../styles/App.css";

function App(){

	const [input,setInput] = useState('');
	const [list,setList] = useState([]);
	const [editId, setEditId] = useState();

	const add = (e) =>{
		if(input != ''){
		if(editId){
let a = {id:editId,title:input};


			let editedList = list.map(el => {
			return	el.id == editId ? a : {id:el.id,title: el.title} ; 
			})
			setList(editedList);
			console.log(list);
			setEditId('');
			setInput('');
			return;
		}
		
			setList([...list, {id: uuidv4(),title:input}])
			setInput('');
		}
	}

	return (
	<div id="main">
		<label htmlFor="task"></label>
	<textarea id='task' value={input} required onChange={(e) => setInput(e.target.value)}></textarea>

	<button onClick={add} style={{marginLeft:'4rem'}} id="btn">Add Task </button>
	
	<div className="cover">
		{ editId ? <div> <textarea value={input} onChange={(e) => setInput(e.target.value)} className='editTask'></textarea>
		 <button onClick={add} className='saveTask' style={{marginLeft:'4rem'}} id="btn1">
			Edit</button></div> : <Item list={list} setList={setList} changeInput = {setInput} setId = {setEditId}/>
		}
		
	</div>
	</div>
	);
}


export default App;

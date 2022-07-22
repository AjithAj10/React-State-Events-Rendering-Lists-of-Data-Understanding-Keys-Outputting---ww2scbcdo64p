import React, { useState } from 'react';
const { v4: uuidv4 } = require('uuid');

function Item({list,setList,changeInput,setId}) {

    const [val,setVal] = useState();
    // const [edit,setEdit] = useState();
    
    function deleteTodo(id){

       setList( list.filter((e) => e.id !== id ) );
    }

    function editFn(e){
        // 
        // let s = document.getElementsByClassName('list');
        // console.log(s[0]);
        // console.log(e.title);
        changeInput(e.title)
        setId(e.id)
        
    }


    return (
        <div>
            {
                list.map((e) => {
                   return <li key={e.id}><div className='list'>{e.title}</div>
                   <button className='edit' onClick={() => editFn(e)}>Edit</button>

                   <button className='delete' onClick={() => deleteTodo(e.id)}>Delete</button>
                   </li>

            })
            }
        </div>
    );
}

export default Item;
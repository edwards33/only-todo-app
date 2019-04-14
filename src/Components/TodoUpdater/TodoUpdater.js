import React from 'react';

const todoUpdater = (props)=>{

return (
<div id="myDIV" className="header">
  <h2>To Do List</h2>
  {/* <TodoText change={props.change} taskName={props.taskName}/>  */}
  <input onChange={props.change} type="text" id="myInput" placeholder="New Todo" value={props.taskName} onKeyPress={props.enterPressed}/>
  <span onClick={props.click} className="addBtn">Add</span>
</div>
);

}

export default todoUpdater;
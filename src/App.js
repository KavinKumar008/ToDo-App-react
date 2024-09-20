import React,{useState} from 'react'
import "./App.css"
import InputArea from './component/InputArea'
import ToDoItems from './component/ToDoItems';

const App = () => {

  const [items, setItems] = useState([]);

  const addItems = (inputText)=>{
    setItems((prevItems)=>{
      return [...prevItems,inputText];
    });
  };

  const deleteItems=(id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((items,index)=>{
         return index!==id;
      });
    });
  };

  console.log(items);
  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do-List</h1>
      </div>
      <InputArea addItems={addItems}/>
      <div>
        <ul>
          {
            items.map((item,index)=>{
              return (
                <ToDoItems key={index} text={item} deleteItems={deleteItems} id={index}/>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default App
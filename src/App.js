import React from 'react';
import { v4 as uuid } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';

import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items:[],
      id:uuid(),
      item:'',
      editItem:false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearList = this.clearList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange(e){
    this.setState({
      item:e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const newItem = {
      id:uuid(),
      title:this.state.item
    };
    const updatedItems = [...this.state.items,newItem];

    this.setState({
      items:updatedItems,
      item:'',
      id:uuid(),
      editItem:false
    })
  }

  handleEdit(id){
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItems = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItems.title,
      id : id,
      editItem:true
    });
  }

  handleDelete(id){
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });

  }

  clearList(e){
    this.setState({
      items:[]
    });
  }



  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
              Todo List
            </h3>
            <TodoInput 
              item={this.state.item} 
              editItem={this.state.editItem} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
            />
            <TodoList 
              items={this.state.items} 
              clearList={this.clearList} 
              handleDelete={this.handleDelete} 
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;

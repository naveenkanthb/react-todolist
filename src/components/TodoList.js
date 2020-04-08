import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component{
    render(){
        const { items, clearList, handleDelete, handleEdit } = this.props;

        return (
            <ul className="list-group my-5 ">
                <h3 className="text-capitalize text-center">Todo list</h3>
                {items.map(item => {
                    return(
                    <TodoItem 
                        key={item.id}
                        title={item.title}
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)}                  
                    />);
                })}
                <button 
                    type="submit" 
                    className="btn btn-danger btn-block text-uppercase my-5"
                    onClick={clearList}
                >
                    clearList
                </button>
            </ul>  
        );
    }
}

export default TodoList;
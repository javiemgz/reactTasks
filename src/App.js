import React, { Component } from 'react'
import Card from './Components/taskCard'
import './App.css'
import Navigation from './Components/Navigation'
import { todos } from './todos.json'
import TodoForm from './Components/TodoForm'
class App extends Component {
  constructor() {
    super()
    this.state = { todos }
    this.addTask = this.addTask.bind(this)
  } 

  addTask(task){
    this.setState=({
      todos: [...this.state.todos, task]
    })
    console.log(this.state.todos)
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-3" key={i}>
          <Card title={todo.title} piority={todo.piority} responsible={todo.responsible} description={todo.description}></Card>
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation title="Tareas app" pendings={this.state.todos.length} />
        <div className="container">

          <div className="row">

            <div className="col-md-4 text-center">
              <TodoForm addTask={this.addTask} ></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;

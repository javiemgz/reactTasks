import React, { Component } from 'react'

const NEW_TASK = {
    title: '',
    responsible: '',
    description: '',
    priority: 'low'
}

class TodoForm extends Component {

    constructor() {
        super()
        this.state = NEW_TASK
        this.handleInputChange = this.handleInputChange.bind(this)
        this.submitNewTask = this.submitNewTask.bind(this)
    }

    handleInputChange(e){
        const {value, name} = e.target
        this.setState({
            [name] : value
        })
    }
    submitNewTask(e){
        e.preventDefault()
        this.props.addTask(this.state)
        console.log(this.props)
    }

    render() {
        return (
            <div className="card mt-4">
                <div className="card-header">
                    <h2>Nueva tarea</h2>
                </div>
                <form onSubmit={this.submitNewTask} className="card-Body m-4">
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            className="form-control"
                            value={this.state.title}
                            placeholder="Titulo"
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            value={this.state.responsible}
                            placeholder="Responsable"
                            onChange={this.handleInputChange}
                        />

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            value={this.state.description}
                            placeholder="Tarea"
                            onChange={this.handleInputChange}
                        />

                    </div>

                    <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"
                            value={this.state.piority}
                            onChange={this.handleInputChange}
                        >
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>

            </div>
        )
    }

}

export default TodoForm
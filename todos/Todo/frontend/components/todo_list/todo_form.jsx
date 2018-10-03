import React from 'react';
import {uniqueId} from '../../util/unique_id';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateInput(event) {
    this.setState({title: event.currentTarget.value});
  }

  handleClick(e) {
    e.preventDefault();

    const todo = Object.assign({}, this.state, {id: uniqueId()});
    this.props.receiveTodo(todo);
  }

  render() {
    return(
      <div>
        <form>
          <input onChange={this.updateInput} value={this.state.todo}></input>
          <button onClick={this.handleClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;

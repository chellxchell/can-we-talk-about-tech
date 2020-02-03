import React from 'react';
import '../App.scss';

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
        this.props.handler(this.props.question,this.state.value)
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <label>
          <div className="question">{this.props.question}</div>
          <textarea type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Save" />
      </form>
      );
    }
  }

  export default Form;
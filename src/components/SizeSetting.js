import React from 'react';

class App extends React.Component {
  handleReduction = () => {
    this.props.handleReduction();
  }
  handleIncrease = () =>{
    this.props.handleIncrease();
  }
  handleReset = () => {
    this.props.handleReset();
  }
  render() {
    var {size} = this.props;
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 
          className="panel-title"
          style = {{fontSize :size}}>Size : {size}</h3>
        </div>
        <div className="panel-body">
          <button
            type="button"
            className="btn btn-success"
            onClick={this.handleReduction} >Giảm</button>&nbsp;
          <button 
          type="button" 
          className="btn btn-success" 
          onClick = {this.handleIncrease}>Tăng</button>
        </div>
        <div className="panel-body">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleReset} >reset</button>
        </div>

      </div>
    )
  }
}

export default App;

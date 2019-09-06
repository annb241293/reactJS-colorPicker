import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'red',
      size: 15
    }
    this.recieveColor = this.recieveColor.bind(this);
  }

  recieveColor(color) {
    this.setState({
      color: color
    })
  }
  handleReduction = () => {
    var { size } = this.state;
    if (size > 12) {
      this.setState(preState => ({
        size: preState.size - 1
      }))
    }
  }
  handleIncrease = () => {
    var { size } = this.state;
    if (size < 36) {
      this.setState(preState => ({
        size: preState.size + 1
      }))
    }
  }
  handleReset = () =>{
    this.setState ({
      color: 'red',
      size: 15
    })
  }

  render() {
    var { size, color } = this.state;
    return (
      <div className='container mt-50'>
        <div className='row'>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <ColorPicker activeColor={this.state.color} passColor={this.recieveColor} />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <SizeSetting
              handleReduction={this.handleReduction}
              size={size}
              handleIncrease={this.handleIncrease}
              handleReset={this.handleReset} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Result color={color} size={size} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;

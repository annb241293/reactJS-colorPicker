import React from 'react';

class ColorPicker extends React.Component{
  constructor(){
    super();
    this.state = {
      color : ['red', 'green', 'blue', 'black']
    }
  }

  setColor(color){
    this.props.passColor(color);
  }

  render(){
    var elmColor = this.state.color.map((color,index)=>{
      return <span 
      key={index} 
      style={{backgroundColor:color}}
      className = {this.props.activeColor === color ? 'active' : ''}
      onClick = {()=> this.setColor(color)}></span>
    })
    return (
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Color Picker</h3>
          </div>
          <div className="panel-body">
              {elmColor}
              <hr/>
          </div>
        </div>
    )
  }
}
// ColorPicker.defaultProps = {
//   color : ['red', 'green', 'blue', 'black']
// }
export default ColorPicker;

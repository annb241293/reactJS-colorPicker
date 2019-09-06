import React from 'react';

class Result extends React.Component {

    // setStyle() {
    //     return {
    //         color: this.props.color,
    //         borderColor: this.props.color
    //     }
    // }

    render() {
        var style = {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize : this.props.size
        }
        return (
            <div>
                <p>Color : red - Fontsize : 15px</p>
                <div id="content" style={style}>
                    Nội dung setting
                </div>
            </div>
        )
    }
}

export default Result;

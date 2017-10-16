import React, { Component } from 'react';
import {createComponent} from 'react-fela';

// function generateColor () {
//   return '#' +  Math.random().toString(16).substr(-6);
// }

const divStyle = (props) => ({
    backgroundColor: props.bgColor,
    padding: '10px',
    border: '5px solid black',
    margin: '10px',
    minWidth: '100px',
    minHeight: '100px'

  });
const StyledDiv = createComponent(divStyle)

class Child extends Component {

  render() {
    return (
        <StyledDiv {...this.props}>
          {this.props.children}
        </StyledDiv>
    );
  }
}

export default Child;

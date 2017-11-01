import React, { Component } from 'react';
import {createComponent} from 'react-fela';

// function generateColor () {
//   return '#' +  Math.random().toString(16).substr(-6);
// }

const divStyle = (props) => ({
    backgroundColor: props.bgColor,
    padding: '10px',
    border: '5px solid black',
    minWidth: '100px',
    minHeight: '100px',
    alignSelf: props.theme[`child${props.name}`]['alignSelf'],
    order: props.theme[`child${props.name}`]['order'],
    flex: props.theme[`child${props.name}`]['flex'],

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

import React, { Component } from 'react';
import {createComponent} from 'react-fela';


const divStyle = (props) => ({
    padding: '10px',
    border: '5px solid black',
    margin: '10px',

  });
const StyledDiv = createComponent(divStyle)

class DropDown extends Component {

  render() {
    return (
        <StyledDiv {...this.props}>
          <label>
            {this.props.name}<br/>
            <select name={this.props.name} value={this.props.value} onChange={this.props.onChange}>
              {this.props.options.map((option => {
                return <option key={option.name} value={option.name}>{option.name}</option>
              }))}
            </select>
          </label>
        </StyledDiv>
    );
  }
}

export default DropDown;

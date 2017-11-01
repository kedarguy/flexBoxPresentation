import React, { Component } from 'react';
import {createComponent} from 'react-fela';
import Child from './Child'



const divStyle = ({theme}) => ({
  backgroundColor: theme.parent.bgColor,
  minHeight: '300px',
  width: '100%',
  border: '5px solid black',
  flex: 1,
  display: theme.parent.display,
  flexDirection: theme.parent.flexDirection,
  flexWrap: theme.parent.flexWrap,
  justifyContent: theme.parent.justifyContent,
  alignItems: theme.parent.alignItems,
  alignContent: theme.parent.alignContent,


});
const StyledDiv = createComponent(divStyle)

class Parent extends Component {

  render() {
    const children = [
      {name: 'A',
      bgColor: 'red'
    },
    {name: 'B',
    bgColor: 'purple'
  },
  {name: 'C',
  bgColor: 'green'
},
{name: 'D',
bgColor: 'pink'
},
];

    return (

        <StyledDiv>
          {children.map((child) => {
            return (
              <Child
                key={child.name}
                name={child.name}
                bgColor={child.bgColor}
              >
                {child.name}
              </Child>
            )
          })}
        </StyledDiv>

            );
  }
}

export default Parent;

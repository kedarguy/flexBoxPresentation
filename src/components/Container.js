import React, { Component } from 'react';
import { ThemeProvider, createComponent} from 'react-fela';
import Parent from './Parent';
import DropDown from './DropDown';


const sectionStyle = () => ({
  width: '90%',
  minHeight: '100vh',
  border: '5px solid gray',
  marginTop: '30px',
  padding: '20px',
  display: 'flex',
  alignContent: 'strech'
});
const StyledSection = createComponent(sectionStyle, 'section')

const inputSectionStyle = (props) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '5px',
  margin: '10px',
  flex: props.flex
})

const StyledInputSection = createComponent(inputSectionStyle, 'section')

const divStyle = (props) => ({
    padding: '10px',
    border: '5px solid black',
    margin: '10px',

  });
const StyledDiv = createComponent(divStyle)

class Container extends Component {
  constructor(props) {
  super(props);
  this.state = {
    bgColorParent: 'blue',
    isDisplayFlex: false,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    // Child Styles section in state
    currChildStyleModifier: 'A',
    ChildAAlignSelf: 'auto',
    ChildAFlex: 'none',
    ChildAOrder: 0,
    ChildBAlignSelf: 'auto',
    ChildBFlex: 'none',
    ChildBOrder: 0,
    ChildCAlignSelf: 'auto',
    ChildCFlex: 'none',
    ChildCOrder: 0,
    ChildDAlignSelf: 'auto',
    ChildDFlex: 'none',
    ChildDOrder: '0',

  };
  this.handleInputChange = this.handleInputChange.bind(this);
}

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
    [name]: value

  });
}

  render() {

    const flexObj = {
      display: 'flex',
      flexDirection: this.state.flexDirection,
      flexWrap: this.state.flexWrap,
      justifyContent: this.state.justifyContent,
      alignItems: this.state.alignItems,
      alignContent: this.state.alignContent,
          }

    const theme = {
      parent: {
        bgColor: this.state.bgColorParent,
        ...(this.state.isDisplayFlex ?  flexObj : {}),
      },
        childA: {
          alignSelf: this.state.ChildAAlignSelf,
          flex: this.state.ChildAFlex,
          order: this.state.ChildAOrder
        },
        childB: {
          alignSelf: this.state.ChildBAlignSelf,
          flex: this.state.ChildBFlex,
          order: this.state.ChildBOrder
        },
        childC: {
          alignSelf: this.state.ChildCAlignSelf,
          flex: this.state.ChildCFlex,
          order: this.state.ChildCOrder
        },
        childD: {
          alignSelf: this.state.ChildDAlignSelf,
          flex: this.state.ChildDFlex,
          order: this.state.ChildDOrder
        },

    }
    return (
        <StyledSection>


          <StyledInputSection>
            <h2>
              Parent Styles
            </h2>
            <StyledDiv>
              <label>
                Parent has display Flex?
                <input type="checkbox" name="isDisplayFlex" checked={this.state.isDisplayFlex} onChange={this.handleInputChange}/>
              </label>
            </StyledDiv>

            <DropDown
              onChange={this.handleInputChange}
              value={this.state.value}
              name="bgColorParent"
              options={[{name: 'blue'}, {name: 'red'}, {name: 'gray'} ]}
            />

            {this.state.isDisplayFlex ?
              <StyledInputSection>
                <DropDown
                  onChange={this.handleInputChange}
                  value={this.state.value}
                  name="flexDirection"
                  options={[{name: 'row'}, {name: 'row-reverse'}, {name: 'column'}, {name: 'column-reverse'} ]}
                />
                <DropDown
                  onChange={this.handleInputChange}
                  value={this.state.value}
                  name="flexWrap"
                  options={[{name: 'wrap'}, {name: 'nowrap'}, {name: 'wrap-reverse'} ]}
                />
                <DropDown
                  onChange={this.handleInputChange}
                  value={this.state.value}
                  name="justifyContent"
                  options={[{name: 'center'}, {name: 'flex-start'}, {name: 'flex-end'},{name: 'space-between'},{name: 'space-around'},{name: 'space-evenly'} ]}
                />
                <DropDown
                  onChange={this.handleInputChange}
                  value={this.state.value}
                  name="alignItems"
                  options={[{name: 'center'}, {name: 'flex-start'}, {name: 'flex-end'},{name: 'baseline'},{name: 'space-around'},{name: 'stretch'} ]}
                />

                <DropDown
                  onChange={this.handleInputChange}
                  value={this.state.value}
                  name="alignContent"
                  options={[{name: 'center'}, {name: 'flex-start'}, {name: 'flex-end'},{name: 'space-between'},{name: 'space-around'},{name: 'stretch'} ]}
                />
              </StyledInputSection>
            :
            undefined }
          </StyledInputSection>

          <StyledInputSection flex="1">
            <ThemeProvider theme={theme}>
              <Parent/>
            </ThemeProvider>

          </StyledInputSection>

          <StyledInputSection>
            <h2>
              Child Styles
            </h2>

            <DropDown
              onChange={this.handleInputChange}
              value={this.state.value}
              name="currChildStyleModifier"
              options={[{name: 'A'}, {name: 'B'}, {name: 'C'},{name: 'D'} ]}
            />

            <DropDown
              onChange={this.handleInputChange}
              value={this.state[`Child${this.state.currChildStyleModifier}AlignSelf`]}
              name={`Child${this.state.currChildStyleModifier}AlignSelf`}
              options={[{name: 'auto'}, {name: 'flex-start'}, {name: 'flex-end'},{name: 'center'},{name: 'baseline'},{name: 'stretch'} ]}
            />

            <DropDown
              onChange={this.handleInputChange}
              value={this.state[`Child${this.state.currChildStyleModifier}Flex`]}
              name={`Child${this.state.currChildStyleModifier}Flex`}
              options={[{name: 'none'}, {name: 1}, {name: 2},{name: 3},{name: 5}]}
            />
            <DropDown
              onChange={this.handleInputChange}
              value={this.state[`Child${this.state.currChildStyleModifier}Order`]}
              name={`Child${this.state.currChildStyleModifier}Order`}
              options={[{name: 0}, {name: 1}, {name: 2},{name: 3} ,{name: 4} ,{name: 5},{name: -1},{name: -2},{name: -3},{name: -4},{name: -5}]}
            />


          </StyledInputSection>


        </StyledSection>
    );
  }
}

export default Container;

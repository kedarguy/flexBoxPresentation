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
      test: this.state.test,
    }

    const theme = {
      parent: {
        bgColor: this.state.bgColorParent,
        ...(this.state.isDisplayFlex ?  flexObj : {}),

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
                  options={[{name: 'center'}, {name: 'flex-start'}, {name: 'flex-end'},{name: 'baseline'},{name: 'space-around'},{name: 'strech'} ]}
                />

                <DropDown
                  onChange={this.handleInputChange}
                  value={this.state.value}
                  name="alignContent"
                  options={[{name: 'center'}, {name: 'flex-start'}, {name: 'flex-end'},{name: 'space-between'},{name: 'space-around'},{name: 'strech'} ]}
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
          </StyledInputSection>

        </StyledSection>
    );
  }
}

export default Container;

import React from 'react';
import { Link } from 'react-router'
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';


let paperStyle = {
  display: 'inline-block',
  minWidth: '200px',
  marginRight: '0.5%',
  marginLeft: '0.5%',
  marginTop: '15px',
  marginBottom: '0px',
}

let buttonStyle = {
  position: 'absolute',
  bottom: '0px',
  height: '40px',
  width: '100%'
}

class MenuItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let element = this.props.element;
    paperStyle.height = element.height;
    paperStyle.width  = element.width;
    paperStyle.backgroundColor = element.color;

    return(
      <Paper
        className = "image-element-class"
        zDepth = {4}
        style = {paperStyle}
      >
        {/*<FlatButton style={buttonStyle} onClick={this.props.pageChange.bind(this,element.name)}>*/}
        <Link to={this.props.element.name}>
          <FlatButton style={buttonStyle}>
              {element.title}
          </FlatButton>
        </Link>
      </Paper>
    )
  }
}

export default MenuItem;

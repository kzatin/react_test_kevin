import React from "react";

/* import common utils */
import ScreenSize from '../HOC/screenSize'
import './test.css'


class Test extends React.Component {
  
  render() {
    const { width } = this.props.screenWidth;
    const {divHeight,changeDivHeight}=this.props;
       return (
      <div className="divBorder" style={{height:divHeight}}>
      <input defaultValue={divHeight.replace("px","")} onKeyUp={(e)=>changeDivHeight(e.target.value)}/>
      <span>Screen Width: {width}</span> 
       </div>
    );
  }
}


export default ScreenSize(Test) ;

import React, { Component } from 'react'

const ScreenSize = (OriginalComponent) =>{
    class NewComponent extends Component{
         state = {
        windowWidth: undefined,
      }
      handleResize = () => this.setState({
        windowWidth: window.innerWidth,
      });
    
      componentDidMount() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
      }
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
      }
        render(){
          
            return <OriginalComponent screenWidth={{width:this.state.windowWidth}} {...this.props}/>
        }
    }
    return NewComponent
}

export default ScreenSize;

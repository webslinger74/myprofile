import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  
        state = {
            width:0,
            sideDrawer:false
          }

    componentDidMount() {
           window.addEventListener('resize', this.updateWindowDimension);
           this.updateWindowDimension();       
        }

    updateWindowDimension = () => {
        this.setState({
            width:window.innerWidth
        })
    }

    showMenu = (e) => {
        this.setState({
            sideDrawer:!this.state.sideDrawer
        })
    }
    
    render() { 
       
      

        return (
            <div> 
                
               
                
                     {this.state.width >= 601 ? 
                     <div className="header">   
                      <div className="header__top">       
                    <div><Link className="header__top--menuItem" to="/">Home</Link></div>
                    <div><Link className="header__top--menuItem"to="/work">Work</Link></div>
                    <div><Link className="header__top--menuItem" to="/github">GitHub</Link></div>
                    <div><Link className="header__top--menuItem" to="/app">App</Link></div> 
                    <div><Link className="header__top--menuItem" to="/contact">Contact</Link></div>
                        </div>
                    <div className="header__bottom">
                   steven webster Full stack Web developer
                    </div> 
                    </div>
                
                        :  <div className="header-mobile">   
                       <div style={{fontSize:'50px'}}>This view is underconstruction</div>
                      {this.state.sideDrawer ?  
                      
                            <div className="header-mobile__bottom">
                      <div className="header-mobile__bottom--x" onClick={(e) => {this.showMenu()}}>X</div>  
                      <div className="header-mobile__bottom--menuItem"><Link style={{color:'Black',textDecoration:'none', textDecorationColor:'inherit'}} to="/">Home</Link></div>
                      <div className="header-mobile__bottom--menuItem"><Link style={{color:'Black',textDecoration:'none'}} to="/work">Work</Link></div>
                      <div className="header-mobile__bottom--menuItem"><Link style={{color:'Black',textDecoration:'none'}} to="/github">GitHub</Link></div>
                      <div className="header-mobile__bottom--menuItem"><Link style={{color:'Black',textDecoration:'none'}} to="/app">App</Link></div> 
                      <div className="header-mobile__bottom--menuItem"><Link style={{color:'Black',textDecoration:'none'}} to="/contact">Contact</Link></div>
                          </div> :  <div className="header-mobile__top">  
                      <div className="header-mobile__top--menuItem" onClick={(e) => {this.showMenu()}}>Menu</div>  
                      </div> }
                    
                      </div> }
                
             

            
                
            </div>
          );
    }
}
 
export default Header;
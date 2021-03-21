import React from 'react';
import './App.css';
let img_arr = [
    {
      id: 0,
      image:
        " https://images.unsplash.com/photo-1612640975490-497b68f80639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1614357235247-99fabbee67f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1613557029019-e536807463dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        id: 3,
        image:
          "https://images.unsplash.com/photo-1613557029019-e536807463dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
      },
      {
        id: 4,
        image:
          "https://images.unsplash.com/photo-1613557029019-e536807463dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
      }
  ];


  class App extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {idx:0};
      }
      shouldComponentUpdate() {
        return true;
      }
      next = () => {
        let total = img_arr.length-1
        this.state.idx === total ? this.setState({idx: this.state.idx}):this.setState({idx: this.state.idx+1});
        
      }
      prev = () => {
        let nada = 0
        this.state.idx === nada ? this.setState({idx: this.state.idx}):this.setState({idx: this.state.idx-1});
      }      
      jump = (i) =>{          
          this.setState({idx:  parseInt(i.target.id) })
          
      }
    render() {        

        return (
        <main>
            
            <div onClick={this.prev} className="trig l-trig" id="left">
                <span></span>
                <span></span>
            </div>
    
            <div onClick={this.next} className="trig r-trig" id="right">
                <span></span>
                <span></span>
            </div>
            <div id="limite">
                <img src={img_arr[this.state.idx].image} alt="" key="89" id="display_img"/>   
                {img_arr.map((a)=>            
                <span>                
                    <img onClick={this.jump} src={a.image} key={a.id+'img'} alt="" id={a.id} className="gal_img"/>
                </span>
                )}  
            </div>
            
             
        </main>
        );
      }
  };
  



export default App;

import React from 'react';
import './App.css';
import face from './media/024-facebook.svg';
import whats from './media/109-whatsapp.svg';
import insta from './media/044-instagram.svg';
let img_arr = [
    {galeria:[
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
            "https://cdn.pixabay.com/photo/2014/04/14/20/11/pink-324175_960_720.jpg"
        },
        {
            id: 4,
            image:
            "https://images.unsplash.com/photo-1613557029019-e536807463dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400"
        }
    ]},
    {
        descricao: "Quando passou por testes, Jesus orou “com fortes clamores e lágrimas”. (Heb. 5:7) As orações fervorosas dele mostraram que seu coração era leal a Jeová e o ajudaram a não desistir de ser obediente. Para Jeová, as orações de Jesus eram como o aroma doce e agradável de um incenso. O modo como Jesus viveu deixou Jeová muito feliz. E Jesus provou que a maneira de seu Pai governar é realmente a melhor. Nós também podemos imitar Jesus. Como? Por fazer o nosso máximo para obedecer a Jeová e ser leal a ele. Quando passar por testes, ore de todo o coração pedindo que Jeová o ajude a fazer o que agrada a ele. Assim, você mostra que apoia o modo de Jeová governar. Além disso, lembre-se que Jeová não vai aceitar nossas orações se estivermos fazendo coisas que ele odeia. Por outro lado, se estivermos fazendo o que é certo, Jeová vai aceitar nossas orações sinceras. Elas serão para ele como incenso agradável. Tenha certeza de que sua integridade e sua obediência deixam Jeová muito feliz. w19.11 21-22 §§ 7-8",
        servicos: [{ nome: 'fachina', valor:"12,00" },{ nome: 'cuidar de idoso', valor:"120,00" }, { nome: 'cuidar de criança', valor:"150,00" }]
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
        let total = img_arr[0].galeria.length-1
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
                <div id="responsive">                        
                    <div id="gallery">
                        <div onClick={this.prev} className="trig l-trig" id="left">
                            <span></span>
                            <span></span>
                        </div>
                
                        <div onClick={this.next} className="trig r-trig" id="right">
                            <span></span>
                            <span></span>
                        </div>
                        <div id="limite">
                            <img src={img_arr[0].galeria[this.state.idx].image} alt="" key="89" id="display_img"/>   
                            {img_arr[0].galeria.map((a,b)=>            
                            <span>                
                                <img onClick={this.jump} src={a.image} key={b} alt="" id={a.id} className="gal_img"/>
                            </span>
                            )}  
                        </div>
                    </div>
                    <div id="contact">
                        <div id="lista">
                            <div id="serviços">
                                {img_arr[1].servicos.map((c,d)=>
                                    <p id="bold" key={d+'a'}>{c.nome}</p>
                                )}
                            </div>
                            <div id="valores">
                                {img_arr[1].servicos.map((e,f)=>
                                    <p key={f+'bs'}>{e.valor}</p>
                                )} 
                            </div>
                        </div>
                        <div id="media"> 
                            <span>
                                    <p id="bold" class="center">
                                        Fale conosco
                                    </p>
                            </span>                               
                            <span id="listas_medias">
                                <a  target="_blank" rel="noreferrer" href="https://www.facebook.com/deivid.almeida.9803">
                                    <img id="face" className="icone"  src={face} alt=""/>
                                </a>
                                <a  target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5575992581723">
                                    <img id="whats" className="icone"  src={whats} alt=""/>
                                </a>
                                <a  target="_blank" rel="noreferrer" href="http://instagram.com/_u/mr.davialmeida/">
                                    <img id="whats" className="icone"  src={insta} alt=""/>
                                </a>
                            </span>
                        </div> 
                    </div>
                </div>                  
                <div id="descricao">
                    <b>Descrição</b>
                    <p>{img_arr[1].descricao}</p>
                </div>
            </main>
        );
      }
  };
  



export default App;

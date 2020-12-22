import React, { useState, useEffect } from 'react';
import personagens from '../../arquivos/array_chars_narutoarena.json'
import equipes from '../../arquivos/equipes_naruto-arena.json'

 import { Container } from './styles';

 //import ReactGA from 'react-ga';
 //ReactGA.pageview('/pesquisar')


 const App = props => {

//console.log(result)
    document.title = "Buscar Equipes"

    var list = personagens;

    const[pesquisa, setPesquisa] = useState('0000');
    const[lista, setLista] = useState(list);
    const[mostrando, setMostrando] = useState('');

    //setLista(list)

    useEffect(()=> {
        async function setar(){
           if(pesquisa===''){
               setPesquisa('0000')
              
           }
        }
        setar();
    }, [pesquisa])

    useEffect(()=> {
        //document.getElementById(mostrando).style.display='block'
    }, [mostrando])



    
    async function mostrarEstrategia(e,char1,char2,char3){

        //console.log(`${char1}, ${char2}, ${char3} >> ${pesquisa}`)
/*
        ReactGA.event({
            char1,
            char2,
            char3,
            pesquisa
          })


            

            ReactGA.event({
                category: 'Buscou por '+pesquisa,
                action: 'Clicado para detalhes',
                label: [char1, char2, char3].toString()
            });
            
            ReactGA.pageview('/pesquisar')

*/


        setMostrando('estrategia'+e.target.id)
        
    }

    function abrirPerfil(user){
        window.open('https://naruto-arena.net/en/profile/'+user, '_blank');

    }




  return (
      <Container>
          
        <div id='body'>
            
            <p className='titulo'>N-A Equipe Helper</p>
            <p className='descricao'>Basta digitar o personagem que precisa de equipe e indicaremos sugestões com estratégias</p>

            <div className='barra'>
                <input 
                    type="text" 
                    id='nome_personagem' 
                    placeholder='Digite aqui o nome do personagem'
                    onChange={e => { setPesquisa(e.target.value); setMostrando('')}}
                    autoComplete="off"
                    />
            </div>

            <div id='lista'>
            {equipes.Plan1.filter(equipe => 
            
            equipe['CHAR 1'].toLowerCase().includes(pesquisa.toLowerCase())
            ||
            equipe['CHAR 2'].toLowerCase().includes(pesquisa.toLowerCase())
            ||
            equipe['CHAR 3'].toLowerCase().includes(pesquisa.toLowerCase())
            ).map((time, i)=>(
                //console.log(time)
                <div key={i} className='conteudo'>
                    <div className='fotos'>
                        <img src={lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 1'].toLowerCase();}).length>0?lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 1'].toLowerCase();})[0].foto:''}></img>
                        <img src={lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 2'].toLowerCase();}).length>0?lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 2'].toLowerCase();})[0].foto:''}></img>
                        <img src={lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 3'].toLowerCase();}).length>0?lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 3'].toLowerCase();})[0].foto:''}></img>
                    </div>
                    <p id={i} style={{display: mostrando=='estrategia'+i?"none":"block"}} onClick={e=>mostrarEstrategia(e,time['CHAR 1'],time['CHAR 2'],time['CHAR 3'],pesquisa )}  className='verEstrategia'>ver estrategia</p>
                    <div id={'estrategia'+i} style={{display: mostrando=='estrategia'+i?"block":"none",marginTop:'10px'}}  className='estrategia'>
                        {time['ESTRATEGIA']}
                        <p id={'recomendado'+i} style={{marginTop:'2px', display: time['RECOMENDADO']!=null?"block":"none"}} onClick={e=>abrirPerfil(time['RECOMENDADO'])}  className='verEstrategia'>Recomendado por {time['RECOMENDADO']}</p>
                    
                    </div>
                    
 
                </div>



            
                

            ))}
            
            </div>
        </div>
          
          
      </Container>
  );
}
export default App;

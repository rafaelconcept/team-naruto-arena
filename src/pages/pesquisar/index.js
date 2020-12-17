import React, { useState, useEffect } from 'react';
import personagens from '../../arquivos/array_chars_narutoarena.json'
import equipes from '../../arquivos/equipes_naruto-arena.json'

 import { Container } from './styles';

 const App = props => {

//console.log(result)


    var list = personagens;

    const[pesquisa, setPesquisa] = useState('0000');
    const[foto, setFoto] = useState('');
    const[lista, setLista] = useState(list);
    

    //setLista(list)

    useEffect(()=> {
        async function setar(){
           if(pesquisa===''){
               setPesquisa('0000')
           }
        }
        setar();
    }, [pesquisa])








var fotinha = ''
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
                    onChange={e => setPesquisa(e.target.value)}
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
                <div className='conteudo'>
                    <div className='fotos'>
                        <img src={lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 1'].toLowerCase();}).length>0?lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 1'].toLowerCase();})[0].foto:''}></img>
                        <img src={lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 2'].toLowerCase();}).length>0?lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 2'].toLowerCase();})[0].foto:''}></img>
                        <img src={lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 3'].toLowerCase();}).length>0?lista.filter(function(personagem) {return personagem.nome.toLowerCase() == time['CHAR 3'].toLowerCase();})[0].foto:''}></img>
                    </div>
                    <div className='estrategia'>{time['ESTRATEGIA']}</div>
                
                </div>



            
                

            ))}
            
            </div>
        </div>
          
          
      </Container>
  );
}
export default App;

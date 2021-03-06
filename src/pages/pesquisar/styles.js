import styled from 'styled-components';

export const Container = styled.div`

    .verEstrategia{
        cursor:pointer;
        color:blue;
        text-align:center;
    }

    .titulo{
        font-size:30px;
        font-family: Arial, Helvetica, sans-serif
        
    }
    .descricao{
        text-align:center;
        margin-top:-10px;
        font-size:15px;
        font-family: Arial, Helvetica, sans-serif
        
    }
    input{
        width:300px;
        height:30px;
        font-size:15px;
    }
    #body{
        display:flex;
        flex-direction:column;
        align-items:center;
        
    }

    .barra{
        margin-top:30px;
        display:flex;
        flex-direction:row;
        justify-content:center;
        
    }

  #lista, #novos{
    display:flex;
    flex-wrap: wrap;
    justify-content:center;
    
  }
  #lista_inferior{
      display:flex;
      flex-direction:column;
      align-items:center;
      margin-top:15px;
  }
  .conteudo{
      padding:5px;
      display:flex;
      flex-direction:column;
      margin-top:15px;
      width: 300px;
      margin-left:3px;
     // justify-content: center;
      //color:red;
      border:solid 1px black;
      border-radius:5px;
  }
  .fotos{
     
     display:flex;
     flex-direction:row;
     justify-content: center;
     height:75px;
     
      //color:red;
  }
  img{
      margin-right:5px;
  }
  .estrategia{
      text-align:center;
      width:300px;
  }
`;

import Routes from './routes';
import Pagina from './pages/pesquisar/index'
import ReactGA from 'react-ga';
import $ from 'jquery'; 
 
function initializeAnalytics(){
  //const trackingId = ""; // Replace with your Google Analytics tracking ID
  ReactGA.initialize('UA-185771961-1', {
    debug: false,
    titleCase: false,
    gaOptions: {
      //userId: 123
    }
    

  });
  ReactGA.pageview('/pesquisar')

  
  //ReactGA.set({
   //userId: auth.currentUserId(),
   // any data that is relevant to the user session
   // that you would like to track with google analytics
 //})

}
 

function App() {
  
  initializeAnalytics()
  return (
    <>
 
      <Pagina/> 
    </>
  )
}

export default App;

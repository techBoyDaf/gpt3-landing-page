import './App.css';
import {Cta,Brand,Navbar} from './components';
import {Features,Footer,Header,Possibility,Whatgpt3,Blog} from './containers';

function App() {
  return (
    <div className="App">    

      <div className="gradient__bg">
       <Navbar />
       <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;

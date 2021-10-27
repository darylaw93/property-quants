import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <NavBar item justify="flex-end"/>
      <Body/>
    </div>
  );
}

export default App;

import './App.css';
import './header.css';
import './body.css';
import Header from './header.js';
import Body from './Body.js';
import History from './history.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header />
      </header>
      <Body />
      < History />
    </div>
  );
}

export default App;

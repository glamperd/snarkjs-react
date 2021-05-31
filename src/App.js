import logo from './logo.svg';
import './App.css';
import {zKey} from 'snarkjs';

async function contribute() {
  const progressOptions = {
    progressCallback: (val, total) => console.log(`snarkjs-react progress = ${val} of ${total}`)
  }
  let fd =  { type: "mem" };
  const hash =
        await zKey.contribute( "/data/c16_0404_amsimoes.zkey", fd, 
          "contributor #2", "010a020b030d040f0r050g0tkalasdkasd", console, progressOptions);

  //hashComponent.innerHTML = JSON.stringify(hash, null, 1);
  console.log(`hash = ${JSON.stringify(hash)}`);
}


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button id="bContrib" onClick={contribute}> Contribute </button>
        <pre > Hash: <code id="hash"></code></pre>

      </header>
    </div>
  );
}

export default App;

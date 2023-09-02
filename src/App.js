
import './App.css';

function App() {


  let years = 80;
  let lived = 21.9;
  let weeks = Math.floor(years * 52.14);
  let weeks_lived = Math.floor(lived * 52.14);


  return (
    <div className="App">
      <h1>{"¿Cuanto tiempo te queda?"}</h1>
      <div className="week_container">
        {Array.from({length: weeks}, (_, i) => <div key={i} className={"week" + (i <= weeks_lived ? ' lived' : '') + (i % 520 == 0 ? ' year' : '')}/>)}
      </div>
    </div>
  );
}

export default App;

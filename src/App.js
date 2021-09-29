import './App.scss';

function App() {
  return (
    <div className="container">
      {
        [...Array(64).keys()].map((i) => {
          return (
            <div key={i} className="dot glow">
              <div className="inner"/>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;

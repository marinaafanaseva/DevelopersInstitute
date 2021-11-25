import Counter from './Counter'
import ErrorBoundary from './ErrorBoundary'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ErrorBoundary>
          <Counter/>
          <Counter/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Counter/>
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { SearchPage } from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🎵 Rishi's Cute Music Store 💖</h1>
        <p>Find your favorite tunes with a touch of sparkle!</p>
      </header>

      <main>
        <SearchPage />
      </main>

      <footer className="footer">
        Made with 💕 by Rishita
      </footer>
    </div>
  );
}

export default App;

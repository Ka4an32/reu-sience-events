import IndexRouter from './routers/IndexRouter';
import './global/fonts.scss';

function App() {
  return (
    <div>
      <IndexRouter />
      <main className="main-container">
        <header className="main-header">HEADER</header>
        <div className="main-content">MAIN CONTENT</div>
        <footer className="main-footer">FOOTER</footer>
      </main>
    </div>
  );
}

export default App;

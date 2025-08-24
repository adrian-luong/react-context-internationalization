import logo from './logo.svg';
import './App.css';
import { LocaleProvider } from './context/locale.context';
import AppContent from './components/app.content';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocaleProvider>
          <img src={logo} className="App-logo" alt="logo" />
          <AppContent />
        </LocaleProvider>
      </header>
    </div>
  );
}

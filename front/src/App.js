import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import WizardPage from './pages/WizardPage/WizardPage';
import SpellPage from './pages/SpellPage/SpellPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
      <AppProvider>
          <>
            <Header /> 
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/wizards" element={<WizardPage />} />
              <Route path="/spells" element={<SpellPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </>
      </AppProvider>
  );
}

export default App;

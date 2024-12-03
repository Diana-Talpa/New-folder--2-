import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import WizardPage from './pages/WizardPage/WizardPage';
import SpellPage from './pages/SpellPage/SpellPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import WizardDetails from './pages/WizardDetailsPage/WizardDetails';
import SpellDetails from './pages/SpellDetailsPage/SpellDetails';

import { AppProvider } from './contexts/AppContext';

function App() {
  return (
      <AppProvider>
          <>
            <Header /> 
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/wizards" element={<WizardPage />} />
              <Route path="/wizard/:id" element={<WizardDetails />} />
              <Route path="/spells" element={<SpellPage />} />
              <Route path="/spells/:id" element={<SpellDetails />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer/>

          </>
      </AppProvider>
  );
}

export default App;

import { Header, Footer, Main, Technology, Contacts, About } from './modules';
import { AppContainer } from './AppContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.scss';

function App() {
  return (
    <div className='app'>
      <Router>
        <AppContainer>
          <Header />
          <main>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/technology' element={<Technology />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </main>
          <Footer />
        </AppContainer>
      </Router>
    </div>
  );
}

export default App;

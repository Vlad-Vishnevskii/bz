import { Header, Footer, Main, Technology } from './modules';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.scss';

function App() {
  const About = () => <h2>Контакты</h2>;

  return (
    <div className='app'>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

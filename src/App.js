import { useState } from 'react';
import { useBoolean } from './hooks';
import {
  Header,
  Footer,
  Main,
  Technology,
  Contacts,
  About,
  Projects,
  Vacancy,
  Casino,
  Bison,
  SportBet,
  Fincrm,
  Ostapilet,
  Finbet,
  Bfc,
  Alfa,
  SendStatusModal,
} from './modules';
import NotFound from './modules/Errors/404/404';
import { MODAL_STATE } from './constants';

import { AppContainer } from './AppContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/styles.scss';

function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: MODAL_STATE.SUCCESS,
  });
  const [modalIsOpen, setIsOpen] = useBoolean(false);

  const handleClose = () => {
    setModalState({
      isOpen: false,
      type: MODAL_STATE.SUCCESS,
    });
  };

  return (
    <div className="app">
      <Router basename="/Vlad-Vishnevskii/bz">
        <AppContainer>
          <Header
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            setModalState={setModalState}
          />
          <main>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/technology" element={<Technology />} />
              <Route
                path="/contacts"
                element={
                  <Contacts
                    modalState={modalState}
                    setModalState={setModalState}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/projects">
                <Route index element={<Projects />} />
                <Route path="casino" element={<Casino />} />
                <Route path="bison" element={<Bison />} />
                <Route path="sportbet" element={<SportBet />} />
                <Route path="fin-crm" element={<Fincrm />} />
                <Route path="ostapilet" element={<Ostapilet />} />
                <Route path="finbet" element={<Finbet />} />
                <Route path="bfc" element={<Bfc />} />
                <Route path="alfa" element={<Alfa />} />
              </Route>
              <Route
                path="/vacancy"
                element={<Vacancy setModalState={setModalState} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <SendStatusModal modalState={modalState} handleClose={handleClose} />
        </AppContainer>
      </Router>
    </div>
  );
}

export default App;

import Authorizer from "../authorizer";
import Register from "../register/Register";
import ConfirmationPage from "../confirmationPage";
import NoLetterPage from "../noLetterPage";
import RestorePasswordPage from "../restorePasswordPage";
import HomePage from "../homePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Authorizer />} />
          <Route exact path="/registration" element={<Register />} />
          <Route exact path="/confirmation" element={<ConfirmationPage />} />
          <Route exact path="/no_letter_page" element={<NoLetterPage />} />
          <Route exact path="/restore_password_page" element={<RestorePasswordPage />} />
          <Route exact path="/home" element={<HomePage />} />
          {/* <Route path='*' element={<h1>Страница не найдена</h1>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './assets/SignUp.jsx';
import Header from './assets/Header.jsx';
import './assets/Style.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={
          <div>
            <p>This is just practice purpose. I just learned how to create forms in react using the Formik library (along with Yup)! The forms will include validation, error states, submit handlers, custom inputs, and more! Click Sign-Up page</p>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;

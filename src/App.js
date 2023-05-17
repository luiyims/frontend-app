import React from "react";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { AppRouter } from './router/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter/>
      <Footer />
    </div>
  );
}

export default App;

import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./router/main";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Layout/Header";
import AuthProvider from "./pages/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

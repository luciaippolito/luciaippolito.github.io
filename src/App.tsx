import './i18n';
import { HashRouter, Route, Routes } from "react-router";
import Homepage from './pages/Homepage';
import Experience from './pages/Experience';
import About from './pages/About';
import ScrollToTop from './components/snippets/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"      element={<Homepage />} />
        <Route path="/exp"   element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}

export default App
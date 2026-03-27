import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Process from './pages/Process';
import Texas from './pages/Texas';
import Louisiana from './pages/Louisiana';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Router basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/index" element={<Home />} />
                  <Route path="/index.html" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/process" element={<Process />} />
                  <Route path="/texas" element={<Texas />} />
                  <Route path="/louisiana" element={<Louisiana />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
      <Analytics />
    </>
  );
}

export default App;

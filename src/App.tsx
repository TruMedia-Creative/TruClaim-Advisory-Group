import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Home from './pages/Home';
import Brokerages from './pages/Brokerages';
import Mjak from './pages/Mjak';
import Contact from './pages/Contact';
import Philosophy from './pages/Philosophy';
import PartnerLogin from './pages/PartnerLogin';
import PartnerPortal from './pages/PartnerPortal';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Partner routes without main layout */}
          <Route path="/partner-login" element={<PartnerLogin />} />
          <Route
            path="/partner"
            element={
              <ProtectedRoute>
                <PartnerPortal />
              </ProtectedRoute>
            }
          />

          {/* Main site routes with layout */}
          <Route
            path="/*"
            element={
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/brokerages" element={<Brokerages />} />
                  <Route path="/mjak" element={<Mjak />} />
                  <Route path="/philosophy" element={<Philosophy />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

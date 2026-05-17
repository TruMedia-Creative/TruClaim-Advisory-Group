import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Process = lazy(() => import('./pages/Process'));
const Texas = lazy(() => import('./pages/Texas'));
const Louisiana = lazy(() => import('./pages/Louisiana'));
const NotFound = lazy(() => import('./pages/NotFound'));

const RouteFallback = () => <div className="min-h-[40vh] bg-parchment-50" aria-hidden="true" />;

const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<RouteFallback />}>{element}</Suspense>
);

function App() {
  const shouldLoadVercelTelemetry = import.meta.env.PROD;

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
                  <Route path="/services" element={withSuspense(<Services />)} />
                  <Route path="/process" element={withSuspense(<Process />)} />
                  <Route path="/texas" element={withSuspense(<Texas />)} />
                  <Route path="/louisiana" element={withSuspense(<Louisiana />)} />
                  <Route path="/about" element={withSuspense(<About />)} />
                  <Route path="/contact" element={withSuspense(<Contact />)} />
                  <Route path="*" element={withSuspense(<NotFound />)} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
      {shouldLoadVercelTelemetry ? (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      ) : null}
    </>
  );
}

export default App;

import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { MinimalLayout } from './layouts/MinimalLayout';
import { HomePage } from './pages/HomePage';
import { RequestTutorPage } from './pages/RequestTutorPage';
import { BecomeTutorPage } from './pages/BecomeTutorPage';
import { SubjectsPage } from './pages/SubjectsPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ContactPage } from './pages/ContactPage';
import { ROUTES } from './constants/routes';

/**
 * App — root component with React Router setup
 * Configured for Vercel deployment (BrowserRouter)
 */
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Main layout routes (with Navbar + Footer) */}
        <Route element={<MainLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.REQUEST_TUTOR} element={<RequestTutorPage />} />
          <Route path={ROUTES.BECOME_TUTOR} element={<BecomeTutorPage />} />
          {/* Stub pages — to be built in future iterations */}
          <Route path={ROUTES.TUTORS} element={<div className="py-32 text-center text-neutral-400">Tutors page coming soon</div>} />
          <Route path={ROUTES.SERVICES} element={<SubjectsPage />} />
          <Route path={ROUTES.ABOUT} element={<div className="py-32 text-center text-neutral-400">About page coming soon</div>} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
          <Route path={ROUTES.TERMS} element={<TermsPage />} />
        </Route>

        {/* Minimal layout routes (no Navbar/Footer) */}
        <Route element={<MinimalLayout />}>
          <Route path={ROUTES.THANK_YOU} element={<ThankYouPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
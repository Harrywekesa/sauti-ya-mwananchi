import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProposalsPage } from './pages/ProposalsPage';
import { ProposalDetailPage } from './pages/ProposalDetailPage';
import { NewProposalPage } from './pages/NewProposalPage';
import { RepresentativesPage } from './pages/RepresentativesPage';
import { DashboardPage } from './pages/DashboardPage';
import { TransparencyPage } from './pages/TransparencyPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { SearchPage } from './pages/SearchPage';
import { SettingsPage } from './pages/SettingsPage';
import { VotePage } from './pages/VotePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AccessibilityPage } from './pages/AccessibilityPage';
import { DataProtectionPage } from './pages/DataProtectionPage';
import { RepresentativeDetailPage } from './pages/RepresentativeDetailPage';
import { UserProvider } from './context/UserContext';
import '../styles/globals.css';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/proposals" element={<ProposalsPage />} />
              <Route path="/proposals/new" element={<NewProposalPage />} />
              <Route path="/proposal/:id" element={<ProposalDetailPage />} />
              <Route path="/vote" element={<VotePage />} />
              <Route path="/representatives" element={<RepresentativesPage />} />
              <Route path="/representative/:id" element={<RepresentativeDetailPage />} />
              <Route path="/representative/:id/proposals" element={<RepresentativeDetailPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/transparency" element={<TransparencyPage />} />
              <Route path="/admin" element={<AdminDashboardPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/accessibility" element={<AccessibilityPage />} />
              <Route path="/data-protection" element={<DataProtectionPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}
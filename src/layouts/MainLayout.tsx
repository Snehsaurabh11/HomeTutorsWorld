import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

/**
 * MainLayout — wraps all marketing pages with Navbar and Footer
 * Usage: wrap routes with this layout in the router
 */
export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      {/* pt-16 offsets the fixed navbar height */}
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

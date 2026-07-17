import { Link } from 'react-router-dom';
import { Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="mb-4">About Wananchi Voice</h3>
            <p className="text-gray-600 mb-4">
              Empowering Kenyan citizens to participate directly in governance through transparent, accessible digital democracy.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-600 hover:text-kenya-green" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-kenya-green" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-kenya-green" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/proposals" className="text-gray-600 hover:text-kenya-green">
                  View Proposals
                </Link>
              </li>
              <li>
                <Link to="/vote" className="text-gray-600 hover:text-kenya-green">
                  Vote Now
                </Link>
              </li>
              <li>
                <Link to="/representatives" className="text-gray-600 hover:text-kenya-green">
                  Representatives
                </Link>
              </li>
              <li>
                <Link to="/transparency" className="text-gray-600 hover:text-kenya-green">
                  Transparency
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4">Legal & Privacy</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-kenya-green">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-kenya-green">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-gray-600 hover:text-kenya-green">
                  Accessibility
                </Link>
              </li>
              <li>
                <Link to="/data-protection" className="text-gray-600 hover:text-kenya-green">
                  Data Protection
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Parliament Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@wananchivoice.go.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>© 2025 Wananchi Voice Platform. All rights reserved. Republic of Kenya.</p>
          <p className="mt-2">
            Built with transparency and accessibility for all Kenyan citizens.
          </p>
        </div>
      </div>
    </footer>
  );
}

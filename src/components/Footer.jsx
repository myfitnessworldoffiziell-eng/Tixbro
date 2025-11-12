import {
  Ticket,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
} from 'lucide-react';

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
    ],
    Support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'FAQs', href: '#' },
      { name: 'Payment Options', href: '#' },
    ],
    Services: [
      { name: 'Bus Tickets', href: '#' },
      { name: 'Movie Tickets', href: '#' },
      { name: 'Theater Shows', href: '#' },
      { name: 'Concerts', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Refund Policy', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  const paymentMethods = [
    'Visa',
    'Mastercard',
    'PayPal',
    'UPI',
    'Paytm',
    'Google Pay',
  ];

  return (
    <footer
      className={`border-t ${
        darkMode
          ? 'border-gray-800 bg-gray-900'
          : 'border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Tixbro
              </span>
            </div>
            <p
              className={`text-sm mb-6 max-w-xs ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Your gateway to entertainment and travel across India. Book bus
              tickets, movie tickets, theater shows, and concerts all in one
              place.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Mail
                  className={`w-4 h-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                />
                <a
                  href="mailto:support@tixbro.com"
                  className={`hover:text-orange-600 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  support@tixbro.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone
                  className={`w-4 h-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                />
                <a
                  href="tel:+911234567890"
                  className={`hover:text-orange-600 transition-colors ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin
                  className={`w-4 h-4 mt-0.5 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                />
                <span
                  className={darkMode ? 'text-gray-400' : 'text-gray-600'}
                >
                  123, MG Road, Mumbai, Maharashtra, India
                </span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className={`font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`text-sm hover:text-orange-600 transition-colors ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links & Payment Methods */}
        <div
          className={`py-6 border-t ${
            darkMode ? 'border-gray-800' : 'border-gray-200'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span
                className={`text-sm font-medium ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Follow Us:
              </span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-2 rounded-lg transition-all hover:scale-110 ${
                      darkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span
                className={`text-sm font-medium ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                We Accept:
              </span>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method}
                    className={`px-3 py-1 rounded text-xs font-medium ${
                      darkMode
                        ? 'bg-gray-800 text-gray-400'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`py-6 border-t text-center ${
            darkMode
              ? 'border-gray-800 text-gray-400'
              : 'border-gray-200 text-gray-600'
          }`}
        >
          <p className="text-sm flex items-center justify-center gap-2 flex-wrap">
            <span>© {currentYear} Tixbro. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" />{' '}
              in India
            </span>
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all hover:scale-110 z-40 ${
          darkMode
            ? 'bg-gray-800 hover:bg-gray-700 text-white'
            : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200'
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;

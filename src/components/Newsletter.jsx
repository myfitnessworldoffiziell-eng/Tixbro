import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Newsletter = ({ darkMode }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-500'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`p-12 rounded-3xl ${
            darkMode ? 'bg-gray-800/50' : 'bg-white/10 backdrop-blur-lg'
          } shadow-2xl animate-scale-in border ${
            darkMode ? 'border-gray-700' : 'border-white/20'
          }`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 animate-bounce-slow">
            <Mail className="w-8 h-8 text-orange-500" />
          </div>

          {/* Heading */}
          <h2
            className={`text-4xl sm:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-white'
            }`}
          >
            Never Miss a Deal!
          </h2>

          {/* Subheading */}
          <p
            className={`text-xl mb-8 ${
              darkMode ? 'text-gray-300' : 'text-white/90'
            }`}
          >
            Subscribe to our newsletter and get exclusive offers, early access
            to events, and travel tips delivered to your inbox.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Exclusive Deals', 'Early Access', 'No Spam'].map((benefit) => (
              <div
                key={benefit}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  darkMode
                    ? 'bg-gray-700 text-gray-200'
                    : 'bg-white/20 text-white backdrop-blur-sm'
                }`}
              >
                {benefit}
              </div>
            ))}
          </div>

          {/* Form */}
          {!subscribed ? (
            <form
              onSubmit={handleSubmit}
              className={`flex flex-col sm:flex-row gap-3 max-w-md mx-auto`}
            >
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className={`w-full px-6 py-4 rounded-xl outline-none transition-all ${
                    darkMode
                      ? 'bg-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500'
                      : 'bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white'
                  }`}
                />
              </div>
              <button
                type="submit"
                className={`px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2 ${
                  darkMode
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
                    : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-2xl'
                }`}
              >
                Subscribe
                <Send className="w-5 h-5" />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-green-500 animate-fade-in">
              <CheckCircle className="w-6 h-6" />
              <span className="text-lg font-semibold">
                Successfully subscribed!
              </span>
            </div>
          )}

          {/* Privacy Note */}
          <p
            className={`text-sm mt-6 ${
              darkMode ? 'text-gray-400' : 'text-white/70'
            }`}
          >
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

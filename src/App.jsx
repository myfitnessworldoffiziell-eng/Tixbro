import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Search, MapPin, Calendar, Users, ChevronRight } from 'lucide-react';

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'shadow-md' : ''} ${darkMode ? 'bg-gray-900 border-b border-gray-800' : 'bg-white border-b border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-orange-600">Tixbro</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#movies" className={`hover:text-orange-600 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Movies</a>
            <a href="#events" className={`hover:text-orange-600 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Events</a>
            <a href="#travel" className={`hover:text-orange-600 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Travel</a>
            <a href="#sports" className={`hover:text-orange-600 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Sports</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="hidden md:block px-4 py-2 text-orange-600 hover:bg-orange-50 rounded-lg">Sign In</button>
            <button className="hidden md:block px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">Sign Up</button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden py-4 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <a href="#movies" className="block py-2 hover:text-orange-600">Movies</a>
            <a href="#events" className="block py-2 hover:text-orange-600">Events</a>
            <a href="#travel" className="block py-2 hover:text-orange-600">Travel</a>
            <a href="#sports" className="block py-2 hover:text-orange-600">Sports</a>
            <button className="w-full mt-2 px-4 py-2 text-orange-600 border border-orange-600 rounded-lg">Sign In</button>
            <button className="w-full mt-2 px-4 py-2 bg-orange-600 text-white rounded-lg">Sign Up</button>
          </div>
        )}
      </div>
    </header>
  );
};

const Hero = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState('movies');
  const [city, setCity] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-gradient-to-b from-orange-50 to-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Tickets for Movies, Events & More</h2>
          <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>India's largest ticket booking platform</p>
        </div>

        {/* Search Tabs */}
        <div className="max-w-3xl mx-auto">
          <div className="flex space-x-2 mb-4">
            {['movies', 'events', 'travel'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg capitalize ${activeTab === tab ? 'bg-orange-600 text-white' : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white shadow-lg'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center border rounded-lg px-3 py-2">
                <MapPin className="w-5 h-5 mr-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Select City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="flex-1 outline-none bg-transparent"
                />
              </div>
              <div className="md:col-span-2 flex items-center border rounded-lg px-3 py-2">
                <Search className="w-5 h-5 mr-2 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search for ${activeTab}...`}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none bg-transparent"
                />
                <button className="ml-2 px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MovieSection = ({ darkMode }) => {
  const movies = [
    {
      title: 'The Avatar Way of Water',
      image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=600&fit=crop',
      genre: 'Action, Sci-Fi',
      rating: '8.5/10',
      languages: 'English, Hindi, Tamil'
    },
    {
      title: 'Pathaan',
      image: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400&h=600&fit=crop',
      genre: 'Action, Thriller',
      rating: '7.8/10',
      languages: 'Hindi'
    },
    {
      title: 'RRR',
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop',
      genre: 'Action, Drama',
      rating: '8.9/10',
      languages: 'Telugu, Hindi, Tamil'
    },
    {
      title: 'Jawan',
      image: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop',
      genre: 'Action, Thriller',
      rating: '8.2/10',
      languages: 'Hindi, Tamil, Telugu'
    }
  ];

  return (
    <section id="movies" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Recommended Movies</h3>
          <a href="#" className="text-orange-600 hover:text-orange-700 flex items-center">
            See All <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {movies.map((movie, index) => (
            <div key={index} className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'} hover:shadow-xl transition-shadow cursor-pointer`}>
              <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h4 className="font-bold mb-1">{movie.title}</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>{movie.genre}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-orange-600">{movie.rating}</span>
                  <button className="px-3 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700">Book</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EventsSection = ({ darkMode }) => {
  const events = [
    {
      title: 'Sunburn Festival 2025',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=400&fit=crop',
      date: 'Dec 28-30, 2025',
      location: 'Goa',
      price: '₹2,999 onwards'
    },
    {
      title: 'Arijit Singh Live',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=400&fit=crop',
      date: 'Jan 15, 2026',
      location: 'Mumbai',
      price: '₹1,499 onwards'
    },
    {
      title: 'Stand-up Comedy Night',
      image: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=400&fit=crop',
      date: 'Jan 20, 2026',
      location: 'Bangalore',
      price: '₹699 onwards'
    }
  ];

  return (
    <section id="events" className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold">Live Events</h3>
          <a href="#" className="text-orange-600 hover:text-orange-700 flex items-center">
            See All <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div key={index} className={`rounded-lg overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'} hover:shadow-xl transition-shadow cursor-pointer`}>
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-lg mb-2">{event.title}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-orange-600">{event.price}</span>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-100 border-t border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Tixbro</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">Careers</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">Movies</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">Events</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">Travel</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">Help Center</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">FAQs</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">Facebook</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">Twitter</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-orange-600">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm text-gray-600 dark:text-gray-400 pt-8 border-t border-gray-300 dark:border-gray-700">
          © 2025 Tixbro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />
      <MovieSection darkMode={darkMode} />
      <EventsSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;

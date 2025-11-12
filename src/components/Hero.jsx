import { useState } from 'react';
import { Search, MapPin, Calendar, Ticket, Star } from 'lucide-react';

const Hero = ({ darkMode }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'Movies', 'Events', 'Travel', 'Theater'];

  const features = [
    { icon: Ticket, text: 'Instant Booking' },
    { icon: MapPin, text: 'Pan-India Coverage' },
    { icon: Calendar, text: 'Flexible Dates' },
    { icon: Star, text: 'Best Prices' },
  ];

  const popularSearches = [
    'Mumbai to Delhi Bus',
    'Latest Movies',
    'Concerts in Bangalore',
    'Theater Shows',
  ];

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: '1s' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Main Heading with animation */}
          <div className="animate-fade-in-down">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                Book Your Experience
              </span>
              <br />
              <span className={darkMode ? 'text-white' : 'text-gray-900'}>
                Anywhere in India
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p
              className={`text-xl sm:text-2xl max-w-3xl mx-auto ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              From bus rides to blockbusters, theater to concerts - your gateway
              to entertainment and travel across India
            </p>
          </div>

          {/* Category Tabs */}
          <div
            className="flex flex-wrap justify-center gap-3 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.toLowerCase()
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div
            className="max-w-4xl mx-auto animate-scale-in"
            style={{ animationDelay: '0.6s' }}
          >
            <div
              className={`flex items-center gap-2 p-2 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-orange-500/20 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="flex items-center flex-1 px-4">
                <Search
                  className={`w-6 h-6 ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for events, movies, buses..."
                  className={`flex-1 px-4 py-4 bg-transparent outline-none text-lg ${
                    darkMode
                      ? 'placeholder-gray-500 text-white'
                      : 'placeholder-gray-400 text-gray-900'
                  }`}
                />
              </div>

              <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
                Search
              </button>
            </div>

            {/* Popular Searches */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span
                className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                Popular:
              </span>
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(search)}
                  className={`text-sm px-3 py-1 rounded-full transition-all duration-300 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {search}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Features */}
          <div
            className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-white hover:bg-gray-50'
                } shadow-lg hover:shadow-xl`}
              >
                <feature.icon className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-12 flex flex-wrap justify-center items-center gap-8 text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            } animate-fade-in`}
            style={{ animationDelay: '1s' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-red-500 border-2 border-white dark:border-gray-900"
                  />
                ))}
              </div>
              <span className="font-medium">10M+ Happy Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">4.8/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">500+ Cities Covered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

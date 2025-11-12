import { Bus, Film, Music, Theater, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

const Categories = ({ darkMode }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    {
      icon: Bus,
      title: 'Bus Tickets',
      description: 'Book intercity and local bus tickets across India',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      count: '500+ Routes',
      features: ['AC & Non-AC', 'Sleeper & Seater', 'Live Tracking'],
      image:
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop',
    },
    {
      icon: Film,
      title: 'Movie Tickets',
      description: 'Latest blockbusters and regional cinema',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      count: '1000+ Screens',
      features: ['Latest Releases', 'Regional Cinema', 'Premium Seats'],
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop',
    },
    {
      icon: Theater,
      title: 'Theater Shows',
      description: 'Drama, comedy, and cultural performances',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      count: '200+ Venues',
      features: ['Live Drama', 'Comedy Shows', 'Cultural Events'],
      image:
        'https://images.unsplash.com/photo-1503095396549-807759245b35?w=400&h=300&fit=crop',
    },
    {
      icon: Music,
      title: 'Concerts',
      description: 'Live music, festivals, and artist performances',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      count: '150+ Events',
      features: ['Live Concerts', 'Music Festivals', 'Artist Meet & Greet'],
      image:
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 font-medium text-sm">
              Explore Categories
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>
              What Are You Looking For?
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Explore our wide range of booking options tailored for every need
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 cursor-pointer ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* Icon */}
                <div className="absolute top-4 left-4">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transition-transform duration-300 ${
                      hoveredIndex === index ? 'scale-110 rotate-6' : ''
                    }`}
                  >
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Count Badge */}
                <div className="absolute top-4 right-4">
                  <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                    <span className="text-white text-sm font-medium">
                      {category.count}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p
                  className={`mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {category.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {category.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center text-sm ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Explore Button */}
                <button
                  className={`group/btn flex items-center gap-2 font-medium transition-all duration-300 ${
                    hoveredIndex === index
                      ? 'text-orange-500'
                      : darkMode
                      ? 'text-gray-400'
                      : 'text-gray-600'
                  }`}
                >
                  <span>Explore Now</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredIndex === index ? 'translate-x-2' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Hover Effect Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Shadow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12 animate-fade-in-up">
          <button
            className={`group px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
              darkMode
                ? 'bg-gray-800 hover:bg-gray-700 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            } shadow-lg hover:shadow-xl`}
          >
            <span className="flex items-center gap-2">
              View All Categories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;

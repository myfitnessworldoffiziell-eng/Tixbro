import { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Clock,
  TrendingUp,
  Heart,
} from 'lucide-react';

const FeaturedEvents = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [liked, setLiked] = useState({});

  const events = [
    {
      id: 1,
      title: 'Sunburn Festival 2025',
      category: 'Music Festival',
      location: 'Goa, India',
      date: 'Dec 28-30, 2025',
      time: '6:00 PM onwards',
      price: '₹2,999',
      image:
        'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=500&fit=crop',
      trending: true,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Bollywood Night Live',
      category: 'Concert',
      location: 'Mumbai, Maharashtra',
      date: 'Jan 15, 2026',
      time: '7:00 PM',
      price: '₹1,499',
      image:
        'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&h=500&fit=crop',
      trending: true,
      rating: 4.6,
    },
    {
      id: 3,
      title: 'Stand-up Comedy Night',
      category: 'Comedy',
      location: 'Bangalore, Karnataka',
      date: 'Jan 20, 2026',
      time: '8:00 PM',
      price: '₹699',
      image:
        'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=800&h=500&fit=crop',
      trending: false,
      rating: 4.7,
    },
    {
      id: 4,
      title: 'Classical Dance Recital',
      category: 'Theater',
      location: 'Chennai, Tamil Nadu',
      date: 'Feb 5, 2026',
      time: '6:30 PM',
      price: '₹899',
      image:
        'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=500&fit=crop',
      trending: false,
      rating: 4.9,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
  };

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="events"
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode
          ? 'bg-gray-800/30'
          : 'bg-gradient-to-br from-orange-50 to-pink-50'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-pink-500" />
            <span className="text-pink-500 font-medium text-sm">
              Trending Now
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>
              Featured Events
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Don't miss out on these amazing experiences
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Slide */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                {/* Background Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-2xl">
                    {/* Trending Badge */}
                    {event.trending && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500 rounded-full mb-4">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Trending
                        </span>
                      </div>
                    )}

                    {/* Category */}
                    <p className="text-sm font-medium text-orange-400 mb-2">
                      {event.category}
                    </p>

                    {/* Title */}
                    <h3 className="text-4xl font-bold mb-4">{event.title}</h3>

                    {/* Details */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        <span>{event.time}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all hover:scale-105">
                        Book Now - {event.price}
                      </button>
                      <button
                        onClick={() => toggleLike(event.id)}
                        className={`p-3 rounded-xl backdrop-blur-md border transition-all hover:scale-110 ${
                          liked[event.id]
                            ? 'bg-red-500 border-red-500'
                            : 'bg-white/20 border-white/30 hover:bg-white/30'
                        }`}
                      >
                        <Heart
                          className={`w-6 h-6 ${
                            liked[event.id] ? 'fill-white' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Like Button - Top Right */}
                <button
                  onClick={() => toggleLike(event.id)}
                  className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 transition-all hover:scale-110"
                >
                  <Heart
                    className={`w-6 h-6 text-white ${
                      liked[event.id] ? 'fill-white' : ''
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full backdrop-blur-md border transition-all hover:scale-110 z-10 ${
              darkMode
                ? 'bg-gray-800/80 border-gray-700 hover:bg-gray-700'
                : 'bg-white/80 border-white hover:bg-white'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full backdrop-blur-md border transition-all hover:scale-110 z-10 ${
              darkMode
                ? 'bg-gray-800/80 border-gray-700 hover:bg-gray-700'
                : 'bg-white/80 border-white hover:bg-white'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-white'
                    : 'w-2 bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {events.map((event, index) => (
            <button
              key={event.id}
              onClick={() => setCurrentSlide(index)}
              className={`relative h-24 rounded-xl overflow-hidden transition-all ${
                index === currentSlide
                  ? 'ring-4 ring-orange-500 scale-105'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;

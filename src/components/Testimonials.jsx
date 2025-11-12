import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Tixbro made booking bus tickets so easy! The interface is smooth and I got my tickets instantly. Highly recommended for anyone traveling across India.',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      category: 'Bus Tickets',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Bangalore, Karnataka',
      rating: 5,
      text: 'I booked movie tickets for the entire family through Tixbro. The best part? No hidden charges and instant confirmation. Will definitely use it again!',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      category: 'Movie Tickets',
    },
    {
      id: 3,
      name: 'Ananya Patel',
      location: 'Delhi, NCR',
      rating: 5,
      text: 'Attended an amazing concert booked through Tixbro. The seat selection feature is fantastic and customer service is top-notch. 10/10 experience!',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      category: 'Concert',
    },
    {
      id: 4,
      name: 'Vikram Singh',
      location: 'Jaipur, Rajasthan',
      rating: 4,
      text: 'Great platform for booking theater shows. Found some amazing plays that I would have otherwise missed. User-friendly and reliable.',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      category: 'Theater',
    },
    {
      id: 5,
      name: 'Meera Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      text: 'Been using Tixbro for 6 months now. Never had any issues. The app is fast, secure, and has great deals. My go-to platform for all bookings!',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
      category: 'Regular User',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push({ ...testimonials[index], position: i });
    }
    return visible;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500/10 rounded-full mb-4">
            <Quote className="w-4 h-4 text-pink-500" />
            <span className="text-pink-500 font-medium text-sm">
              Customer Stories
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className={darkMode ? 'text-white' : 'text-gray-900'}>
              What Our Customers Say
            </span>
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Join millions of happy customers across India
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Desktop View - 3 Cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-500 ${
                  idx === 1
                    ? 'scale-105 z-10'
                    : 'scale-95 opacity-70 hover:opacity-100'
                }`}
              >
                <TestimonialCard testimonial={testimonial} darkMode={darkMode} />
              </div>
            ))}
          </div>

          {/* Mobile View - 1 Card */}
          <div className="md:hidden">
            <TestimonialCard
              testimonial={testimonials[currentIndex]}
              darkMode={darkMode}
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 rounded-full transition-all hover:scale-110 z-20 ${
              darkMode
                ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-lg'
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 rounded-full transition-all hover:scale-110 z-20 ${
              darkMode
                ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700'
                : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-lg'
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-8 bg-gradient-to-r from-orange-500 to-red-500'
                  : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, darkMode }) => {
  return (
    <div
      className={`relative p-8 rounded-3xl transition-all duration-300 hover:scale-105 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-xl hover:shadow-2xl`}
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-16 h-16 text-orange-500" />
      </div>

      {/* Category Badge */}
      <div className="mb-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
          }`}
        >
          {testimonial.category}
        </span>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? 'text-yellow-500 fill-yellow-500'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p
        className={`text-lg mb-6 leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}
      >
        "{testimonial.text}"
      </p>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover ring-2 ring-orange-500"
        />
        <div>
          <h4
            className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            {testimonial.name}
          </h4>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {testimonial.location}
          </p>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl opacity-0 hover:opacity-10 blur transition-opacity duration-500 -z-10" />
    </div>
  );
};

export default Testimonials;

import { useEffect, useState, useRef } from 'react';
import { Users, MapPin, Ticket, Star, TrendingUp, Award } from 'lucide-react';

const Stats = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Users,
      number: 10000000,
      suffix: '+',
      label: 'Happy Customers',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: MapPin,
      number: 500,
      suffix: '+',
      label: 'Cities Covered',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Ticket,
      number: 50000,
      suffix: '+',
      label: 'Daily Bookings',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: Star,
      number: 4.8,
      suffix: '★',
      label: 'User Rating',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      decimal: true,
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Best Travel App 2024',
      description: 'Awarded by Tech India Magazine',
    },
    {
      icon: TrendingUp,
      title: 'Fastest Growing Platform',
      description: '300% growth in last year',
    },
    {
      icon: Star,
      title: 'Customer Choice Award',
      description: 'Voted by 1M+ users',
    },
  ];

  // Counter animation
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeOutQuad = progress * (2 - progress); // Easing function
        const currentValue = stat.number * easeOutQuad;

        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = currentValue;
          return newCounts;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  const formatNumber = (num, decimal = false) => {
    if (decimal) {
      return num.toFixed(1);
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return Math.floor(num).toString();
  };

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${
        darkMode
          ? 'bg-gradient-to-br from-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-orange-100 via-red-50 to-pink-100'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-3xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                darkMode ? 'bg-gray-800/50' : 'bg-white'
              } shadow-xl hover:shadow-2xl`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
              >
                <stat.icon
                  className={`w-7 h-7 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}
                  style={{
                    filter:
                      'drop-shadow(0 0 8px rgba(249, 115, 22, 0.5))',
                  }}
                />
              </div>

              {/* Number */}
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold">
                  <span
                    className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {formatNumber(counts[index], stat.decimal)}
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p
                  className={`text-sm font-medium ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {stat.label}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500 -z-10`}
              />
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="text-center mb-12">
          <h3
            className={`text-3xl font-bold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Our Achievements
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl transition-all duration-300 hover:scale-105 ${
                darkMode ? 'bg-gray-800/50' : 'bg-white/80'
              } shadow-lg hover:shadow-xl`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${
                  index * 0.1 + 0.4
                }s both`,
              }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4
                    className={`text-lg font-bold mb-1 ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {achievement.title}
                  </h4>
                  <p
                    className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

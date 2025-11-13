import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const popularCities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'];

  const categories = [
    { name: 'Movies', icon: '🎬', count: '1,200+ shows' },
    { name: 'Events', icon: '🎪', count: '500+ events' },
    { name: 'Sports', icon: '⚽', count: '300+ matches' },
    { name: 'Concerts', icon: '🎵', count: '250+ concerts' }
  ];

  const featured = [
    {
      title: 'Bollywood Movie Night',
      location: 'Mumbai',
      price: '₹250',
      rating: 4.8,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop'
    },
    {
      title: 'Live Music Concert',
      location: 'Delhi',
      price: '₹500',
      rating: 4.9,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop'
    },
    {
      title: 'Cricket Match Experience',
      location: 'Bangalore',
      price: '₹800',
      rating: 4.7,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600&h=400&fit=crop'
    },
    {
      title: 'Theater & Drama Show',
      location: 'Chennai',
      price: '₹350',
      rating: 4.6,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&h=400&fit=crop'
    }
  ];

  const trustBadges = [
    { icon: '✓', text: 'Free cancellation', subtitle: 'Cancel up to 24 hours in advance' },
    { icon: '🎫', text: 'Mobile tickets', subtitle: 'Show your tickets on your phone' },
    { icon: '⚡', text: 'Instant confirmation', subtitle: 'Get tickets immediately' },
    { icon: '🏆', text: 'Best price guarantee', subtitle: 'We match any price' }
  ];

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: darkMode ? '#0a0a0a' : '#ffffff' }}>
      {/* Header */}
      <header style={{
        backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
        borderBottom: '1px solid #e5e5e5',
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: '#ff6b35', fontSize: '26px', margin: 0, fontWeight: '700' }}>Tixbro</h1>
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#activities" style={{ color: darkMode ? '#fff' : '#333', fontSize: '15px' }}>Activities</a>
            <a href="#destinations" style={{ color: darkMode ? '#fff' : '#333', fontSize: '15px' }}>Destinations</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: '8px 16px',
                background: darkMode ? '#2a2a2a' : '#f5f5f5',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '18px'
              }}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button style={{
              padding: '10px 24px',
              background: '#ff6b35',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: '600'
            }}>
              Sign in
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=1600&h=600&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 20px 100px',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '16px', lineHeight: '1.2' }}>
            Discover & Book Amazing Experiences in India
          </h2>
          <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.95 }}>
            From movies to concerts, sports to cultural events
          </p>

          {/* Search Box */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '8px',
            display: 'flex',
            gap: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
          }}>
            <input
              type="text"
              placeholder="What do you want to do?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                padding: '14px 16px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                outline: 'none',
                color: '#333'
              }}
            />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              style={{
                padding: '14px 16px',
                border: 'none',
                borderRadius: '4px',
                fontSize: '16px',
                outline: 'none',
                cursor: 'pointer',
                backgroundColor: '#f8f8f8',
                color: '#333'
              }}
            >
              <option value="">Select City</option>
              {popularCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <button style={{
              padding: '14px 32px',
              background: '#ff6b35',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: '60px 20px', backgroundColor: darkMode ? '#0f0f0f' : '#fafafa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '40px', textAlign: 'center', color: darkMode ? '#fff' : '#222' }}>
            Browse by Category
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {categories.map((cat, i) => (
              <div key={i} style={{
                backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                padding: '32px',
                borderRadius: '12px',
                textAlign: 'center',
                cursor: 'pointer',
                border: darkMode ? '1px solid #2a2a2a' : '1px solid #e5e5e5',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{cat.icon}</div>
                <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px', color: darkMode ? '#fff' : '#222' }}>{cat.name}</h4>
                <p style={{ color: darkMode ? '#888' : '#666', fontSize: '14px' }}>{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Activities */}
      <section id="activities" style={{ padding: '60px 20px', backgroundColor: darkMode ? '#0a0a0a' : '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '32px', fontWeight: '700', color: darkMode ? '#fff' : '#222' }}>
              Featured Experiences
            </h3>
            <a href="#" style={{ color: '#ff6b35', fontSize: '16px', fontWeight: '600' }}>View all →</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
            {featured.map((item, i) => (
              <div key={i} style={{
                backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                border: darkMode ? '1px solid #2a2a2a' : '1px solid #e5e5e5',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{ position: 'relative' }}>
                  <img src={item.image} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'white',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#333'
                  }}>
                    ⭐ {item.rating} ({item.reviews})
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ color: '#ff6b35', fontSize: '13px', fontWeight: '600', marginBottom: '8px' }}>📍 {item.location}</p>
                  <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: darkMode ? '#fff' : '#222' }}>{item.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '20px', fontWeight: '700', color: darkMode ? '#fff' : '#222' }}>{item.price}</span>
                    <button style={{
                      padding: '8px 20px',
                      background: '#ff6b35',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}>
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{ padding: '60px 20px', backgroundColor: darkMode ? '#0f0f0f' : '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            {trustBadges.map((badge, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '16px',
                  width: '72px',
                  height: '72px',
                  margin: '0 auto 16px',
                  backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: darkMode ? '2px solid #2a2a2a' : '2px solid #e5e5e5'
                }}>
                  {badge.icon}
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px', color: darkMode ? '#fff' : '#222' }}>{badge.text}</h4>
                <p style={{ color: darkMode ? '#888' : '#666', fontSize: '14px' }}>{badge.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" style={{ padding: '60px 20px', backgroundColor: darkMode ? '#0a0a0a' : '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '40px', textAlign: 'center', color: darkMode ? '#fff' : '#222' }}>
            Popular Destinations
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {popularCities.map((city, i) => (
              <div key={i} style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-${1580000000000 + i * 1000000}?w=400&h=300&fit=crop)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '180px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <h4 style={{ color: 'white', fontSize: '22px', fontWeight: '700', margin: 0 }}>{city}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Indian People */}
      <section style={{
        backgroundImage: 'linear-gradient(rgba(255,107,53,0.9), rgba(255,107,53,0.85)), url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=400&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 20px',
        textAlign: 'center',
        color: 'white'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>
            Start Your Journey Today
          </h3>
          <p style={{ fontSize: '18px', marginBottom: '32px', opacity: 0.95 }}>
            Join thousands of happy customers exploring India
          </p>
          <button style={{
            padding: '16px 48px',
            background: 'white',
            color: '#ff6b35',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: '700',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}>
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: darkMode ? '#1a1a1a' : '#2a2a2a',
        color: '#ffffff',
        padding: '60px 20px 30px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>About Tixbro</h4>
              <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6' }}>
                India's most trusted platform for booking movies, events, concerts, and sports tickets.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['About Us', 'How it works', 'Careers', 'Blog'].map(link => (
                  <li key={link} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{ color: '#aaa', fontSize: '14px' }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {['Help Center', 'Contact Us', 'FAQs', 'Terms'].map(link => (
                  <li key={link} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{ color: '#aaa', fontSize: '14px' }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '20px', fontSize: '18px' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '16px', fontSize: '24px' }}>
                {['📘', '🐦', '📸', '▶️'].map((icon, i) => (
                  <a key={i} href="#" style={{ opacity: 0.8 }}>{icon}</a>
                ))}
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid #444',
            paddingTop: '30px',
            textAlign: 'center',
            color: '#888',
            fontSize: '14px'
          }}>
            © 2025 Tixbro. All rights reserved. Made with ❤️ in India
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

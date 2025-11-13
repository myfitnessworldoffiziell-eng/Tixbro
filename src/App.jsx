import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }} className={darkMode ? 'dark' : ''}>
      {/* Header */}
      <header style={{
        backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
        borderBottom: '1px solid #ddd',
        padding: '15px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: '#ff6600', fontSize: '28px', margin: 0 }}>Tixbro</h1>
          <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <a href="#movies" style={{ color: darkMode ? '#fff' : '#333', textDecoration: 'none' }}>Movies</a>
            <a href="#events" style={{ color: darkMode ? '#fff' : '#333', textDecoration: 'none' }}>Events</a>
            <a href="#sports" style={{ color: darkMode ? '#fff' : '#333', textDecoration: 'none' }}>Sports</a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                padding: '8px 15px',
                background: darkMode ? '#333' : '#f0f0f0',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                color: darkMode ? '#fff' : '#333'
              }}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button style={{
              padding: '8px 20px',
              background: '#ff6600',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}>
              Sign In
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ backgroundColor: darkMode ? '#0d0d0d' : '#f5f5f5', minHeight: '100vh' }}>
        {/* Hero Section */}
        <section style={{
          backgroundColor: darkMode ? '#1a1a1a' : '#fff',
          padding: '50px 20px',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '20px', color: darkMode ? '#fff' : '#333' }}>
              Book Tickets Online
            </h2>
            <p style={{ fontSize: '18px', color: darkMode ? '#aaa' : '#666', marginBottom: '30px' }}>
              Movies, Events, Sports & More
            </p>

            {/* Search Box */}
            <div style={{
              maxWidth: '600px',
              margin: '0 auto',
              display: 'flex',
              gap: '10px'
            }}>
              <input
                type="text"
                placeholder="Search for movies, events..."
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px',
                  backgroundColor: darkMode ? '#2a2a2a' : '#fff',
                  color: darkMode ? '#fff' : '#333'
                }}
              />
              <button style={{
                padding: '12px 30px',
                background: '#ff6600',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
              }}>
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Movies Section */}
        <section id="movies" style={{ padding: '40px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '30px', color: darkMode ? '#fff' : '#333' }}>
              Now Showing
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '20px'
            }}>
              {[
                { title: 'Action Movie', img: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=400&fit=crop' },
                { title: 'Drama Film', img: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=300&h=400&fit=crop' },
                { title: 'Comedy Show', img: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=300&h=400&fit=crop' },
                { title: 'Thriller Movie', img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=300&h=400&fit=crop' }
              ].map((movie, i) => (
                <div key={i} style={{
                  backgroundColor: darkMode ? '#1a1a1a' : '#fff',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <img src={movie.img} alt={movie.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                  <div style={{ padding: '15px' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: darkMode ? '#fff' : '#333' }}>{movie.title}</h4>
                    <button style={{
                      width: '100%',
                      padding: '10px',
                      background: '#ff6600',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}>
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" style={{
          padding: '40px 20px',
          backgroundColor: darkMode ? '#1a1a1a' : '#fff'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '30px', color: darkMode ? '#fff' : '#333' }}>
              Upcoming Events
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
              {[
                {
                  title: 'Music Concert',
                  date: 'Dec 15, 2025',
                  location: 'Mumbai',
                  img: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=250&fit=crop'
                },
                {
                  title: 'Comedy Night',
                  date: 'Dec 20, 2025',
                  location: 'Delhi',
                  img: 'https://images.unsplash.com/photo-1585699324551-f6c309eedeca?w=400&h=250&fit=crop'
                },
                {
                  title: 'Live Show',
                  date: 'Dec 25, 2025',
                  location: 'Bangalore',
                  img: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=250&fit=crop'
                }
              ].map((event, i) => (
                <div key={i} style={{
                  backgroundColor: darkMode ? '#0d0d0d' : '#f9f9f9',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: darkMode ? '1px solid #333' : '1px solid #e0e0e0'
                }}>
                  <img src={event.img} alt={event.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <div style={{ padding: '20px' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: darkMode ? '#fff' : '#333' }}>{event.title}</h4>
                    <p style={{ margin: '5px 0', color: darkMode ? '#aaa' : '#666', fontSize: '14px' }}>📅 {event.date}</p>
                    <p style={{ margin: '5px 0', color: darkMode ? '#aaa' : '#666', fontSize: '14px' }}>📍 {event.location}</p>
                    <button style={{
                      marginTop: '15px',
                      width: '100%',
                      padding: '10px',
                      background: '#ff6600',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}>
                      Get Tickets
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section style={{ padding: '40px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '30px', color: darkMode ? '#fff' : '#333' }}>
              Why Choose Tixbro?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '40px' }}>
              <div>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>🎫</div>
                <h4 style={{ color: darkMode ? '#fff' : '#333' }}>Easy Booking</h4>
                <p style={{ color: darkMode ? '#aaa' : '#666' }}>Book tickets in just a few clicks</p>
              </div>
              <div>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>💳</div>
                <h4 style={{ color: darkMode ? '#fff' : '#333' }}>Secure Payment</h4>
                <p style={{ color: darkMode ? '#aaa' : '#666' }}>Safe and secure transactions</p>
              </div>
              <div>
                <div style={{ fontSize: '48px', marginBottom: '10px' }}>📱</div>
                <h4 style={{ color: darkMode ? '#fff' : '#333' }}>Mobile Friendly</h4>
                <p style={{ color: darkMode ? '#aaa' : '#666' }}>Book from anywhere, anytime</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: darkMode ? '#1a1a1a' : '#333',
        color: '#fff',
        padding: '40px 20px',
        marginTop: '40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            <div>
              <h4>About Tixbro</h4>
              <p style={{ color: '#aaa', fontSize: '14px' }}>India's trusted ticket booking platform</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>About Us</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>Contact</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>Terms</a></li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>Help Center</a></li>
                <li style={{ marginBottom: '8px' }}><a href="#" style={{ color: '#aaa', textDecoration: 'none' }}>FAQs</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #444', marginTop: '30px', paddingTop: '20px', textAlign: 'center', color: '#aaa' }}>
            © 2025 Tixbro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [language, setLanguage] = useState('en');

  // Translations object
  const t = {
    en: {
      // Header
      trips: 'Trips',
      events: 'Events',
      experiences: 'Experiences',
      signIn: 'Sign In',
      // Hero
      heroTitle: 'Discover India, One Journey at a Time',
      heroSubtitle: 'Book bus rides, concert tickets, and unforgettable experiences — all in one place.',
      searchPlaceholder: 'Where do you want to go?',
      findTrips: 'Find Trips',
      exploreEvents: 'Explore Events',
      heroTagline: 'From the mountains to music festivals — travel naturally with Tixbro 🌿',
      // Categories
      categoriesTitle: 'Everything You Need, Right at Your Fingertips',
      busTickets: 'Bus Tickets',
      busDesc: 'Fast, easy, and comfortable journeys.',
      trainRides: 'Train Rides',
      trainDesc: 'Discover India\'s heart through the rails.',
      concerts: 'Concerts & Events',
      concertsDesc: 'Feel the rhythm, live the moment.',
      natureTrips: 'Nature Trips',
      natureDesc: 'Breathe in the beauty of the outdoors.',
      cultural: 'Cultural Experiences',
      culturalDesc: 'Connect with India\'s colors, art, and soul.',
      // Why Tixbro
      whyTitle: 'Travel Simple. Travel Smart. Travel with Tixbro.',
      allInOne: 'All-in-One Platform',
      allInOneDesc: 'Bus, concerts, and experiences in one place.',
      indianHeart: 'Indian by Heart',
      indianHeartDesc: 'Made for travelers who love authentic journeys.',
      secure: 'Secure & Reliable',
      secureDesc: 'Trusted payments and verified partners.',
      // Featured
      featuredTitle: 'This Week\'s Top Picks ✨',
      goaFestival: 'Goa Music Festival 2025',
      delhiManali: 'Delhi to Manali Bus Ride',
      rajasthanTour: 'Rajasthan Heritage Tour',
      bookNow: 'Book Now',
      seeAll: 'See All Experiences',
      // App Download
      appTitle: 'Your Next Adventure Starts Here',
      appSubtitle: 'Download the Tixbro app and plan your trip anytime, anywhere.',
      appStore: 'App Store',
      googlePlay: 'Google Play',
      // Footer
      quickLinks: 'Quick Links',
      aboutUs: 'About Us',
      support: 'Support',
      terms: 'Terms',
      privacy: 'Privacy Policy',
      followUs: 'Follow Us',
      footerTagline: 'Made for travelers, dreamers, and music lovers ✨',
      copyright: '© 2025 Tixbro. Made with ❤️ in India 🇮🇳'
    },
    hi: {
      // Header
      trips: 'यात्राएं',
      events: 'कार्यक्रम',
      experiences: 'अनुभव',
      signIn: 'साइन इन',
      // Hero
      heroTitle: 'भारत को खोजें, एक यात्रा एक बार में',
      heroSubtitle: 'बस टिकट, कॉन्सर्ट टिकट और अविस्मरणीय अनुभव बुक करें — सब एक जगह।',
      searchPlaceholder: 'आप कहाँ जाना चाहते हैं?',
      findTrips: 'यात्राएं खोजें',
      exploreEvents: 'कार्यक्रम देखें',
      heroTagline: 'पहाड़ों से लेकर संगीत समारोहों तक — Tixbro के साथ स्वाभाविक रूप से यात्रा करें 🌿',
      // Categories
      categoriesTitle: 'आपको जो चाहिए, वह सब आपकी उंगलियों पर',
      busTickets: 'बस टिकट',
      busDesc: 'तेज़, आसान और आरामदायक यात्राएं।',
      trainRides: 'ट्रेन यात्राएं',
      trainDesc: 'रेल के माध्यम से भारत के दिल को खोजें।',
      concerts: 'कॉन्सर्ट और कार्यक्रम',
      concertsDesc: 'लय को महसूस करें, पल को जिएं।',
      natureTrips: 'प्रकृति यात्राएं',
      natureDesc: 'बाहर की सुंदरता में सांस लें।',
      cultural: 'सांस्कृतिक अनुभव',
      culturalDesc: 'भारत के रंगों, कला और आत्मा से जुड़ें।',
      // Why Tixbro
      whyTitle: 'सरल यात्रा। स्मार्ट यात्रा। Tixbro के साथ यात्रा।',
      allInOne: 'सब-इन-वन प्लेटफ़ॉर्म',
      allInOneDesc: 'बस, कॉन्सर्ट और अनुभव एक जगह।',
      indianHeart: 'दिल से भारतीय',
      indianHeartDesc: 'प्रामाणिक यात्राओं से प्यार करने वाले यात्रियों के लिए।',
      secure: 'सुरक्षित और विश्वसनीय',
      secureDesc: 'विश्वसनीय भुगतान और सत्यापित साझेदार।',
      // Featured
      featuredTitle: 'इस सप्ताह की शीर्ष पसंद ✨',
      goaFestival: 'गोवा संगीत समारोह 2025',
      delhiManali: 'दिल्ली से मनाली बस की सवारी',
      rajasthanTour: 'राजस्थान विरासत यात्रा',
      bookNow: 'अभी बुक करें',
      seeAll: 'सभी अनुभव देखें',
      // App Download
      appTitle: 'आपका अगला रोमांच यहाँ से शुरू होता है',
      appSubtitle: 'Tixbro ऐप डाउनलोड करें और किसी भी समय, कहीं भी अपनी यात्रा की योजना बनाएं।',
      appStore: 'ऐप स्टोर',
      googlePlay: 'गूगल प्ले',
      // Footer
      quickLinks: 'त्वरित लिंक',
      aboutUs: 'हमारे बारे में',
      support: 'सहायता',
      terms: 'नियम',
      privacy: 'गोपनीयता नीति',
      followUs: 'हमें फॉलो करें',
      footerTagline: 'यात्रियों, सपने देखने वालों और संगीत प्रेमियों के लिए बनाया गया ✨',
      copyright: '© 2025 Tixbro. भारत में ❤️ के साथ बनाया गया 🇮🇳'
    }
  };

  const text = t[language];

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: '#fffef9' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(10px)',
        padding: '20px 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(255,140,0,0.08)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{
            color: '#ff8c00',
            fontSize: '32px',
            margin: 0,
            fontWeight: '700',
            fontFamily: "'Pacifico', cursive"
          }}>
            Tixbro
          </h1>
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#trips" style={{ color: '#333', fontSize: '16px', textDecoration: 'none', fontWeight: '500' }}>{text.trips}</a>
            <a href="#events" style={{ color: '#333', fontSize: '16px', textDecoration: 'none', fontWeight: '500' }}>{text.events}</a>
            <a href="#experiences" style={{ color: '#333', fontSize: '16px', textDecoration: 'none', fontWeight: '500' }}>{text.experiences}</a>

            {/* Language Selector in Header */}
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setLanguage('en')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: language === 'en' ? '#ff8c00' : '#e0e0e0',
                  color: language === 'en' ? 'white' : '#666',
                  border: 'none',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s'
                }}>
                English
              </button>
              <button
                onClick={() => setLanguage('hi')}
                style={{
                  padding: '8px 16px',
                  backgroundColor: language === 'hi' ? '#ff8c00' : '#e0e0e0',
                  color: language === 'hi' ? 'white' : '#666',
                  border: 'none',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'all 0.2s'
                }}>
                हिंदी
              </button>
            </div>

            <button style={{
              padding: '12px 28px',
              background: 'linear-gradient(135deg, #ff8c00 0%, #ff6b35 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              boxShadow: '0 4px 15px rgba(255,140,0,0.3)',
              transition: 'transform 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {text.signIn}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        backgroundImage: 'linear-gradient(135deg, rgba(255,200,100,0.2) 0%, rgba(100,200,255,0.15) 100%), url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&h=800&fit=crop)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '120px 24px 100px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Organic blob shapes */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,200,100,0.3) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-150px',
          left: '-150px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(100,200,255,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }}></div>

        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{
            fontSize: '64px',
            fontWeight: '700',
            marginBottom: '24px',
            color: 'white',
            lineHeight: '1.2',
            fontFamily: "'Pacifico', cursive",
            textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
          }}>
            {text.heroTitle}
          </h2>

          <p style={{
            fontSize: '22px',
            color: 'white',
            marginBottom: '48px',
            fontWeight: '500',
            textShadow: '1px 1px 4px rgba(0,0,0,0.3)'
          }}>
            {text.heroSubtitle}
          </p>

          {/* Search Bar */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '50px',
            padding: '12px',
            display: 'flex',
            gap: '12px',
            maxWidth: '650px',
            margin: '0 auto 24px',
            boxShadow: '0 10px 40px rgba(255,140,0,0.15)',
            border: '2px solid rgba(255,200,100,0.3)'
          }}>
            <input
              type="text"
              placeholder={text.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                padding: '16px 24px',
                border: 'none',
                borderRadius: '40px',
                fontSize: '16px',
                outline: 'none',
                backgroundColor: 'transparent',
                color: '#333'
              }}
            />
            <button style={{
              padding: '16px 36px',
              background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c00 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '40px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              whiteSpace: 'nowrap'
            }}>
              {text.findTrips}
            </button>
          </div>

          <button style={{
            padding: '16px 36px',
            background: 'linear-gradient(135deg, #20b2aa 0%, #48d1cc 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '40px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '600',
            boxShadow: '0 6px 20px rgba(32,178,170,0.3)',
            marginRight: '16px'
          }}>
            {text.exploreEvents}
          </button>

          <p style={{
            fontSize: '16px',
            color: 'white',
            marginTop: '32px',
            fontStyle: 'italic',
            textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
          }}>
            {text.heroTagline}
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(180deg, #fffef9 0%, #fff8e7 100%)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '42px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            color: '#333',
            fontFamily: "'Pacifico', cursive",
            background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {text.categoriesTitle}
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}>
            {[
              {
                icon: '🚌',
                title: text.busTickets,
                desc: text.busDesc,
                color: 'linear-gradient(135deg, #ff8c00 0%, #ffa500 100%)',
                image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop'
              },
              {
                icon: '🚆',
                title: text.trainRides,
                desc: text.trainDesc,
                color: 'linear-gradient(135deg, #20b2aa 0%, #48d1cc 100%)',
                image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=300&fit=crop'
              },
              {
                icon: '🎵',
                title: text.concerts,
                desc: text.concertsDesc,
                color: 'linear-gradient(135deg, #ff6b6b 0%, #ff8787 100%)',
                image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop'
              },
              {
                icon: '🌄',
                title: text.natureTrips,
                desc: text.natureDesc,
                color: 'linear-gradient(135deg, #51cf66 0%, #69db7c 100%)',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
              },
              {
                icon: '🎭',
                title: text.cultural,
                desc: text.culturalDesc,
                color: 'linear-gradient(135deg, #da77f2 0%, #e599f7 100%)',
                image: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?w=400&h=300&fit=crop'
              }
            ].map((cat, i) => (
              <div key={i} style={{
                backgroundColor: 'white',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(255,140,0,0.1)',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                border: '3px solid transparent',
                backgroundClip: 'padding-box'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(255,140,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(255,140,0,0.1)';
              }}
              >
                <div style={{ position: 'relative', height: '180px' }}>
                  <img src={cat.image} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '28px 24px' }}>
                  <div style={{ fontSize: '42px', marginBottom: '12px', textAlign: 'center' }}>
                    {cat.icon}
                  </div>
                  <h4 style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    marginBottom: '14px',
                    color: '#1a1a1a',
                    textAlign: 'center',
                    letterSpacing: '-0.5px'
                  }}>
                    {cat.title}
                  </h4>
                  <p style={{
                    color: '#555',
                    fontSize: '16px',
                    lineHeight: '1.7',
                    textAlign: 'center',
                    fontWeight: '400'
                  }}>
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tixbro Section */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #fff8e7 0%, #ffe4b5 30%, #ffebcd 100%)',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '42px',
            fontWeight: '700',
            marginBottom: '20px',
            fontFamily: "'Pacifico', cursive",
            color: '#ff6b35'
          }}>
            {text.whyTitle}
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            marginTop: '60px'
          }}>
            {[
              { icon: '✅', title: text.allInOne, desc: text.allInOneDesc },
              { icon: '🪔', title: text.indianHeart, desc: text.indianHeartDesc },
              { icon: '🔒', title: text.secure, desc: text.secureDesc }
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'white',
                padding: '40px 32px',
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(255,140,0,0.12)'
              }}>
                <div style={{ fontSize: '56px', marginBottom: '20px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px', color: '#333' }}>{item.title}</h4>
                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section id="experiences" style={{ padding: '80px 24px', backgroundColor: '#fffef9' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h3 style={{
            fontSize: '42px',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '60px',
            fontFamily: "'Pacifico', cursive",
            color: '#ff6b35'
          }}>
            {text.featuredTitle}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              {
                title: text.goaFestival,
                price: '₹499',
                image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop',
                tag: language === 'en' ? 'Music' : 'संगीत'
              },
              {
                title: text.delhiManali,
                price: '₹899',
                image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
                tag: language === 'en' ? 'Travel' : 'यात्रा'
              },
              {
                title: text.rajasthanTour,
                price: '₹1,299',
                image: 'https://images.unsplash.com/photo-1532664189809-02133fee698d?w=600&h=400&fit=crop',
                tag: language === 'en' ? 'Culture' : 'संस्कृति'
              }
            ].map((exp, i) => (
              <div key={i} style={{
                backgroundColor: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 16px 50px rgba(255,140,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
              }}
              >
                <div style={{ position: 'relative', height: '240px' }}>
                  <img src={exp.image} alt={exp.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(255,255,255,0.95)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: '#ff6b35'
                  }}>
                    {exp.tag}
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px', color: '#333' }}>{exp.title}</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '24px', fontWeight: '700', color: '#ff6b35' }}>{exp.price}</span>
                    <button style={{
                      padding: '10px 24px',
                      background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c00 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: '600'
                    }}>
                      {text.bookNow}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button style={{
              padding: '16px 40px',
              background: 'linear-gradient(135deg, #20b2aa 0%, #48d1cc 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600',
              boxShadow: '0 6px 20px rgba(32,178,170,0.3)'
            }}>
              {text.seeAll}
            </button>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section style={{
        padding: '80px 24px',
        background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c00 50%, #ffa500 100%)',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }}></div>

        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h3 style={{ fontSize: '48px', fontWeight: '700', marginBottom: '20px', fontFamily: "'Pacifico', cursive" }}>
            {text.appTitle}
          </h3>
          <p style={{ fontSize: '20px', marginBottom: '40px', opacity: 0.95 }}>
            {text.appSubtitle}
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '16px 32px',
              backgroundColor: 'white',
              color: '#ff6b35',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
            }}>
              <span style={{ fontSize: '24px' }}>📱</span> {text.appStore}
            </button>
            <button style={{
              padding: '16px 32px',
              backgroundColor: 'white',
              color: '#ff6b35',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
            }}>
              <span style={{ fontSize: '24px' }}>🤖</span> {text.googlePlay}
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#2a2a2a',
        color: 'white',
        padding: '60px 24px 30px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
            <div>
              <h4 style={{ fontSize: '24px', marginBottom: '16px', fontFamily: "'Pacifico', cursive", color: '#ff8c00' }}>Tixbro</h4>
              <p style={{ color: '#aaa', fontSize: '14px', lineHeight: '1.6' }}>
                {text.footerTagline}
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '16px' }}>{text.quickLinks}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[text.aboutUs, text.support, text.terms, text.privacy].map(link => (
                  <li key={link} style={{ marginBottom: '10px' }}>
                    <a href="#" style={{ color: '#aaa', fontSize: '14px', textDecoration: 'none' }}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '16px', fontSize: '16px' }}>{text.followUs}</h4>
              <div style={{ display: 'flex', gap: '16px', fontSize: '28px' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, transition: 'opacity 0.2s', textDecoration: 'none' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                  title="Instagram"
                >
                  📷
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, transition: 'opacity 0.2s', textDecoration: 'none' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                  title="X (Twitter)"
                >
                  ✖️
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8, transition: 'opacity 0.2s', textDecoration: 'none' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
                  title="TikTok"
                >
                  🎵
                </a>
              </div>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #444',
            paddingTop: '24px',
            textAlign: 'center',
            color: '#888',
            fontSize: '14px'
          }}>
            {text.copyright}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

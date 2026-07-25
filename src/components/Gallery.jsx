// src/components/Gallery.jsx
import React, { useState } from 'react';
import { FaExpand, FaTimes, FaPlus } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);

  // ============================================
  // REAL WORKING IMAGES - Using Picsum Photos
  // These URLs ALWAYS work!
  // ============================================
  const getRealImage = (id) => {
    // Picsum provides real, random images that always load
    return `https://picsum.photos/id/${id}/600/400`;
  };

  const galleryImages = [
    // CAMPUS (5 images)
    { id: 1, title: 'School Campus - Main Building', category: 'Campus', imgId: 160 },
    { id: 2, title: 'Green Campus Grounds', category: 'Campus', imgId: 161 },
    { id: 3, title: 'School Building Front View', category: 'Campus', imgId: 162 },
    { id: 4, title: 'Campus Garden', category: 'Campus', imgId: 163 },
    { id: 5, title: 'School Playground', category: 'Campus', imgId: 164 },
    
    // ACADEMICS (5 images)
    { id: 6, title: 'Modern Classroom', category: 'Academics', imgId: 20 },
    { id: 7, title: 'School Library', category: 'Academics', imgId: 21 },
    { id: 8, title: 'Science Laboratory', category: 'Academics', imgId: 22 },
    { id: 9, title: 'Computer Lab', category: 'Academics', imgId: 23 },
    { id: 10, title: 'Art Room', category: 'Academics', imgId: 24 },
    
    // SPORTS (5 images)
    { id: 11, title: 'Cricket Ground', category: 'Sports', imgId: 30 },
    { id: 12, title: 'Football Field', category: 'Sports', imgId: 31 },
    { id: 13, title: 'Basketball Court', category: 'Sports', imgId: 32 },
    { id: 14, title: 'Swimming Pool', category: 'Sports', imgId: 33 },
    { id: 15, title: 'Athletics Track', category: 'Sports', imgId: 34 },
    
    // ACTIVITIES (5 images)
    { id: 16, title: 'Student Activities', category: 'Activities', imgId: 40 },
    { id: 17, title: 'Art & Craft Session', category: 'Activities', imgId: 41 },
    { id: 18, title: 'Music Class', category: 'Activities', imgId: 42 },
    { id: 19, title: 'Dance Performance', category: 'Activities', imgId: 43 },
    { id: 20, title: 'Drama Club', category: 'Activities', imgId: 44 },
    
    // EVENTS (5 images)
    { id: 21, title: 'School Annual Day', category: 'Events', imgId: 50 },
    { id: 22, title: 'Sports Day Event', category: 'Events', imgId: 51 },
    { id: 23, title: 'Cultural Festival', category: 'Events', imgId: 52 },
    { id: 24, title: 'Science Exhibition', category: 'Events', imgId: 53 },
    { id: 25, title: 'Graduation Ceremony', category: 'Events', imgId: 54 },
    
    // FACILITIES (5 images)
    { id: 26, title: 'School Auditorium', category: 'Facilities', imgId: 60 },
    { id: 27, title: 'Cafeteria', category: 'Facilities', imgId: 61 },
    { id: 28, title: 'Medical Room', category: 'Facilities', imgId: 62 },
    { id: 29, title: 'Transport Facility', category: 'Facilities', imgId: 63 },
    { id: 30, title: 'Hostel Building', category: 'Facilities', imgId: 64 },
  ];

  const categories = ['All', 'Campus', 'Academics', 'Sports', 'Activities', 'Events', 'Facilities'];

  // Filter images based on category
  const getFilteredImages = () => {
    if (activeCategory === 'All') {
      return galleryImages;
    }
    return galleryImages.filter(img => img.category === activeCategory);
  };

  const filteredImages = getFilteredImages();
  const visibleImages = filteredImages.slice(0, visibleCount);
  const hasMoreImages = visibleCount < filteredImages.length;

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setVisibleCount(8);
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, filteredImages.length));
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" style={{ 
      padding: '5rem 5%', 
      background: '#f8f9fa',
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    }}>
      {/* Header */}
      <div style={{ 
        textAlign: 'center', 
        maxWidth: '700px', 
        margin: '0 auto 3rem' 
      }}>
        <span style={{ 
          color: '#c9a84c', 
          fontWeight: 600, 
          letterSpacing: '3px', 
          textTransform: 'uppercase', 
          fontSize: '0.85rem',
          fontFamily: "'Inter', sans-serif",
        }}>
          ✦ Campus Life
        </span>
        <h2 style={{ 
          fontSize: '2.8rem', 
          color: '#1a3c6e', 
          marginBottom: '1rem',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 800,
        }}>
          Our School Gallery
        </h2>
        <p style={{ 
          color: '#7a8294',
          fontFamily: "'Inter', sans-serif",
          fontSize: '1.05rem',
          lineHeight: '1.6',
        }}>
          Explore the vibrant life at Pavna School through our photo gallery
        </p>
        <p style={{ 
          color: '#a0a7b5', 
          fontSize: '0.9rem', 
          marginTop: '0.5rem',
          fontFamily: "'Inter', sans-serif",
        }}>
          Showing {visibleImages.length} of {filteredImages.length} images
        </p>
      </div>

      {/* Category Filters */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.8rem',
        flexWrap: 'wrap',
        marginBottom: '2.5rem',
      }}>
        {categories.map(category => {
          const count = category === 'All' 
            ? galleryImages.length 
            : galleryImages.filter(img => img.category === category).length;
          
          return (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              style={{
                padding: '0.6rem 1.8rem',
                borderRadius: '50px',
                border: activeCategory === category ? '2px solid #c9a84c' : '1px solid #e0e4ea',
                background: activeCategory === category ? '#c9a84c' : 'transparent',
                color: activeCategory === category ? '#ffffff' : '#3a4254',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                fontSize: '0.9rem',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      {/* Gallery Grid - 4 columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {visibleImages.map((image, index) => (
          <div
            key={image.id}
            style={{
              position: 'relative',
              borderRadius: '15px',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              transition: 'all 0.4s ease',
              aspectRatio: '4/3',
              overflow: 'hidden',
              background: '#e9ecef',
              animation: 'fadeInUp 0.5s ease forwards',
              animationDelay: `${(index % 8) * 0.05}s`,
              opacity: 0,
            }}
            onClick={() => openLightbox(image)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
            }}
          >
            <img
              src={getRealImage(image.imgId)}
              alt={image.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.5s ease',
              }}
              onError={(e) => {
                // If image fails, use a fallback
                e.target.src = `https://picsum.photos/seed/${image.id}/600/400`;
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '1.5rem',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
              color: 'white',
            }}>
              <h4 style={{ 
                fontSize: '0.95rem', 
                marginBottom: '0.2rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
              }}>
                {image.title}
              </h4>
              <span style={{ 
                fontSize: '0.75rem', 
                opacity: 0.8,
                fontFamily: "'Inter', sans-serif",
              }}>
                {image.category}
              </span>
            </div>
            <div style={{
              position: 'absolute',
              top: '0.8rem',
              right: '0.8rem',
              background: 'rgba(255,255,255,0.95)',
              padding: '0.5rem',
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <FaExpand size={12} color="#1a3c6e" />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMoreImages && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button
            onClick={loadMore}
            style={{
              padding: '0.8rem 2.5rem',
              background: 'linear-gradient(135deg, #c9a84c, #a8872e)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(201, 168, 76, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(201, 168, 76, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(201, 168, 76, 0.3)';
            }}
          >
            <FaPlus /> Load More ({filteredImages.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {!hasMoreImages && filteredImages.length > 8 && (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ 
            color: '#7a8294',
            fontFamily: "'Inter', sans-serif",
          }}>
            ✨ All {filteredImages.length} images loaded
          </p>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '2rem',
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(255,255,255,0.2)',
              color: 'white',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fontSize: '1.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FaTimes />
          </button>

          <div
            style={{
              maxWidth: '900px',
              maxHeight: '85vh',
              borderRadius: '15px',
              overflow: 'hidden',
              background: 'white',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={getRealImage(selectedImage.imgId)}
              alt={selectedImage.title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '75vh',
                objectFit: 'contain',
                display: 'block',
              }}
              onError={(e) => {
                e.target.src = `https://picsum.photos/seed/${selectedImage.id}/900/600`;
              }}
            />
            <div style={{ 
              padding: '1.5rem', 
              background: 'white',
              fontFamily: "'Inter', sans-serif",
            }}>
              <h3 style={{ 
                color: '#1a3c6e', 
                fontSize: '1.3rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
              }}>
                {selectedImage.title}
              </h3>
              <p style={{ 
                color: '#7a8294',
                fontFamily: "'Inter', sans-serif",
              }}>
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .gallery-header h2 {
            font-size: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-header h2 {
            font-size: 1.8rem !important;
          }
          .gallery-filters button {
            padding: 0.4rem 1rem !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
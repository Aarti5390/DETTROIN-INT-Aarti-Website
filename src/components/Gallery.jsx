// src/components/Gallery.jsx
import React, { useState } from 'react';
import { FaExpand, FaTimes, FaPlus } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);

  // ============================================
  // WORKING IMAGES - Picsum Photos
  // ============================================
  const getRealImage = (id) => {
    return `https://picsum.photos/id/${id}/600/400`;
  };

  const galleryImages = [
    // CAMPUS (5 images)
    { id: 1, title: 'Main Building', category: 'Campus', imgId: 160 },
    { id: 2, title: 'Campus Grounds', category: 'Campus', imgId: 161 },
    { id: 3, title: 'Front View', category: 'Campus', imgId: 162 },
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
    { id: 17, title: 'Art & Craft', category: 'Activities', imgId: 41 },
    { id: 18, title: 'Music Class', category: 'Activities', imgId: 42 },
    { id: 19, title: 'Dance Performance', category: 'Activities', imgId: 43 },
    { id: 20, title: 'Drama Club', category: 'Activities', imgId: 44 },
    
    // EVENTS (5 images)
    { id: 21, title: 'Annual Day', category: 'Events', imgId: 50 },
    { id: 22, title: 'Sports Day', category: 'Events', imgId: 51 },
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
      padding: '3rem 4% 4rem',
      background: '#f8f9fa',
      minHeight: 'auto',
      width: '100%',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ 
        textAlign: 'center', 
        maxWidth: '700px', 
        margin: '0 auto 1.5rem',
        padding: '0 1rem',
      }}>
        <span style={{ 
          color: '#c9a84c', 
          fontWeight: 600, 
          letterSpacing: '2px', 
          textTransform: 'uppercase', 
          fontSize: '0.8rem',
        }}>
          ✦ Campus Life
        </span>
        <h2 style={{ 
          fontSize: '2rem',
          color: '#1a3c6e', 
          marginBottom: '0.3rem',
        }}>
          Our School Gallery
        </h2>
        <p style={{ 
          color: '#7a8294',
          fontSize: '0.9rem',
        }}>
          Showing {visibleImages.length} of {filteredImages.length} images
        </p>
      </div>

      {/* Category Filters - Mobile Optimized */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.4rem',
        flexWrap: 'wrap',
        marginBottom: '1.2rem',
        padding: '0 0.5rem',
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
                padding: '0.35rem 0.8rem',
                borderRadius: '50px',
                border: activeCategory === category ? '2px solid #c9a84c' : '1px solid #e0e4ea',
                background: activeCategory === category ? '#c9a84c' : 'transparent',
                color: activeCategory === category ? '#ffffff' : '#3a4254',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                fontSize: '0.7rem',
                fontFamily: "'Inter', sans-serif",
                whiteSpace: 'nowrap',
              }}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      {/* Gallery Grid - Mobile First */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // Default: 2 columns for mobile
        gap: '0.8rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 0.5rem',
      }}>
        {visibleImages.map((image) => (
          <div
            key={image.id}
            style={{
              position: 'relative',
              borderRadius: '10px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
              aspectRatio: '4/3',
              overflow: 'hidden',
              background: '#e9ecef',
              width: '100%',
            }}
            onClick={() => openLightbox(image)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
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
              }}
              onError={(e) => {
                e.target.src = `https://picsum.photos/seed/${image.id}/600/400`;
              }}
            />
            
            {/* Category Badge - Mobile Optimized */}
            <div style={{
              position: 'absolute',
              top: '0.4rem',
              left: '0.4rem',
              background: 'rgba(26, 60, 110, 0.85)',
              color: 'white',
              padding: '0.15rem 0.6rem',
              borderRadius: '15px',
              fontSize: '0.5rem',
              fontWeight: '600',
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
              backdropFilter: 'blur(4px)',
            }}>
              {image.category}
            </div>

            {/* Title - Mobile Optimized */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '0.8rem 0.6rem 0.5rem',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
              color: 'white',
            }}>
              <h4 style={{ 
                fontSize: '0.7rem',
                marginBottom: '0',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                lineHeight: '1.2',
              }}>
                {image.title}
              </h4>
            </div>

            {/* Expand Icon */}
            <div style={{
              position: 'absolute',
              top: '0.4rem',
              right: '0.4rem',
              background: 'rgba(255,255,255,0.9)',
              padding: '0.2rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <FaExpand size={8} color="#1a3c6e" />
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMoreImages && (
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button
            onClick={loadMore}
            style={{
              padding: '0.5rem 1.8rem',
              background: 'linear-gradient(135deg, #c9a84c, #a8872e)',
              color: 'white',
              border: 'none',
              borderRadius: '50px',
              fontSize: '0.8rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 3px 12px rgba(201, 168, 76, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: "'Inter', sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(201, 168, 76, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 3px 12px rgba(201, 168, 76, 0.3)';
            }}
          >
            <FaPlus size={10} /> Load More ({filteredImages.length - visibleCount} remaining)
          </button>
        </div>
      )}

      {!hasMoreImages && filteredImages.length > 8 && (
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <p style={{ 
            color: '#7a8294',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
          }}>
            ✨ All {filteredImages.length} images loaded
          </p>
        </div>
      )}

      {/* Lightbox Modal - Same */}
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
            padding: '1.5rem',
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(255,255,255,0.2)',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              fontSize: '1.2rem',
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
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'white',
              width: '100%',
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
              padding: '0.8rem 1.2rem',
              background: 'white',
              fontFamily: "'Inter', sans-serif",
            }}>
              <h3 style={{ 
                color: '#1a3c6e', 
                fontSize: '1rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
              }}>
                {selectedImage.title}
              </h3>
              <p style={{ 
                color: '#7a8294',
                fontSize: '0.8rem',
                fontFamily: "'Inter', sans-serif",
              }}>
                {selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        /* ============================================
           RESPONSIVE - Mobile Optimized
           ============================================ */
        
        /* Desktop: 4 columns */
        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 1.2rem !important;
          }
          .gallery-filters button {
            padding: 0.4rem 1.2rem !important;
            font-size: 0.8rem !important;
          }
        }

        /* Tablet: 3 columns */
        @media (min-width: 768px) and (max-width: 1023px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 1rem !important;
          }
        }

        /* Mobile: 2 columns (already set) */
        @media (max-width: 767px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.6rem !important;
            padding: 0 0.3rem !important;
          }
          .gallery-filters {
            gap: 0.3rem !important;
          }
          .gallery-filters button {
            padding: 0.25rem 0.6rem !important;
            font-size: 0.6rem !important;
          }
          .gallery-header h2 {
            font-size: 1.5rem !important;
          }
          .gallery-header p {
            font-size: 0.8rem !important;
          }
        }

        /* Small Mobile: 2 columns with smaller gap */
        @media (max-width: 480px) {
          .gallery-grid {
            gap: 0.4rem !important;
            padding: 0 0.2rem !important;
          }
          .gallery-item {
            border-radius: 8px !important;
          }
          .gallery-item h4 {
            font-size: 0.6rem !important;
          }
          .gallery-item .category-badge {
            font-size: 0.4rem !important;
            padding: 0.1rem 0.4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
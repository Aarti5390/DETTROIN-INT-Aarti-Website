// src/components/Gallery.jsx
import React, { useState } from 'react';
import { FaExpand, FaTimes, FaPlus } from 'react-icons/fa';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8);

  // ============================================
  // WORKING IMAGES - Medium size
  // ============================================
  const getImage = (category, index) => {
    const images = {
      campus: [
        'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/2604473/pexels-photo-2604473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
      academics: [
        'https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/256466/pexels-photo-256466.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
      sports: [
        'https://images.pexels.com/photos/1431310/pexels-photo-1431310.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/960180/pexels-photo-960180.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1169013/pexels-photo-1169013.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/1503711/pexels-photo-1503711.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
      activities: [
        'https://images.pexels.com/photos/4567106/pexels-photo-4567106.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/5212346/pexels-photo-5212346.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/6456316/pexels-photo-6456316.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/5212348/pexels-photo-5212348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/2690777/pexels-photo-2690777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
      events: [
        'https://images.pexels.com/photos/2600470/pexels-photo-2600470.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/3015768/pexels-photo-3015768.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/2960870/pexels-photo-2960870.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/2960873/pexels-photo-2960873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/2600470/pexels-photo-2600470.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
      facilities: [
        'https://images.pexels.com/photos/5189439/pexels-photo-5189439.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/2134008/pexels-photo-2134008.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/5127867/pexels-photo-5127867.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/2690777/pexels-photo-2690777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        'https://images.pexels.com/photos/2604473/pexels-photo-2604473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      ],
    };
    
    const categoryImages = images[category] || images.campus;
    return categoryImages[index % categoryImages.length];
  };

  const galleryImages = [
    // CAMPUS
    { id: 1, title: 'Main Building', category: 'Campus', imgIdx: 0 },
    { id: 2, title: 'Campus Grounds', category: 'Campus', imgIdx: 1 },
    { id: 3, title: 'Front View', category: 'Campus', imgIdx: 2 },
    { id: 4, title: 'Campus Garden', category: 'Campus', imgIdx: 3 },
    { id: 5, title: 'School Playground', category: 'Campus', imgIdx: 4 },
    // ACADEMICS
    { id: 6, title: 'Modern Classroom', category: 'Academics', imgIdx: 0 },
    { id: 7, title: 'School Library', category: 'Academics', imgIdx: 1 },
    { id: 8, title: 'Science Laboratory', category: 'Academics', imgIdx: 2 },
    { id: 9, title: 'Computer Lab', category: 'Academics', imgIdx: 3 },
    { id: 10, title: 'Art Room', category: 'Academics', imgIdx: 4 },
    // SPORTS
    { id: 11, title: 'Cricket Ground', category: 'Sports', imgIdx: 0 },
    { id: 12, title: 'Football Field', category: 'Sports', imgIdx: 1 },
    { id: 13, title: 'Basketball Court', category: 'Sports', imgIdx: 2 },
    { id: 14, title: 'Swimming Pool', category: 'Sports', imgIdx: 3 },
    { id: 15, title: 'Athletics Track', category: 'Sports', imgIdx: 4 },
    // ACTIVITIES
    { id: 16, title: 'Student Activities', category: 'Activities', imgIdx: 0 },
    { id: 17, title: 'Art & Craft', category: 'Activities', imgIdx: 1 },
    { id: 18, title: 'Music Class', category: 'Activities', imgIdx: 2 },
    { id: 19, title: 'Dance Performance', category: 'Activities', imgIdx: 3 },
    { id: 20, title: 'Drama Club', category: 'Activities', imgIdx: 4 },
    // EVENTS
    { id: 21, title: 'Annual Day', category: 'Events', imgIdx: 0 },
    { id: 22, title: 'Sports Day', category: 'Events', imgIdx: 1 },
    { id: 23, title: 'Cultural Festival', category: 'Events', imgIdx: 2 },
    { id: 24, title: 'Science Exhibition', category: 'Events', imgIdx: 3 },
    { id: 25, title: 'Graduation', category: 'Events', imgIdx: 4 },
    // FACILITIES
    { id: 26, title: 'School Auditorium', category: 'Facilities', imgIdx: 0 },
    { id: 27, title: 'Cafeteria', category: 'Facilities', imgIdx: 1 },
    { id: 28, title: 'Medical Room', category: 'Facilities', imgIdx: 2 },
    { id: 29, title: 'Transport', category: 'Facilities', imgIdx: 3 },
    { id: 30, title: 'Hostel Building', category: 'Facilities', imgIdx: 4 },
  ];

  const categories = ['All', 'Campus', 'Academics', 'Sports', 'Activities', 'Events', 'Facilities'];

  const getFilteredImages = () => {
    if (activeCategory === 'All') return galleryImages;
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
      padding: '2rem 4% 3rem',
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

      {/* Category Filters */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        flexWrap: 'wrap',
        marginBottom: '1.5rem',
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
                padding: '0.4rem 1rem',
                borderRadius: '50px',
                border: activeCategory === category ? '2px solid #c9a84c' : '1px solid #e0e4ea',
                background: activeCategory === category ? '#c9a84c' : 'transparent',
                color: activeCategory === category ? '#ffffff' : '#3a4254',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontWeight: '500',
                fontSize: '0.75rem',
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {category} ({count})
            </button>
          );
        })}
      </div>

      {/* ============================================
          GALLERY GRID - 4 COLUMNS
          ============================================ */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)', // 4 columns
        gap: '1rem',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 0.5rem',
      }}>
        {visibleImages.map((image) => (
          <div
            key={image.id}
            style={{
              position: 'relative',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
              aspectRatio: '4/3',
              overflow: 'hidden',
              background: '#e9ecef',
              width: '100%',
            }}
            onClick={() => openLightbox(image)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)';
            }}
          >
            <img
              src={getImage(image.category.toLowerCase(), image.imgIdx)}
              alt={image.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // This fills the card completely
                display: 'block',
              }}
              onError={(e) => {
                // Fallback if image fails
                e.target.src = 'https://via.placeholder.com/600x400/1a3c6e/ffffff?text=Pavna';
              }}
            />
            
            {/* Category Badge */}
            <div style={{
              position: 'absolute',
              top: '0.5rem',
              left: '0.5rem',
              background: 'rgba(26, 60, 110, 0.85)',
              color: 'white',
              padding: '0.15rem 0.6rem',
              borderRadius: '15px',
              fontSize: '0.55rem',
              fontWeight: '600',
              letterSpacing: '0.3px',
              textTransform: 'uppercase',
              backdropFilter: 'blur(4px)',
            }}>
              {image.category}
            </div>

            {/* Title */}
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
                fontSize: '0.75rem',
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
              top: '0.5rem',
              right: '0.5rem',
              background: 'rgba(255,255,255,0.9)',
              padding: '0.2rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <FaExpand size={10} color="#1a3c6e" />
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
              src={getImage(selectedImage.category.toLowerCase(), selectedImage.imgIdx)}
              alt={selectedImage.title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '75vh',
                objectFit: 'contain',
                display: 'block',
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/900x600/1a3c6e/ffffff?text=Pavna';
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
           RESPONSIVE
           ============================================ */
        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 0.8rem !important;
          }
        }
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.6rem !important;
          }
        }
        @media (max-width: 480px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
import React, { useEffect, useState } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section>
      <div className="text-center mt-5">
        {isVisible && (
          <button
            className="mb-5"
            onClick={scrollToTop}
            id="myBtn"
            title="Go to top"
            style={{ cursor: 'pointer' }}
          >
            Go To Top
          </button>
        )}
      </div>
    </section>
  );
};

export default ScrollToTopButton;

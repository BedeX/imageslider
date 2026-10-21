const Controls = ({ setCurrentIndex, total }) => {
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === total - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
  };

  return (
    <div className="controls">
      <button onClick={handlePrev} aria-label="Előző kép">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button onClick={handleNext} aria-label="Következő kép">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  );
};

export default Controls;

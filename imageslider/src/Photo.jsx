const Photo = ({ imageUrl, index }) => {
  return (
    <div className="photo">
      <img src={imageUrl} alt={`Galéria kép ${index}`} />
    </div>
  );
};

export default Photo;

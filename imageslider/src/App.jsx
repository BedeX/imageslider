import { useState } from "react";
import Header from "./Header";
import Photo from "./Photo";
import Controls from "./Controls";
import { imagesArr } from "./data";

const App = () => {
  const [images] = useState(imagesArr);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="slider">
      <Header current={currentIndex + 1} total={images.length} />
      <Photo imageUrl={images[currentIndex]} index={currentIndex + 1} />
      <Controls setCurrentIndex={setCurrentIndex} total={images.length} />
    </div>
  );
};

export default App;

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 7 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleMove(index) {
    setHover(index);
  }

  function handleLeave(index) {
    setHover(rating);
  }

  return (
    <div className="h-full  w-full  flex justify-center items-center flex-col">
      <div className="flex">
        {[...Array(noOfStars)].map((_, index) => {
          index = index + 1;
          return (
            <FaStar
              className={index <= (hover || rating) ? "text-orange-400" : null}
              key={index}
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMove(index)}
              onMouseLeave={() => handleLeave(index)}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;

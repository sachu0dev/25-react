import Accordian from "./components/accordian/Accordian";
import RandomColor from "./components/random color/RandomColor";
import ImageSlider from "./components/star-rating/ImageSlider";
import StarRating from "./components/star-rating/StarRating";

function App() {
  return (
    <>
      {/* {Accordian component} */}
      <Accordian />
      {/* Random color componet */}
      <RandomColor />
      {/* StarRatting component */}
      <StarRating />
      {/* image slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />
    </>
  );
}

export default App;

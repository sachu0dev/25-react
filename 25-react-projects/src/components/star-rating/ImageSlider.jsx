import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currantSlide, setCurrantSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchImages(geturl) {
    try {
      setCurrantSlide(true);
      const response = await fetch(`${url}?page=1&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  function handlePrv() {
    setCurrantSlide(currantSlide === 0 ? images.length - 1 : currantSlide - 1);
  }
  function handleNxt() {
    setCurrantSlide(currantSlide === images.length - 1 ? 0 : currantSlide + 1);
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loading) {
    return (
      <div className="h-full text-3xl font-bold  w-full  flex justify-center items-center flex-col">
        Loading...
      </div>
    );
  }

  if (errorMsg !== null) {
    return (
      <div className="h-full text-3xl font-bold  w-full  flex justify-center items-center flex-col">
        {errorMsg}
      </div>
    );
  }

  return (
    <div className="h-full  w-full  flex justify-center items-center flex-col">
      <div className="relative flex justify-center items-center w-[80vw] h-[40vw]">
        <BsArrowLeftCircleFill
          className="absolute  text-3xl text-white shadow-black shadow-lg left-8"
          onClick={handlePrv}
        />
        {images && images.length
          ? images.map((image, index) => {
              return (
                <img
                  key={image.id}
                  src={image.download_url}
                  alt={image.download_url}
                  // className="w-full h-full shadow-black shadow-md rounded-md object-cover"
                  className={
                    currantSlide === index
                      ? "w-full h-full shadow-black shadow-md rounded-md object-cover"
                      : "hidden"
                  }
                />
              );
            })
          : null}
        <BsArrowRightCircleFill
          className="absolute right-8 text-3xl text-white shadow-black shadow-lg"
          onClick={handleNxt}
        />
        <span className="flex absolute bottom-8">
          {images && images.length
            ? images.map((_, index) => {
                return (
                  <button
                    key={index}
                    // className="bg-white h-3 w-3 rounded-full mx-2"
                    className={
                      currantSlide === index
                        ? "bg-white h-3 w-3 rounded-full mx-2"
                        : "bg-black h-3 w-3 rounded-full mx-2"
                    }
                    onClick={() => setCurrantSlide(index)}
                  ></button>
                );
              })
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;

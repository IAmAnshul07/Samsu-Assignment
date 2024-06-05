import { useState } from "react";
import { Divider } from "@mui/material";

const Carousel = () => {
  const topics = [
    "For you",
    "Following",
    "Web3",
    "Java",
    "Fiction",
    "Web",
    "Apple",
    "AI",
    "Android",
    "History",
    "Blockchain",
    "Coding",
    "Engineering",
    "React",
    "Data Science",
    "Leadership",
    "Python",
    "Science",
    "Life",
    "Development",
    "Startup",
    "Design",
    "JavaScript",
    "Programming",
  ];

  // Duplicate topics array for infinite scrolling
  const topicsWithDuplicates = [...topics, ...topics];

  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < topicsWithDuplicates.length - 1 ? prevIndex + 1 : 0
    );
  };

  const scrollPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : topicsWithDuplicates.length - 1
    );
  };

  return (
    <>
      <div className="relative w-full mt-4 lg:w-1/2 lg:ml-auto lg:mr-auto md:w-3/4 md:ml-auto md:mr-auto sm:w-11/12 sm:ml-auto sm:mr-auto">
        <div className="overflow-hidden mx-5 rounded-[15px]">
          <div
            id="scroller-items"
            className="flex transition-transform duration-500 ease-in-out w-full relative"
            style={{ transform: `translateX(-${currentIndex * 96}px)` }} // Adjust 96px based on item width
          >
            {topicsWithDuplicates.map((topic, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-24 h-8 m-2 bg-gray-200 rounded-lg flex items-center justify-center text-center"
              >
                <a href={`/?tag=${topic.toLowerCase().replace(/ /g, "-")}`}>
                  <button className="w-full h-full text-sm text-gray-800">
                    {topic}
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
          <button
            onClick={scrollPrev}
            className=" text-gray-700 p-2 border-none "
          >
            ❮
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
          <button
            onClick={scrollNext}
            className=" text-gray-700 p-2 border-none "
          >
            ❯
          </button>
        </div>
      </div>
      <div className="mx-auto mt-4 w-[70%] lg:w-1/2 md:w-3/4 sm:w-11/12">
        <Divider />
      </div>
    </>
  );
};

export default Carousel;

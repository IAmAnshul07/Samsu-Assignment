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
      <div className="relative w-[70%] mx-auto">
        <div className="overflow-hidden rounded-[15px] w-full">
          <div
            id="scroller-items"
            className="flex transition-transform duration-500 ease-in-out relative"
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
        <div className="absolute top-1/2 transform -translate-y-1/2 left-[-25px]">
          <button
            onClick={scrollPrev}
            className=" text-gray-700 p-2 border-none "
          >
            ❮
          </button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-[-25px]">
          <button
            onClick={scrollNext}
            className=" text-gray-700 p-2 border-none "
          >
            ❯
          </button>
        </div>
      </div>
      <div className="mx-auto w-full flex justify-center">
        <Divider className="w-[77%]" />
      </div>
    </>
  );
};

export default Carousel;

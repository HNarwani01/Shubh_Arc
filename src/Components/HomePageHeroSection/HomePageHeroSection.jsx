import { useState } from "react";
import { WhatWeDoImages } from "../../Structure/Structure";

const HomePageHeroSection = () => {
  const [currentLayer, setCurrentLayer] = useState(1);
  const handleLayerMove = (dir) => {
    if (dir == "next") {
      if (currentLayer == WhatWeDoImages?.length) {
        return;
      } else {
        setCurrentLayer(currentLayer + 1);
      }
    } else if (dir == "prev") {
      if (currentLayer == 1) {
        return;
      } else {
        setCurrentLayer(currentLayer - 1);
      }
    } else {
      console.log("welcome Mr. Hacker");
    }
  };
  return (
    <>
      <div className="!max-w-[100%] ">
        <h1 className="autoShow text-center text-[5rem] font-semibold font-[fira-code] my-8">
          What we do
        </h1>
        <div className="flex p-4 gap-4 h-[70vh] ">
          <div className="autoShow relative flex justify-center w-1/2 py-4">
            <button
              onClick={() => {
                handleLayerMove("prev");
              }}
              className="absolute top-1/2 translate-y-[-50%] left-0"
            >
              Previous
            </button>
            <button
              onClick={() => {
                handleLayerMove("next");
              }}
              className="absolute top-1/2 translate-y-[-50%] right-0"
            >
              Next
            </button>

            {WhatWeDoImages.map((imageURL, index) => {
              return (
                <>
                  <img
                    key={imageURL + index}
                    className={`transition absolute h-[90%] rounded-[20px] ${
                      currentLayer < index + 1
                        ? " right-[150%] "
                        : " right-[17%] "
                    } ${
                      currentLayer > index + 1
                        ? index % 2 == 0
                          ? ` rotate-[${(currentLayer - index) * 5}deg] `
                          : ` rotate-[${(currentLayer - index) * 5}deg] `
                        : ""
                    } `}
                    src={imageURL}
                    alt=""
                    style={{
                      transform:
                        currentLayer > index + 1
                          ? index % 2 == 0
                            ? `rotate(${(currentLayer - index) * 5}deg)`
                            : `rotate(-${(currentLayer - index) * 5}deg)`
                          : "",
                    }}
                  />
                </>
              );
            })}
          </div>
          <div className="autoShow w-1/2 px-8 my-[auto]">
            <p className="text-[20px]">
              We specialize in creating bespoke interior spaces tailored to your
              vision and lifestyle. From residential to commercial projects, our
              expert team designs functional, aesthetically pleasing
              environments that reflect your personal taste and meet your
              specific needs. Whether you're looking to transform a single room
              or revamp an entire space, we handle every aspect of the interior
              design process, from concept to execution, ensuring high-quality
              craftsmanship and attention to detail. Our goal is to turn your
              ideas into beautifully designed, practical spaces that inspire and
              enhance your everyday experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePageHeroSection;

import { useState } from "react";
import styles from "./HomePageProject.module.css";
import { InteriorProject, ExteriorProject } from "../../../Structure/Structure";
const HomePageProject = () => {
  const [currentCard, setCurrentCard] = useState(3);
  const handleSliderChange = (dir) => {
    if (dir == "next") {
      if (currentCard == InteriorProject.length) {
        return;
      }
      setCurrentCard(currentCard + 1);
    } else if (dir == "prev") {
      if (currentCard == 1) {
        return;
      }
      setCurrentCard(currentCard - 1);
    }
  };
  return (
    <>
      <div
        className="bg-[#d2d2d2] p-4 w-[100%] overflow-hidden relative min-h-[520px] flex items-center justify-center"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        {InteriorProject?.map((item, index) => {
          return (
            <>
              <div
                className={`absolute overflow-hidden ${
                  index + 1 > currentCard
                    ? `${styles.next} `
                    : index + 1 < currentCard
                    ? `${styles.prev} `
                    : styles.active
                } w-[250px] h-[370px] text-justify bg-[whitesmoke]  transition   rounded-[10px]`}
                style={{
                  left: `${
                    index + 1 > currentCard
                      ? `${45 + (index + 1 - currentCard) * 10}%`
                      : ""
                  }`,
                  right: `${
                    index + 1 < currentCard
                      ? `${45 + (currentCard - index - 1) * 10}%`
                      : ""
                  }`,
                }}
              >
                <div
                  key={item.projectId}
                  className={`${styles.card} transition h-full w-full`}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <h1
                    className={` absolute top-[-100%] transition text-center w-full text-[aliceblue] uppercase`}
                  >
                    {item.heading}
                  </h1>
                  <a
                    className="absolute bottom-[-100%] transition w-full p-4 text-center text-[cyan]"
                    href=""
                  >
                    View more
                  </a>
                </div>
              </div>
            </>
          );
        })}

        <button
          onClick={() => {
            handleSliderChange("prev");
          }}
          className="absolute top-1/2 translate-y-[-50%] left-4 z-[20]"
        >
          Previous
        </button>
        <button
          onClick={() => {
            handleSliderChange("next");
          }}
          className="absolute top-1/2 translate-y-[-50%] right-4 z-[20]"
        >
          Next
        </button>
      </div>
    </>
  );
};
export default HomePageProject;

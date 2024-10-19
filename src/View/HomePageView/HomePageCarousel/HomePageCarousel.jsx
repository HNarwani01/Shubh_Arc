import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "./Carousel.module.css";
import { useRef, useState } from "react";
const HomePageCarousel = () => {
  const carouselDiv = useRef();
  const carouselListDiv = useRef();
  const carouselThumbnailDiv = useRef();
  const [currentclass, setCurrentClass] = useState();
  const showSlider = (val) => {
    const parentDiv = carouselListDiv.current; // Reference to the parent container (carousel)

    if (val === "next") {
      // Move the first child to the last
      setCurrentClass(styles.next);
      clearCurrentClass();
      const firstChild = parentDiv.firstElementChild;
      parentDiv.appendChild(firstChild);
    } else if (val === "prev") {
      setCurrentClass(styles.prev);
      clearCurrentClass();
      // Move the last child to the first
      const lastChild = parentDiv.lastElementChild;
      parentDiv.insertBefore(lastChild, parentDiv.firstElementChild);
    }
  };
  const clearCurrentClass = () => {
    setTimeout(() => {
      setCurrentClass("");
    }, 1000);
  };
  return (
    <>
      <div
        className={`${styles.carousel} ${currentclass} !max-w-[100%]`}
        ref={carouselDiv}
      >
        <div className={styles.list} ref={carouselListDiv}>
          <div className={styles.item}>
            <img src="carouselIMG/interior-1.jpg" />
            <div className={styles.content}>
              <div className={styles.author}>AUTHER</div>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>INTERIOR</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className={styles.buttons}>
                <button className="flex items-center justify-evenly">
                  SEE MORE <FaExternalLinkAlt />
                </button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img src="carouselIMG/interior-2.jpg" />
            <div className={styles.content}>
              <div className={styles.author}>AUTHER</div>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>INTERIOR</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className={styles.buttons}>
                <button className="flex items-center justify-evenly">
                  SEE MORE <FaExternalLinkAlt />
                </button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img src="carouselIMG/interior-3.jpg" />
            <div className={styles.content}>
              <div className={styles.author}>AUTHER</div>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>INTERIOR</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className={styles.buttons}>
                <button className="flex items-center justify-evenly">
                  SEE MORE <FaExternalLinkAlt />
                </button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <img src="carouselIMG/interior-4.jpg" />
            <div className={styles.content}>
              <div className={styles.author}>AUTHER</div>
              <div className={styles.title}>DESIGN SLIDER</div>
              <div className={styles.topic}>INTERIOR</div>
              <div className={styles.des}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                sequi, rem magnam nesciunt minima placeat, itaque eum neque
                officiis unde, eaque optio ratione aliquid assumenda facere ab
                et quasi ducimus aut doloribus non numquam. Explicabo,
                laboriosam nisi reprehenderit tempora at laborum natus unde. Ut,
                exercitationem eum aperiam illo illum laudantium?
              </div>
              <div className={styles.buttons}>
                <button className="flex items-center justify-evenly">
                  SEE MORE <FaExternalLinkAlt />
                </button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.thumbnail} ref={carouselThumbnailDiv}>
          <div className={styles.item}>
            <img src="carouselIMG/interior-1.jpg" />
            <div className={styles.content}>
              <div className={styles.title}>Name Slider</div>
              <div className={styles.description}>Description</div>
            </div>
          </div>
          <div className={styles.item}>
            <img src="carouselIMG/interior-2.jpg" />
            <div className={styles.content}>
              <div className={styles.title}>Name Slider</div>
              <div className={styles.description}>Description</div>
            </div>
          </div>
          <div className={styles.item}>
            <img src="carouselIMG/interior-3.jpg" />
            <div className={styles.content}>
              <div className={styles.title}>Name Slider</div>
              <div className={styles.description}>Description</div>
            </div>
          </div>
          <div className={styles.item}>
            <img src="carouselIMG/interior-4.jpg" />
            <div className={styles.content}>
              <div className={styles.title}>Name Slider</div>
              <div className={styles.description}>Description</div>
            </div>
          </div>
        </div>

        <div className={styles.arrows}>
          <button
            onClick={() => {
              showSlider("prev");
            }}
            id="prev"
          >
            {" "}
            {"<"}{" "}
          </button>
          <button
            onClick={() => {
              showSlider("next");
            }}
            id="next"
          >
            {" "}
            {">"}{" "}
          </button>
        </div>

        <div className={styles.time}></div>
      </div>
    </>
  );
};
export default HomePageCarousel;

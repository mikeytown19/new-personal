import  React, { memo, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useInvertedBorderRadius } from "../utils/use-inverted-border-radius";
import { ContentPlaceholder } from "./ContentPlaceholder";
import { Title } from "./Title";
import { Image } from "./Image";
import { openSpring, closeSpring } from "./animations";
import { useScrollConstraints } from "../utils/use-scroll-constraints";
import { useWheelScroll } from "../utils/use-wheel-scroll";
// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to dismiss action.
const dismissDistance = 100;

export const Card = memo(
  ({
    id,
    title,
    category,
    pointOfInterest,
    backgroundColor,
    src
  }) => {
    const [opened, updateOpened] = useState(false);

    const y = useMotionValue(0);
    const zIndex = useMotionValue(opened ? 2 : 0);

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20);

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null);
    const constraints = useScrollConstraints(cardRef, opened);
    function checkSwipeToDismiss() {

      y.get() > dismissDistance &&  updateOpened(!opened);
    }

    function checkZIndex(latest) {
      if (opened) {
        zIndex.set(2);
      } else if (!opened && latest.scaleX < 1.01) {
        zIndex.set(0);
      }
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef(null);
    useWheelScroll(
      containerRef,
      y,
      constraints,
      checkSwipeToDismiss,
      opened
    );

    return (
      <li ref={containerRef} className={`card`}>
        <Overlay isSelected={opened} updateOpened={updateOpened} />
        <div className={`card-content-container ${opened && "open"}`}>
          <motion.div
            ref={cardRef}
            className="card-content"
            style={{ ...inverted, zIndex, y }}
            layoutTransition={opened ? openSpring : closeSpring}
            drag={opened ? "y" : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}
          >
            <Image
              id={id}
              src={src}
              isSelected={opened}
              pointOfInterest={pointOfInterest}
              backgroundColor={backgroundColor}
              updateOpened={updateOpened}
            />
            <Title title={title} category={category} isSelected={opened} />
            <ContentPlaceholder />
          </motion.div>
        </div>
         <div onClick={() => {
          updateOpened(!opened)
        }} className="card-open-link"></div>
      </li>
    );
  }
);

const Overlay = ({ isSelected, updateOpened }) => (
  <motion.div
    onClick={()=>updateOpened(!isSelected)}
    initial={false}
    animate={{ opacity: isSelected ? 1 : 0 }}
    transition={{ duration: 0.2 }}
    style={{ pointerEvents: isSelected ? "auto" : "none" }}
    className="overlay"
  >

  </motion.div>
);

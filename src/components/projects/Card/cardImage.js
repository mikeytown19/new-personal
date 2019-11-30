import  React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";

export const CardImage = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
  updateOpened
}) => {
  const inverted = useInvertedScale();
  return (
    <motion.div
      className="card-image-container"
      onClick={()=>updateOpened(!isSelected)}
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className="card-image"
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
        transition={closeSpring}
      />
    </motion.div>
  );
};

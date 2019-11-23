import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./menu-toggle";
import { Navigation } from "./navigation";
import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

const { gradient } = theme;
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 259px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 259px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <MotionStyles>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </MotionStyles>
  );
};


const MotionStyles = styled.div`
z-index: 10;

nav {
  position: absolute;
  top: 30px;
  right: 30px;
  bottom: 0;
  width: 300px;
  z-index: 10;
}

.background {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: ${gradient.reverse};
}

button {
  outline: none;
  border: none;
  user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
}

ul,
li {
  margin: 0;
  padding: 0;
}

ul {
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;

}

li {
  list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;

}

.icon-placeholder {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
}

.text-placeholder {
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
}



`
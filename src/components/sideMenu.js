import React, { useRef } from 'react'

import { motion, useCycle } from "framer-motion";

import styled from '@emotion/styled'
import { theme } from '../styles/theme'

const { colors, gradient } = theme;

const data = [
  { name: "1", url: "/private/loans" },
  { name: "2", url: "/private/cards" },
  { name: "3", url: "/private/deposits" },
  { name: "4", url: "/private/services" },
  { name: "5", url: "/private/services" },
  { name: "6", url: "/private/services" },
  { name: "7", url: "/private/services" }
];

const SideBarList = (data) => (
  <div>
   {data.map((item, i) => (
      <div key={i}>{item.name}</div>
    ))}
  </div>
)

export const SideMenu = () => {
  return (
    <div>
      poop
    </div>
  )
}

const SidekickWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
`;

const SidekickOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${gradient.default};
  pointer-events: all;
  z-index: 0;
`;

const SidekickBody = styled(motion.div)`
  position: relative;
  z-index: 1;
  pointer-events: all;
  background-color: #fff;
  padding: 40px 60px 30px 30px;
  height: 100%;
  max-width: 500px;
  position: relative;
  box-sizing: border-box;
`;

const MenuHandler = styled(motion.button)`
  border: none;
  background: transparent;
  border-radius: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  outline: none;
`;
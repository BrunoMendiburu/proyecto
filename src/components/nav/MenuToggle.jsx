import * as React from "react"
import { motion } from "framer-motion"
import "./nav.css"

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(255, 255%, 255%)"
    strokeLinecap="round"
    {...props}
  />
)

export const MenuToggle = ({ toggle }) => (
  <motion.button
    initial={{ x: -200 }}
    animate={{ x: 0 }}
    transition={{ duration: 1, type: "spring", bounce: 0.6 }}
    onClick={toggle}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </motion.button>
)

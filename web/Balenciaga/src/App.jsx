import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion, transform } from "framer-motion";
import Maze from "./Maze.jsx"

function Buttons() {
  const buttonStyle = {
    padding: "10px",
    border: "1px solid rgba(54, 53, 58, 1)",
    borderRadius: "5px",
    fontFamily: "SF Pro Display",
    fontWeight: "600",
    transition: "0.2s",
    backgroundColor: "black",
    color: "white",
  }

  return {
    styles() {
      return buttonStyle;
    }
  }
}


const Page1 = () => {
  const buttons = Buttons()
  const navigate = useNavigate()
  return (
    <div className="pages" style={
      {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "SF Pro Display",
        padding: "2em",
      }
    }>
      <div className="messages" style={
        {
          textAlign: "center",
        }
      } >
        <h1>Naglalabas ng moby</h1>
        <p style={{ color: "rgb(100, 100, 100)", fontSize: "1rem" }}>Nagngangawngaw</p>
      </div>
      <div className="buttons" style={
        {
          display: "flex",
          columnGap: "1em",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }
      }>
        <button style={buttons.styles()} onClick={() => {
          navigate("/game")
        }}>Game</button>
        <button style={buttons.styles()} onClick={() => {
          navigate("/page-2")
        }}>Continue</button>
      </div>
    </div>
  )
}

const Page2 = () => {
  const buttons = Buttons()
  const navigate = useNavigate()
  return (
    <div className="pages" style={
      {
        textAlign: "center",
      }
    }>
      <div className="messages">
        <h1>Bakla</h1>
        <p>Parang makahiya</p>
      </div>
      <div className="buttons" style={
        {
          display: "flex",
          columnGap: "1em",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }
      }>
        <button style={buttons.styles()} onClick={() => {
          navigate("/")
        }}>Back</button>
        <button style={buttons.styles()} onClick={() => {
          navigate("/page-3")
        }}>Continue</button>
      </div>
    </div>
  )
}

const Page3 = () => {
  return (
    <>
      <h1>Parang makahiya</h1>
    </>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Page1 /></PageWrapper>} />
        <Route path="/game" element={<PageWrapper><Maze /></PageWrapper>} />
        <Route path="/page-2" element={<PageWrapper><Page2 /></PageWrapper>} />
        <Route path="/page-3" element={<PageWrapper><Page3 /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}

const App = () => {
  return (
    <>
      <AnimatedRoutes />
    </>
  )
}
export default App;
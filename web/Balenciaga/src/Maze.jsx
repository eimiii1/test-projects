import { useState, useEffect, useRef } from "react";
import jewel from "./assets/images/jewel.jpg"
import nagngangawngaw from "./assets/audios/qwe.mp3"
import { img } from "framer-motion/client";

const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 2, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const cellSize = 40;

const Maze = () => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null)
  const [player, setPlayer] = useState({ x: 1, y: 1 });
  const [won, setWon] = useState(false);
  const [pressedKey, setPressedKey] = useState(null); // track pressed button

  // draw maze + player
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const drawMaze = () => {
      for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
          if (maze[y][x] === 1) ctx.fillStyle = "black";
          else if (maze[y][x] === 2) ctx.fillStyle = "red";
          else ctx.fillStyle = "white";
          ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
      }
    };

    const drawPlayer = () => {
      ctx.fillStyle = "blue";
      ctx.beginPath();
      ctx.arc(
        player.x * cellSize + cellSize / 2,
        player.y * cellSize + cellSize / 2,
        cellSize / 3,
        0,
        Math.PI * 2
      );
      ctx.fill();
    };

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMaze();
    drawPlayer();
  }, [player]);

  // Movement function
  const movePlayer = (dir) => {
    if (won) return;
    let { x, y } = player;
    if (dir === "up") y--;
    if (dir === "down") y++;
    if (dir === "left") x--;
    if (dir === "right") x++;

    if (maze[y][x] !== 1) {
      setPlayer({ x, y });
      if (maze[y][x] === 2) setWon(true);
    }
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      let dir = null;
      if (e.key === "ArrowUp" || e.key === "w") dir = "up";
      if (e.key === "ArrowDown" || e.key === "s") dir = "down";
      if (e.key === "ArrowLeft" || e.key === "a") dir = "left";
      if (e.key === "ArrowRight" || e.key === "d") dir = "right";
      if (dir) {
        setPressedKey(dir);
        movePlayer(dir);
      }
    };

    const handleKeyUp = () => {
      setPressedKey(null);
    };


    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };

  }, [player, won]);

  // button style
  const btnStyle = (dir) => ({
    padding: "15px 20px",
    margin: "5px",
    border: "2px solid black",
    borderRadius: "8px",
    backgroundColor: pressedKey === dir ? "lightblue" : "white",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  });

  return (
    <div style={
        {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            scale: "0.8"
        }
    }>
      <h1>Bakla</h1>
      <canvas
        ref={canvasRef}
        width={maze[0].length * cellSize}
        height={maze.length * cellSize}
        style={{ border: "2px solid black", marginTop: "20px" }}
      />
      <div style={{ marginTop: "20px" }}>
        <div>
          <button style={btnStyle("up")} onClick={() => movePlayer("up")}>
            Up
          </button>
        </div>
        <div>
          <button style={btnStyle("left")} onClick={() => movePlayer("left")}>
            Left
          </button>
          <button style={btnStyle("down")} onClick={() => movePlayer("down")}>
            Right
          </button>
          <button style={btnStyle("right")} onClick={() => movePlayer("right")}>
            Down
          </button>
        </div>
      </div>
    {won && <img src={jewel} style={{
        position: "absolute",
        minWidth: "50rem"
    }} onLoad={() => {
        const audio = new Audio(nagngangawngaw)
        audio.play()
    }}></img> }
    </div>
  );
};

export default Maze;

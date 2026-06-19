import { useState } from "react";
import "./App.css";


export default function App() {
  const [flipped, setFlipped] = useState(false);


  const handleFlip = () => {
    setFlipped(!flipped);
  };


  return (
    <div style={styles.container}>
      <div
        style={{
          ...styles.card,
          transform: flipped ? "rotateY(1260deg)" : "rotateY(0deg)",
        }}
        onClick={handleFlip}
      >
        {/* 正面 */}
        <div style={{ ...styles.face, ...styles.front }}>
          <img
            src="src\finn.jpg"
            style={styles.avatar}
          />
          <h2>方虹絜
          </h2>
          <p>資工系三甲</p>
          <p>5b2g0016</p>
          <p style={styles.tip}>點一下卡片翻面</p>
        </div>


        {/* 背面 */}
        <div style={{ ...styles.face, ...styles.back }}>
          <h2>About Me</h2>
          <p>我正在學習 React，這是一個翻轉卡片練習作品。</p>
          <p>Email: 5b2g0016@stust.edu.tw
          </p>
          <p style={styles.tip}>再點一次回正面</p>
        </div>
      </div>
    </div>
  );
}


const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    perspective: "1000px",
    background: "#f3f4f6",
  },
  card: {
    width: "300px",
    height: "350px",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.8s",
    cursor: "pointer",
  },
  face: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
    padding: "20px",
  },
  front: {},
  back: {
    transform: "rotateY(180deg)",
    background: "#779fe5",
    color: "white",
  },
  avatar: {
    width: "100px",
    height:"100px",
    borderRadius: "100%",
    marginBottom: "10px",
  },
  tip: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#888",
  },
};

import React, { useState } from "react";
import "./Main.css";
import run from "../../Config/gemini";
import { useDispatch, useSelector } from "react-redux";
import { setRecentPrompts } from "../../Redux/gemini";
import geminiImg from "../../assets/gemini_icon.png";
import Greet from "../Greet/Greet";
const Main = () => {
  const dispatch = useDispatch();
  const [prompt, setPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const formatText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*/g, "<br />");
  };
  const typeText = (text) => {
    let index = 0;
    const speed = 10;
    setResult('')
    const type = () => {
      if (index < text.length) {
        setResult((prev) => prev + text[index]);
        index++;
        setTimeout(type, speed);
      }
    };
    type();
  };
  const sendPrompt = async () => {
    try {
      setLoading(true);
      setShowResult(true);
      setPreviousPrompt(prompt);
      const response = await run(prompt);
      const formattedResponse = formatText(response);
      typeText(formattedResponse);
      dispatch(setRecentPrompts(prompt));
      setPrompt("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      sendPrompt();
    }
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img
          src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
          alt=""
        />
      </div>
      <div className="main-container">
        {!showResult ? (
         <Greet/>
        ) : (
          <div className="result">
            <div className="result-title">
              <img
                src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
                alt=""
              />
              <p>{previousPrompt}</p>
            </div>
            <div className="result-data">
              <img src={geminiImg} alt="icon" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: result }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => handleEnter(e)}
              type="text"
              value={prompt}
              placeholder="Enter a propmt here"
            />
            <div>
              <i className="fa-solid fa-image"></i>
              <i className="fa-solid fa-microphone"></i>
              <i className="fa fa-paper-plane" onClick={sendPrompt}></i>
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;

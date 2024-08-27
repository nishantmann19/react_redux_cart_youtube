import React, { useEffect, useState, useCallback } from "react";
import ChatBot from "../ChatBot.jpg";
// import { askMore } from "../../utility-files/api-caller/ApiServices";

const botStyle = {
  padding: "10px 15px",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  background: "linear-gradient(90deg, rgb(0 75 239) 0%, rgb(12 53 135) 100%)",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  color: "#fff",
  fontWeight: "500",
  fontSize: "0.9rem",
};

const messageStyle = { ...botStyle, cursor: "pointer" };

const Chatbot = ({ handleBot }) => {
  const [result, setResult] = useState(null);
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState("");
  const [botChat, setBotChat] = useState([]);

  useEffect(() => {
    if (result) {
      setBotChat((prevBotChat) => [
        ...prevBotChat,
        { action: "received", result },
      ]);
    }
  }, [result]);

  useEffect(() => {
    const chatBody = document.querySelector(".modal-body");
    chatBody.scrollTop = chatBody.scrollHeight;
  }, [botChat]);

  const handleBotData = useCallback(
    async (suggestion) => {
      if (!suggestion && formData === "") {
        return;
      }
      setPending(true);
      setBotChat((prevBotChat) => [
        ...prevBotChat,
        { action: "sent", result: suggestion || formData },
      ]);
      // let data = await askMore(suggestion || formData);
      // if (data.status === 200) {
      //   setResult(data?.data);
      //   setFormData("");
      // }
      setPending(false);
    },
    [formData]
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && formData !== "") {
      handleBotData();
    }
  };

  const suggestions = [
    "Summary of negative reviews.",
    "Summary of positive reviews.",
    "Most critical review.",
    "Aspect having maximum negative review.",
    "Give me top five positive reviews.",
    "Give me top three negative reviews.",
  ];

  return (
    <>
    
    <div
      className="modal show"
      style={{ display: "block", background: "rgb(77 73 73 / 60%)" }}
      id="chatbotModal"
      tabIndex="-1"
      aria-labelledby="chatbotModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-bottom-right">
        <div className="modal-content modal-content-bot">
          <div className="modal-header" style={botStyle}>
            <h5 className="modal-title" id="chatbotModalLabel">
              <img src={ChatBot} alt="Bot Avatar" className="bot-avatar" />
              <small>Ask Buddy</small>
            </h5>
            <button
              type="button"
              style={{ backgroundColor: "#fff" }}
              className="btn-close"
              onClick={() => handleBot(null)}
              aria-label="Close"
            ></button>
          </div>
          <div
            className="modal-body"
            style={{ background: "rgb(213 213 213)" }}
          >
            <div className="card" style={{ width: "20rem" }}>
              <img
                src={ChatBot}
                alt="Bot Avatar"
                className=""
                style={{ height: "10rem", borderRadius: "10px" }}
              />
              <div
                className="card-body"
                style={{
                  transition: "background-color 0.3s ease, transform 0.3s ease",
                  background:
                    "linear-gradient(90deg, rgb(0 75 239) 0%, rgb(12 53 135) 100%)",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                  color: "#fff",
                  borderRadius: "6px",
                }}
              >
                <small>
                  <p className="card-text text-center mt-2">
                    Hello! How can I assist you today?
                  </p>
                </small>
              </div>
            </div>

            {botChat &&
              botChat.length > 0 &&
              botChat.map((data, index) => (
                <div
                  key={index}
                  className={`chat-message ${
                    data.action === "sent" ? "user" : "bot"
                  }`}
                >
                  {data.action !== "sent" && (
                    <img
                      src={ChatBot || ChatBot}
                      alt="Bot Avatar"
                      className="bot-avatar"
                    />
                  )}
                  <div
                    className="alert alert-primary"
                    role="alert"
                    style={messageStyle}
                    aria-live="polite"
                  >
                    {data.result}
                  </div>
                </div>
              ))}

            {pending ? (
              <div className="chat-message bot">
                <img
                  src={ChatBot || ChatBot}
                  alt="Bot Avatar"
                  className="bot-avatar"
                />
                <div
                  className="alert alert-primary"
                  role="alert"
                  style={messageStyle}
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="blinking-dots">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className="quick-reply-buttons">
              {botChat && botChat.length === 0 && (
                <ul className="list-group">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="list-group-item"
                      onClick={() => handleBotData(suggestion)}
                      style={{ ...messageStyle, width: "26rem" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div
            className="modal-footer modal-footer-bot"
            style={{ backgroundColor: "#e9e9e9" }}
          >
            <div className="input-group mb-1">
              <input
                type="text"
                value={formData}
                onKeyUp={handleKeyPress}
                onChange={(event) => setFormData(event.target.value)}
                placeholder="Enter your query here..."
                className="form-control"
                aria-label="Text input with 2 dropdown buttons"
                disabled={pending}
              />
              {pending ? (
                <button
                  style={botStyle}
                  className="btn btn-secondary gap-3"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                </button>
              ) : (
                <button
                  style={botStyle}
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => handleBotData()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-send-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Chatbot;

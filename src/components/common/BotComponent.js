import React, { useEffect, useState } from "react";
import "../Chatbot.css";
import {
    CssBaseline,
    Box,
    Typography,
    TextField,
    IconButton,
    List,
    ListItem,
    Paper,
    Button,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import SuggestionForm from "./SuggestionForm";
import BlinkingDots from "./BlinkingDots";
import { useNavigate } from "react-router-dom";

const suggestions = [
    "10 products from category chicken.",
    "10 mutton products having price more than 400.",
    "10 products that contains protein more than 20g.",
    "10 products from category seafood that can be stored in -18 degree celsius.",
    "10 products from category pork having weight more than 300g.",
];

function BotComponent() {
    const [open, setOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    const [showCustomQuery, setShowCustomQuery] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const userId = localStorage.getItem("uuid");

    useEffect(() => {
        if (messages.length) {
            const chatBody = document.querySelector(".chat-bot-rec");
            chatBody.scrollTop = chatBody.scrollHeight;
        };
    }, [messages, showSuggestions]);

    const handleOpen = () => setOpen(true);

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
        setInput("");
        setMessages([]);
        setShowCustomQuery(false);
    };

    const handleSend = async (paramdata) => {
        const messageText = paramdata || input;
        if (!messageText.trim()) return;
        setShowSuggestions(false);
        const userMessage = { text: messageText, type: "user" };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setLoading(true);
        try {
            const response = await axios.get(
                "http://54.224.108.112:5000/get-chatbotresponse",
                {
                    params: {
                        user_id: userId,
                        user_prompt: messageText,
                    },
                }
            );

            const botMessages = response.data.recommendations.map((element) => ({
                text: element.productName,
                image: element.image_url,
                type: "bot",
            }));

            setMessages((prevMessages) => [...prevMessages, ...botMessages]);
            setShowCustomQuery(false);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
            setInput("");
        }
    };

    const handleCustomSend = () => setShowCustomQuery((prev) => !prev);

    return (
        <>
            {!open ? (
                <button
                    type="button"
                    className="btn btn-warning floating-button"
                    onClick={handleOpen}
                    style={{
                        backgroundColor: "#ff9800",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#ff9800",
                            color: "black",
                        },
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-chat-dots-fill"
                        viewBox="0 0 16 16"
                    >
                        <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                </button>
            ) : (
                <Box
                    sx={{
                        position: "fixed",
                        bottom: "15px",
                        right: "15px",
                        width: {
                            xs: "100%",
                            sm: "500px",
                            md: "700px",
                            lg: "600px",
                        },
                        height: {
                            xs: "auto",
                            sm: "600px",
                            md: "790px",
                            lg: "900px",
                        },
                        maxWidth: "100%",
                        maxHeight: "90vh",
                        display: "flex",
                        flexDirection: "column",
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
                        backgroundColor: "#fff",
                        overflow: "hidden",
                    }}
                >
                    <CssBaseline />
                    <Box
                        sx={{
                            padding: 2,
                            backgroundColor: "#ff9800",
                            color: "#fff",
                            textAlign: "center",
                            borderTopLeftRadius: "8px",
                            borderTopRightRadius: "8px",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                                src={require("../../assetes/image/ChatBot.jpg")}
                                alt="Chatbot Logo"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    marginRight: "8px",
                                    borderRadius: "50%",
                                }}
                            />
                            <Typography variant="h6" sx={{ color: "#fff" }}>
                                Ask Buddy
                            </Typography>
                        </Box>
                        <IconButton
                            onClick={handleClose}
                            sx={{
                                position: "absolute",
                                top: "8px",
                                right: "8px",
                                color: "#fff",
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Box
                        className="chat-bot-rec"
                        sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            padding: 2,
                            overflowY: "auto",
                            overflowX: "hidden", // Prevent horizontal overflow
                        }}
                    >
                        {messages.length > 0 && (
                            <List>
                                {messages.map((message, index) => (
                                    <>
                                        <ListItem
                                            key={index}
                                            sx={{
                                                justifyContent:
                                                    message.type === "user" ? "flex-end" : "flex-start",
                                            }}
                                        >
                                            <Paper
                                                elevation={3}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent:
                                                        message.type === "user" ? "center" : "flex-start",
                                                    padding: 1,
                                                    borderRadius: 1,
                                                    backgroundColor:
                                                        message.type === "user" ? "#ff9800" : "#e0e0e0",
                                                    color: message.type === "user" ? "#fff" : "#000",
                                                    maxWidth: "80%",
                                                    wordBreak: "break-word",
                                                    flexWrap: "wrap",
                                                }}
                                            >
                                                {message.type === "user" ? (
                                                    message.text
                                                ) : (
                                                    <a
                                                        href={`/product/${message.text}`}
                                                        style={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            textDecoration: "none",
                                                            flexWrap: "wrap",
                                                        }}
                                                    >
                                                        <img
                                                            src={`https://cdn.meatigo.com/${message.image}`}
                                                            alt="thumbnail"
                                                            style={{
                                                                width: "30px",
                                                                height: "30px",
                                                                marginRight: "8px",
                                                                borderRadius: "50%",
                                                            }}
                                                        />
                                                        <span style={{ maxWidth: "calc(100% - 40px)" }}>
                                                            {message.text}
                                                        </span>
                                                    </a>
                                                )}
                                            </Paper>
                                        </ListItem>

                                        {(messages.length - 1 === index) && message.type !== "user" && !showSuggestions && <ListItem
                                            key={index}
                                            sx={{
                                                justifyContent:
                                                    message.type === "user" ? "flex-end" : "flex-start",
                                            }}
                                        >
                                            <Paper
                                                elevation={3}
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "flex-start",
                                                    padding: 1,
                                                    borderRadius: 1,
                                                    backgroundColor: "#e0e0e0",
                                                    color: "#000",
                                                    maxWidth: "80%",
                                                    wordBreak: "break-word",
                                                    flexWrap: "wrap",
                                                }}
                                            >
                                                <a
                                                    href="#"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        textDecoration: "none",
                                                        flexWrap: "wrap",
                                                    }}
                                                    onClick={() => setShowSuggestions(true)}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                                    </svg>&nbsp; Back
                                                </a>
                                            </Paper>
                                        </ListItem>}
                                    </>
                                ))}
                                {loading && (
                                    <ListItem
                                        sx={{
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: 1,
                                                borderRadius: 1,
                                                backgroundColor: "#e0e0e0",
                                                color: "#000",
                                                maxWidth: "80%",
                                            }}
                                        >
                                            <img
                                                src={require("../../assetes/image/ChatBot.jpg")}
                                                alt="thumbnail"
                                                style={{
                                                    width: "30px",
                                                    height: "30px",
                                                    marginRight: "8px",
                                                    borderRadius: "50%",
                                                }}
                                            />
                                            <BlinkingDots />
                                        </Paper>
                                    </ListItem>
                                )}
                            </List>
                        )}

                        {showSuggestions && (
                            <>
                                {messages.length === 0 && <Button
                                    variant="outlined"
                                    color="warning"
                                    sx={{
                                        mt: 1,
                                        mr: 1,
                                        px: 2,
                                        py: 1,
                                        borderRadius: 2,
                                        color: "#000",
                                        transition: "background-color 0.3s, transform 0.3s",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        textAlign: "center",
                                        width: "100%", // Full width on small screens
                                    }}
                                >
                                    <>
                                        <img
                                            src={require("../../assetes/image/bot.gif")}
                                            alt="Bot"
                                            style={{ width: "50%", marginBottom: "8px" }}
                                        />
                                        Hello! How can I assist you today?
                                    </>
                                </Button>}

                                {suggestions.map((suggestion, index) => (
                                    <Button
                                        key={index}
                                        variant="outlined"
                                        color="warning"
                                        sx={{
                                            mt: 1,
                                            mr: 1,
                                            px: 2,
                                            py: 1,
                                            borderRadius: 2,
                                            color: "#000",
                                            transition: "background-color 0.3s, transform 0.3s",
                                            width: "100%", // Full width on small screens
                                            "&:hover": {
                                                backgroundColor: "warning.light",
                                                transform: "scale(1.05)",
                                                color: "#fff",
                                            },
                                        }}
                                        onClick={() => handleSend(suggestion)}
                                    >
                                        {suggestion}
                                    </Button>
                                ))}
                            </>
                        )}

                        {/* (
                        <SuggestionForm
                            handleSend={handleSend}
                            handleBack={handleCustomSend}
                        />
                        ) */}
                    </Box>

                    {!showCustomQuery && (
                        <Box
                            sx={{
                                display: "flex",
                                padding: 1,
                                backgroundColor: "#fff",
                                borderBottomLeftRadius: "8px",
                                borderBottomRightRadius: "8px",
                                borderTop: "1px solid #ddd",
                                position: "relative",
                                gap: 1, // Add gap between text field and button
                                pointerEvents: loading ? "none" : "",
                                opacity: loading ? "0.2" : "",
                            }}
                        >
                            <TextField
                                fullWidth
                                variant="outlined"
                                size="small"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                placeholder="Type a message..."
                                sx={{ flex: 1 }} // Allow TextField to take available space
                            />
                            <IconButton onClick={() => handleSend()} color="warning">
                                <SendIcon />
                            </IconButton>
                        </Box>
                    )}
                </Box>
            )}
        </>
    );
}

export default BotComponent;

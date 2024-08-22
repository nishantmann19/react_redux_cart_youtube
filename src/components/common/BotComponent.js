import React, { useState } from "react";
import Chatbot from "../Chatbot";
import {
  Container,
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
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   IconButton,
//   Badge,
//   Box,
//   Button,
//   TextField,
//   InputAdornment,
// } from "@mui/material";
// import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function BotComponent() {
  const [showBot, setShowBot] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: "user" }]);
      setInput("");
      // Simulate a bot response
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: input, type: "user" },
          { text: "This is a bot response", type: "bot" },
        ]);
      }, 1000);
    }
  };
  return (
    <>
      {!open && (
        <button
          type="button"
          className="btn btn-primary floating-button"
          onClick={handleOpen}
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
      )}
      {/* {showBot && <Chatbot handleBot={setShowBot} />}
      <Button onClick={handleOpen}>Open modal</Button> */}
      {open && (
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            width: "350px",
            height: "500px",
            display: "flex",
            flexDirection: "column",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.2)",
            backgroundColor: "#fff",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              padding: 2,
              backgroundColor: "#1976d2",
              color: "#fff",
              textAlign: "center",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          >
            <Typography variant="h6">Chatbot</Typography>
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
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              padding: 2,
              overflowY: "auto",
            }}
          >
            <List>
              {messages.map((message, index) => (
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
                      padding: 1,
                      borderRadius: 1,
                      backgroundColor:
                        message.type === "user" ? "#1976d2" : "#e0e0e0",
                      color: message.type === "user" ? "#fff" : "#000",
                      maxWidth: "70%",
                    }}
                  >
                    {message.text}
                  </Paper>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{
              display: "flex",
              padding: 1,
              backgroundColor: "#fff",
              borderBottomLeftRadius: "8px",
              borderBottomRightRadius: "8px",
              borderTop: "1px solid #ddd",
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
            />
            <IconButton onClick={handleSend} color="primary">
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
}

export default BotComponent;

// SocketProvider.js
import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
import { BASE_URL as SocketBaseUrl } from "../../constant/global";
import * as StorageHandling from "../../utility-files/storage-util/StorageHandling";

const SocketContext = createContext();

const SocketProvider = ({ children }) => {
  const token =
    localStorage.getItem(StorageHandling.storageKey.TOKEN) ||
    sessionStorage.getItem(StorageHandling.storageKey.TOKEN);
  const ENDPOINT = SocketBaseUrl;
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!token) {
      console.warn("Token not found, socket connection aborted");
      return; // Handle case where token is not available
    }

    const newSocket = io(ENDPOINT, {
      extraHeaders: {
        token: token,
      },
    });
    newSocket.connect();
    setSocket(newSocket);
    console.log("Socket Connected...");

    // Clean up the socket connection when the component unmounts
    return () => {
      console.log("Socket disconnect...");
      newSocket.disconnect();
    };
  }, [ENDPOINT, token]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketProvider, SocketContext };

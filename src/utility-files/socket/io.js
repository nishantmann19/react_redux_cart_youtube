import { io } from "socket.io-client";
import * as StorageHandling from "../storage-util/StorageHandling";

// const CONN_PORT = baseURL;
const CONN_PORT = "ws://localhost:1641";

const token =
  localStorage.getItem(StorageHandling.storageKey.TOKEN) ||
  sessionStorage.getItem(StorageHandling.storageKey.TOKEN);

const createIOInstance = () =>
  io(CONN_PORT, {
    extraHeaders: {
      token: token,
    },
  });

export default createIOInstance;

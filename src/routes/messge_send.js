
import { deleteMessae, getMessge_send, message_send } from "../controllers/messge_send";
module.exports = (app) => { 
    app.post("/message_send", message_send); 
    app.get("/get/messge_send", getMessge_send);
    app.delete("/delete-messge_send", deleteMessae);
} 

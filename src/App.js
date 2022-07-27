import { useState } from "react";
import "./styles.css";
import List from "./sendList";
import Post from "./post";

export default function App() {
  let comments = localStorage.getItem("comments");
  if (comments) {
    comments = JSON.parse(comments);
  } else {
    comments = [];
  }

  const [sendList, setSendList] = useState(comments);

  const handleSend = (send) => {
    setSendList([...sendList, send]);
  };

  const handleRemove = (index) => {
    let deletes = localStorage.getItem("comments");
    if (deletes) {
      deletes = JSON.parse(deletes);
    } else {
      deletes = [];
    }
    deletes.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(deletes));

    sendList.splice(index, 1);
    setSendList([...sendList]);
  };

  return (
    <div>
      <Post post={handleSend} />

      {sendList.map((send, index) => {
        return (
          <div>
            <List
              send={send}
              index={index}
              remove={handleRemove}
              key={index + send}
            />
          </div>
        );
      })}
    </div>
  );
}

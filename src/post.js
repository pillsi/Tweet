import { useState } from "react";

export default function Post(props) {
  const [send, setSent] = useState("");
  const [num, setNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);

  const sendClick = () => {
    // 如果要保存在local storage: 5M max.
    let comments = localStorage.getItem("comments");

    if (comments) {
      // str数据转成json '[]' => []
      comments = JSON.parse(comments);
    } else {
      comments = [];
    }
    comments.push(send);
    // 先把数组转成string，再储存['haley'] => "['haley']""
    localStorage.setItem("comments", JSON.stringify(comments));

    props.post(send);
    setSent("");
  };

  return (
    <div className="App">
      <h1>Dew's post</h1>
      <p>转发这只招财喵，下半年都能财源滚滚！</p>

      <div className="images">
        <img
          src="https://cdn3.iconfinder.com/data/icons/complete-set-icons/128/favourite512x512.png"
          onClick={() => {
            setNum(num + 1);
          }}
        />
        <span>{num}</span>
        <img
          src="https://dn4.iconfinder.com/data/icons/logos-and-brands/512/94_Dislike_logo_logos-256.png"
          onClick={() => {
            setSecondNum(secondNum + 1);
          }}
        />
        <span>{secondNum}</span>

        <div className="send">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH14jl3fDOh51i3yL5fdu47mMdFlJ692TGF39AQagG2cH6-uzxxVXROtu3EvqboSFcEm8&usqp=CAU" />

          {/* 受控组件 */}
          <textarea
            value={send}
            rows="3"
            cols="40"
            onChange={(e) => {
              setSent(e.target.value);
            }}
          />

          {/* 非受控组件 */}
          {/* <textarea ref={textArea}></textarea> */}

          <button onClick={sendClick}>send</button>

          <p>评论 {}</p>
        </div>
      </div>
    </div>
  );
}

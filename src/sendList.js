export default function List(props) {
  return (
    <div className="post">
      <img
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH14jl3fDOh51i3yL5fdu47mMdFlJ692TGF39AQagG2cH6-uzxxVXROtu3EvqboSFcEm8&usqp=CAU"
        }
      />
      <p>{props.send}</p>
      <button onClick={() => props.remove(props.index)}>Delete</button>
    </div>
  );
}

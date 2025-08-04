import { useState } from "react";

export default function HelloMyNamePage() {
  const [name, setName] = useState("");
  const [greetname, setGreetname] = useState("");

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setName(event.target.value);
  };

  const handleGreet = () => {
    setGreetname(name.trim());  // เอาชื่อไปเก็บตอนกดปุ่ม
  };
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        value={name}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary" onClick={handleGreet}>Greet Me</button>
      {/* Result Text */}
      {greetname === "" ? (
        <p style={{ color: "red" }}>Please insert your name</p>
      ) : (
        <p style={{ color: "black" }}>Hello {greetname}</p>
      )}
      
    </div>
  );
}

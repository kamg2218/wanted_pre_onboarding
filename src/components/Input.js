import {useState} from 'react';
import './Input.css';

export default function Input(){
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdType, setType] = useState("password");

  const handleEmailCheck = (str) => {
    const idx = str.search("@");
    if (idx === -1) {
      return false;
    } else if (str.search(".com") === -1) {
      return false;
    } else if (str.search(".net") === -1) {
      return false;
    } else if (str.search(".") === idx + 1) {
      return false;
    }
    return true;
  }
  const handleEmail = (event) => {
    if (handleEmailCheck(event.target.value)){
      console.log('checked!');
    }
    setEmail(event.target.value);
  }
  const handlePwd = (event) => {
    setPwd(event.target.value);
    setType('password');
  }

  return (
    <form className="Input-block">
      <label>E-mail</label>
      <input value={email} onChange={handleEmail}></input>
      <label>Password</label>
      <input type={pwdType} value={pwd} onChange={handlePwd}></input>
    </form>
  );
}
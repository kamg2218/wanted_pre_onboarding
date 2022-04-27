import {useState} from 'react';
import './Input.css';

export default function Input(){
  const eyeIcon = "fa fa-eye c-green";
  const eyeSlashIcon = "fa fa-eye-slash";
  const checkIcon = "fa fa-check-circle";
  const incorrect = "emailIncorrect";

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdType, setPwdType] = useState("password");
  const [pwdIcon, setPwdIcon] = useState(eyeSlashIcon);
  const [emailIcon, setEmailIcon] = useState(checkIcon);
  const [emailIncorrect, setIncorrect] = useState("d-none");

  const handleEmailCheck = (str) => {
    const idx = str.search("@");
    if (idx === -1) {
      return false;
    } else if (str.indexOf(".") === -1) {
      return false;
    } else if (str.indexOf(".") === idx + 1) {
      return false;
    }
    return true;
  }
  const handleEmail = (event) => {
    setEmail(event.target.value);
    if (handleEmailCheck(event.target.value)){
      setEmailIcon(checkIcon + " c-green");
      setIncorrect("d-none");
    } else {
      setEmailIcon(checkIcon);
    }
  }
  const handleEmailBlur = () => {
    if (!handleEmailCheck(email)){
      setIncorrect(incorrect);
    }
  }
  const handlePwd = (event) => {
    setPwd(event.target.value);
  }
  const handlePwdIcon = () => {
    if (pwdIcon.search("slash") !== -1){
      setPwdIcon(eyeIcon);
      setPwdType("text");
    } else {
      setPwdIcon(eyeSlashIcon);
      setPwdType("password");
    }
  }
  const handlePwdBlur = () => {
    setPwdIcon(eyeSlashIcon);
    setPwdType("password");
  }

  return (
    <form className="Input-form">
      <div className="Input-email">
        <label className="label-email">E-mail</label>
        <input className="Inputbox-email" name="email" type="email" value={email} placeholder="E-mail" onChange={handleEmail} onClick={()=>setPwd("")} onBlur={handleEmailBlur}></input>
        <i className={emailIcon}></i>
        <div className={emailIncorrect}>Invalid e-mail address.</div>
      </div>
      <div className="Input-pwd">
        <label className="label-pwd">Password</label>
        <input className="Inputbox-pwd" name="pwd" type={pwdType} value={pwd} placeholder="Password" onChange={handlePwd} onBlur={handlePwdBlur} autoComplete="on"></input>
        <i className={pwdIcon} onClick={handlePwdIcon}></i>
      </div>
    </form>
  );
}
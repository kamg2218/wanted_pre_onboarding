import { useState } from "react";
import "./Toggle.css";

export default function Toggle() {
  const [defaultClassName, setDefault] = useState("default active");
  const [detailClassName, setDetail] = useState("detail");
  const [active, setActive] = useState("defaultActive");

  const handleDefault = () => {
    setDefault("default active");
    setDetail("detail");
    setActive("defaultActive");
  }
  const handleDetail = () => {
    setDefault("default");
    setDetail("detail active");
    setActive("detailActive");
  }
  return (
    <div className="toggle">
      <div className={defaultClassName} onClick={handleDefault}>기본</div>
      <div className={detailClassName} onClick={handleDetail}>상세</div>
      <div className={active}></div>
    </div>
  );
}
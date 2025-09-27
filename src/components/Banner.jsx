import React from "react";
import banner from "../assets/banner.png";
export default function Banner() {
  return (
    <div style={{marginTop: "12px"}}>
      <img
        src={banner}
        alt="banner"
        style={{width:"100%", height:"120px", objectFit:"cover", borderRadius:"6px"}}
      />
    </div>
  );
}

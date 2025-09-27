import React from "react";

export default function ServiceItem({icon, label, onClick}) {
  return (
    <li style={styles.item} onClick={onClick}>
      <div style={styles.left}>
        <img src={icon} alt="" style={styles.icon} />
        <span style={styles.label}>{label}</span>
      </div>
      <div style={styles.right}>›</div>
    </li>
  );
}

const styles = {
  item:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"12px 14px",
    borderBottom:"1px solid #eee",
    cursor:"pointer"
  },
  left:{display:"flex",alignItems:"center",gap:"10px"},
  icon:{width:"36px",height:"36px",borderRadius:"50%",objectFit:"cover"},
  label:{fontSize:"15px",color:"#222"},
  right:{fontSize:"18px",color:"#aaa"}
};

import React from "react";
import { AiOutlineHome } from "react-icons/ai";

export default function Header({onOpenLang, currentLang}) {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
      <a href="https://tashanwin.club/" style={{display:"flex",alignItems:"center"}}>
          <AiOutlineHome style={styles.icon} />
        </a>
        <span style={styles.title}>Self Service Center</span>
      </div>
      <div style={styles.right}>
        <div style={styles.langBlock} onClick={onOpenLang}>
          <img src={currentLang==="hi" ? "https://flagcdn.com/w20/in.png" : "https://flagcdn.com/w20/us.png"} alt="lang" style={styles.flag} />
          <span style={styles.lang}>{currentLang==="hi" ? "हिन्दी" : "English"}</span>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"#fff",padding:"10px 14px",borderRadius:6,boxShadow:"0 1px 3px rgba(0,0,0,0.08)"},
  left:{display:"flex",alignItems:"center",gap:8},
  right:{display:"flex",alignItems:"center"},
  langBlock:{display:"flex",alignItems:"center",gap:6,cursor:"pointer"},
  icon:{fontSize:20,color:"#444"},
  title:{fontWeight:600,fontSize:16},
  flag:{width:20,height:14,borderRadius:2},
  lang:{fontSize:13,color:"#666"}
};

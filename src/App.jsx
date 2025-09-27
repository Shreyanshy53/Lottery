import React, { useState } from "react";
import Header from "./components/Header";
import LanguageModal from "./components/LanguageModal";
import Banner from "./components/Banner";
import ServiceList from "./components/ServiceList";

export default function App() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f7f8fb",
        padding: 16,
        display: "flex",
        justifyContent: "center",   
        alignItems: "center",       
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 360,
        }}
      >
        <Header onOpenLang={() => setOpen(true)} currentLang={lang} />
        <Banner />

        <h2
          style={{
            marginTop: 16,
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 8,
          }}
        >
          Self Service
        </h2>

        <div
          style={{
            background: "#fff",
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
          }}
        >
          <ServiceList />
        </div>
        <div
          style={{
            marginTop: 16,
            background: "#fff",
            borderRadius: 6,
            padding: "14px",
            boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
          }}
        >
          <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 600 }}>
            Kind tips
          </h3>
          <p style={{ margin: 0, fontSize: 13, color: "#555", lineHeight: 1.5 }}>
            1. Please select the relevant query and submit it for review. After
            successful submission, the customer service specialist will handle
            it for you immediately.
          </p>
        </div>

        <LanguageModal
          open={open}
          onClose={() => setOpen(false)}
          value={lang}
          onChange={(v) => {
            setLang(v);
            setOpen(false);
          }}
        />
      </div>
    </div>
  );
}

import React from "react";
import ServiceItem from "./ServiceItem";
const img = (name) => `/src/assets/${name}`;
export default function ServiceList() {
  const services = [
    { id: 1, label: "Deposit Not Received", icon: img("ic-deposit.png") },
    { id: 2, label: "Withdrawal Problem", icon: img("ic-withdraw.png") },
    { id: 3, label: "IFSC Modification", icon: img("ic-ifsc.png") },
    { id: 4, label: "Change Bank Name", icon: img("ic-bank.png") },
    { id: 5, label: "Change ID Login Password", icon: img("ic-lock.png") },
    { id: 6, label: "Add USDT Address", icon: img("ic-usdt.png") },
    { id: 7, label: "Agency cooperation consultation", icon: img("ic-agency.png") },
    { id: 8, label: "Game Problems", icon: img("ic-game.png") },
    { id: 9, label: "Create creative ads", icon: img("ic-ads.png") },
    { id: 10, label: "CHICKEN ROAD 2 Khelo", icon: img("ic-chicken.png") },
    { id: 11, label: "WINGO WIN STREAK BONUS", icon: img("ic-wingo.png") },
    { id: 12, label: "AVIATOR HIGH BETTING AWARD", icon: img("ic-aviator.png") },
    { id: 13, label: "15-day gold jewelry car reward", icon: img("ic-car.png") },
    { id: 14, label: "Online service", icon: img("ic-game.png") },
  ];
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
      {services.map((s) => (
        <ServiceItem
          key={s.id}
          icon={s.icon}
          label={s.label}
          onClick={() => alert(s.label)}
        />
      ))}
    </ul>
  );
}

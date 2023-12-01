import React from 'react'
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
import { useState, useEffect } from "react";

const DrawerComponent = ({ isOpen, setOpen }:any) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 20, 2023";

    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();

      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);

      return () => clearInterval(interval);
    }, []);

  return (
    <div style={{ backgroundColor: "#000" }}>
      <Drawer size={325} open={isOpen} onClose={() => setOpen(false)}>
        <div style={{ backgroundColor: "#000", height: "100vh" }}>
          <Drawer.Body>
            <h2>Mono Home</h2>
            <div className="flex items-center justify-between relative right-[7%]  text-white text-3xl">
              <span>{days}d-</span>
              <span>{hours}h-</span>
              <span>{minutes}m-</span>
              <span>{seconds}s</span>
            </div>
          </Drawer.Body>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerComponent
import React from 'react'
import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";

const DrawerComponent = ({ isOpen, setOpen }:any) => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <Drawer size={325} open={isOpen} onClose={() => setOpen(false)}>
        <div style={{ backgroundColor: "#000",height:"100vh" }}>
          <Drawer.Body>
            <h2>Mono Home</h2>
          </Drawer.Body>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerComponent
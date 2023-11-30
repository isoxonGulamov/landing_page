"use client";
import React from "react";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from "react-particles";
import { AnimateOptions } from "../config/particles.config";
const ParticlesComponent = () => {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = React.useCallback(async (container:any) => {
    await container;
    
  }, []);

  

  return (
    <div >
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        init={particlesInit}
        options={JSON.parse(AnimateOptions)}
        loaded={particlesLoaded}
      
      ></Particles>
    </div>
  );
};

export default ParticlesComponent;

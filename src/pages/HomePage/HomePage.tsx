import { OrbitControls, ScrollControls, Sky, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Phone } from "./models/Phone";
import ScrollContent from "./ScrollContent/ScrollContent";
import { useRef } from "react";
import type { Object3D } from "three";

const HomePage = () => {
    const phoneRef = useRef<Object3D>(null);

    return (
        <div className="h-screen w-screen">
            <Canvas>
                <Sky />
                <OrbitControls />
                <Stage>
                    <Phone ref={phoneRef} />
                </Stage>
                <ScrollControls pages={3}>
                    <ScrollContent phoneRef={phoneRef} />
                </ScrollControls>
            </Canvas>
        </div>
    );
};

export default HomePage;

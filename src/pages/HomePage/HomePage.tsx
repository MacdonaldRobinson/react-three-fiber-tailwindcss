import {
    Environment,
    OrbitControls,
    Scroll,
    ScrollControls,
    Sky,
    Stage,
    useGLTF,
} from "@react-three/drei";
import BlogPostApiSlice from "../../store/slices/BlogPostSlice/BlogPostApiSlice";
import { Canvas } from "@react-three/fiber";
import { Phone } from "./models/Phone";
import ScrollContent from "./ScrollContent/ScrollContent";
import { useRef } from "react";
import type { Object3D } from "three";

const HomePage = () => {
    const phoneRef = useRef();
    const { scene } = useGLTF("Phone.glb");
    const { data: blogPosts } = BlogPostApiSlice.useGetBlogPostQuery(5);

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

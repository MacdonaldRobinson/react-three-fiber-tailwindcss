import * as THREE from "three";
import { forwardRef, useEffect, useRef, useState, type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

type GLTFResult = GLTF & {
    nodes: {
        Phone_1: THREE.Mesh;
        Phone_2: THREE.Mesh;
        Phone_3: THREE.Mesh;
    };
    materials: {
        White: THREE.MeshStandardMaterial;
        Grey: THREE.MeshStandardMaterial;
        Black: THREE.MeshStandardMaterial;
    };
    animations: THREE.AnimationClip[];
};

export const Phone = forwardRef(
    (props: JSX.IntrinsicElements["group"], phoneRef) => {
        const phoneScreenRef = useRef<THREE.Mesh>(null);
        const { nodes, materials } = useGLTF(
            "Phone.glb"
        ) as unknown as GLTFResult;
        const [texture, setTexture] = useState<THREE.Texture>();

        const screenTextureLoader = new THREE.TextureLoader();

        const handleOnPointerOver = () => {
            document.body.style.cursor = "pointer";
        };

        const handleOnPointerOut = () => {
            document.body.style.cursor = "auto";
        };

        useEffect(() => {
            handleOnClick();
        }, []);

        const handleOnClick = () => {
            if (!phoneScreenRef || !phoneScreenRef.current) return;
            console.log("handleOnClick");
            document.body.style.cursor = "auto";
            const randInt = THREE.MathUtils.randInt(0, 10);

            screenTextureLoader.load(
                `https://via.assets.so/game.png?id=${randInt}&q=95&w=360&h=360&fit=fill`,
                (newTexture) => {
                    if (!phoneScreenRef || !phoneScreenRef.current) return;
                    setTexture(newTexture);
                    (
                        phoneScreenRef.current
                            .material as THREE.MeshStandardMaterial
                    ).needsUpdate = true;
                }
            );
        };

        return (
            <group {...props} ref={phoneRef}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={198.943}>
                    <mesh
                        geometry={nodes.Phone_1.geometry}
                        material={materials.White}
                    >
                        <meshStandardMaterial metalness={0.5} roughness={0.3} />
                    </mesh>
                    <mesh
                        geometry={nodes.Phone_2.geometry}
                        material={materials.Grey}
                    />
                    <mesh
                        geometry={nodes.Phone_3.geometry}
                        material={materials.Black}
                    />
                </group>
                <mesh
                    position={[0, 0, 0.03]}
                    ref={phoneScreenRef}
                    onPointerOver={handleOnPointerOver}
                    onPointerOut={handleOnPointerOut}
                    onClick={handleOnClick}
                >
                    <planeGeometry args={[0.4, 0.71]} />
                    <meshStandardMaterial
                        map={texture}
                        metalness={0}
                        roughness={0}
                    />
                </mesh>
            </group>
        );
    }
);

useGLTF.preload("Phone.glb");

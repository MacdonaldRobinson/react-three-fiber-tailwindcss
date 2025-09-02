import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { type RefObject } from "react";
import type { Object3D } from "three";

type TScrollContent = {
    phoneRef: RefObject<Object3D | null>;
};

const ScrollContent = ({ phoneRef }: TScrollContent) => {
    const scroll = useScroll();

    useFrame(() => {
        if (phoneRef.current) {
            phoneRef.current.rotation.y = scroll.offset * 5;
        }
    });

    const NavItem = ({ text }: { text: string }) => {
        return (
            <div
                className="cursor-pointer hover:text-2xl transition-all font-bold text-2xl
            hover:bg-black hover:text-white "
            >
                {text}
            </div>
        );
    };

    const Section = () => {
        return (
            <div className="flex border-4 m-4 h-[92vh]">
                <div>Section</div>
            </div>
        );
    };

    return (
        <Scroll html>
            <div className="flex flex-col h-screen w-[97vw]">
                <div className="flex border-2 items-center justify-center gap-5">
                    <NavItem text="Home" />
                    <NavItem text="About" />
                    <NavItem text="Contact" />
                </div>
                <div className="flex flex-col">
                    <Section />
                    <Section />
                    <Section />
                </div>
            </div>
        </Scroll>
    );
};

export default ScrollContent;

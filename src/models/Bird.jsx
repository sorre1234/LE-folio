import {useRef, useEffect} from "react";

import birdScene from "../assets/3d/bird.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = (props) => {
    const { scene, animations } = useGLTF(birdScene);
    const birdRef = useRef();
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play();
    }, []);

    useFrame(({clock, camera}) => {
      //update the animation to go in the sin wave pattern in the y direction.
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

      //check if the bird has reached a certain endpoint relative to tyhe camera, then change the direction of the bird.
      if(birdRef.current.position.x > camera.position.x + 10){
        //reverse the rotation of the bird.
        birdRef.current.rotation.y = Math.PI;
      }else if(birdRef.current.position.x < camera.position.x - 10){
        //reverse the rotation of the bird.
        birdRef.current.rotation.y = 0;
      }
      // console.log(camera.position.x, birdRef.current.position.x);
      //changing the x direction and z direction of the bird based on the rotation of the bird.
      if(birdRef.current.rotation.y === 0){
        //moving forward and inwards.
        birdRef.current.position.x += 0.01;
        birdRef.current.position.z -= 0.01;
      }else{
        //moving backwards and outwards.
        birdRef.current.position.x -= 0.01;
        birdRef.current.position.z += 0.01;
      }
    });
  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
        <primitive object={scene} />
    </mesh>
  )
};

export default Bird;

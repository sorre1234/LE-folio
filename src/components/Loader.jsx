import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    </Html>
  );
};
export default Loader;
//in the canvas element, only 3d objects are rendered. So the loader must be converted to 3d objects to be rendered in the canvas,
//This component is a simple spinner that spins when the page is loading

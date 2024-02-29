import Image from "next/image";
import Img from "@/public/IMG_0839.jpg";
import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Image src={Img} layout="fill" objectFit="cover" alt="Background Image" />

      <Link
        href="/"
        className="absolute top-0 left-0 text-white hover:text-[#FFB6C1] text-[30px] z-10 ml-3"
      >
        ←
      </Link>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <h1 className="text-white text-[50px] font-mono pb-[250px]">
          [UNDER CONSTRUCTION]
        </h1>
      </div>
    </div>
  );
}

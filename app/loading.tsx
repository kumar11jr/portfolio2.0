import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-2">
        <div className="w-5 h-5 rounded-full animate-pulse bg-white"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-white"></div>
        <div className="w-5 h-5 rounded-full animate-pulse bg-white"></div>
      </div>
    </div>
  );
}

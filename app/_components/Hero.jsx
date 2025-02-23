import React from "react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div
      className="p-10 flex flex-col items-center justify-center
      mt-24 md:px-20 lg:px-36 xl:px-48"
    >
      <h2 className="font-bold text-6xl text-center">AI 短视频生成器</h2>
      <p className="mt-4 text-2xl text-center text-gray-500">
        通过AI生成短视频，让您的视频制作更加简单
      </p>
      <div className="mt-7 gap-8 flex">
        <Button size="lg" variant="secondary">
          了解更多
        </Button>
        <Button size="lg">开始</Button>
      </div>
    </div>
  );
}

export default Hero;

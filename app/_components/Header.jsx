import React from "react";
import Img from "next/image";
import { Button } from "@/components/ui/button";

function Header() {
    return (
      <div>  
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Img src="/logo.svg" alt="logo" width={40} height={40} />
          <h2 className="text-2xl font-bold">视频生成器</h2>
        </div>

        
        <div>
           <Button>开始</Button>    
                </div>
                
            </div>
        </div>
    );
}

export default Header;

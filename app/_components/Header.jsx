"use client"

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Authentication from "./Authentication";
import { useAuthContext } from "../provider";

function Header() {
  const {user} = useAuthContext();
  return (
    <div>
      <div className="p-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="logo" width={40} height={40} />
          <h2 className="text-2xl font-bold">视频生成器</h2>
        </div>

        <div>
          {!user ? <Authentication>
            <Button>Get Started</Button>
          </Authentication> :
            <div className="flex items-center gap-3">
              <Link href={'/dashboard'}></Link>
              <Button>仪表盘</Button>
              <Image src={user?.photoURL} alt="user" width={40} height={40} className="rounded-full" />
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default Header;

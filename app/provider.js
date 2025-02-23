"use client";

import React, { useEffect, useContext, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";
import { AuthContext } from "./_context/AuthContext";


function Provider({ children }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user);
              setUser(user);
            } else {
                console.log("No user");
            }
        });
        return () => unsubscribe();
    }, []);
    return (
      <div>
        <AuthContext.Provider value={{ user }}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
          </NextThemesProvider>
          </AuthContext.Provider>
    </div>
  );
}


export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
}

export default Provider;

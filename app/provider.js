"use client";

import { auth } from "@/configs/firebaseConfig";
import { ConvexProvider, ConvexReactClient, useMutation } from "convex/react";
import { onAuthStateChanged } from "firebase/auth";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { use, useContext, useEffect, useState } from "react";
import { AuthContext } from "./_context/AuthContext";
import { api } from "@/convex/_generated/api";
import { CreateUser } from "@/convex/users";


function Provider({ children }) {
  const [user, setUser] = useState();
  const CreateUser = useMutation(api.users.CreateNewUser);
  useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(user) => {
            if (user) {
              console.log(user);
              setUser(user);
              const result = await CreateUser({
                name: user?.displayName,
                email: user?.email,
                pictureURL: user?.photoURL,
              });
              console.log(result);

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

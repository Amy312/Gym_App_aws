"use client";
import React, { ReactNode, useEffect } from "react";
import { useAuth } from "../context/authContext"; // Ajusta la ruta según la ubicación de tu archivo authContext.tsx
import { useRouter } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
  const { isLogged, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    
    if (!isLogged && localStorage.getItem('isLogged')!="true") {
      console.log("ni modo")
      router.push("/auth/login"); // Ajusta la ruta si tu página de login está en un lugar diferente

    }{
      login();
    }
  }, [isLogged, router]);

  return (
    <>
      <div>{isLogged ? children : null}</div>
    </>
  );
};

export default DashboardLayout;

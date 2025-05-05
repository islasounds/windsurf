"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface AuthCheckProps {
  children: React.ReactNode;
}

const AuthCheck: React.FC<AuthCheckProps> = ({ children }) => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar si hay datos de autenticación en localStorage
    const authToken = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');

    if (!authToken || !userData) {
      // No hay datos de autenticación, redirigir a login
      console.log("No se encontraron datos de autenticación, redirigiendo a login");
      router.push('/login');
    } else {
      // Usuario autenticado
      setIsAuthenticated(true);
      console.log("Usuario autenticado");
    }
    
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Cargando...</div>;
  }

  return isAuthenticated ? <>{children}</> : null;
};

export default AuthCheck;

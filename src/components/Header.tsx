"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ListButton from "./ListButton";
import { pages } from "@/constants/nav";
import Image from "next/image";
import UserHeader from "./UserHeader";
import { ISession } from "@/types";

export const Logo = () => (
  <Link href="/" className="flex items-center h-full cursor-pointer">
    <Image src="/logo.webp" alt="Logo" width={130} height={37} />
  </Link>
);

export default function Header() {
  const [user, setUser] = useState<any>(null);
  const [id, setId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Obtener datos del usuario desde localStorage
    const userDataStr = localStorage.getItem('userData');
    if (userDataStr) {
      try {
        const userData = JSON.parse(userDataStr);
        setUser(userData);
        setId(`${userData?._id?.slice(0, 8).toUpperCase()}...`);
      } catch (err) {
        console.error("Error al parsear datos del usuario:", err);
      }
    }
    setIsLoading(false);
  }, []);

  // Si está cargando o no hay usuario, no mostrar nada
  if (isLoading || !user) return null;

  return (
    <div className="top-0 left-0 right-0 sticky flex flex-col z-50">
      <header
        className={`h-16 bg-blue-500 text-white flex items-center bg-header text-header-text z-50`}
      >
        <div className="flex items-center justify-between h-full px-4 hidden md:flex w-full">
          <div className="flex items-center space-x-4 gap-4 h-full">
            <Logo />

            <nav className="flex items-center h-full">
              <ul className="flex h-full">
                {pages.map(([name, href]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="hover:bg-headerHover hover:text-headerText px-4 py-1 cursor-pointer h-full flex items-center justify-center"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <UserHeader email={user?.name} picture={user?.picture} id={id} />
        </div>

        <div className="container mx-auto flex items-center justify-between h-full px-4 md:hidden">
          <Logo />

          <ListButton user={user} id={id} />
        </div>
      </header>
    </div>
  );
}

"use client";

import useLoginForm from "@/hooks/useLoginForm";
import Image from "next/image";
import Link from "next/link";

const LoginForm = () => {
  const { formData, isLoading, errorMessage, handleInputChange, handleSubmit } =
    useLoginForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-md flex flex-col items-center w-full max-w-md py-8 px-8 shadow-md"
    >
      <div className="flex flex-col items-center mb-6 gap-4">
        <Image
          src="/logo.webp"
          width={100}
          height={100}
          alt="CMMG Logo"
          className="h-16 w-auto bg-black rounded-md p-2"
        />
        <h1 className="text-2xl text-gray-800 font-semibold">Bienvenido</h1>
        <h2 className="text-md text-gray-600 text-center">
          Inicia sesión en CMMG para continuar hacia la plataforma
        </h2>
      </div>

      {errorMessage && (
        <div className="text-red-600 font-medium mb-4">{errorMessage}</div>
      )}

      <div className="flex flex-col gap-4 w-full">
        <div>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico*"
            value={formData.email}
            onChange={handleInputChange}
            required
            aria-label="Email"
            className="h-12 w-full p-2 border border-gray-300 rounded-md mb-3 focus:border-gray-400 focus:ring-gray-400 text-gray-800"
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={handleInputChange}
            required
            aria-label="Password"
            className="h-12 w-full p-2 border border-gray-300 rounded-md mb-3 focus:border-gray-400 focus:ring-gray-400 text-gray-800"
            autoComplete="current-password"
          />
        </div>

        <Link
          href="/forgot-password"
          className="text-blue-600 font-bold text-md"
        >
          ¿Olvidaste tu contraseña?
        </Link>

        <button
          type="submit"
          disabled={isLoading}
          className={`bg-black text-white p-2 h-12 font-semibold ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Cargando..." : "Continuar"}
        </button>
      </div>
    </form>
  );
};

const LoginPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#081c28] p-4 md:p-8">
    <LoginForm />
  </div>
);

export default LoginPage;

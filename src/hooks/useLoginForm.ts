import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserServices } from "@/services/UserServices";
import { postLog } from "@/services/logFunctions";

interface LoginFormData {
  email: string;
  password: string;
}

const useLoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      console.log("Intentando iniciar sesión con:", formData.email);
      const response = await UserServices.loginUser(formData);
      console.log("Respuesta de login:", response);

      if (response.status === 200 && response.data) {
        // Guardar los datos de usuario y token en localStorage
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userData', JSON.stringify(response.data.user));
        console.log("Datos guardados en localStorage");
        
        await postLog("User logged in", "info", { email: formData.email });
        console.log("Log registrado, redirigiendo a /catalogo/productos");
        
        // Redirigir directamente a la página de catálogo
        window.location.href = "/catalogo/productos";
      } else {
        setErrorMessage(
          response?.data?.message ||
            "Error de autenticación. Por favor, intenta de nuevo."
        );
      }
    } catch (error: any) {
      console.error("Error de login:", error);
      setErrorMessage(
        error?.message ||
          "Un error inesperado ha ocurrido. Por favor, intenta de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    isLoading,
    errorMessage,
    handleInputChange,
    handleSubmit,
  };
};

export default useLoginForm;

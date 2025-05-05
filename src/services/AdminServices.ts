import { ICreateUser } from "@/types";
import { UserMockData } from "./UserMockData";
import { FugaMockData } from "./FugaMockData";

export const AdminServices = {
  createLabel: async (userData: ICreateUser) => {
    try {
      console.log(`Creando sello discográfico: ${userData.name} (simulado)`);
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Crear un nuevo usuario con rol de sello discográfico
      const newUser = UserMockData.createUser({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        role: "label",
        picture: userData?.picture || "/avatar.png",
      });
      
      return newUser;
    } catch (error: any) {
      console.error("Error creating label:", error.message);
      throw error;
    }
  },
  getAllUsers: async () => {
    try {
      console.log("Obteniendo todos los usuarios (simulado)");
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Devolver todos los usuarios excepto el administrador principal
      return UserMockData.users;
    } catch (error: any) {
      console.error("Error fetching users:", error.message);
      throw error;
    }
  },
  getUserById: async (id: string) => {
    try {
      console.log(`Obteniendo usuario con ID: ${id} (simulado)`);
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const user = UserMockData.findUserById(id);
      if (!user) {
        throw new Error(`Usuario con ID ${id} no encontrado`);
      }
      
      return user;
    } catch (error: any) {
      console.error("Error fetching user by ID:", error.message);
      throw error;
    }
  },
  getArtistsOfUser: async (id: string) => {
    try {
      console.log(`Obteniendo artistas del usuario con ID: ${id} (simulado)`);
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const allowedArtistIds = UserMockData.getAllowedArtists(id);
      if (!allowedArtistIds || allowedArtistIds.length === 0) {
        return [];
      }
      
      // Filtrar los artistas que están permitidos para este usuario
      const allowedArtists = FugaMockData.artists.filter(artist => 
        allowedArtistIds.includes(artist.id.toString())
      );
      
      return allowedArtists;
    } catch (error: any) {
      console.error("Error fetching artists of user:", error.message);
      throw error;
    }
  },
  updateAllowedArtists: async (id: string, artistData: any) => {
    try {
      console.log(`Actualizando artistas permitidos para usuario con ID: ${id} (simulado)`);
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Extraer los IDs de artistas del objeto artistData
      const artistIds = artistData.map((artist: any) => artist.id.toString());
      
      // Actualizar los artistas permitidos para el usuario
      const updatedUser = UserMockData.updateAllowedArtists(id, artistIds);
      if (!updatedUser) {
        throw new Error(`Usuario con ID ${id} no encontrado`);
      }
      
      return updatedUser;
    } catch (error: any) {
      console.error("Error updating artist:", error.message);
      throw error;
    }
  },
  getAllArtists: async () => {
    try {
      console.log("Obteniendo todos los artistas (simulado)");
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Devolver todos los artistas de los datos de ejemplo
      return FugaMockData.artists;
    } catch (error: any) {
      console.error("Error fetching artists:", error.message);
      throw error;
    }
  },
  deleteUser: async (id: string) => {
    try {
      console.log(`Eliminando usuario con ID: ${id} (simulado)`);
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Verificar que el usuario existe
      const userIndex = UserMockData.users.findIndex(user => user._id === id);
      if (userIndex === -1) {
        throw new Error(`Usuario con ID ${id} no encontrado`);
      }
      
      // Eliminar el usuario (en una aplicación real, lo marcaríamos como eliminado)
      const deletedUser = UserMockData.users.splice(userIndex, 1)[0];
      
      return { success: true, message: "Usuario eliminado correctamente", user: deletedUser };
    } catch (error: any) {
      console.error("Error deleting user:", error.message);
      throw error;
    }
  },
};

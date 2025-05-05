import axiosInstance from "@/lib/axiosInstance";
import { ICreateUser } from "@/types";
import { UserMockData } from "./UserMockData";
import { FugaMockData } from "./FugaMockData";

// Variable para simular un token de sesión
let mockSessionToken = "mock-session-token-12345";
let currentUserId = "admin_user"; // ID del usuario administrador como predeterminado

export const UserServices = {
  createUser: async (userData: ICreateUser) => {
    try {
      const response = await axiosInstance.post("/api/user", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        picture: userData?.picture || "/avatar.png",
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error creating user:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  loginUser: async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      // Usar datos de ejemplo en lugar de llamar a la API
      console.log(`Iniciando sesión con email: ${email} (simulado)`);
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Buscar el usuario por email
      const user = UserMockData.findUserByEmail(email);
      
      if (!user) {
        throw new Error(`Usuario con email ${email} no encontrado`);
      }
      
      // Verificar que la contraseña coincida
      if (user.password !== password) {
        throw new Error("Contraseña incorrecta");
      }
      
      // Actualizar el usuario actual en la sesión simulada
      currentUserId = user._id;
      mockSessionToken = `mock-token-${Date.now()}`;
      
      return {
        status: 200,
        data: {
          user: { ...user, password: undefined }, // Eliminar la contraseña de la respuesta
          token: mockSessionToken,
          message: "Inicio de sesión exitoso"
        }
      };
    } catch (error: any) {
      console.error("Error iniciando sesión (simulado):", error.message);
      throw error;
    }
  },
  logoutUser: async () => {
    try {
      // Usar datos de ejemplo en lugar de llamar a la API
      console.log("Cerrando sesión (simulado)");
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Restablecer el usuario actual al administrador por defecto
      currentUserId = "admin_user";
      mockSessionToken = `mock-token-${Date.now()}`;
      
      return {
        message: "Sesión cerrada correctamente"
      };
    } catch (error: any) {
      console.error("Error cerrando sesión (simulado):", error.message);
      throw error;
    }
  },
  updateUser: async (userData: Partial<ICreateUser>) => {
    try {
      // Usar datos de ejemplo en lugar de llamar a la API
      console.log("Actualizando datos del usuario (simulado)", userData);
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 200));
      
      // Actualizar el usuario en los datos de ejemplo
      const updatedUser = UserMockData.updateUser(currentUserId, {
        name: userData.name,
        picture: userData?.picture || "/avatar.png",
      });
      
      if (!updatedUser) {
        throw new Error("Usuario no encontrado");
      }
      
      return {
        user: updatedUser,
        message: "Usuario actualizado correctamente"
      };
    } catch (error: any) {
      console.error("Error actualizando usuario (simulado):", error.message);
      throw error;
    }
  },
  getMe: async (token?: string) => {
    try {
      // Usar datos de ejemplo en lugar de llamar a la API
      console.log("Obteniendo datos del usuario actual (simulado)");
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 100));
      
      // Obtener el usuario actual de los datos de ejemplo
      const currentUser = UserMockData.findUserById(currentUserId);
      
      if (!currentUser) {
        throw new Error("Usuario no encontrado");
      }
      
      // Devolver una copia del usuario para evitar modificaciones accidentales
      return { ...currentUser };
    } catch (error: any) {
      console.error("Error obteniendo datos del usuario (simulado):", error.message);
      throw error;
    }
  },
  changePassword: async (password: string, newPassword: string) => {
    try {
      const response = await axiosInstance.put("/api/user/change-password", {
        password,
        newPassword,
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error updating password:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  getSubaccounts: async (token?: string) => {
    try {
      // Usar datos de ejemplo en lugar de llamar a la API
      console.log("Obteniendo subcuentas (simulado)");
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 150));
      
      // Obtener el usuario actual de los datos de ejemplo
      const currentUser = UserMockData.findUserById(currentUserId);
      
      if (!currentUser) {
        throw new Error("Usuario no encontrado");
      }
      
      // Obtener las subcuentas del usuario actual
      const subaccounts = UserMockData.getSubaccounts(currentUserId);
      
      return subaccounts;
    } catch (error: any) {
      console.error("Error obteniendo subcuentas (simulado):", error.message);
      throw error;
    }
  },
  getUserById: async (id: string, token?: string) => {
    try {
      // Usar datos de ejemplo en lugar de llamar a la API
      console.log(`Obteniendo usuario con ID ${id} (simulado)`);
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 120));
      
      // Obtener el usuario por ID de los datos de ejemplo
      const user = UserMockData.findUserById(id);
      
      if (!user) {
        throw new Error(`Usuario con ID ${id} no encontrado`);
      }
      
      // Devolver una copia del usuario para evitar modificaciones accidentales
      return { ...user };
    } catch (error: any) {
      console.error(`Error obteniendo usuario con ID ${id} (simulado):`, error.message);
      throw error;
    }
  },
  getAllowedArtists: async (token?: string) => {
    try {
      // Usar datos de ejemplo en lugar de llamar a la API
      console.log("Obteniendo artistas permitidos (simulado)");
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 130));
      
      // Obtener el usuario actual de los datos de ejemplo
      const currentUser = UserMockData.findUserById(currentUserId);
      
      if (!currentUser) {
        throw new Error("Usuario no encontrado");
      }
      
      // Obtener los IDs de artistas permitidos para el usuario actual
      const allowedArtistIds = currentUser.allowedArtists || [];
      
      // Obtener los artistas completos de FugaMockData
      const artists = allowedArtistIds.map(artistId => {
        const artist = FugaMockData.artists.find(a => a.id.toString() === artistId);
        return artist ? {
          id: artist.id,
          name: artist.name,
          spotify_uri: artist.spotify_uri,
          apple_id: artist.apple_id
        } : null;
      }).filter(Boolean);
      
      return artists;
    } catch (error: any) {
      console.error("Error obteniendo artistas permitidos (simulado):", error.message);
      throw error;
    }
  },
  updateAllowedArtists: async (id: string, artists: string[]) => {
    try {
      // Usar datos de ejemplo en lugar de llamar a la API
      console.log(`Actualizando artistas permitidos para usuario ${id} (simulado)`, artists);
      
      // Simular un retraso para que parezca una llamada a la API real
      await new Promise(resolve => setTimeout(resolve, 180));
      
      // Actualizar los artistas permitidos en los datos de ejemplo
      const updatedUser = UserMockData.updateAllowedArtists(id, artists);
      
      if (!updatedUser) {
        throw new Error(`Usuario con ID ${id} no encontrado`);
      }
      
      return {
        user: updatedUser,
        message: "Artistas permitidos actualizados correctamente"
      };
    } catch (error: any) {
      console.error(`Error actualizando artistas permitidos (simulado):`, error.message);
      throw error;
    }
  },
  getArtistsOfUser: async (id: string, token?: string) => {
    try {
      const response = await axiosInstance.get(`/api/user/${id}/artists`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error fetching artists of user:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  createArtist: async (name: string) => {
    try {
      const response = await axiosInstance.post("/api/artists", {
        name,
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error creating artist:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  deleteArtist: async (id: string) => {
    try {
      const response = await axiosInstance.delete(`/api/artists/${id}`);

      return response.data;
    } catch (error: any) {
      console.error(
        "Error deleting artist:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  getMyProducts: async (token?: string, limit = 10, page = 0) => {
    try {
      const response = await axiosInstance.get(`/api/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error fetching my products:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  createProduct: async (product: any, token?: string) => {
    try {
      const response = await axiosInstance.post(`/api/products`, product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error creating product:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  getAssetsOfProduct: async (id: string, token?: string) => {
    try {
      const response = await axiosInstance.get(`/api/products/${id}/assets`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error fetching my products:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  getProductById: async (id: string, token?: string) => {
    const response = await axiosInstance.get(`/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },
  postAssetsById: async (id: string, assets: any, token?: string) => {
    try {
      const response = await axiosInstance.post(
        `/api/products/${id}/assets`,
        { ...assets, id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const assetId = response.data.assets[response.data.assets.length - 1].id;

      console.log("Asset ID:", assetId);

      const responsePut = await axiosInstance.put(
        `/api/products/${id}/assets/${assetId}`,
        { name: assets.name, artists: assets.artists },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response PUT:", responsePut.data);

      return responsePut.data;
    } catch (error: any) {
      console.error(
        "Error creating asset:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  uploadFile: async (file: File, id: number, type?: string, token?: string) => {
    try {
      const formData = new FormData();
      formData.append("filename", file.name);
      formData.append("totalfilesize", file.size.toString());
      formData.append("partindex", "0");
      formData.append(
        "partbyteoffset",
        (
          (file.size > 1024 * 1024 * 5 ? 1024 * 1024 * 5 : file.size) - 1
        ).toString()
      );
      formData.append("totalparts", "1");
      formData.append("file", file);
      formData.append("assetId", id.toString());
      formData.append("type", type || "audio");

      const response = await axiosInstance.post(`/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error uploading file:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  getMyAssets: async (token?: string) => {
    try {
      const response = await axiosInstance.get(`/api/assets`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.sort((a: any, b: any) => {
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      });
    } catch (error: any) {
      console.error(
        "Error fetching my assets:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  getAssetById: async (id: string, token?: string) => {
    try {
      const response = await axiosInstance.get(`/api/assets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Asset by ID:", response.data);

      return response.data;
    } catch (error: any) {
      console.error(
        "Error fetching asset by ID:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  updateAsset: async (id: string, asset: any, token?: string) => {
    try {
      const response = await axiosInstance.put(`/api/assets/${id}`, asset, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error updating asset:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  deleteAsset: async (id: string, token?: string) => {
    try {
      const response = await axiosInstance.delete(`/api/assets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error deleting asset:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  deleteFile: async (assetId: string, fileId: string, token?: string) => {
    try {
      const response = await axiosInstance.delete(
        `/api/assets/${assetId}/files/${fileId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      console.error(
        "Error deleting file:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  getInfo: async (id: string, token?: string) => {
    try {
      const response = await axiosInstance.get(`/api/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error fetching product:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  updateProductById: async (id: string, product: any, token?: string) => {
    try {
      const response = await axiosInstance.put(`/api/products/${id}`, product, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error updating product:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  createAsset: async (id: string, asset: any, token?: string) => {
    try {
      const response = await axiosInstance.post(
        `/api/products/${id}/assets`,
        asset,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Response:", asset);

      return response.data;
    } catch (error: any) {
      console.error(
        "Error creating asset:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  getTrends: async (
    selection_type: string,
    sale_type: string,
    start_date: string,
    end_date: string,
    options?: {
      product_id?: number;
      artist_id?: number;
      asset_id?: number;
      asset_ids?: number[];
      release_project_id?: number;
      territory_id?: string;
      dsp_id?: number;
    },
    token?: string
  ) => {
    try {
      console.log(
        selection_type,
        sale_type,
        start_date,
        end_date,
        options,
        token
      );
      // Construct query parameters
      const queryParams = new URLSearchParams({
        selection_type,
        sale_type,
        start_date,
        end_date,
        ...(options?.product_id && {
          product_id: options.product_id.toString(),
        }),
        ...(options?.artist_id && { artist_id: options.artist_id.toString() }),
        ...(options?.asset_id && { asset_id: options.asset_id.toString() }),
        ...(options?.asset_ids && { asset_ids: options.asset_ids.join(",") }),
        ...(options?.release_project_id && {
          release_project_id: options.release_project_id.toString(),
        }),
        ...(options?.territory_id && { territory_id: options.territory_id }),
        ...(options?.dsp_id && { dsp_id: options.dsp_id.toString() }),
      }).toString();

      const url = `/api/trends?${queryParams}`;

      // Make API call
      const response = await axiosInstance.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error: any) {
      console.error(
        "Error fetching trends:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  detachAsset: async (productId: string, assetId: string) => {
    try {
      const response = await axiosInstance.delete(
        `/api/products/${productId}/assets/${assetId}`
      );

      return response.data;
    } catch (error: any) {
      console.error(
        "Error detaching asset:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  generateUPC: async (id: string) => {
    try {
      const response = await axiosInstance.post(`/api/products/${id}/barcode`);

      return response.data;
    } catch (error: any) {
      console.error(
        "Error generating UPC:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
  generateISRC: async (id: string) => {
    try {
      const response = await axiosInstance.post(
        `/api/assets/${id}/assign_isrc`
      );

      return response.data;
    } catch (error: any) {
      console.error(
        "Error generating UPC:",
        error.response ? error.response.data : error.message
      );
      throw error;
    }
  },
};

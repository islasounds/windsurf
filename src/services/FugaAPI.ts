/**
 * API de FUGA simulada
 * 
 * Este archivo proporciona una implementación simulada de la API de FUGA
 * utilizando datos de ejemplo en lugar de hacer llamadas reales a la API.
 * 
 * Para uso local y demostración sin dependencias externas.
 */

import { FugaMockData } from "./FugaMockData";

// Definición de tipos para evitar errores
interface GetTrendsParams {
  selection_type: string;
  sale_type: string;
  start_date: string;
  end_date: string;
  product_id?: number;
  artist_id?: number;
  asset_id?: number;
  asset_ids?: number[];
  release_project_id?: number;
  territory_id?: string;
  dsp_id?: number;
}

// Función auxiliar para simular respuestas asíncronas
const simulateAsync = async <T>(data: T, delay = 100): Promise<T> => {
  await new Promise(resolve => setTimeout(resolve, delay));
  return data;
};

// Función para simular la obtención de una imagen
const addImage = async (response: any) => {
  try {
    // Simular la obtención de una imagen base64
    const coverBase64 = "base64-encoded-string";
    
    // Agregar la imagen a la respuesta
    const newProduct = {
      ...response.data,
      cover_image: {
        ...response.data.cover_image,
        vault_hook: `data:image/jpeg;base64,${coverBase64}`,
      },
    };
    
    return newProduct;
  } catch (error: any) {
    console.error("Error simulando imagen de portada:", error.message);
    return response.data;
  }
};

// Implementación simulada de la API de FUGA
export const FugaAPI = {
  // Autenticación
  getToken: async () => {
    try {
      return "mock-token-12345";
    } catch (error: any) {
      console.error("Error simulando token de autenticación");
      throw error;
    }
  },
  
  // Productos
  getProducts: async ({ page = 0, pageSize = 100, artistId = "" }) => {
    try {
      let products = [...FugaMockData.products];
      
      if (artistId) {
        products = products.filter(product => product.artist_id.toString() === artistId);
      }
      
      const startIndex = page * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedProducts = products.slice(startIndex, endIndex);
      
      return await simulateAsync(paginatedProducts);
    } catch (error: any) {
      console.error("Error obteniendo productos de ejemplo");
      throw error;
    }
  },
  
  // Artistas
  getArtists: async ({ page = 0, pageSize = 20 }) => {
    try {
      const artists = FugaMockData.artists;
      
      const startIndex = page * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedArtists = artists.slice(startIndex, endIndex);
      
      return await simulateAsync({
        artist: paginatedArtists,
        total: artists.length,
        page: page,
        page_size: pageSize
      });
    } catch (error: any) {
      console.error("Error obteniendo artistas de ejemplo");
      throw error;
    }
  },
  
  // Crear producto
  createProduct: async (productData: any) => {
    try {
      // Generar un ID único para el nuevo producto
      const newId = Math.max(...FugaMockData.products.map(p => p.id)) + 1;
      
      const newProduct = {
        id: newId,
        ...productData,
        state: "DRAFT",
        cover_image: {
          vault_hook: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6O8cfEDxP4c8SXVnp+oRx2y7DHGbdGKgqCScsT1Jrx+T4keKZJGY6zbgscgCzjwPp8te5+IPCWj+JLlp9V0+G7mKhDI6/NtHQHPUDJxn1NZ//AArbw1/0ALL/AL9V5OKxVeNVxjZWPrMpyjAVMJGpUi3K+p//2Q=="
        }
      };
      
      // Agregar el nuevo producto a los datos de ejemplo (solo en memoria)
      FugaMockData.products.push(newProduct as any);
      
      return await simulateAsync(newProduct);
    } catch (error: any) {
      console.error("Error creando producto de ejemplo");
      throw error;
    }
  },
  
  // Crear artista
  createArtist: async (artistData: any) => {
    try {
      // Generar un ID único para el nuevo artista
      const newId = Math.max(...FugaMockData.artists.map(a => a.id)) + 1;
      
      const newArtist = {
        id: newId,
        ...artistData,
        spotify_uri: `spotify:artist:${newId}`,
        apple_id: `apple:artist:${newId}`,
        products: []
      };
      
      // Agregar el nuevo artista a los datos de ejemplo (solo en memoria)
      FugaMockData.artists.push(newArtist as any);
      
      return await simulateAsync(newArtist);
    } catch (error: any) {
      console.error("Error creando artista de ejemplo");
      throw error;
    }
  },
  
  // Eliminar artista
  deleteArtist: async (id: string) => {
    try {
      const index = FugaMockData.artists.findIndex(a => a.id.toString() === id);
      
      if (index === -1) {
        throw new Error("Artista no encontrado");
      }
      
      // Eliminar el artista de los datos de ejemplo (solo en memoria)
      FugaMockData.artists.splice(index, 1);
      
      return await simulateAsync({ success: true });
    } catch (error: any) {
      console.error("Error eliminando artista de ejemplo");
      throw error;
    }
  },
  
  // Obtener información de producto
  getInfoProduct: async (id: string, token?: string) => {
    try {
      // Datos de ejemplo para géneros, subgéneros y formatos
      const genres = {
        data: [
          { id: 1, name: "Pop" },
          { id: 2, name: "Rock" },
          { id: 3, name: "Hip Hop" },
          { id: 4, name: "Electrónica" },
          { id: 5, name: "R&B" },
          { id: 6, name: "Jazz" },
          { id: 7, name: "Clásica" },
          { id: 8, name: "Reggaeton" },
          { id: 9, name: "Latina" },
          { id: 10, name: "Folk" }
        ]
      };
      
      const subgenres = {
        data: [
          { id: 101, name: "Electropop", genre_id: 1 },
          { id: 102, name: "Dance Pop", genre_id: 1 },
          { id: 201, name: "Indie Rock", genre_id: 2 },
          { id: 202, name: "Hard Rock", genre_id: 2 },
          { id: 301, name: "Trap", genre_id: 3 },
          { id: 302, name: "Rap", genre_id: 3 },
          { id: 401, name: "House", genre_id: 4 },
          { id: 402, name: "Techno", genre_id: 4 },
          { id: 901, name: "Salsa", genre_id: 9 },
          { id: 902, name: "Bachata", genre_id: 9 }
        ]
      };
      
      const formats = {
        data: [
          { id: 1, name: "ALBUM" },
          { id: 2, name: "EP" },
          { id: 3, name: "SINGLE" },
          { id: 4, name: "BOXSET" }
        ]
      };
      
      // Buscar el producto en los datos de ejemplo si se proporciona un ID
      let productData = {};
      if (id && id !== "new") {
        const product = FugaMockData.products.find(p => p.id.toString() === id);
        if (product) {
          // Buscar los assets asociados a este producto
          const assets = FugaMockData.assets.filter(a => a.product_id.toString() === id);
          
          productData = {
            product: {
              ...product,
              assets: assets,
              release_format: {
                name: product.release_format_type
              },
              label: {
                name: product.label_name
              },
              primary_artist: {
                name: product.artist_name,
                id: product.artist_id
              },
              territories: [
                { code: "ES", name: "España" },
                { code: "US", name: "Estados Unidos" },
                { code: "MX", name: "México" },
                { code: "AR", name: "Argentina" },
                { code: "CO", name: "Colombia" }
              ],
              state: {
                name: product.state
              }
            }
          };
        }
      }
      
      const initialProductData = {
        genres: genres.data,
        subgenres: subgenres.data,
        formats: formats.data,
        ...productData
      };

      return await simulateAsync(initialProductData);
    } catch (error: any) {
      console.error("Error obteniendo información del producto de ejemplo");
      throw error;
    }
  },
  
  // Obtener producto por ID
  getProductById: async (id: string, token?: string) => {
    try {
      // Buscar el producto en los datos de ejemplo
      const product = FugaMockData.products.find(p => p.id.toString() === id);
      
      if (!product) {
        console.error(`Producto con ID ${id} no encontrado`);
        return null;
      }
      
      // Buscar los assets asociados a este producto
      const assets = FugaMockData.assets.filter(a => a.product_id.toString() === id);
      
      // Crear una respuesta similar a la de la API real
      const response = {
        ...product,
        assets: assets,
        release_format: {
          name: product.release_format_type
        },
        label: {
          name: product.label_name
        },
        primary_artist: {
          name: product.artist_name,
          id: product.artist_id
        },
        territories: [
          { code: "ES", name: "España" },
          { code: "US", name: "Estados Unidos" },
          { code: "MX", name: "México" },
          { code: "AR", name: "Argentina" },
          { code: "CO", name: "Colombia" }
        ],
        state: {
          name: product.state
        }
      };
      
      return await simulateAsync(response);
    } catch (error: any) {
      console.error("Error obteniendo producto por ID de ejemplo");
      throw error;
    }
  },
  
  // Obtener assets
  getAssets: async (productId: string) => {
    try {
      const assets = FugaMockData.assets.filter(a => a.product_id.toString() === productId);
      return await simulateAsync(assets);
    } catch (error: any) {
      console.error("Error obteniendo assets de ejemplo");
      throw error;
    }
  },
  
  // Crear asset
  createAsset: async (productId: string, assetData: any) => {
    try {
      // Generar un ID único para el nuevo asset
      const newId = Math.max(...FugaMockData.assets.map(a => a.id)) + 1;
      
      const newAsset = {
        id: newId,
        ...assetData,
        product_id: parseInt(productId),
        isrc: FugaMockData.generateRandomISRC()
      };
      
      // Agregar el nuevo asset a los datos de ejemplo (solo en memoria)
      FugaMockData.assets.push(newAsset as any);
      
      return await simulateAsync(newAsset);
    } catch (error: any) {
      console.error("Error creando asset de ejemplo");
      throw error;
    }
  },
  
  // Obtener mis assets
  getMyAssets: async ({ page = 0, pageSize = 100 }) => {
    try {
      const assets = FugaMockData.assets;
      
      const startIndex = page * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedAssets = assets.slice(startIndex, endIndex);
      
      return await simulateAsync(paginatedAssets);
    } catch (error: any) {
      console.error("Error obteniendo mis assets de ejemplo");
      throw error;
    }
  },
  
  // Obtener asset por ID
  getAssetById: async (id: string) => {
    try {
      const asset = FugaMockData.assets.find(a => a.id.toString() === id);
      
      if (!asset) {
        throw new Error(`Asset con ID ${id} no encontrado`);
      }
      
      return await simulateAsync(asset);
    } catch (error: any) {
      console.error("Error obteniendo asset por ID de ejemplo");
      throw error;
    }
  },
  
  // Actualizar asset
  updateAsset: async (id: string, assetData: any) => {
    try {
      const index = FugaMockData.assets.findIndex(a => a.id.toString() === id);
      
      if (index === -1) {
        throw new Error(`Asset con ID ${id} no encontrado`);
      }
      
      // Actualizar el asset en los datos de ejemplo (solo en memoria)
      FugaMockData.assets[index] = {
        ...FugaMockData.assets[index],
        ...assetData
      };
      
      return await simulateAsync(FugaMockData.assets[index]);
    } catch (error: any) {
      console.error("Error actualizando asset de ejemplo");
      throw error;
    }
  },
  
  // Eliminar asset
  deleteAsset: async (id: string) => {
    try {
      const index = FugaMockData.assets.findIndex(a => a.id.toString() === id);
      
      if (index === -1) {
        throw new Error(`Asset con ID ${id} no encontrado`);
      }
      
      // Eliminar el asset de los datos de ejemplo (solo en memoria)
      FugaMockData.assets.splice(index, 1);
      
      return await simulateAsync({ success: true });
    } catch (error: any) {
      console.error("Error eliminando asset de ejemplo");
      throw error;
    }
  },
  
  // Obtener información general
  getInfo: async () => {
    try {
      return await simulateAsync({
        user: {
          name: "Usuario Demo",
          email: "demo@ejemplo.com"
        },
        company: {
          name: "Sello Demo",
          address: "Calle Ejemplo 123"
        },
        stats: {
          products: FugaMockData.products.length,
          artists: FugaMockData.artists.length,
          assets: FugaMockData.assets.length
        }
      });
    } catch (error: any) {
      console.error("Error obteniendo información general de ejemplo");
      throw error;
    }
  },
  
  // Actualizar producto por ID
  updateProductById: async (id: string, productData: any) => {
    try {
      const index = FugaMockData.products.findIndex(p => p.id.toString() === id);
      
      if (index === -1) {
        throw new Error(`Producto con ID ${id} no encontrado`);
      }
      
      // Actualizar el producto en los datos de ejemplo (solo en memoria)
      FugaMockData.products[index] = {
        ...FugaMockData.products[index],
        ...productData
      };
      
      return await simulateAsync(FugaMockData.products[index]);
    } catch (error: any) {
      console.error("Error actualizando producto de ejemplo");
      throw error;
    }
  },
  
  // Obtener tendencias
  getTrends: async (params: GetTrendsParams): Promise<any> => {
    try {
      // Usar los datos de ejemplo para tendencias
      let trendsData = [...FugaMockData.trends.chart];
      
      // Aplicar filtros según los parámetros proporcionados
      if (params.product_id) {
        // Simular filtrado por producto
        trendsData = trendsData.map(item => ({
          ...item,
          product_id: params.product_id,
          product_name: `Producto ${params.product_id}`
        }));
      }
      
      if (params.artist_id) {
        // Simular filtrado por artista
        trendsData = trendsData.map(item => ({
          ...item,
          artist_id: params.artist_id,
          artist_name: `Artista ${params.artist_id}`
        }));
      }
      
      if (params.territory_id) {
        // Filtrar por territorio si se especifica
        trendsData = trendsData.filter(item => item.territory === params.territory_id);
      }
      
      // Generar datos adicionales aleatorios para el rango de fechas
      const startDate = new Date(params.start_date);
      const endDate = new Date(params.end_date);
      const dayDiff = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      
      // Si el rango es mayor a 4 días, generar datos adicionales
      if (dayDiff > 4) {
        for (let i = 2; i < Math.min(dayDiff, 10); i++) { // Limitar a 10 días para no generar demasiados datos
          const currentDate = new Date(startDate);
          currentDate.setDate(startDate.getDate() + i);
          const dateString = currentDate.toISOString().split('T')[0];
          
          // Añadir datos para Spotify y Apple Music
          trendsData.push({
            date: dateString,
            streams: Math.floor(10000 + Math.random() * 5000),
            downloads: Math.floor(200 + Math.random() * 200),
            revenue: parseFloat((80 + Math.random() * 70).toFixed(2)),
            dsp: "Spotify",
            territory: "ES"
          });
          
          trendsData.push({
            date: dateString,
            streams: Math.floor(7000 + Math.random() * 3000),
            downloads: Math.floor(150 + Math.random() * 150),
            revenue: parseFloat((60 + Math.random() * 50).toFixed(2)),
            dsp: "Apple Music",
            territory: "ES"
          });
        }
      }
      
      return await simulateAsync({
        chart: trendsData,
        total_streams: trendsData.reduce((sum, item) => sum + (item.streams || 0), 0),
        total_downloads: trendsData.reduce((sum, item) => sum + (item.downloads || 0), 0),
        total_revenue: parseFloat(trendsData.reduce((sum, item) => sum + (item.revenue || 0), 0).toFixed(2))
      });
    } catch (error: any) {
      console.error("Error obteniendo datos de tendencias de ejemplo");
      throw error;
    }
  },
  
  // Subir portada
  uploadCover: async (productId: string, file: File) => {
    try {
      const index = FugaMockData.products.findIndex(p => p.id.toString() === productId);
      
      if (index === -1) {
        throw new Error(`Producto con ID ${productId} no encontrado`);
      }
      
      // Simular la subida de la portada
      return await simulateAsync({
        success: true,
        message: "Portada subida correctamente"
      });
    } catch (error: any) {
      console.error("Error subiendo portada de ejemplo");
      throw error;
    }
  },
  
  // Desvincular asset
  detachAsset: async (productId: string, assetId: string) => {
    try {
      const productIndex = FugaMockData.products.findIndex(p => p.id.toString() === productId);
      const assetIndex = FugaMockData.assets.findIndex(a => a.id.toString() === assetId);
      
      if (productIndex === -1) {
        throw new Error(`Producto con ID ${productId} no encontrado`);
      }
      
      if (assetIndex === -1) {
        throw new Error(`Asset con ID ${assetId} no encontrado`);
      }
      
      // Simular la desvinculación del asset
      return await simulateAsync({
        success: true,
        message: "Asset desvinculado correctamente"
      });
    } catch (error: any) {
      console.error("Error desvinculando asset de ejemplo");
      throw error;
    }
  },
  
  // Generar UPC
  generateUPC: async (productId: string) => {
    try {
      // Buscar el producto en los datos de ejemplo
      const product = FugaMockData.products.find(p => p.id.toString() === productId);
      
      if (!product) {
        throw new Error("Producto no encontrado");
      }
      
      // Generar un UPC aleatorio
      const upc = FugaMockData.generateRandomUPC();
      
      // Devolver el producto con el nuevo UPC
      return await simulateAsync({
        ...product,
        upc: upc
      });
    } catch (error: any) {
      console.error("Error generando UPC de ejemplo");
      throw error;
    }
  },
  
  // Generar ISRC
  generateISCR: async (assetId: string) => {
    try {
      // Buscar el asset en los datos de ejemplo
      const asset = FugaMockData.assets.find(a => a.id.toString() === assetId);
      
      if (!asset) {
        throw new Error("Asset no encontrado");
      }
      
      // Generar un ISRC aleatorio
      const isrc = FugaMockData.generateRandomISRC();
      
      // Devolver el asset con el nuevo ISRC
      return await simulateAsync({
        ...asset,
        isrc: isrc
      });
    } catch (error: any) {
      console.error("Error generando ISRC de ejemplo");
      throw error;
    }
  }
};

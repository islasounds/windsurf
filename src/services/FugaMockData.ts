// Datos de ejemplo para simular respuestas de la API de FUGA
export const FugaMockData = {
  // Datos de ejemplo para productos
  products: [
    {
      id: 1001,
      name: "Álbum de Ejemplo 1",
      artist_id: 2001,
      artist_name: "Artista Ejemplo",
      upc: "884502000001",
      state: "PUBLISHED",
      label_name: "Sello Discográfico Ejemplo",
      release_format_type: "ALBUM",
      original_release_date: "2023-01-15",
      genre: "Pop",
      subgenre: "Electropop",
      parental_advisory: false,
      catalog_number: "CAT001",
      cover_image: {
        vault_hook: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6O8cfEDxP4c8SXVnp+oRx2y7DHGbdGKgqCScsT1Jrx+T4keKZJGY6zbgscgCzjwPp8te5+IPCWj+JLlp9V0+G7mKhDI6/NtHQHPUDJxn1NZ//AArbw1/0ALL/AL9V5OKxVeNVxjZWPrMpyjAVMJGpUi3K+p//2Q==",
      },
      assets: [
        {
          id: 3001,
          name: "Canción 1",
          isrc: "USRC12345678",
          track_number: 1,
          duration: 180,
          explicit: false,
          audio_locale: "es",
          file_name: "cancion1.mp3",
          file_size: 3500000,
        },
        {
          id: 3002,
          name: "Canción 2",
          isrc: "USRC12345679",
          track_number: 2,
          duration: 210,
          explicit: false,
          audio_locale: "es",
          file_name: "cancion2.mp3",
          file_size: 4200000,
        }
      ]
    },
    {
      id: 1002,
      name: "Álbum de Ejemplo 2",
      artist_id: 2002,
      artist_name: "Otro Artista",
      upc: "884502000002",
      state: "DRAFT",
      label_name: "Otro Sello Discográfico",
      release_format_type: "EP",
      original_release_date: "2023-03-20",
      genre: "Rock",
      subgenre: "Indie Rock",
      parental_advisory: true,
      catalog_number: "CAT002",
      cover_image: {
        vault_hook: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6O8cfEDxP4c8SXVnp+oRx2y7DHGbdGKgqCScsT1Jrx+T4keKZJGY6zbgscgCzjwPp8te5+IPCWj+JLlp9V0+G7mKhDI6/NtHQHPUDJxn1NZ//AArbw1/0ALL/AL9V5OKxVeNVxjZWPrMpyjAVMJGpUi3K+p//2Q==",
      },
      assets: [
        {
          id: 3003,
          name: "Tema 1",
          isrc: "USRC12345680",
          track_number: 1,
          duration: 165,
          explicit: true,
          audio_locale: "es",
          file_name: "tema1.mp3",
          file_size: 3100000,
        },
        {
          id: 3004,
          name: "Tema 2",
          isrc: "USRC12345681",
          track_number: 2,
          duration: 195,
          explicit: true,
          audio_locale: "es",
          file_name: "tema2.mp3",
          file_size: 3800000,
        }
      ]
    }
  ],

  // Datos de ejemplo para artistas
  artists: [
    {
      id: 2001,
      name: "Artista Ejemplo",
      spotify_uri: "spotify:artist:1234567890",
      apple_id: "apple:artist:0987654321",
      products: [1001]
    },
    {
      id: 2002,
      name: "Otro Artista",
      spotify_uri: "spotify:artist:2345678901",
      apple_id: "apple:artist:1098765432",
      products: [1002]
    },
    {
      id: 2003,
      name: "Nuevo Artista",
      spotify_uri: "spotify:artist:3456789012",
      apple_id: "apple:artist:2109876543",
      products: []
    }
  ],

  // Datos de ejemplo para assets (pistas)
  assets: [
    {
      id: 3001,
      name: "Canción 1",
      isrc: "USRC12345678",
      track_number: 1,
      duration: 180,
      explicit: false,
      audio_locale: "es",
      file_name: "cancion1.mp3",
      file_size: 3500000,
      product_id: 1001
    },
    {
      id: 3002,
      name: "Canción 2",
      isrc: "USRC12345679",
      track_number: 2,
      duration: 210,
      explicit: false,
      audio_locale: "es",
      file_name: "cancion2.mp3",
      file_size: 4200000,
      product_id: 1001
    },
    {
      id: 3003,
      name: "Tema 1",
      isrc: "USRC12345680",
      track_number: 1,
      duration: 165,
      explicit: true,
      audio_locale: "es",
      file_name: "tema1.mp3",
      file_size: 3100000,
      product_id: 1002
    },
    {
      id: 3004,
      name: "Tema 2",
      isrc: "USRC12345681",
      track_number: 2,
      duration: 195,
      explicit: true,
      audio_locale: "es",
      file_name: "tema2.mp3",
      file_size: 3800000,
      product_id: 1002
    }
  ],

  // Datos de ejemplo para tendencias
  trends: {
    chart: [
      {
        date: "2023-01-01",
        streams: 12500,
        downloads: 350,
        revenue: 125.75,
        dsp: "Spotify",
        territory: "ES"
      },
      {
        date: "2023-01-02",
        streams: 13200,
        downloads: 320,
        revenue: 132.40,
        dsp: "Spotify",
        territory: "ES"
      },
      {
        date: "2023-01-01",
        streams: 8700,
        downloads: 210,
        revenue: 95.20,
        dsp: "Apple Music",
        territory: "ES"
      },
      {
        date: "2023-01-02",
        streams: 9100,
        downloads: 230,
        revenue: 102.60,
        dsp: "Apple Music",
        territory: "ES"
      }
    ]
  },

  // Función para generar un UPC aleatorio
  generateRandomUPC: () => {
    const prefix = "884502";
    const randomPart = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    return prefix + randomPart;
  },

  // Función para generar un ISRC aleatorio
  generateRandomISRC: () => {
    const prefix = "USRC";
    const randomPart = Math.floor(Math.random() * 100000000).toString().padStart(8, '0');
    return prefix + randomPart;
  }
};

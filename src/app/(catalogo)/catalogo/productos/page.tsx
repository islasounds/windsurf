"use client";

import { FugaMockData } from "@/services/FugaMockData";
import ProductList from "@/components/ProductList";
import { useEffect, useState } from "react";

// Definir interfaces para los tipos de datos
interface Product {
  id: number;
  name: string;
  upc: string | null;
  catalog_number: string | null;
  suborg_state: string;
  state: string;
  label: { id: number; name: string };
  consumer_release_date: string | null;
  added_date: string | null;
  release_format_type: string;
  catalog_tier: string;
  genre: { id: string; name: string };
  display_artist: string;
  cover_image: {
    id: number;
    has_uploaded: boolean;
    vault_hook: string | null;
    resolution_width: number;
    resolution_height: number;
  };
}

interface Artist {
  id: string;
  name: string;
  primary: boolean;
  spotify_uri: string;
  apple_id: string;
}

export default function Productos() {
  const [myProducts, setMyProducts] = useState<Product[]>([]);
  const [allowedArtists, setAllowedArtists] = useState<Artist[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga de datos
    setTimeout(() => {
      try {
        // Generar productos de ejemplo directamente desde FugaMockData
        const products = FugaMockData.products.map(product => ({
          id: product.id,
          name: product.name,
          upc: product.upc || null,
          catalog_number: product.catalog_number || null,
          suborg_state: product.state || "DRAFT",
          state: product.state || "DRAFT",
          label: { id: 1, name: product.label_name || "Label Default" },
          consumer_release_date: product.original_release_date || null,
          added_date: product.original_release_date || null,
          release_format_type: product.release_format_type || "SINGLE",
          catalog_tier: "STANDARD",
          genre: { id: "1", name: product.genre || "Pop" },
          display_artist: product.artist_name || "Unknown Artist",
          cover_image: {
            id: 1,
            has_uploaded: !!product.cover_image.vault_hook,
            vault_hook: product.cover_image.vault_hook || null,
            resolution_width: 1000,
            resolution_height: 1000
          }
        }));
        
        // Generar artistas de ejemplo
        const artists = FugaMockData.artists.map(artist => ({
          id: artist.id.toString(),
          name: artist.name,
          primary: false,
          spotify_uri: artist.spotify_uri,
          apple_id: artist.apple_id
        }));
        
        setMyProducts(products);
        setAllowedArtists(artists);
        setIsLoading(false);
        
        console.log("Datos de ejemplo cargados correctamente");
      } catch (err) {
        console.error("Error al cargar datos de ejemplo:", err);
        setIsLoading(false);
      }
    }, 500); // Simular un pequeño retraso
  }, []);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">Cargando catálogo...</div>;
  }

  return (
    <ProductList
      initialProducts={myProducts}
      allowedArtists={allowedArtists}
    />
  );
}

"use client";

import AssetsForm from "@/components/AssetsForm";
import ProductForm from "@/components/ProductForm";
import { FugaMockData } from "@/services/FugaMockData";
import React, { useEffect, useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

const ProductPage = ({ params }: Props) => {
  const { id } = params;
  const [product, setProduct] = useState<any>(null);
  const [allowedArtists, setAllowedArtists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProductData = () => {
      try {
        // Buscar el producto por ID en los datos de ejemplo
        const foundProduct = FugaMockData.products.find(p => p.id.toString() === id);
        
        if (!foundProduct) {
          setError("Product not found");
          setLoading(false);
          return;
        }

        // Transformar el producto al formato esperado por ProductForm
        const formattedProduct = {
          id: foundProduct.id,
          name: foundProduct.name,
          upc: foundProduct.upc || null,
          catalog_number: foundProduct.catalog_number || null,
          suborg_state: foundProduct.state || "DRAFT",
          state: foundProduct.state || "DRAFT",
          label: { id: 1, name: foundProduct.label_name || "Label Default" },
          consumer_release_date: foundProduct.original_release_date || null,
          added_date: foundProduct.original_release_date || null,
          release_format_type: foundProduct.release_format_type || "SINGLE",
          catalog_tier: "STANDARD",
          genre: { id: "1", name: foundProduct.genre || "Pop" },
          display_artist: foundProduct.artist_name || "Unknown Artist",
          // Añadir la propiedad artists que es requerida por ProductForm
          artists: [{
            id: foundProduct.artist_id.toString(),
            name: foundProduct.artist_name,
            primary: true
          }],
          cover_image: {
            id: 1,
            has_uploaded: !!foundProduct.cover_image.vault_hook,
            vault_hook: foundProduct.cover_image.vault_hook || null,
            resolution_width: 1000,
            resolution_height: 1000
          }
        };

        // Obtener artistas permitidos de los datos de ejemplo
        const artists = FugaMockData.artists.map(artist => ({
          id: artist.id.toString(),
          name: artist.name,
          primary: false,
          spotify_uri: artist.spotify_uri || "",
          apple_id: artist.apple_id || ""
        }));

        // Simular información adicional del producto
        const productInfo = {
          assets: foundProduct.assets || [],
          artist_name: foundProduct.artist_name,
          genre: foundProduct.genre,
          release_format_type: foundProduct.release_format_type
        };

        setProduct(formattedProduct);
        setAllowedArtists(artists);
        setLoading(false);
        
        console.log("Producto cargado correctamente:", formattedProduct);
      } catch (err) {
        console.error("Error al cargar el producto:", err);
        setError("An error occurred while loading the product. Please try again later.");
        setLoading(false);
      }
    };

    loadProductData();
  }, [id]);

  if (loading) {
    return <div className="p-4">Cargando producto...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500 p-4">
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return <div className="p-4">Product not found</div>;
  }

  return (
    <div className="text-black">
      <ProductForm 
        productData={product} 
        allowedArtists={allowedArtists} 
        info={{
          genres: [{ id: "1", name: "Pop" }, { id: "2", name: "Rock" }, { id: "3", name: "Electronic" }],
          subgenres: [{ id: "101", name: "House" }, { id: "102", name: "Techno" }, { id: "103", name: "Hip Hop" }],
          formats: [{ id: 1, name: "SINGLE" }, { id: 2, name: "ALBUM" }, { id: 3, name: "EP" }]
        }} 
      />
    </div>
  );
};

export default ProductPage;

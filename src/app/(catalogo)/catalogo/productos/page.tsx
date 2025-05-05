"use client";

import { FugaMockData } from "@/services/FugaMockData";
import Link from "next/link";
import { useEffect, useState } from "react";

// Página de productos simplificada sin dependencias complejas
export default function Productos() {
  // Definir la interfaz para el tipo de producto
  interface Product {
    id: number;
    name: string;
    artist_id: number;
    artist_name: string;
    upc: string;
    state: string;
    label_name: string;
    release_format_type: string;
    original_release_date: string;
    genre: string;
    subgenre: string;
    parental_advisory: boolean;
    catalog_number: string;
    cover_image: { vault_hook: string | null };
    assets: any[];
  }
  
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar datos de ejemplo directamente
    try {
      // Pequeño retraso para simular carga
      setTimeout(() => {
        // Obtener productos directamente de FugaMockData
        setProducts(FugaMockData.products);
        setIsLoading(false);
        console.log("Productos cargados correctamente", FugaMockData.products.length);
      }, 300);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Cargando productos...</h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Catálogo de Productos</h1>
      
      {products.length === 0 ? (
        <p className="text-gray-500">No hay productos disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">Artista: {product.artist_name}</p>
              <p className="text-gray-600 mb-2">Estado: {product.state || "DRAFT"}</p>
              <p className="text-gray-600 mb-4">Género: {product.genre || "No especificado"}</p>
              
              <Link href={`/producto/${product.id}`} className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Ver detalles
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

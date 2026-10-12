import { useState } from "react";
import Header from "./components/Headers";
import ProductoCard from "./components/ProductoCard";
import { productosIniciales } from "./data/productos";
import type { Producto } from "./data/productos";

function App() {
  // ESTADO: lista de productos
  const [productos, setProductos] = useState<Producto[]>(productosIniciales);

  // FUNCIÓN: agregar producto
  const agregarProducto = () => {
    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre: "Nuevo Producto",
      precio: 35,
      stock: 8,
      categoria: "accesorio",
    };

    setProductos((anteriores) => [...anteriores, nuevoProducto]);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Header onAgregar={agregarProducto} />

      <main className="mx-auto max-w-6xl p-6">
        <h2 className="mb-6 text-2xl font-bold">Lista de productos</h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {productos.map((producto) => (
            <ProductoCard key={producto.id} producto={producto} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;

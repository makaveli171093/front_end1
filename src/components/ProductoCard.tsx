import type { Producto } from "../data/productos";

interface ProductoCardProps {
  producto: Producto;
}

function ProductoCard({ producto }: ProductoCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 text-center shadow-md">
      <h3 className="text-xl font-bold">{producto.nombre}</h3>

      <p className="inline-block mt-2 px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full">
        {producto.categoria}
      </p>

      <p className="mt-2 text-lg">Bs {producto.precio}</p>

      <p className={producto.stock > 0 ? "text-green-600" : "text-red-600"}>
        {producto.stock > 0 ? `${producto.stock} disponibles` : "Agotado"}
      </p>
    </div>
  );
}

export default ProductoCard;

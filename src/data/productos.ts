export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  categoria: string;
}

export const productosIniciales: Producto[] = [
  { id: 1, nombre: "Zapatos", precio: 50, stock: 10, categoria: "calzados" },
  { id: 2, nombre: "Carteras", precio: 140, stock: 2, categoria: "accesorios" },
  { id: 3, nombre: "Guantes", precio: 20, stock: 0, categoria: "manos" },
  { id: 4, nombre: "Faldas", precio: 90, stock: 5, categoria: "femenino" },
  { id: 5, nombre: "Sombreros", precio: 75, stock: 3, categoria: "accesorios" },
];

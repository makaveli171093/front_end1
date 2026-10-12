interface HeaderProps {
  onAgregar: () => void;
}

function Header({ onAgregar }: HeaderProps) {
  return (
    <header className="bg-slate-900 p-8 text-center">
      <h1 className="text-4xl font-bold text-white">MI TIENDA</h1>

      <button
        onClick={onAgregar}
        className="mt-6 rounded-lg bg-indigo-600
                   px-6 py-3 text-white
                   hover:bg-indigo-700 cursor-pointer"
      >
        AGREGAR PRODUCTO
      </button>
    </header>
  );
}

export default Header;

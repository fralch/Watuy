import React from 'react';

// Componente placeholder para evitar errores de compilación.
// Si se requiere funcionalidad, se puede reemplazar por la implementación real.
const ProductCategoryEdit = ({ category, onChange, onSave }) => {
  return (
    <div className="p-4 rounded border">
      <p className="text-sm text-gray-600">Editor de categorías no disponible.</p>
      {onSave && (
        <button className="mt-2 px-3 py-1 bg-gray-500 text-white rounded" onClick={() => onSave(category)}>
          Guardar
        </button>
      )}
    </div>
  );
};

export default ProductCategoryEdit;
export const formatCOP = (value) => {
    if (!value || isNaN(value)) return 'No disponible';
    return `$ ${value.toLocaleString('es-CO')}`;
  };
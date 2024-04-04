const showCurrency = (value) => {
  try {
    const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    });
    return formatter.format(value);
  } catch (error) {
    return `COP ${value.toFixed(2)}`; 
  }
}

export {
  showCurrency
}
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

const formatDateString = (inputDate) => {
  const dateObject = new Date(inputDate);
  const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
  };

  return dateObject.toLocaleString('es-ES', options);
}

export {
  showCurrency
  ,formatDateString
}
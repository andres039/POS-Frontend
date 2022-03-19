const definirProductos = (item, operador) => {
  const newProduct = item;
  if (operador === "+") {
    newProduct['total'] = +(newProduct['total'] + newProduct['precio']).toFixed(2);
    newProduct['cantidad']++
  } else {
    newProduct['total'] = +(newProduct['total'] - newProduct['precio']).toFixed(2);
    newProduct['cantidad']--
  }
  return newProduct;
};

const soda = {
  item: "soda",
  precio: 1.55,
  cantidad: 1,
  total: 1.55,
};

console.log(definirProductos(soda, "+"));

export { definirProductos };

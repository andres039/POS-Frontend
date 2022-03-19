const definirProductos = (item, operador) => {
  const newProduct = item;
  if (operador === "+") {
    newProduct["total"] = newProduct["total"] + newProduct["precio"];
    newProduct["cantidad"] = newProduct["cantidad"] + 1;
  }
  if (newProduct.cantidad === 0) {
    return;
  }

  if (operador === "-") {
    newProduct["total"] = +(newProduct["total"] - newProduct["precio"]).toFixed(
      2
    );
    newProduct["cantidad"]--;
  }

  return newProduct;
};

const productos = [
  {
    id: 1,
    item: "soda",
    precio: 1.55,
    cantidad: 1,
    total: 1.55,
  },
  {
    id: 2,
    item: "pan",
    precio: 0.55,
    cantidad: 1,
    total: 0.55,
  },
  {
    id: 3,
    item: "caldo",
    precio: 3.85,
    cantidad: 1,
    total: 3.85,
  },
];

/* Function que elimine elemento del array usando el id
parametro: id
cuando lo encuentre cree un array sin el
*/
const eliminar = (array, id) => {
  return array.filter((element) => element.id !== id);
};
export { definirProductos, eliminar };

import { eliminar } from "../functionesBoton";

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

test('Removes one element from the array', () => {
  expect(eliminar(productos, 2).length).toBe(2);
});
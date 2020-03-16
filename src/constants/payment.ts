export interface PaymentMethod {
  id: number;
  name: string;
}

export const methods = [
  {
    id: 1,
    name: 'Efectivo'
  },
  {
    id: 2,
    name: 'Transferencia Bancaria'
  },
  {
    id: 3,
    name: 'Cambio por otro juego'
  },
  {
    id: 1000,
    name: 'Otro/Cualquiera'
  },
];

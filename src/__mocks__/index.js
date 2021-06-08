export const categories = [
  {
    id: '1',
    name: 'category1'
  },
  {
    id: '2',
    name: 'category2'
  }
];

export const item = {
  condition: "new",
  free_shipping: false,
  id: "MLA897804105",
  picture: "http://http2.mlstatic.,com/D_799857-MLA44115965847_112020-I.jpg",
  price: { amount: 299, currency: "ARS" },
  title: "Carpas Koi Y Veliferas 6 Cm",
  description: 'Acuario Aquariumba. El Horario del local es de Lunes a viernes de 11 a 18 y los Sábado de 11 a 17 hs. Estamos en el barrio de Almagro. Por el momento no estamos haciendo envíos a otras ciudades. El combo está compuesto por 5 ejemplares surtidos segun disponibilidad de la medida nro1- y 1 corydora paleatus Tamaño nro 1 de 3 4 cm. Estamos en el barrio de Almagro. Capital.'
}

export const initialState = {
  author: {
    name: 'Angel',
    lastname: 'Rodriguez'
  },
  items: [],
  categories,
  error: null
}


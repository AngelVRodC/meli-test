const { NEXT_PUBLIC_MELI_API } = process.env;

export const fetchData = (query) => {
  const url = `${NEXT_PUBLIC_MELI_API}/sites/MLA/search?q=${query}`;
  return fetch(url)
    .then(response => response.json())
};

export const fetchProduct = (id) => {
  const url = `${NEXT_PUBLIC_MELI_API}/items/${id}`;
  return fetch(url)
    .then(response => response.json())
};

export const fetchProductDescription = (id) => {
  const url = `${NEXT_PUBLIC_MELI_API}/items/${id}/description`;
  return fetch(url)
    .then(response => response.json())
};

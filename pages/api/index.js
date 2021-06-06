const { NEXT_PUBLIC_MELI_API } = process.env;

export const fetchProducts = (query) => {
  const url = `${NEXT_PUBLIC_MELI_API}/search?q=${query}`;
  return fetch(url)
    .then(response => response.json())
};

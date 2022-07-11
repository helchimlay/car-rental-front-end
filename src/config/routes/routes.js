const prefix = '/lista-samochodow';
export const routes = {
  cars: `${prefix}`,
  car: (id = ':carSlug') => `${prefix}/${id}`,
  calculator: '/kalkulator',
  carCalculator: (id = ':carSlug') => `kalkulator/${id}`,
};

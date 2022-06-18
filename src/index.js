import {colors, goods} from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  let filteredArr = goods.filter((el) => {
    return el.brand === brand
  })
   return filteredArr
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  let filteredArr = goods.filter((el) => {
    return el.color === color
  })
  return filteredArr

};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  let filteredArr = goods.filter((el) => {
    return el.model === model
  })
  return filteredArr
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  let filteredArr = goods.filter((el) => {
    return el.memory === memory
  })
  return filteredArr
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  let filteredArr = goods.filter((el) => {
    return el.price === price
  })
  return filteredArr
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  let filteredArr = goods.filter((el) => {
    return el.country === country
  })
  return filteredArr
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  let filteredArr = goods.filter((el) => {
    return el.os === os
  })
  return filteredArr
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  let filteredArr = goods.filter((el) => {
    return el.price >= from && el.price <= to
  })

  return filteredArr
};

const maxPriceReducer = () => goods.reduce((minResult, current) => minResult = current.price > minResult ? current.price : minResult, goods[0].price);

const minPriceReducer = () => goods.reduce((minResult, current) => minResult = current.price < minResult ? current.price : minResult, goods[0].price);

const toMinSorter = () => goods.sort((a, b) => a.price - b.price);
const toMaxSorter = () => goods.sort((a, b) => b.price - a.price);

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};

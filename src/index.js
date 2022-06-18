import {colors, goods} from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => goods.filter((el) => el.brand === brand);

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => goods.filter((el) => el.color === color);

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => goods.filter((el) => el.model === model);

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => goods.filter((el) => el.memory === memory);

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => goods.filter((el) => el.price === price);

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => goods.filter((el) => el.country === country);

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => goods.filter((el) => el.os === os);


/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => goods.filter((el) => el.price >= from && el.price <= to);

const maxPriceReducer = () => goods.reduce((maxResult, current) => maxResult = current.price > maxResult ? current.price : maxResult, goods[0].price);

const minPriceReducer = () => goods.reduce((minResult, current) => minResult = current.price < minResult ? current.price : minResult, goods[0].price);

const toMinSorter = () => goods.sort((a, b) => a.price - b.price);
const toMaxSorter = () => goods.sort((a, b) => b.price - a.price);

export const filters = {
    brandFilter, countryFilter, priceFilter, osFilter, colorFilter, memoryFilter, modelFilter, rangeFilter,
};

export const reducers = {
    minPriceReducer, maxPriceReducer,
};

export const sorters = {
    toMaxSorter, toMinSorter,
};

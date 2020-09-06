/* eslint-disable quote-props */
const COFFEE_DATA = {
  GeographicalDesignation: [
    { origin: 'YIRGACHEFE', specificOrigin: 'YIRGACHEFE A' },
    { origin: 'YIRGACHEFE', specificOrigin: 'YIRGACHEFE B' },
    { origin: 'SIDAMA', specificOrigin: 'SIDAMA A' },
    { origin: 'SIDAMA', specificOrigin: 'SIDAMA B' },
    { origin: 'SIDAMA', specificOrigin: 'SIDAMA C' },
    { origin: 'SIDAMA', specificOrigin: 'SIDAMA D' },
  ],
  Group: [
    'Commercial Grade Washed',
    'Commercial Grade Unwashed',
    'Speciality Grade Washed',
    'Speciality Grade unwashed',

  ],
  Grade: [
    'Q1',
    'Q2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ],
};

const FLOWER_DATA = {
  FlowerType: ['Chrysanthemums', 'Carnations', 'Amaranth'],

};
const OILSEED_DATA = {
  OilSeedType: ['Sesame Seed', 'Mustard Seed', 'Pumpkin Seed'],
};
export const TYPE = ['Coffee', 'Oil Seed', 'Flower'];
export const FILTER_DATA = {
  'Coffee': [
    {
      id: 'geographical-designation',
      filterSelectedOptions: true,
      multiple: true,
      label: 'Geographical Designation',
      groupBy: (option) => option.origin,
      getOptionLabel: (option) => option.specificOrigin,
      options: COFFEE_DATA.GeographicalDesignation,

    },
    {
      multiple: true,
      id: 'group',
      options: COFFEE_DATA.Group,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'Group',
    },
    {
      multiple: true,
      id: 'grade',
      options: COFFEE_DATA.Grade,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'Grade',
    },

  ],

  'Flower': [
    {
      multiple: true,
      id: 'flower-type',
      options: FLOWER_DATA.FlowerType,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'FlowerType',
    },
  ],

  'Oil Seed': [
    {
      multiple: true,
      id: 'oilseed-type',
      options: OILSEED_DATA.OilSeedType,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'OilSeedType',
    },

  ],

};

import COFFEE_DATA from './coffee.data';
import FLOWER_DATA from './flower.data';
import SESAME_DATA from './sesame.data';

export const TYPE = ['Coffee', 'Sesame', 'Flower'];

export const MEASUREMENT_UNITS = ['Kilogram(kg)', 'tonne(t)', 'Cut'];
export const TYPE_WITH_INTRO = [
  { name: 'Coffee', description: 'Ethiopia is the Motherland of all arabica coffee.', attributes: 'Geographical Designation | Grade | Group' },
  { name: 'Sesame', description: 'Ethiopian sesame is among the highest quality in the world.', attributes: 'Geographical Designation | Grade' },
  { name: 'Flower', description: 'Ethiopia has become the second largest flower exporter in Africa.', attributes: 'Flower Type' }];

export const COMBOBOX_DATA = {
  Coffee: [
    {
      name: 'Geographical Designation',
      id: 'coffee-geographical-designation',
      attributeName: 'geographicalDesignation',
      filterSelectedOptions: true,
      label: 'GeographicalDesignation',
      groupBy: (option) => option.origin,
      getOptionLabel: (option) => option.specificOrigin,
      options: COFFEE_DATA.GeographicalDesignation,
    },
    {
      id: 'group',
      attributeName: 'group',
      options: COFFEE_DATA.Group,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'Group',
    },
    {
      id: 'grade',
      attributeName: 'grade',
      options: COFFEE_DATA.Grade,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'Grade',
    },

  ],

  Flower: [
    {
      id: 'flower-type',
      attributeName: 'flowerType',
      options: FLOWER_DATA.FlowerType,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'FlowerType',
    },
  ],

  Sesame: [
    {
      id: 'sesame-geographical-designation',
      options: SESAME_DATA.Type,
      attributeName: 'geographicalDesignation',
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'GeographicalDesignation',
    },

    {
      id: 'sesame-grade',
      attributeName: 'grade',
      options: SESAME_DATA.Grade,
      getOptionLabel: (option) => (option),
      filterSelectedOptions: true,
      label: 'SesameGrade',
    },

  ],

};

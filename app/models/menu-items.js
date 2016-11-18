import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  desctription: DS.attr('string'),
  price: DS.attr('number'),
  menuCategory: DS.belongsTo('menu-category')
});

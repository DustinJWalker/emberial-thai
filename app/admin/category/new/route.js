import Ember from 'ember';

export default Ember.Route.extend({
  model(inputs) {
    return this.store.findRecord('admin.category.new', inputs);
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveForm(name){
      if (name) {
        const category = this.store.createRecord('menu-category', {name});
        category.save()
        .then(() => {
          alert('Category Added!');
          this.transitionToRoute('admin.category.index');
        });
      } else {
        alert('You must fill out this form');
      }
    },
  },
});

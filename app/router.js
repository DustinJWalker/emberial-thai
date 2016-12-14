import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('admin', function() {
    this.route('category', function() {
      this.route('new');
      this.route('detail');
      this.route('new-item');
    });
  });
  this.route('edit-item-form');
});

export default Router;

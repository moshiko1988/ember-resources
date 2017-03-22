import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveList (list) {
      console.log('saving');
      list.save()
       .then(()=>this.transitionTo('lists'));
   },
  }
});

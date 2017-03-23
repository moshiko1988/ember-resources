import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.sendAction('save', this.get('list'));
    },
    cancel() {
      this.get('list').rollbackAttributes();
      this.sendAction('cancel');
    },
  },
});

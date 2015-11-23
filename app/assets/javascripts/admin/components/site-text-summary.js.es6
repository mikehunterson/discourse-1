import { on } from 'ember-addons/ember-computed-decorators';

export default Ember.Component.extend({
  classNames: ['site-text'],

  @on('didInsertElement')
  highlightTerm() {
    this.$('.site-text-id, .site-text-value').highlight(this.get('term'), {className: 'text-highlight'});
  },

  click() {
    this.send('edit');
  },

  actions: {
    edit() {
      this.sendAction('editAction', this.get('siteText'));
    }
  }
});

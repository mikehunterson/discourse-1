import { default as computed, observes, on } from 'ember-addons/ember-computed-decorators';

export default Ember.Controller.extend({
  _q: null,
  searching: false,
  siteTexts: null,

  queryParams: ['q'],

  @computed
  q: {
    set(value) {
      if (Ember.isEmpty(value)) { value = null; }
      this._q = value;
      return value;
    },
    get() {
      return this._q;
    }
  },

  search() {
    const q = this.get('q');
    if (q) {
      this.set('searching', true);
      this.store.find('site-text', { q }).then(results => {
        this.set('siteTexts', results);
      }).finally(() => this.set('searching', false));
    }
  },

  @observes('q')
  @on('init')
  queryChanged() {
    Ember.run.debounce(this, this.search, 400);
  },

  actions: {
    edit(siteText) {
      this.transitionToRoute('adminSiteText.edit', siteText.get('id'));
    }
  }
});

export default Ember.Route.extend({
  model(params) {
    return this.store.find('siteText', params.id);
  },

  setupController(controller, siteText) {
    controller.setProperties({ siteText, saved: false });
  }
});

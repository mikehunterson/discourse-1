import { on } from 'ember-addons/ember-computed-decorators';
import autosize from 'admin/lib/autosize';

export default Ember.TextArea.extend({
  @on('didInsertElement')
  _startWatching() {
    Ember.run.scheduleOnce('afterRender', () => {
      this.$().focus();
      autosize(this.$());
    });
  },

  @on('willDestroyElement')
  _disableAutosize() {
    autosize.destroy(this.$());
  }
});

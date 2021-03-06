import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('top-fixed-nav-praise', 'Integration | Component | top fixed nav praise', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{top-fixed-nav-praise}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#top-fixed-nav-praise}}
      template block text
    {{/top-fixed-nav-praise}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

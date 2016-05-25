
App.AppArticlesRoute = Ember.Route.extend({
  model: function() {
    var arts = this.store.findAll('article');

    return arts;
  }
});

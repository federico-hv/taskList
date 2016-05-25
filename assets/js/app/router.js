
App.Router.map(function() {
  this.route('app', { path: 'app' }, function(){
    this.route('main', { path: 'main'});
    this.route('articles', { path: 'articles' }, function() {
      this.route('article', { path: '/:article_id' });
      this.route('create', { path: 'create' })
    });
  });

  this.route('error', { path: 'error' });
});


App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('app.main');
  }
});

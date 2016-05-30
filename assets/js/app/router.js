
App.Router.map(function() {
  this.route('app', { path: 'app' }, function(){
    this.route('main', { path: 'main'});
    this.route('tasks', { path: 'tasks' }, function() {
      this.route('task', { path: '/:task_id' });
      this.route('create', { path: 'create' })
    });
  });

  this.route('error', { path: 'error'});

});


App.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('app.main');
  }
});

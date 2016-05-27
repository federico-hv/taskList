
App.AppTasksRoute = Ember.Route.extend({
  model: function() {
    var tasks = this.store.findAll('task');

    return tasks;
  }
});

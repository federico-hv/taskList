App.AppArticlesIndexController = Ember.Controller.extend({
  actions: {
    destroy: function(model){
      var article = model;
      article.deleteRecord();
      article
      .save()
      .then(function(){
        console.log('Article Deleted')
      })
      .catch(function(err){
        console.log('Error: ', err);
      });
    }
  }
});


App.AppArticlesCreateController = Ember.Controller.extend({
  title: '',
  body: '',
  actions: {
    create: function(){
      var ti = this.get('title');
      var bo = this.get('body');
      var that = this;

      /**
       * Check if not empty in both [MINLENGTH <= 3]
       * Check no special chars
       *
       **/

      App.Article.loadSaveResponse = true;
      this.store.createRecord('article', {
        title: ti,
        body : bo
      })
      .save()
      .then(function(){
        that.set('title', '');
        that.set('body', '');
        that.transitionToRoute('app.articles');
      })
      .catch(function(err){
        that.transitionToRoute('error');
      });

    }
  }
});


App.AppArticlesArticleController = Ember.Controller.extend({
  actions: {
    update: function(model){

      //Use this.model.get() to validate
      var that = this;
      model
      .save()
      .then(function(){
        that.transitionToRoute('app.articles');
      })
      .catch(function(err){
        that.transitionToRoute('error');
      });
    }
  }
})

App.ArticleAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:1337',
  primaryKey: 'id',
  pathForType: function(type) {
    var camelized = Ember.String.camelize(type);
    return camelized; //Ember.String.pluralize(camelized);
  },
  loadSaveResponse: true
});

App.ArticleSerializer = DS.RESTSerializer.extend({
  // Used in /app/articles
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType){
    var normalizedArticles = payload.map(function(article){
      return {
        type: primaryModelClass.modelName,
        id: article.id,
        attributes: {
          title: article.title,
          body: article.body,
          createdAt: article.createdAt,
          updatedAt: article.updatedAt
        }
      };
    });

    var obj = {
      data: normalizedArticles
    };

    return obj;

  },
  // Used in /app/articles/:id
  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {

    var obj = {
      data: {
        type : primaryModelClass.modelName,
        id   : payload.id,
        attributes: {
          title: payload.title,
          body : payload.body,
          createdAt: payload.createdAt,
          updatedAt: payload.updatedAt
        }
      }
    };

    return obj;
  },
  normalizeSaveResponse: function(store, primaryModelClass, payload, id, requestType){
    console.log('ÑAN', payload.body)
    var obj = {
      data: {
        type : primaryModelClass.modelName,
        id   : payload.id,
        attributes: {
          title: payload.title,
          body : payload.body,
          createdAt: payload.createdAt,
          updatedAt: payload.updatedAt
        }
      }
    };

    return obj;
  },
  // Used in /app/articles/create to eliminate json root "article"
  serializeIntoHash: function(hash, type, record, options) {
    Ember.merge(hash, this.serialize(record, options));
  }

  // // Used in /app/articles/create ????????
  // serialize(snapshot, options){
  //   console.log('SERIALIZE')
  //   var json = this._super(snapshot, options);
  //   // delete json.updatedAt;
  //   // delete json.createdAt;
  //   console.log('ESTO ES IDE')
  //   console.log(snapshot.id);
  //   return json;
  // }
});


App.Article = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date')
});

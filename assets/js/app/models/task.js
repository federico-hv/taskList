App.TaskAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:1337',
  primaryKey: 'id',
  pathForType: function(type) {
    var camelized = Ember.String.camelize(type);
    return camelized; //Ember.String.pluralize(camelized);
  },
  loadSaveResponse: true
});

App.TaskSerializer = DS.RESTSerializer.extend({
  // Used in /app/tasks
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType){
    var normalizedTasks = payload.map(function(task){
      return {
        type: primaryModelClass.modelName,
        id: task.id,
        attributes: {
          title: task.title,
          body: task.body,
          createdAt: task.createdAt,
          updatedAt: task.updatedAt
        }
      };
    });

    var obj = {
      data: normalizedTasks
    };

    return obj;

  },
  // Used in /app/tasks/:id
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
    var obj = {
      data: {
        type : primaryModelClass.modelName,
        id   : payload.id,
        attributes: {
          title    : payload.title,
          body     : payload.body,
          createdAt: payload.createdAt,
          updatedAt: payload.updatedAt
        }
      }
    };

    return obj;
  },
  // Used in /app/tasks/create to eliminate json root "task"
  serializeIntoHash: function(hash, type, record, options) {
    Ember.merge(hash, this.serialize(record, options));
  }

  // // Used in /app/tasks/create ????????
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


App.Task = DS.Model.extend({
  title: DS.attr('string'),
  body : DS.attr('string'),
  date : DS.attr('string')
});

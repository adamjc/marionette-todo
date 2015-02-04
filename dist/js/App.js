$(document).ready(function () {
    window.TodoApp = window.TodoApp || {};

    var App = new Marionette.Application();

    var Todo = Backbone.Model.extend({
        defaults: {
            name: 'default name',
            complete: false
        }
    });

    var Todos = Backbone.Collection.extend({
        model: Todo
    });

    TodoApp.TodoList = new Todos([]);

    App.addRegions({
        mainRegion: '#main'
    });

    App.on('start', function () {
        var todosView = new TodoApp.TodoListView({
            collection: TodoApp.TodoList
        });

        App.mainRegion.show(todosView);
    });

    App.start();
});

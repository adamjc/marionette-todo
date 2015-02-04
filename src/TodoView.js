window.TodoApp = window.TodoApp || {};

TodoApp.TodoView = Marionette.ItemView.extend({
    modelEvents: {
        'change': 'fieldsChanged'
    },

    fieldsChanged: function() {
        this.render();
    },

    tagName: 'li',
    className: 'todo-item',
    template: _.template(TodoApp.Templates.TodoView),

    ui: {
        'deleteButton': '.todo__delete-button',
        'completeCheckBox': '.todo__checkbox'
    },

    events: {
        'click @ui.deleteButton': 'deleteTodo',
        'click @ui.completeCheckBox': 'completeTodo'
    },

    completeTodo: function () {
        this.model.set({complete: !this.model.get('complete')});
    },

    deleteTodo: function () {
        TodoApp.TodoList.remove([this.model]);
    },
});

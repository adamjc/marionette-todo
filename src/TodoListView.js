window.TodoApp = window.TodoApp || {};

TodoApp.TodoListView  = Marionette.CompositeView.extend({
    template: _.template(TodoApp.Templates.TodoListView),

    childView: TodoApp.TodoView,

    childViewContainer: '.todo-list',

    ui: {
        'addTodo': '.todos__add-todo'
    },

    events: {
        'click @ui.addTodo': 'addTodoItem'
    },

    addTodoItem: function () {
        var todoText = this.$el.find('input').val()

        TodoApp.TodoList.add([{
            name: todoText
        }]);
    },

    appendHtml: function(collectionView, itemView) {
        console.log(collectionView.$('.todo-list'));
        collectionView.$('.todo-list').append(itemView.el);
    }
});

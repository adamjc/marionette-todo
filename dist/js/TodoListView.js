window.TodoApp = window.TodoApp || {};

TodoApp.TodoListView  = Marionette.CompositeView.extend({
    template: _.template(TodoApp.Templates.TodoListView),

    childView: TodoApp.TodoView,

    childViewContainer: '.todo-list',

    ui: {
        'addTodo': '.todos__add-todo',
        'inputField': '.todos__input'
    },

    events: {
        'click @ui.addTodo': 'addTodoItem',
        'keypress @ui.inputField': 'handleInput'
    },

    handleInput: function (e) {
        if (e.keyCode === 13) {
            this.addTodoItem();
        }
    },

    addTodoItem: function () {
        var $input = this.$el.find('.todos__input');
        var todoText = $input.val();

        TodoApp.TodoList.add([{
            name: todoText
        }]);

        $input.val('');
    },

    appendHtml: function(collectionView, itemView) {
        collectionView.$('.todo-list').append(itemView.el);
    }
});

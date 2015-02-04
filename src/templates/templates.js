window.TodoApp = window.TodoApp || {};

TodoApp.TemplateHelpers = {
    TodoViewText: function (text) {
        return text !== false ? "todo__text complete" : "todo__text";
    }
};

TodoApp.Templates = {
    TodoView:
        '<span class="<%- TodoApp.TemplateHelpers.TodoViewText(complete) %>">' +
            '<%- name %>' +
        '</span>' +

        '<input type="checkbox" class="todo__checkbox" <%- complete !== false ? "checked=true" : "" %> />' +

        '<button class="todo__delete-button">Delete Todo</button>',

    TodoListView:
        '<input type="text" class="todos__input" placeholder="Todo..."/>' +
        '<button class="todos__add-todo">New Todo</button>' +

        '<div>' +
            '<b>Todos</b>' +

            '<ul class="todo-list">' +
            '</ul>' +
        '</div>'
};

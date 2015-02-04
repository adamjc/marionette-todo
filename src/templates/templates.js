window.TodoApp = window.TodoApp || {};

TodoApp.Templates = {
    TodoView:
        '<span class=<%- complete !== false ? "complete" : ""%>>' +
            '<%- name %>' +
        '</span>' +

        '<input type="checkbox" class="todo__checkbox" <%- complete !== false ? "checked=true" : "" %> />' +

        '<button class="todo__delete-button">Delete Todo</button>',

    TodoListView:
        '<input type="text" placeholder="Todo..."/>' +
        '<button class="todos__add-todo">New Todo</button>' +

        '<div>' +
            '<b>Todos</b>' +

            '<ul class="todo-list">' +
            '</ul>' +
        '</div>'
};

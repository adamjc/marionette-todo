$(document).ready(function(){window.TodoApp=window.TodoApp||{};var o=new Marionette.Application,e=Backbone.Model.extend({defaults:{name:"default name",complete:!1}}),n=Backbone.Collection.extend({model:e});TodoApp.TodoList=new n([]),o.addRegions({mainRegion:"#main"}),o.on("start",function(){var e=new TodoApp.TodoListView({collection:TodoApp.TodoList});o.mainRegion.show(e)}),o.start()});
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var storage_1 = require("@ionic/storage");
var TodoService = /** @class */ (function () {
    function TodoService(storage) {
        this.storage = storage;
        this.todos = [];
        this.star1 = [];
        this.star2 = [];
        this.star3 = [];
        this.todoCounter = 0;
        this.orderAsc = true;
    }
    TodoService.prototype.getTodos = function () {
        var _this = this;
        this.storage.get('this.todoCounter').then(function (data) { if (data) {
            _this.todoCounter = data;
        } });
        return this.storage.get('todos').then(function (data) {
            if (data) {
                _this.star3 = data.filter(function (t) { return t.stars === 3; }),
                    _this.star2 = data.filter(function (t) { return t.stars === 2; }),
                    _this.star1 = data.filter(function (t) { return t.stars === 1; });
                if (_this.orderAsc) {
                    _this.todos = _this.star1.concat(_this.star2).concat(_this.star3);
                }
                else {
                    _this.todos = _this.star3.concat(_this.star2).concat(_this.star1);
                }
                return _this.todos;
            }
        });
    };
    TodoService.prototype.saveTodo = function (t) {
        this.todos[this.todos.findIndex(function (todo) { return todo.id === t.id; })] = t;
        return this.storage.set('todos', this.todos);
    };
    TodoService.prototype.newTodo = function (t) {
        var _this = this;
        this.todos.push(t);
        this.todoCounter++;
        return this.storage.set('todos', this.todos).then(function () {
            return _this.storage.set('todoCounter', _this.todoCounter);
        }); // devolver promesa
    };
    TodoService.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (t) { return t.id !== id; });
        return this.storage.set('todos', this.todos);
    };
    TodoService.prototype.getTodoById = function (id) {
        return this.todos.find(function (t) { return t.id === id; });
    };
    TodoService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [storage_1.Storage])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map
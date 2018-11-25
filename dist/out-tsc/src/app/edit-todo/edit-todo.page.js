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
var todo_service_1 = require("../services/todo.service");
var angular_1 = require("@ionic/angular");
var router_1 = require("@angular/router");
var EditTodoPage = /** @class */ (function () {
    function EditTodoPage(activatedRoute, todoService, navController) {
        this.activatedRoute = activatedRoute;
        this.todoService = todoService;
        this.navController = navController;
        this.edit = false;
        this.star1 = false;
        this.star2 = false;
        this.star3 = false;
        this.person = false;
        this.work = false;
        this.study = false;
        this.todo = {
            id: this.todoService.todoCounter,
            title: '',
            description: '',
            stars: 0,
            category: 0
        };
    }
    EditTodoPage.prototype.ngOnInit = function () {
        var id = this.activatedRoute.snapshot.paramMap.get('id');
        if (id) {
            this.edit = true;
            this.todo = this.todoService.getTodoById(+id);
        }
        switch (this.todo.stars) {
            case 1:
                this.star1 = true;
                break;
            case 2:
                this.star1 = true;
                this.star2 = true;
                break;
            case 3:
                this.star1 = true;
                this.star2 = true;
                this.star3 = true;
                break;
            default:
        }
        switch (this.todo.category) {
            case 1:
                this.person = true;
                this.study = false;
                this.work = false;
                break;
            case 2:
                this.person = false;
                this.work = true;
                this.study = false;
                break;
            case 3:
                this.person = false;
                this.work = false;
                this.study = true;
                break;
            default:
        }
    };
    EditTodoPage.prototype.saveTodo = function (t) {
        var _this = this;
        if (this.edit) {
            this.todoService.saveTodo(this.todo).then(function () { return _this.navController.goBack(true); }, function (error) { return console.error('Error al guardar: ' + error); });
        }
        else {
            this.todoService.newTodo(this.todo).then(function () { return _this.navController.goBack(true); }, function (error) { return console.error('Error al guardar: ' + error); });
        }
    };
    EditTodoPage.prototype.setStar1 = function () {
        this.star1 = true;
        this.star2 = false;
        this.star3 = false;
        this.todo.stars = 1;
    };
    EditTodoPage.prototype.setStar2 = function () {
        this.star1 = true;
        this.star2 = true;
        this.star3 = false;
        this.todo.stars = 2;
    };
    EditTodoPage.prototype.setStar3 = function () {
        this.star1 = true;
        this.star2 = true;
        this.star3 = true;
        this.todo.stars = 3;
    };
    EditTodoPage.prototype.setPerson = function () {
        this.person = true;
        this.work = false;
        this.study = false;
        this.todo.category = 1;
    };
    EditTodoPage.prototype.setWork = function () {
        this.work = true;
        this.person = false;
        this.study = false;
        this.todo.category = 2;
    };
    EditTodoPage.prototype.setStudy = function () {
        this.study = true;
        this.person = false;
        this.work = false;
        this.todo.category = 3;
    };
    EditTodoPage = __decorate([
        core_1.Component({
            selector: 'app-edit-todo',
            templateUrl: './edit-todo.page.html',
            styleUrls: ['./edit-todo.page.scss'],
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            todo_service_1.TodoService,
            angular_1.NavController])
    ], EditTodoPage);
    return EditTodoPage;
}());
exports.EditTodoPage = EditTodoPage;
//# sourceMappingURL=edit-todo.page.js.map
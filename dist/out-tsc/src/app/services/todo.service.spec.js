"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var todo_service_1 = require("./todo.service");
describe('TodoService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [todo_service_1.TodoService]
        });
    });
    it('should be created', testing_1.inject([todo_service_1.TodoService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=todo.service.spec.js.map
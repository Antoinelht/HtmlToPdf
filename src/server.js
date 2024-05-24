"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var Server = /** @class */ (function () {
    function Server(port) {
        this.port = port;
    }
    Server.prototype.start = function () {
        var _this = this;
        var app = (0, express_1.default)();
        app.get('/', function (req, res) {
            res.sendFile(path_1.default.join(__dirname, 'index.js'));
        });
        app.listen(this.port, function () {
            console.log("Server started at http://localhost:".concat(_this.port));
        });
    };
    return Server;
}());
exports.default = Server;

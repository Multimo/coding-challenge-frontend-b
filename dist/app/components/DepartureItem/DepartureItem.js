"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mobx_react_1 = require("mobx-react");
var styledComponents_1 = require("../styledComponents");
var getLocationById = function (locations, departureId) {
    return locations.filter(function (_a) {
        var id = _a.id;
        return id === departureId;
    })[0];
};
var getOperatorById = function (oporators, operatorId) {
    return oporators.filter(function (_a) {
        var id = _a.id;
        return id === operatorId;
    })[0];
};
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        var _a = this.props, store = _a.store, departure = _a.departure;
        var results = store.results;
        return results && (React.createElement(styledComponents_1.DepartureListItem, { key: departure.id },
            React.createElement(styledComponents_1.OperatorLogo, { backgroundImg: getOperatorById(results.operators, departure.operator_id).logo_url }),
            React.createElement(styledComponents_1.DepartureTimes, null,
                React.createElement("p", null,
                    React.createElement("b", null, departure.departure_time),
                    React.createElement("br", null),
                    getLocationById(results.locations, departure.origin_location_id).name),
                React.createElement("div", null,
                    React.createElement("h4", null, departure.duration),
                    React.createElement("hr", null),
                    React.createElement("h4", null, departure.has_transfers || 'Non Stop')),
                React.createElement("p", null,
                    React.createElement("b", null,
                        departure.arrival_time,
                        " "),
                    React.createElement("br", null),
                    getLocationById(results.locations, departure.destination_location_id).name)),
            React.createElement(styledComponents_1.DeparturePrices, null,
                React.createElement(styledComponents_1.Button, null,
                    "$",
                    departure.totalPrice))));
    };
    App = __decorate([
        mobx_react_1.inject('store'),
        mobx_react_1.observer
    ], App);
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=DepartureItem.js.map
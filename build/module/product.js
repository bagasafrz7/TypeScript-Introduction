"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asus_1 = __importDefault(require("./asus"));
const macbook_1 = __importDefault(require("./macbook"));
let asus = new asus_1.default("ROG", true, true);
console.log("asus: ", asus);
let macbook = new macbook_1.default("Pro", false, false);
console.log("macbook: ", macbook);
macbook.a();
macbook.b();

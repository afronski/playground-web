import { zip } from 'lodash';
import Point from "./Point.js";

var body = document.querySelector("body");

body.textContent = "Good point: " + new Point(1, 23);
console.log(zip(["1", "2"], ["a", "b"]));

import render from "./render/numbers";
import { sum, double, isOdd } from "./utils";

const numbers = [1, 2, 3, 4, 5];

render(numbers.filter(isOdd));
import san from "san";
import { router } from "san-router";
import San from "./app.san";
console.log('------san------');
router.add({
    rule: '/',
    Component: San,
    target: '#app'
});
router.start();
var [a, b] = [3, 4];
for (let i = 0; i < a; i++) {
    //const element = array[i];
    console.log(i * b);
}
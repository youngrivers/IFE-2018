import san from 'san';
import { router } from "san-router";
import San from './view/app.san';
router.add({
    rule: '/',
    Component: San,
    target: '#app'
});
router.start();
import { newRenderer } from "./renderer.js"
import { newRectangle } from "./shapes/rectangle.js";
import { circle } from "./shapes/circle.js";
const rectangle: Shape = newRectangle(2, 3)
const renderer = newRenderer(rectangle)
renderer.draw();

const circleShape: Shape = circle(5);
const circleRenderer = newRenderer(circleShape);
circleRenderer.draw();
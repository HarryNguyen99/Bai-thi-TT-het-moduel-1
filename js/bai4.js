let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let Circle = function (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.drawCircle = function () {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
    }
};
let circle = new Circle(120, 120, 100, "#000000");
circle.drawCircle();

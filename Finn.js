function setup1() {
    var canvas = document.getElementById('myCanvas1');
    var slider = document.getElementById('slider1');
    slider.value = 0;

    function draw() {
        var context = canvas.getContext('2d');
        canvas.width = canvas.width;
        context.lineWidth = 4;
        context.strokeStyle = "black";
        var cloudPos = slider.value;

        // drawing the background
        context.beginPath();
        context.moveTo(0, 340);
        context.lineTo(500, 340);
        context.lineTo(500, 360);
        context.lineTo(0, 360);
        context.fillStyle = 'green';
        context.stroke();
        context.fill();
        context.beginPath();
        context.moveTo(0, 340);
        context.lineTo(500, 340);
        context.lineTo(500, 0);
        context.lineTo(0, 0);
        context.lineTo(0, 340);
        context.fillStyle = 'blue';
        context.stroke();
        context.fill();

        /* 
        **  A function that creates a cloud shape at the given x and y position input
        **  Top ellipse more left than bottom
        **  @param xPos - the value of the x position
        **  @param yPos - the value of the y position
        **/
        function cloud1(xPos, yPos) {
            context.lineWidth = 5;
            context.strokeStyle = 'black';
            context.fillStyle = 'white';
            context.beginPath();
            context.ellipse(xPos, yPos, 20, 55, Math.PI / 2, 0, 2 * Math.PI);
            context.ellipse(xPos + 35, yPos + 25, 20, 50, Math.PI / 2, 0, 2 * Math.PI);
            context.stroke();
            context.fill();

        }

        /* 
        **  A function that creates a different cloud shape at the given x and y position input
        **  Bottom ellipse more left than top
        **  @param xPos - the value of the x position
        **  @param yPos - the value of the y position
        **/
        function cloud2(xPos, yPos) {
            context.lineWidth = 5;
            context.strokeStyle = 'black';
            context.fillStyle = 'white';
            context.beginPath();
            context.ellipse(xPos + 20, yPos, 20, 55, Math.PI / 2, 0, 2 * Math.PI);
            context.ellipse(xPos, yPos + 25, 25, 50, Math.PI / 2, 0, 2 * Math.PI);
            context.stroke();
            context.fill();

        }

        // drawing the adjustable clouds based off of the user input
        // delay some of their positions so they move at different speeds
        var delayTenth = parseInt(cloudPos) / 10;
        var delayHalf = parseInt(cloudPos) / 2;
        cloud1(parseInt(delayHalf) + 150, 60);
        cloud2(parseInt(cloudPos) + 400, 100);
        cloud2(parseInt(cloudPos) + parseInt(cloudPos) - 50, 50);
        cloud2(parseInt(cloudPos) + parseInt(delayHalf) - 430, 130);
        cloud1(parseInt(delayTenth) + 90, 190);
        cloud2(parseInt(cloudPos) + parseInt(delayHalf) - 250, 210);
        cloud1(parseInt(cloudPos) - 300, 30);
        cloud2(parseInt(cloudPos) - 470, 100);

        // drawing Finn's hat
        context.lineWidth = 7;
        context.strokeStyle = "black";
        context.fillStyle = 'white';
        context.beginPath();
        context.moveTo(150, 225);
        context.lineTo(150, 365);
        context.lineTo(350, 365);
        context.lineTo(350, 225);
        context.stroke();
        context.fill();
        context.moveTo(150, 225);
        context.bezierCurveTo(185, 125, 225, 225, 225, 225);
        context.moveTo(350, 225);
        context.bezierCurveTo(325, 125, 275, 225, 275, 225);
        context.stroke();
        context.moveTo(225, 225);
        context.lineTo(275, 225);
        context.lineWidth = 5;
        context.stroke();
        context.fill();

        /* 
        **  A function that takes in a color value and a boolean
        **  Then draws a filled or unfilled ellipse based on these inputs
        **  @param color - the color of the ellipse
        **  @param fill - boolean true if ellipse will be filled, false if unfilled
        **/
        function face(color, fill) {
            context.strokeStyle = color;
            context.beginPath();
            context.ellipse(250, 300, 50, 75, Math.PI / 2, 0, 2 * Math.PI);
            context.closePath();
            if (fill) {
                context.fillStyle = color;
                context.fill();

            }
            else {
                context.stroke();
            }

        }
        // drawing Finn's face
        context.lineWidth = 4;
        face('tan', true);
        face('black', false);

        // drawing Finn's eyes
        context.beginPath();
        context.ellipse(225, 275, 5, 10, 0, 0, 2 * Math.PI);
        context.closePath();
        context.fillStyle = 'black';
        context.fill();
        context.beginPath();
        context.ellipse(275, 275, 5, 10, 0, 0, 2 * Math.PI);
        context.closePath();
        context.fill();

        // drawing Finn's mouth
        context.lineWidth = 3;
        context.beginPath();
        context.ellipse(250, 300, 15, 10, 0, 0, Math.PI);
        context.closePath();
        context.fillStyle = 'pink';
        context.fill();
        context.stroke();

    }
    slider.addEventListener("input", draw);
    draw();
    setup2();

}
window.onload = setup1;

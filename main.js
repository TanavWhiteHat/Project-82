var mouseEvent = "empty"
var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black"
width = 1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{

    //additional activity
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;;
    //end
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;

        console.log("Last position of X and Y Co-ordinates = ");
        console.log("X = "+ last_position_of_x + " Y = "+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Last position of X and Y Co-ordinates = ");
        console.log("X = "+ last_position_of_x + " Y = "+ last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x
    last_position_of_y = current_position_of_mouse_y
}

canvas.addEventListener("mouseLeave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}
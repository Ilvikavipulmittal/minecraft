//const { fabric } = require("./fabric");

var canvas=new fabric.Canvas("myCanvas")
var block_img_width=30
var block_img_height=30
var player_x=10
var player_y=10
var player_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
           left:player_x 
        });
        canvas.add("player_object");
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img_object=Img;
        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
           left:player_x 
        });
        canvas.add("player_object");
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;
    if(e.shiftKey==true && keypressed=='80'){
      block_img_width=block_img_width +10;
      block_img_height=block_img_height +10;
      document.getElementById("current_width").innerHTML=block_img_width;
      document.getElementById("current_height").innerHTML=block_img_height;
    }

    if (e.shiftKey==true && keypressed=='77'){
        block_img_width=block_img_width -10;
        block_img_height=block_img_height -10;
        document.getElementById("current_width").innerHTML=block_img_width;
        document.getElementById("current_height").innerHTML=block_img_height;
    }

    if (keypressed=='38'){
        up();
    }

    if(keypressed=='40'){
        down();
    }

    if(keypressed=='37'){
        left();
    }

    if(keypressed=='39'){
        right();
    }

    if(keypressed=='84'){
        new_image("trunk.jpg");
    }

    if(keypressed=='68'){
        new_image("dark_green.png");
    }

    if(keypressed=='76'){
        new_image("light_green.png");
    }

    if(keypressed=='71'){
        new_image("ground.png");
    }

    if(keypressed=='87'){
        new_image("wall.jpg");
    }

    if(keypressed=='89'){
        new_image("yellow_wall.png");
    }

    if(keypressed=='85'){
        new_image("unique.png");
    }

    if(keypressed=='82'){
        new_image("roof.jpg");
    }

    if(keypressed=='67'){
        new_image("cloud.jpg");
    }

}

function up(){

    if (player_y>= 0){
        player_y=player_y-block_img_height;
        canvas.remove(player_object);
        player_update();
        console.log ("block_img_height"+ block_img_height);
        console.log ("x="+player_x+"y="+player_y);
    }
}

function down(){

    if (player_y<= 500){
        player_y=player_y+block_img_height;
        canvas.remove(player_object);
        player_update();
        console.log("block img height"+block_img_height);
        console.log("x="+player_x+"y="+player_y);
    }
}

function left(){

    if (player_x>= 0){
        player_x=player_x-block_img_width;
        canvas.remove(player_object);
        console.log("block img width"+block_img_width);
        console.log("x="+player_x+"y="+player_y);
    }
}

function right(){

    if(player_x<=850){
        player_x=player_x+block_img_width;
        canvas.remove(player_object);
        console.log("block img width"+block_img_width);
        console.log("x="+player_x+"y="+player_y);
    }
}
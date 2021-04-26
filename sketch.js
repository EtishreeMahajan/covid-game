function load_images(){
enemy_img = new Image();
enemy_img.src ="assets/enemy.png";

player_img = new Image();
player_img.src ="assets/fighter.png";

gemm_img = new Image();
gemm_img.src ="assets/vac1.png";

gemm1_img = new Image();
gemm1_img.src ="assets/vac.gif";
    
win = new Audio();
win ="audio/won.wav";

loose = new Audio();
loose ="audio/dead.mp3";
}

function init(){
    cvs = document.getElementById('mycanvas');
    w = cvs.width = 1252;
    h = cvs.height = 560;
    pen = cvs.getcontext('2d');
    game_over = false;

    e1 = {
        x:200,
        y:50,
        w:80,
        h:80,
        speed:20,
    }

    e2 = {
        x:450,
        y:150,
        w:80,
        h:80,
        speed:30,
    }

    e3 = {
        x:700,
        y:300,
        w:80,
        h:80,
        speed:35,
    }

    e4 = {
        x:900,
        y:100,
        w:80,
        h:80,
        speed:30,
    }

    enemy = [e1,e2,e3,e4];
}

function draw(){
    
}
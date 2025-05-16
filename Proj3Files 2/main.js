let plr; // Player
let pillarLeft, pillarRight; // Pillars player hops between
let gap = 200; // Size of area player jumps between
let toRender = []; // Objects to render
let obstacles = [] // Obstacles to load
let plrIndex = [] // Where player is stored
let mode = 0; // Which screen to load
let skins = [] // Skins for player
let selected = 0; // Which skin is hovered
let pressed = { //Keys that are held
  RIGHT_ARROW: false,
  LEFT_ARROW: false,
  DOWN_ARROW: false
};
let gamestart_time = 0; // When the song started
let alive = false; // Is player alive?
let vidSong1;
let gameStart = false;
let endReached = false;
let setFPS = 24*4;
let curTracklist;
let lastNo = 0;
let maitFirst = false;

function setup() {
  createCanvas(1280, 720);
  frameRate(setFPS)

  //Images to load
  imgPlr = loadImage("Eye_ball.png");
  imgPlrSelect = loadImage("Eye_ball_Selection.png");
  skins.push([imgPlr, imgPlrSelect]);
  imgPlr2 = loadImage("Aliean_Cat.png");
  imgPlr2Select = loadImage("Aliean_Cat_Selection.png");
  skins.push([imgPlr2, imgPlr2Select]);
  imgPlr3 = loadImage("Alien.png");
  imgPlr3Select = loadImage("Alien_Selection.png");
  skins.push([imgPlr3, imgPlr3Select]);
  imgPlr4 = loadImage("Lizard_Alien.png");
  imgPlr4Select = loadImage("Lizard_Alien_Selection.png");
  skins.push([imgPlr4, imgPlr4Select])
  bg_song1 = loadImage("GIF.gif");
  gifsong1 = loadImage("song1gif.gif");
  firstScreen = loadImage("First_Screen.png")
  instructScren = loadImage("instruction_Screen.png")
  winScreenLst = [loadImage("Game_Ending-03.png"), loadImage("Game_Ending-02.png"), loadImage("Game_Ending-01.png"), loadImage("Game_Ending-04.png")]
  drumSprites = [loadImage("Drum_Sprites-01.png"), loadImage("Drum_Sprites-02.png"), loadImage("Drum_Sprites-03.png"), loadImage("Drum_Sprites-04.png")]

  // Objects for main game
  toRender.push(plr = new Player());
  toRender.push(pillarLeft = new Pillar(gap*-1));
  // toRender.push(pillarLeft = new Pillar(gap*-1 + gap));

  toRender.push(pillarRight = new Pillar());
  // for (let i=0; i < 10; i++){
  //   obstacles.push(new Obstacle(Math.floor(random(0, 1)*2)));
  // }
  // obstacles.push(new Obstacle(0));
  toRender.push(obstacles);

  //Buttons
  buChar = new Button("Select Character", 100, height/2);

  // Fonts
  fnt_Pixel = loadFont("Jersey10-Regular.ttf")

  // Track list setup
  setupTracklst();

  // Videos
  // vidSong1 = createVideo('song1.mp4')

  // Audio
  audSong1 = loadSound("audSong1.mp4");
}

function draw() {
  textFont(fnt_Pixel)
  switch (mode){
    case 0:
      GM_mainmenu();
      break;

    case 1:
      GM_charselect();
      break;

    case 2:
      GM_game();
      break;
  }
}

/// SCREENS ///
function GM_game(){
  /// RENDERING ///
  background(220);
  // ellipse(840, width/2, 50);
  image(bg_song1, 0, 0, width, height);
  push();
  rectMode(CENTER);
  fill(0, 0, 0, 150);
  rect(pillarLeft.x*(3/2), height/2, pillarRight.x-pillarLeft.x, height)
  
  pop();

  for (let i=0; i < toRender.length; i++){
    if(toRender[i].constructor != undefined && toRender[i].constructor == Array){
      for (let e=0; e < toRender[i].length; e++){
        toRender[i][e].render();
      }
    } else{
      toRender[i].render();
    }
  }

  if (toRender[toRender.indexOf(obstacles)] != undefined){
    for (let i=0; i < toRender[toRender.indexOf(obstacles)].length; i++){
      // console.log("Moving: "+str(toRender[toRender.indexOf(obstacles)][i]))
      toRender[toRender.indexOf(obstacles)][i].move()
    }
  }

  if (alive){
    plr.jumpRight();
    plr.jumpLeft();
    plr.move();
    // plr.collide();
  }

  /// SPAWN NEW OBSTACLES ///
  if (curTracklist.length > 0){
    // if (millis() - gamestart_time >= curTracklist[0]){
    // if (frameCount - gamestart_frame >= curTracklist[0]-(76+height/10)){
    if (frameCount - gamestart_frame >= curTracklist[0]-40){
      // ellipse(805, width/2, 10);
      curTracklist.splice(0,1);
      obstacles.push(new Obstacle((lastNo == 0) ? 1 : 0));
      lastNo = (lastNo == 0) ? 1 : 0
    }
  }

  if (keyIsDown(LEFT_ARROW)){
    image(drumSprites[0], width-1300, height/2+100, 400*(7/10), 300*(7/10));
  } else {
    image(drumSprites[2], width-1300, height/2+75, 400*(7/10), 300*(7/10));
  }
  if (keyIsDown(RIGHT_ARROW)){
    image(drumSprites[1], width-250, height/2+100, 400*(7/10), 300*(7/10));
  } else {
    image(drumSprites[3], width-250, height/2+75, 400*(7/10), 300*(7/10));
  }

  if (!audSong1.isPlaying() && alive){
    if (!gameStart){
      audSong1.play();
      gameStart = true;
    } else {
      endReached = true;
      // text("YOU WIN", width/2, height/5);
      image(winScreenLst[selected], 0, 0, width, height);
    }
  } else if (!audSong1.isPlaying() && !alive){
    textAlign(CENTER);
    text("KICK TO RESTART", width/2, height/2);
  }
  
  // rectMode(CENTER);
  

  // vidSong1.play();
  if (!endReached){
    image(gifsong1, 50, 200, 400*(3/4), 300*(3/4));
    image(gifsong1, width-((400*(3/4))+50), 200, 400*(3/4), 300*(3/4));
  }

  if (keyIsDown(DOWN_ARROW)){
    if (!pressed[DOWN_ARROW]){
      pressed[DOWN_ARROW] = true;

      mode = 1;
      audSong1.stop();
      gameStart = false;
      endReached = false;
      alive = false;
      // toRender[toRender.indexOf(obstacles)] = [new Obstacle(-1)]
      obstacles = []
    }
  }

  if (!maitFirst){
    pressed[DOWN_ARROW] = true;
    mode = 1;
    audSong1.stop();
    gameStart = false;
    endReached = false;
    alive = false;
    // toRender[toRender.indexOf(obstacles)] = [new Obstacle(-1)]
    obstacles = []
    maitFirst = true;
  }
}

function GM_mainmenu(){
  pop();
  textAlign(CENTER);
  background(0);
  image(firstScreen, 0, 0, 1280, 720);
  fill(255);
  textSize(64);
  // text("Space Cadet", width/2, height/4);

  textSize(32);
  // text("Press any button to start", width/2, height/2);
  // buChar.render();
  push();
}

function GM_charselect(){
  push();
  background(0);
  rectMode(CENTER);
  image(instructScren, 0, 0, 1280, 720);
  for (let i=0; i < skins.length; i++){
    if (i == selected){
      image(skins[i][1], width*(i/4)+100, height*(3/4)-50);
    } else {
      image(skins[i][0], width*(i/4)+100, height*(3/4)-50);
    }
  }

  // Select character
  if (keyIsDown(RIGHT_ARROW)){
    if (!pressed[RIGHT_ARROW]){
      if (selected < skins.length-1){
        selected++;
      }
      pressed[RIGHT_ARROW] = true;
    }
  } else if (keyIsDown(LEFT_ARROW)){
    if (!pressed[LEFT_ARROW]){
      if (selected > 0){
        selected--;
      }
      pressed[LEFT_ARROW] = true;
    }
    //// --> START GAME <-- ////
  } else if (keyIsDown(DOWN_ARROW)){ 
    if (!pressed[DOWN_ARROW]){
      mode++;
      plr.skin = skins[selected][0]

      pressed[DOWN_ARROW] = true;
      gamestart_time = millis()
      gamestart_frame = frameCount;

      alive = true;
      // gameStart = true;
      // setupTracklst();
      console.log(trackSong1)
      curTracklist = trackSong1.slice();
      toRender.splice(toRender.indexOf(obstacles),1);
      toRender.push(obstacles);
      lastNo = 0;
      maitFirst = true;
    }

  }

  stroke(255);
  text(`${pressed[DOWN_ARROW]} ${mode}`, width/2, height/4)
  pop();
  if (!maitFirst){
    mode++;
      plr.skin = skins[selected][0]

      pressed[DOWN_ARROW] = true;
      gamestart_time = millis()
      gamestart_frame = frameCount;

      alive = true;
      // gameStart = true;
      // setupTracklst();
      console.log(trackSong1)
      curTracklist = trackSong1.slice();
      toRender.splice(toRender.indexOf(obstacles),1);
      toRender.push(obstacles);
      lastNo = 0;
  }
}

function keyPressed(){
  if (!mode){
    pressed[DOWN_ARROW] = true;
    mode++;
  }
}

function keyReleased(){
  if (keyCode === RIGHT_ARROW){
    pressed[RIGHT_ARROW] = false;
    // console.log("DEBUG 1");
  }
  if (keyCode === LEFT_ARROW){
    pressed[LEFT_ARROW] = false;
    // console.log("DEBUG 1");
  }
  if (keyCode === DOWN_ARROW){
    pressed[DOWN_ARROW] = false;
  }
  // console.log("DEBUG 2");
}

/// DEBUGS ///
function debugTXT(){
  text1 = frameCount - gamestart_frame
  text2 = curTracklist[0]-40
  text(text1, width/2, height/2);
  text(text2, width/2, height*(3/4));
}
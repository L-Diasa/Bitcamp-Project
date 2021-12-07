/*constants for backgrounds*/
var GRID_SIDE_LENGTH = getWidth();
var CANVAS_BACKGROUND_COLOR = Color.black;

/*constants and just globals for timer*/
var TIMER_X_CENTER = 30;
var TIMER_Y_CENTER = (getHeight() - GRID_SIDE_LENGTH) / 4;
var TIMER_LENGTH = TIMER_Y_CENTER - TIMER_Y_CENTER / 3;
var TIMER_CIRCLE_RADIUS = TIMER_LENGTH + TIMER_Y_CENTER / 12;
var TIMER_INNER_CIRCLE_RADIUS = TIMER_LENGTH;
var TIMER_INNER_CIRCLE_COLOR = CANVAS_BACKGROUND_COLOR;
var TIMER_COLOR = Color.white;
var TIMER_DELAY = 1000;

/*constants for header texts*/
var HEADER_TEXT_COLOR = Color.white; 
var TIMER_TEXT_X = TIMER_X_CENTER + 5 * TIMER_LENGTH / 2;
var TIMER_TEXT_Y = TIMER_Y_CENTER + TIMER_LENGTH / 2;
var TIME_RECORD_TEXT_X = TIMER_TEXT_X + 3 * TIMER_LENGTH;
var TIME_RECORD_TEXT_Y = TIMER_TEXT_Y;
var MOVES_TEXT_X = getWidth() / 2;
var MOVES_TEXT_Y = TIMER_TEXT_Y;
var MOVES_RECORD_TEXT_X = 3 * MOVES_TEXT_X /2 
                            + TIMER_LENGTH / 2;
var MOVES_RECORD_TEXT_Y = TIMER_TEXT_Y;
var LEVEL_TEXT_X = 10;
var LEVEL_TEXT_Y = (getHeight() + GRID_SIDE_LENGTH) / 2
                 + (getHeight() - GRID_SIDE_LENGTH) / 3;

/*globals for timer and for moves*/
var timer_text, moves_text;
var time, timer, timeInSec, moves;
var bestTimeArr = [null, null, null, null, 
                    null, null, null, null,
                    null, null, null, null];
var bestMovesArr = [null, null, null, null, 
                    null, null, null, null,
                    null, null, null, null];
var free_Lvls = [1, 0, 0, 0, 0, 0, 0, 0,
                        0, 0, 0, 0];

/*constants for squares*/
var SQUARE_SPACING_COLOR = Color.white;
var SQUARE_COLOR = Color.black;
var SQUARE_SPACING = 0.5;

/*globals for squares*/
var NUM_ROWS, SQUARE_SIDE_LENGTH;

/*globals for circles*/
var CIRCLE_OFFSET, CIRCLE_RADIUS;
var circleCoors;

/*global for lines*/ 
var LINE_WIDTH;
var MOVING_DISTANCE;
var LINE_ENDING_CIRCLE_RADIUS;

/*globals color grids*/
var cyanGrid, pinkGrid, yellowGrid, redGrid;
var greenGrid, blueGrid, orangeGrid, purpleGrid;

/*color arrays*/
var clr_num_by_lvl = [6, 8, 6, 6, 6, 6, 6, 6, 5, 6, 8, 8];
var colorArr = [Color.cyan, "#FF66CC", Color.yellow, Color.red,
                "#008d00", Color.blue, Color.orange, Color.purple];
var colorGridArr, colorDoneArr, rowArr;

/*some more global variables*/ 
var curr_x_centre, curr_y_centre;
var clrNum;//color id number
var line, elemColor, completed;
var nt_completed_and_clicked;
var notEmpty = 0;
var itsMenu = 0;
var max_lvl = 12;
var lvlNum;
var unfreezed;
var FREEZED_DALAY = 260;
var colorChanged;
var tempGridArr;

/*variables for bouncing circles*/
var BOUNCING_DELAY = 0.000001;
var INCREMENT = 0.3;
var elem1, elem2;

/*constants for text*/
var MSG_BACKGROUND_COLOR = ("#1b4c80");
var TEXT_X = getWidth() / 4 + 5;
var TEXT_Y = getHeight() / 3;
var CMPL_TEXT_COLOR = Color.orange;
var TM_OVER_TEXT_COLOR = Color.red;

/*images*/
var MENU_SQUARE_SIZE = getHeight() / 8;
var MENU_STAR_SIZE = MENU_SQUARE_SIZE / 4;
//menu icon

//  returnImage("b4c77b930b40c283b8943181c3c29827", 35, x, y)
var MENU_X_CMP = getWidth()/ 2 - getWidth() / 4;
var MENU_Y_CMP = 2 * getHeight()/3;
var MENU_X_TM_OVER = TEXT_X + TEXT_X / 3;
var MENU_Y_TM_OVER = TEXT_Y + 50;
var menu_lvl_completed = returnImage("b4c77b930b40c283b8943181c3c29827", 35, 
                            MENU_X_CMP, MENU_Y_CMP);
var menu_time_over = returnImage("b4c77b930b40c283b8943181c3c29827", 35, 
                            MENU_X_TM_OVER, MENU_Y_TM_OVER);


//reload icon
var RELOAD_X_CMP = getWidth()/2 - 20;
var RELOAD_Y_CMP =  2 * getHeight()/3;
var RELOAD_X_TM_OVER =  TEXT_X + TEXT_X + 10;
var RELOAD_Y_TM_OVER = TEXT_Y + 50;
var reload_lvl_completed = returnImage("46db82f96825254d819e4edccef93915", 40, 
                            RELOAD_X_CMP, RELOAD_Y_CMP);
var reload_time_over = returnImage("46db82f96825254d819e4edccef93915", 40, 
                            RELOAD_X_TM_OVER, RELOAD_Y_TM_OVER);

//right arrow icon
var RIGHT_ARR_X_CMP = 3 * getWidth()/4 - 50;
var RIGHT_ARR_Y_CMP = 2 * getHeight()/3 - 3;
var rightArrow = returnImage("f1f195176ff43a191b8d5db0034dcf9c", 45, 
                            RIGHT_ARR_X_CMP, RIGHT_ARR_Y_CMP);

//empty stars for level sum up
var BIG_STAR_SIZE = 50;
var BIG_START_1_X = getWidth() / 2 -  2 * BIG_STAR_SIZE;
var BIG_START_1_Y = TEXT_Y - 90;
var BIG_START_2_X = getWidth() / 2 - BIG_STAR_SIZE / 2;
var BIG_START_2_Y = TEXT_Y - 100;
var BIG_START_3_X = getWidth() / 2 + BIG_STAR_SIZE;
var BIG_START_3_Y = TEXT_Y - 90;
var emptyStar1 = returnImage("c1f77021b60c46aca2de4352b2406f5a", 
                            BIG_STAR_SIZE, BIG_START_1_X, BIG_START_1_Y);
var emptyStar2 = returnImage("c1f77021b60c46aca2de4352b2406f5a", 
                            BIG_STAR_SIZE, BIG_START_2_X, BIG_START_2_Y);
var emptyStar3 = returnImage("c1f77021b60c46aca2de4352b2406f5a", 
                            BIG_STAR_SIZE, BIG_START_3_X, BIG_START_3_Y);

var STAR_INCREMENT = 2;
var STAR_STARTING_SIZE = 0.5;
var START_ANI_DELAY = 0.00005;
var star1 = returnImage("5fba48e41b85fe7e1ab26d109333f3e3", STAR_STARTING_SIZE, 
            BIG_START_1_X + BIG_STAR_SIZE / 2, BIG_START_1_Y + BIG_STAR_SIZE / 2);
var star2 = returnImage("5fba48e41b85fe7e1ab26d109333f3e3", STAR_STARTING_SIZE, 
            BIG_START_2_X + BIG_STAR_SIZE / 2, BIG_START_2_Y + BIG_STAR_SIZE / 2);
var star3 = returnImage("5fba48e41b85fe7e1ab26d109333f3e3", STAR_STARTING_SIZE,
            BIG_START_3_X + BIG_STAR_SIZE / 2, BIG_START_3_Y + BIG_STAR_SIZE / 2);
var starsCoorsArr = [BIG_START_1_X + BIG_STAR_SIZE / 2, 
                     BIG_START_1_Y + BIG_STAR_SIZE / 2, 
        BIG_START_2_X + BIG_STAR_SIZE / 2, BIG_START_2_Y + BIG_STAR_SIZE / 2, 
        BIG_START_3_X + BIG_STAR_SIZE / 2, BIG_START_3_Y + BIG_STAR_SIZE / 2];
var starsArr = [star1, star2, star3];
var gainedStarsArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var numStarsGained;


function start(){
    //Display level 1
    lvlNum = 1;
    createLevel();

    //Allow making lines 
    mouseDownMethod(click);
	mouseDragMethod(makeLine);
	mouseUpMethod(updateMoves);
}


//Add all elements on the canvas based on level number
function createLevel(){
    //Set global variables
    updateVars();
    
    //Background of canvas
    createRectangle(0, 0, getWidth(), getHeight(), CANVAS_BACKGROUND_COLOR);

    //Background of grid
    createRectangle(0, (getHeight() - GRID_SIDE_LENGTH)/2,
                   GRID_SIDE_LENGTH, GRID_SIDE_LENGTH, SQUARE_SPACING_COLOR);
                   
    //Timer
    addCircle(TIMER_X_CENTER, TIMER_Y_CENTER, TIMER_CIRCLE_RADIUS, TIMER_COLOR);
    addCircle(TIMER_X_CENTER, TIMER_Y_CENTER, 
                TIMER_INNER_CIRCLE_RADIUS, TIMER_INNER_CIRCLE_COLOR);

    addTimerLine(TIMER_X_CENTER, TIMER_Y_CENTER, 
                    TIMER_X_CENTER, TIMER_Y_CENTER - TIMER_LENGTH);
    addTimerLine(TIMER_X_CENTER, TIMER_Y_CENTER, TIMER_X_CENTER, TIMER_Y_CENTER);

	setTimer(rotateLine, TIMER_DELAY);
	
	//Text
	//timer's text
	timer_text = returnText("00", "13pt Verdana", 
                    HEADER_TEXT_COLOR, TIMER_TEXT_X, TIMER_TEXT_Y);
    add(timer_text);
    if(bestTimeArr[lvlNum - 1] == null){
        var time_record_text = returnText("best: -", "13pt Verdana", 
                    HEADER_TEXT_COLOR, TIME_RECORD_TEXT_X, TIME_RECORD_TEXT_Y);
        add(time_record_text);
    }
    else{
        var time_record_text = returnText("best: " + bestTimeArr[lvlNum - 1], 
                                        "13pt Verdana", HEADER_TEXT_COLOR, 
                                        TIME_RECORD_TEXT_X, TIME_RECORD_TEXT_Y);
        add(time_record_text);
    }
    //moves' text
    moves_text = returnText("moves: 00", "13pt Verdana", 
                    HEADER_TEXT_COLOR, MOVES_TEXT_X, TIMER_TEXT_Y);
    add(moves_text);
    if( bestMovesArr[lvlNum - 1] == null){
        var moves_record_text = returnText("best: -", "13pt Verdana", 
                HEADER_TEXT_COLOR, MOVES_RECORD_TEXT_X, MOVES_RECORD_TEXT_Y);
        add(moves_record_text);
    }
    else{
        var moves_record_text = returnText("best: " +  bestMovesArr[lvlNum - 1], 
                                        "13pt Verdana", HEADER_TEXT_COLOR, 
                                        MOVES_RECORD_TEXT_X, MOVES_RECORD_TEXT_Y);
        add(moves_record_text);
    }
    //level text
    var lvl_text =  returnText("Level "+ lvlNum + "/12", "14pt Verdana", 
                                Color.yellow, LEVEL_TEXT_X, LEVEL_TEXT_Y);
    add(lvl_text);
	
    //Squares
    var x_square = SQUARE_SPACING;
    var y_square = (getHeight() - GRID_SIDE_LENGTH)/2 + SQUARE_SPACING;
    for(var i = 0; i < NUM_ROWS; i++){
        for(var j = 0; j < NUM_ROWS; j++){
            createRectangle(x_square, y_square,
                    SQUARE_SIDE_LENGTH, SQUARE_SIDE_LENGTH,
                            SQUARE_COLOR);
            x_square += SQUARE_SIDE_LENGTH + SQUARE_SPACING;
        }
    x_square = SQUARE_SPACING;
    y_square += SQUARE_SIDE_LENGTH + SQUARE_SPACING;
    }
    
    //Circles
    circleCoors = new Grid(clr_num_by_lvl[lvlNum - 1], 4);
    addCircles();
}

//Update variables by level
function updateVars(){
    completed = 0;
    if(lvlNum == 1) NUM_ROWS = 6;
    else if(lvlNum < 7) NUM_ROWS = 7;
    else if(lvlNum < 11) NUM_ROWS = 8;
    else NUM_ROWS = 9;
        
    //squares
    // NUM_ROWS = 7;
    SQUARE_SIDE_LENGTH = (GRID_SIDE_LENGTH -  
            (NUM_ROWS + 1) * SQUARE_SPACING) / NUM_ROWS;
    
    //circles
    CIRCLE_OFFSET = SQUARE_SIDE_LENGTH / 7; 
    CIRCLE_RADIUS =  (SQUARE_SIDE_LENGTH - 
                    2 * CIRCLE_OFFSET) / 2;
    
    //lines 
    LINE_WIDTH = CIRCLE_RADIUS;
    LINE_ENDING_CIRCLE_RADIUS = LINE_WIDTH / 2;
    MOVING_DISTANCE = getWidth() / NUM_ROWS;
    
    //grids
    cyanGrid = new Grid(NUM_ROWS * NUM_ROWS, 2);
    pinkGrid = new Grid(NUM_ROWS * NUM_ROWS, 2);
    yellowGrid = new Grid(NUM_ROWS * NUM_ROWS, 2);
    redGrid = new Grid(NUM_ROWS * NUM_ROWS, 2);
    greenGrid = new Grid(NUM_ROWS * NUM_ROWS, 2);
    blueGrid = new Grid(NUM_ROWS * NUM_ROWS, 2);
    orangeGrid = new Grid(NUM_ROWS * NUM_ROWS, 2);
    purpleGrid =  new Grid(NUM_ROWS * NUM_ROWS, 2);
    
    var smGrid = new Grid(NUM_ROWS * NUM_ROWS, 2);
    tempGridArr = [smGrid, smGrid, smGrid, smGrid, 
                   smGrid, smGrid, smGrid, smGrid];
    
    //remove the starts if they were added and
    //set their sizes and positions to the starting ones
    for(var i = 0; i < numStarsGained; i++){
            remove(starsArr[i]);
            starsArr[i].setSize(STAR_STARTING_SIZE, STAR_STARTING_SIZE);
            starsArr[i].setPosition(starsCoorsArr[i * 2], 
                                    starsCoorsArr[i * 2 + 1]);
        }
    numStarsGained = 0;
    
    //time and moves
    time = 0;
    moves = 0;
    
    //color arrays
    colorGridArr = [cyanGrid, pinkGrid, yellowGrid, redGrid, 
                    greenGrid, blueGrid, orangeGrid, purpleGrid];
    colorDoneArr = [];
    rowArr = [];
    
    for(i = 0; i < clr_num_by_lvl[lvlNum - 1]; i++){
        colorDoneArr.push(0);
        rowArr.push(0);
    }
}

//Display msg whenever the time is over or the level is completed
function displayMsg(won){
    //Background of canvas
    createRectangle(0, 0, getWidth(), getHeight(), MSG_BACKGROUND_COLOR);
    if(won){
        //display text
        addText("LEVEL COMPLETED!", "20pt  Impact", 
                        CMPL_TEXT_COLOR, TEXT_X, TEXT_Y);
        addText("You completed the level in ", "15pt  Verdana", 
                        Color.white, TEXT_X - 38, TEXT_Y + 60);
        addText(moves + " moves and in", "15pt  Verdana", 
                    Color.white, TEXT_X + 20, TEXT_Y + 90);
        addText(timeInSec + " seconds.", "15pt  Verdana", 
                    Color.white, TEXT_X + 40, TEXT_Y + 120);
        
        //add icons
        add(menu_lvl_completed);
        add(reload_lvl_completed);
        //add a right arrow icon on all levels expect the last one
        if(lvlNum != max_lvl){
            add(rightArrow);   
        }
        
        //count the number of gained stars
        if(moves - clr_num_by_lvl[lvlNum - 1] < 3){
            numStarsGained += 1;
        }
        if(timeInSec <= 40){
            numStarsGained += 1;
        }
        if(timeInSec <= 40 && moves - clr_num_by_lvl[lvlNum - 1] <= 0){
            numStarsGained += 1;
        }
        //update the number of gained stars for the level
        if(numStarsGained > gainedStarsArr[lvlNum - 1])
            gainedStarsArr[lvlNum - 1] = numStarsGained;
        
        //empty stars
        add(emptyStar1);
        add(emptyStar2);
        add(emptyStar3);
        //gained stars
        for(var i = 0; i < numStarsGained; i++){
            add(starsArr[i]);
        }
        setTimer(increaseStar, START_ANI_DELAY);

        //check and update the best time
        if(bestTimeArr[lvlNum - 1] > timeInSec 
            || bestTimeArr[lvlNum - 1] == null)
            bestTimeArr[lvlNum - 1] = timeInSec;

        //check and update the best number of moves
        if(bestMovesArr[lvlNum - 1] > moves 
            || bestMovesArr[lvlNum - 1] == null) 
            bestMovesArr[lvlNum - 1] = moves;
        
        //if it's not the last lvl, unlock the next lvl
        if(lvlNum != max_lvl) free_Lvls[lvlNum] = 1;
    }
    else{//if time is over
        completed = 1;
        unfreezed = 1;
        //display text
        addText("TIME OVER ", "22pt Impact", TM_OVER_TEXT_COLOR,
                        TEXT_X + TEXT_X / 3, TEXT_Y);
        //set icon positions and add them 
        add(menu_time_over);
        add(reload_time_over);
    }
}

//Get element at the centre of 
//the cliked square and start making a line
function click(e){
    //based on the position of mouse 
    //get element at the centre of the square
    var n_y = find_n_y(e.getY());
    var n_x = find_n_x(e.getX());
    var x_centre = xn(n_x);
    var y_centre = yn(n_y);
    var elem = getElementAt(x_centre, y_centre);
    if(elem != null){
        if(!completed){//if the level is not completed
            //enable mouse up method functioning 
            nt_completed_and_clicked = 1;
            //get the color of the elem
            elemColor = elem.getColor();
    
            //if it is not an emty square or a spacing
            //and the level is not completed
            if(elemColor != SQUARE_COLOR && elemColor != SQUARE_SPACING_COLOR){
                notEmpty = 1;

                //select the color's id number
                for(var i = 0; i < colorArr.length; i++){
                    if(elemColor == colorArr[i]){
                        clrNum = i;
                        colorDoneArr[clrNum] = 0; 
                        break;
                    }
                }

                var copyGrid = tempGridArr[clrNum];
                var elemGrid = colorGridArr[clrNum];
                //copy the current grid of the clicked color 
                for(var row = 0; row < copyGrid.numRows(); row++){
                    for(var col = 0; col < copyGrid.numCols(); col++){
                        var val = elemGrid.get(row, col);
                        if(val == null){
                            break;
                        }
                        else copyGrid.set(row, col, val);
                    }
                }

                //check the clicked coordinates, remove lines if necessary 
                //update grid and make the clikced colored circles bounce
                checkClickedCoors(x_centre, y_centre, elemColor);
                addLineAddGrid(x_centre, y_centre, elemColor);
                bounce();
            }
            else notEmpty = 0;
        }
        else if(unfreezed && !itsMenu){
            var elem = getElementAt(e.getX(), e.getY());
            if(elem == rightArrow){
                lvlNum += 1;
                createLevel();
                unfreezed = 0;
            }
            else if(elem == reload_lvl_completed || elem == reload_time_over){
                createLevel();
                unfreezed = 0;
            }
            else if(elem == menu_lvl_completed || elem == menu_time_over){
                openMenu();
                itsMenu = 1;
            }
        }
        else if(itsMenu){//if the menu is open
            var elem = getElementAt(e.getX(), e.getY());
            //if one of the squares is clikced
            if(elem.getType() == rightArrow.getType()){
                var y = find_n_y_menu(e.getY());
                var x = find_n_x_menu(e.getX()) + (y - 1) * 3;
                //check the number of the square that is clicked
                if(free_Lvls[x - 1] == 1){//if the level is unlocked
                    //open the level
                    lvlNum = x;
                    createLevel();
                    unfreezed = 0;
                    itsMenu = 0;
                }
            }
        }
    }
}

//Open the menu page
function openMenu(){
    //Background
    createRectangle(0, 0, getWidth(), getHeight(), MSG_BACKGROUND_COLOR);
    //Squares
    var x_square = getWidth() / 2 - 5 * MENU_SQUARE_SIZE / 2;
    var y_square = MENU_SQUARE_SIZE + MENU_SQUARE_SIZE / 3;
    var x_number = x_square + 2 * MENU_SQUARE_SIZE / 5;
    var y_number = y_square + 3 * MENU_SQUARE_SIZE / 5;
    var check_lvl_num = 0;
    
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            //add a level number
            addText(check_lvl_num + 1, "17pt  Verdana", 
                    Color.white, x_number, y_number);

            //check whether the lvl is free or not
            //add an orange square if it is free
            if(free_Lvls[check_lvl_num] == 1){
                addImage("3530cf0ccfc63d93b434d986562ef78d", 
                            MENU_SQUARE_SIZE, x_square, y_square);
                var star_x = x_square + MENU_STAR_SIZE / 4;
                var star_y = y_square - MENU_SQUARE_SIZE / 3;
                for(var k = 0; k < gainedStarsArr[check_lvl_num]; k++){
                    addImage("5fba48e41b85fe7e1ab26d109333f3e3", 
                            MENU_STAR_SIZE, star_x, star_y);
                    star_x += 5 * MENU_STAR_SIZE / 4
                }
                            
            }else{//add a black one otherwise
                addImage("e77493b627105aaf9955ddea373aadb6", 
                        MENU_SQUARE_SIZE, x_square, y_square);
            }
            
            check_lvl_num ++;
            x_square += 4 * MENU_SQUARE_SIZE / 2;
            x_number = x_square +  2 * MENU_SQUARE_SIZE / 5;
        }
        x_square = getWidth() / 2 - 5 * MENU_SQUARE_SIZE / 2;
        y_square += 3 * MENU_SQUARE_SIZE / 2;
        x_number = x_square +  2 * MENU_SQUARE_SIZE / 5;
        y_number = y_square + 3 * MENU_SQUARE_SIZE / 5;
    }
        
    x_number = x_square +  MENU_SQUARE_SIZE / 4;
    for(var j = 0; j < 3; j++){
        //add a level number
        addText(check_lvl_num + 1, "17pt  Verdana", 
                Color.white, x_number, y_number);
        
        //check whether the lvl is free or not
        //add an orange square if it is free
        if(free_Lvls[check_lvl_num] == 1){
            addImage("3530cf0ccfc63d93b434d986562ef78d", 
                        MENU_SQUARE_SIZE, x_square, y_square);
        }else{//add a black one otherwise
            addImage("e77493b627105aaf9955ddea373aadb6", 
                    MENU_SQUARE_SIZE, x_square, y_square);
        }

        check_lvl_num ++;
        x_square += 4 * MENU_SQUARE_SIZE / 2;
        x_number = x_square + MENU_SQUARE_SIZE / 4;
    }
}

//Update the number of moves
function updateMoves(e){
    if(nt_completed_and_clicked){//if the level is not completed
        if(notEmpty){//if one of the colors was clicked
        //if it's not the same color,that has just been modified:
            if(elemColor != colorArr[colorChanged]){
                //check the path
                var tempGrid = tempGridArr[clrNum];
                var elemGrid = colorGridArr[clrNum];
                var changed = 0;
                
                for(var row = 1; row < tempGrid.numRows(); row++){ 
                    for(var col = 0; col < tempGrid.numCols(); col++){
                        var val1 = elemGrid.get(row, col);
                        var val2 = tempGrid.get(row, col);
                        if(val1 != val2){
                             changed = 1;
                             break;
                        }
                    }
                }
            
                //if the path has been changed
                if(changed){
                    colorChanged = clrNum;
                    //Increase num of moves by one and update moves text
                    addAndUpdateMovesTxt();
                }
            }
        }
    }
}

//Increase num of moves by one and update moves text
function addAndUpdateMovesTxt(){
    moves ++;
    if(moves >=10){
        remove(moves_text);
        moves_text = returnText("moves: " + moves, "13pt Verdana", 
            HEADER_TEXT_COLOR, MOVES_TEXT_X, TIMER_TEXT_Y);
        add(moves_text);
    }
    else{
        remove(moves_text);
        moves_text = returnText("moves: 0" + moves, "13pt Verdana", 
            HEADER_TEXT_COLOR, MOVES_TEXT_X, TIMER_TEXT_Y);
        add(moves_text);
    }
}

//Make lines by dragging
function makeLine(e){
    //based on the position of mouse 
    //get element at the centre of the square
    var n_y = find_n_y(e.getY());
    var n_x = find_n_x(e.getX());
    var x_centre = xn(n_x);
    var y_centre = yn(n_y);
    //if not the same square
    //and if mouse was clikced after the lvl was displayed:
    if((curr_x_centre != x_centre || curr_y_centre != y_centre)
        && nt_completed_and_clicked){
        var elemAtCentre = getElementAt(x_centre, y_centre);
        
        if(elemAtCentre != null){
            var currcolor = elemAtCentre.getColor();
        
            //calculate the difference between the coordinates of 
            //the current square's centre(where line is already added)
            //and next square's centre (where mouse is moved)
            var distanceX =  curr_x_centre - x_centre;
            var distanceY =  curr_y_centre - y_centre;
            
            //create lines
            if(notEmpty//not an empty square or spacing 
                //not allowing making lines diagonally:
                && (distanceX == 0 || distanceY == 0)
                //allowing makeing lines only into the squares that are beside:
                && (distanceX < MOVING_DISTANCE && 
                    distanceX > (0 - MOVING_DISTANCE)) 
                && (distanceY < MOVING_DISTANCE && 
                    distanceY > (0 - MOVING_DISTANCE))
                //for staying in the grid:
                && n_y != 0 && n_x != 0 && n_y < NUM_ROWS + 1 && notEmpty)
                    {
    
                var movingIntoCircle = 0;
                //if not the same color and not from endpoint
                if(currcolor != elemColor && !colorDoneArr[clrNum]){
                    //if moving into an empty square
                    if(currcolor == SQUARE_COLOR){
                        line.setEndpoint(x_centre, y_centre);
                        createCircle(n_x, n_y, 
                                    LINE_ENDING_CIRCLE_RADIUS, elemColor);
                        addLineAddGrid(x_centre, y_centre, elemColor);
                    }else{//moving into differently color
                        //checking if it is a circle
                        for(var i = 0; i < circleCoors.numRows(); i++){
                            if(circleCoors.get(i, 0) == x_centre && 
                                circleCoors.get(i, 1) == y_centre
                            || circleCoors.get(i, 2) == x_centre && 
                                circleCoors.get(i, 3) == y_centre){
                                movingIntoCircle = 1;
                                break;
                            }
                        }
                        if(!movingIntoCircle){//if it is line
                            //cross and remove the line made from that square
                            var tempColorNum = clrNum;
                            //find crossing color's id number
                            for(var i = 0; i < colorArr.length; i++){
                                if(currcolor == colorArr[i]){
                                    clrNum = i;
                                    break;
                                }
                            }
                            crossAndRemove(x_centre, y_centre, currcolor);
                            line.setEndpoint(x_centre, y_centre);
                            createCircle(n_x, n_y, 
                                        LINE_ENDING_CIRCLE_RADIUS, elemColor);
                            clrNum = tempColorNum;
                            addLineAddGrid(x_centre, y_centre, elemColor);
                        }
                    }
                }else if(elemColor == currcolor){//same color
                    //if it is an endpoint
                    if(elemAtCentre.getWidth()/2 >= CIRCLE_RADIUS){
                        bounce();
                        line.setEndpoint(x_centre, y_centre);
                        colorDoneArr[clrNum] = 1;
                    }
                    else{
                        crossAndRemove(x_centre, y_centre, elemColor);
                        colorDoneArr[clrNum] = 0;
                    }
                    addLineAddGrid(x_centre, y_centre, elemColor);
                }
            }
            
            //check whether the level is completed or not
        	for(var i = 0; i < clr_num_by_lvl[lvlNum - 1]; i++){
        	    if(colorDoneArr[i]){
        	        completed = 1;
        	    }else {
        	        completed = 0;
        	        break;
        	    }
        	}
        	if(completed){//if the level is completed
        	    //stop timer
        	    stopTimer(rotateLine);
        	    //disable mouse up method
        	    nt_completed_and_clicked = 0;
        	    //if it's not the same color,that has just been modified:
        	    if(elemColor != colorArr[colorChanged])
        	    //increase num of moves and update the text
        	    addAndUpdateMovesTxt();
        	    //bounce all circles and display msg
        	    bounceAll();
        	}
        }
    }
}

//Check position and color
//and remove lines accordingly
function checkClickedCoors(x, y, color){
    var circle_1_x = circleCoors.get(clrNum, 0);
    var circle_1_y = circleCoors.get(clrNum, 1);
    var circle_2_x = circleCoors.get(clrNum, 2);
    var circle_2_y = circleCoors.get(clrNum, 3);
    
    //if you have clicked the ending or the starting point
    if((x == circle_1_x && y == circle_1_y) ||
        (x == circle_2_x && y == circle_2_y)){
        //remove lines that were previously made
        crossAndRemove(colorGridArr[clrNum].get(0, 0), 
                    colorGridArr[clrNum].get(0, 1), color);
        rowArr[clrNum] = 0;
    }
    else{
        //remove lines that were made from the clicked square
        crossAndRemove(x, y, color);
    }
}

//Cross and remove lines
function crossAndRemove(x, y, color){
    var endRow;
    var startRow;
    //find the starting and the ending row
    for(var i = 0; i < colorGridArr[clrNum].numRows(); i++){
        if(colorGridArr[clrNum].get(i, 0) != null){
            if(colorGridArr[clrNum].get(i, 0) != -1){
                startRow = i;
            }
            if(colorGridArr[clrNum].get(i, 0) == x && 
                colorGridArr[clrNum].get(i, 1) == y){
                endRow = i;
            }
        }
    }
    
    if(endRow != null && startRow !=null){
        //if you are crossing the other color
        if(color != elemColor){
            endRow -= 1;
            colorDoneArr[clrNum] = 0;
        }
        for(var i = startRow; i > endRow; i--){
            removeElem(colorGridArr[clrNum].get(i, 0), 
                    colorGridArr[clrNum].get(i, 1), color);
            colorGridArr[clrNum].set(i, 0, -1);
            colorGridArr[clrNum].set(i, 1, -1);
        }
    //update the ending rowthe of the crossed color
    rowArr[clrNum] = endRow;
    }
}

//Bounce the starting and the ending points of the color
function bounce(){
    var x1 = circleCoors.get(clrNum, 0) + CIRCLE_RADIUS / 4;
    var y1 = circleCoors.get(clrNum, 1) + CIRCLE_RADIUS / 4;
    var x2 = circleCoors.get(clrNum, 2) + CIRCLE_RADIUS / 4;
    var y2 = circleCoors.get(clrNum, 3) + CIRCLE_RADIUS / 4;
    //get the starting and the ending points of the color
    elem1 = getElementAt(x1, y1);
    elem2 = getElementAt(x2, y2);
    
    stopTimer(grow);
    stopTimer(shrink);
    setTimer(grow,  BOUNCING_DELAY);
}

//Grow the circle
function grow(){
    if(elem1.getRadius() < (CIRCLE_RADIUS + 2 * CIRCLE_OFFSET / 5)){
        var radius = elem1.getRadius();
        elem1.setRadius(radius + INCREMENT);
        elem2.setRadius(radius + INCREMENT);
    }else{
        stopTimer(grow);
        setTimer(shrink, BOUNCING_DELAY);
    }
}

//Shrink the circle
function shrink(){
    if(elem1.getRadius() > CIRCLE_RADIUS){
        var radius = elem1.getRadius();
        elem1.setRadius(radius - INCREMENT);
        elem2.setRadius(radius - INCREMENT);
    }else{
        elem1.setRadius(CIRCLE_RADIUS);
        elem2.setRadius(CIRCLE_RADIUS);
        stopTimer(shrink);
    }
}

//Create a new line and add it in its grid; Set current coordinates 
//to the centre of the square where line's end point was added
function addLineAddGrid(x, y, color){
    addLine(color, x, y);
    addInGrid(x, y, color);
    curr_x_centre = x;
    curr_y_centre = y; 
}

//Add coordinates into the color's grid
function addInGrid(x, y, color){
    colorGridArr[clrNum].set(rowArr[clrNum], 0, x);
    colorGridArr[clrNum].set(rowArr[clrNum], 1, y);
    rowArr[clrNum] = rowArr[clrNum] + 1;
}

//Remove lines and circles until the centre of the square is clear
function removeElem(x, y, color){
    var temCircle = new Circle(LINE_ENDING_CIRCLE_RADIUS);
    var endpointRemoved = 0;
    var elem = getElementAt(x, y);
    var remElemColor = elem.getColor();
    while(color == remElemColor && elem.getWidth()/2 != LINE_WIDTH){
        //check if you are removing the endpoint
        if(elem.getType() == temCircle.getType()){
            if(elem.getRadius() > LINE_ENDING_CIRCLE_RADIUS)
                endpointRemoved = 1;
        }
        remove(elem);
        elem = getElementAt(x, y);
        remElemColor = elem.getColor();
    }
    //if the endpoint was removed add a circle in the square
    if(endpointRemoved) createCircle(find_n_x(x), find_n_y(y), 
                                        CIRCLE_RADIUS, color);
}

//Create a line that has the same staring and ending positions
function addLine(color, x, y){
    line = new Line(x, y, x, y);
    line.setColor(color);
    line.setLineWidth(LINE_WIDTH);
    add(line);
}

//Return centre position of the given column
function xn(n){
    return SQUARE_SPACING + SQUARE_SIDE_LENGTH / 2 +
        (n - 1) * (SQUARE_SPACING + SQUARE_SIDE_LENGTH);
}

//Return centre position of the given row
function yn(n){
    return (getHeight() - GRID_SIDE_LENGTH)/2 + 
            SQUARE_SPACING + SQUARE_SIDE_LENGTH / 2 + 
            (n - 1) * (SQUARE_SPACING + SQUARE_SIDE_LENGTH);  
}

//Find a column number by passing x coordinate
function find_n_x(x){
    var n;
    var x_position = x;
    for(n = 0; x_position > 0; n++){
        x_position -= (SQUARE_SPACING + SQUARE_SIDE_LENGTH);
    }
    return n;
}

//Find a row number by passing y coordinate
function find_n_y(y){
    var n;
    var y_position = (y - (getHeight() - GRID_SIDE_LENGTH)/2);
    for(n = 0; y_position > 0; n++){
        y_position -= (SQUARE_SPACING + SQUARE_SIDE_LENGTH);
    }
    return n;
}

//Find a column number of menu squares by passing x coordinate
function find_n_x_menu(x){
    var n;
    var x_position = x - (getWidth() / 2 - 5 * MENU_SQUARE_SIZE / 2);
    var decrement = 4 * MENU_SQUARE_SIZE / 2;
    for(n = 0; x_position > 0; n++){
        x_position -= decrement;
    }
    return n;
}

//Find a row number of menu squares by passing y coordinate
function find_n_y_menu(y){
    var n;
    var y_position = y - (MENU_SQUARE_SIZE + MENU_SQUARE_SIZE / 3);
    var decrement = 3 * MENU_SQUARE_SIZE / 2;
    for(n = 0; y_position > 0; n++){
        y_position -= decrement;
    }
    return n;
}

//Add a rectangle
function createRectangle(x, y, width, height, color){
    var rect = new Rectangle(width, height);
    rect.setPosition(x, y);
	rect.setColor(color);
	add(rect);
}

//Add a circle for grid
function createCircle(x_coordinate, y_coordinate, radius, color){
    var circle = new Circle(radius);
    var x = xn(x_coordinate);
    var y = yn(y_coordinate);
    circle.setPosition(x, y);
	circle.setColor(color);
	add(circle);
}

//Rotate the timer line
function rotateLine(){
	time += 0.1;

	var dx = TIMER_LENGTH * Math.sin(time);
	var dy = TIMER_LENGTH * Math.cos(time);
	var x = TIMER_X_CENTER + dx;
	var y = TIMER_Y_CENTER - dy;
    timeInSec = Math.round(time * 10);
    
    //update timer text
    if(timeInSec >=10){
        remove(timer_text);
        timer_text = returnText(timeInSec, "13pt Verdana", 
                        HEADER_TEXT_COLOR, TIMER_TEXT_X, TIMER_TEXT_Y);
        add(timer_text);
    }
    else{
        remove(timer_text);
        timer_text = returnText("0" + timeInSec, "13pt Verdana", 
                    HEADER_TEXT_COLOR, TIMER_TEXT_X, TIMER_TEXT_Y);
        add(timer_text); 
    }

    //if time is over
	if(timeInSec >= 60){
	    //remove all objects from canvas
	    removeAll();
	    //stop timer and display msg
	    stopTimer(rotateLine);
	    displayMsg(0);
	    //disable making line
	    completed = 1;
	    nt_completed_and_clicked = 0;
	}

	timer.setEndpoint(x, y);
	addTimerLine(TIMER_X_CENTER, TIMER_Y_CENTER, 
                    TIMER_X_CENTER, TIMER_Y_CENTER);
}

//Add a circle
function addCircle(x, y, radius, color){
    var circle = new Circle(radius);
	circle.setPosition(x, y);
    circle.setColor(color);
    add(circle);
}

//Add a line for timer
function addTimerLine(x1, y1, x2, y2){
    timer = new Line(x1, y1, x2, y2);
    timer.setColor(TIMER_COLOR);
	add(timer);
}

//Bounce all the circles and display msg
//by calling freezeAndBounce function
function bounceAll(){
    bounce();
    clrNum = 0;
    setTimer(freezeAndBounce, FREEZED_DALAY);
}

//Bounce all the circles and display msg
function freezeAndBounce(){
    if(clrNum < clr_num_by_lvl[lvlNum - 1]){
        bounce();
        clrNum += 1;
    }
    else{
        stopTimer(freezeAndBounce);//stop freezing and bounceing
        unfreezed = 1;
        removeAll();//remove all objects from the canvas
        displayMsg(1);//display msg
    }
}

//Display a level sum up text
function addText(msg, font, color, x, y){
    var lvlSumUp = new Text(msg, font);
    lvlSumUp.setColor(color)
    lvlSumUp.setPosition(x, y);
    add(lvlSumUp);
}

//Create and return text
function returnText(msg, font, color, x, y){
    var lvlSumUp = new Text(msg, font);
    lvlSumUp.setColor(color)
    lvlSumUp.setPosition(x, y);
    return(lvlSumUp);
}

//Add image on canvas
function addImage(url, size, x, y){
    var image = new WebImage("https://codehs.com/uploads/" +
			  url);
	image.setSize(size, size);
    image.setPosition(x, y);
    add(image);
}

//Create and return image
function returnImage(url, size, x, y){
    var image = new WebImage("https://codehs.com/uploads/" +
			  url);
	image.setSize(size, size);
    image.setPosition(x, y);
    return image;
}

//Increase the size of the stars
function increaseStar(){
    if(BIG_STAR_SIZE + BIG_STAR_SIZE / 4 > star1.getWidth()){
        var currSize = star1.getWidth();
        for(var i = 0; i < numStarsGained; i++){
            var x = starsArr[i].getX();
            var y = starsArr[i].getY();
            starsArr[i].setSize(currSize + STAR_INCREMENT, 
                                currSize + STAR_INCREMENT);
            starsArr[i].setPosition(x - STAR_INCREMENT / 2, 
                                    y - STAR_INCREMENT / 2);
        }
    }
    else{
        stopTimer(increaseStar);
        setTimer(decreaseStar, START_ANI_DELAY);
    }
}

//Decrease the size of the stars
function decreaseStar(){
    if(BIG_STAR_SIZE + STAR_INCREMENT < star1.getWidth()){
        var currSize = star1.getWidth();
        for(var i = 0; i < numStarsGained; i++){
            var x = starsArr[i].getX();
            var y = starsArr[i].getY();
            starsArr[i].setSize(currSize - STAR_INCREMENT, 
                                currSize - STAR_INCREMENT);
            starsArr[i].setPosition(x + STAR_INCREMENT / 2, 
                                    y + STAR_INCREMENT / 2);
        }
    }
    else{
        stopTimer(decreaseStar);
    }
}

//Add circles on the grid by level 
function addCircles(){
     if(lvlNum == 1){
        createCircle(3, 4, CIRCLE_RADIUS, colorArr[0]);
        createCircle(5, 1, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(5, 2, CIRCLE_RADIUS, colorArr[1]);
        createCircle(3, 5, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(2, 1, CIRCLE_RADIUS, colorArr[2]);
        createCircle(1, 6, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(3, 1, CIRCLE_RADIUS, colorArr[3]);
        createCircle(3, 3, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(1, 1, CIRCLE_RADIUS, colorArr[4]);
        createCircle(1, 5, CIRCLE_RADIUS, colorArr[4]);
        
        createCircle(6, 1, CIRCLE_RADIUS, colorArr[5]);
        createCircle(3, 6, CIRCLE_RADIUS, colorArr[5]);
        
        circleCoors.initFromArray([
            [xn(3), yn(4), xn(5), yn(1)],
            [xn(5), yn(2), xn(3), yn(5)],
            [xn(2), yn(1), xn(1), yn(6)],
            [xn(3), yn(1), xn(3), yn(3)],
            [xn(1), yn(1), xn(1), yn(5)],
            [xn(6), yn(1), xn(3), yn(6)],
            ]);
        
     }
    if(lvlNum == 2){
        createCircle(1, 1, CIRCLE_RADIUS, colorArr[0]);
        createCircle(7, 2, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(1, 3, CIRCLE_RADIUS, colorArr[1]);
        createCircle(3, 3, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(1, 2, CIRCLE_RADIUS, colorArr[2]);
        createCircle(7, 3, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(3, 4, CIRCLE_RADIUS, colorArr[3]);
        createCircle(7, 5, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(5, 3, CIRCLE_RADIUS, colorArr[4]);
        createCircle(7, 4, CIRCLE_RADIUS, colorArr[4]);
        
        createCircle(1, 5, CIRCLE_RADIUS, colorArr[5]);
        createCircle(7, 7, CIRCLE_RADIUS, colorArr[5]);
        
        createCircle(4, 3, CIRCLE_RADIUS, colorArr[6]);
        createCircle(6, 5, CIRCLE_RADIUS, colorArr[6]);
        
        createCircle(1, 4, CIRCLE_RADIUS, colorArr[7]);
        createCircle(2, 6, CIRCLE_RADIUS, colorArr[7]);
        
        circleCoors.initFromArray([
            [xn(1), yn(1), xn(7), yn(2)],
            [xn(1), yn(3), xn(3), yn(3)],
            [xn(1), yn(2), xn(7), yn(3)],
            [xn(3), yn(4), xn(7), yn(5)],
            [xn(5), yn(3), xn(7), yn(4)],
            [xn(1), yn(5), xn(7), yn(7)],
            [xn(4), yn(3), xn(6), yn(5)],
            [xn(1), yn(4), xn(2), yn(6)]
            ]);
    }
    else if(lvlNum == 3){
        createCircle(7, 7, CIRCLE_RADIUS, colorArr[0]);
        createCircle(5, 4, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(5, 5, CIRCLE_RADIUS, colorArr[1]);
        createCircle(6, 6, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(4, 4, CIRCLE_RADIUS, colorArr[2]);
        createCircle(3, 5, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(7, 2, CIRCLE_RADIUS, colorArr[3]);
        createCircle(5, 6, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(2, 3, CIRCLE_RADIUS, colorArr[4]);
        createCircle(6, 2, CIRCLE_RADIUS, colorArr[4]);
        
        createCircle(7, 1, CIRCLE_RADIUS, colorArr[5]);
        createCircle(6, 7, CIRCLE_RADIUS, colorArr[5]);
        
        circleCoors.initFromArray([
            [xn(7), yn(7), xn(5), yn(4)],
            [xn(5), yn(5), xn(6), yn(6)],
            [xn(4), yn(4), xn(3), yn(5)],
            [xn(7), yn(2), xn(5), yn(6)],
            [xn(2), yn(3), xn(6), yn(2)],
            [xn(7), yn(1), xn(6), yn(7)]
            ]);
    }
     else if(lvlNum == 4){
        createCircle(6, 2, CIRCLE_RADIUS, colorArr[0]);
        createCircle(7, 6, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(1, 3, CIRCLE_RADIUS, colorArr[1]);
        createCircle(7, 1, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(4, 4, CIRCLE_RADIUS, colorArr[2]);
        createCircle(7, 5, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(1, 7, CIRCLE_RADIUS, colorArr[3]);
        createCircle(4, 7, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(7, 2, CIRCLE_RADIUS, colorArr[4]);
        createCircle(2, 5, CIRCLE_RADIUS, colorArr[4]);
        
        createCircle(5, 6, CIRCLE_RADIUS, colorArr[5]);
        createCircle(7, 7, CIRCLE_RADIUS, colorArr[5]);
        
        circleCoors.initFromArray([
            [xn(6), yn(2), xn(7), yn(6)],
            [xn(1), yn(3), xn(7), yn(1)],
            [xn(4), yn(4), xn(7), yn(5)],
            [xn(1), yn(7), xn(4), yn(7)],
            [xn(7), yn(2), xn(2), yn(5)],
            [xn(5), yn(6), xn(7), yn(7)]
            ]);
    }
    else if(lvlNum == 5){
        createCircle(7, 1, CIRCLE_RADIUS, colorArr[0]);
        createCircle(4, 5, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(7, 2, CIRCLE_RADIUS, colorArr[1]);
        createCircle(4, 4, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(5, 4, CIRCLE_RADIUS, colorArr[2]);
        createCircle(7, 7, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(5, 1, CIRCLE_RADIUS, colorArr[3]);
        createCircle(4, 6, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(5, 5, CIRCLE_RADIUS, colorArr[4]);
        createCircle(1, 1, CIRCLE_RADIUS, colorArr[4]);
        
        createCircle(6, 5, CIRCLE_RADIUS, colorArr[5]);
        createCircle(6, 7, CIRCLE_RADIUS, colorArr[5]);
        
        circleCoors.initFromArray([
            [xn(7), yn(1), xn(4), yn(5)],
            [xn(7), yn(2), xn(4), yn(4)],
            [xn(5), yn(4), xn(7), yn(7)],
            [xn(5), yn(1), xn(4), yn(6)],
            [xn(5), yn(5), xn(1), yn(1)],
            [xn(6), yn(5), xn(6), yn(7)]
            ]);
    }
    else if(lvlNum == 6){
        createCircle(2, 4, CIRCLE_RADIUS, colorArr[0]);
        createCircle(5, 5, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(4, 6, CIRCLE_RADIUS, colorArr[1]);
        createCircle(7, 7, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(2, 6, CIRCLE_RADIUS, colorArr[2]);
        createCircle(5, 6, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(2, 3, CIRCLE_RADIUS, colorArr[3]);
        createCircle(6, 5, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(1, 6, CIRCLE_RADIUS, colorArr[4]);
        createCircle(4, 5, CIRCLE_RADIUS, colorArr[4]);
        
        createCircle(3, 3, CIRCLE_RADIUS, colorArr[5]);
        createCircle(5, 3, CIRCLE_RADIUS, colorArr[5]);
        
        circleCoors.initFromArray([
            [xn(2), yn(4), xn(5), yn(5)],
            [xn(4), yn(6), xn(7), yn(7)],
            [xn(2), yn(6), xn(5), yn(6)],
            [xn(2), yn(3), xn(6), yn(5)],
            [xn(1), yn(6), xn(4), yn(5)],
            [xn(3), yn(3), xn(5), yn(3)]
            ]);
    }
    else if(lvlNum == 7){
        createCircle(5, 2, CIRCLE_RADIUS, colorArr[0]);
        createCircle(8, 3, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(4, 4, CIRCLE_RADIUS, colorArr[1]);
        createCircle(5, 5, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(8, 2, CIRCLE_RADIUS, colorArr[2]);
        createCircle(6, 3, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(5, 1, CIRCLE_RADIUS, colorArr[3]);
        createCircle(2, 8, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(7, 2, CIRCLE_RADIUS, colorArr[4]);
        createCircle(5, 3, CIRCLE_RADIUS, colorArr[4]);
        
        createCircle(5, 4, CIRCLE_RADIUS, colorArr[5]);
        createCircle(5, 6, CIRCLE_RADIUS, colorArr[5]);
        
        circleCoors.initFromArray([
            [xn(5), yn(2), xn(8), yn(3)],
            [xn(4), yn(4), xn(5), yn(5)],
            [xn(8), yn(2), xn(6), yn(3)],
            [xn(5), yn(1), xn(2), yn(8)],
            [xn(7), yn(2), xn(5), yn(3)],
            [xn(5), yn(4), xn(5), yn(6)]
            ]);
    }
    else if(lvlNum == 8){
        createCircle(2, 7, CIRCLE_RADIUS, colorArr[0]);
        createCircle(5, 5, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(4, 6, CIRCLE_RADIUS, colorArr[1]);
        createCircle(7, 8, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(4, 2, CIRCLE_RADIUS, colorArr[2]);
        createCircle(7, 2, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(2, 1, CIRCLE_RADIUS, colorArr[3]);
        createCircle(4, 5, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(8, 5, CIRCLE_RADIUS, colorArr[4]);
        createCircle(8, 8, CIRCLE_RADIUS, colorArr[4]);
        
        createCircle(3, 3, CIRCLE_RADIUS, colorArr[5]);
        createCircle(8, 6, CIRCLE_RADIUS, colorArr[5]);
        
        circleCoors.initFromArray([
            [xn(2), yn(7), xn(5), yn(5)],
            [xn(4), yn(6), xn(7), yn(8)],
            [xn(4), yn(2), xn(7), yn(2)],
            [xn(2), yn(1), xn(4), yn(5)],
            [xn(8), yn(5), xn(8), yn(8)],
            [xn(3), yn(3), xn(8), yn(6)]
            ]);
    }
    else if(lvlNum == 9){
        createCircle(6, 6, CIRCLE_RADIUS, colorArr[0]);
        createCircle(5, 2, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(5, 5, CIRCLE_RADIUS, colorArr[1]);
        createCircle(8, 8, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(6, 2, CIRCLE_RADIUS, colorArr[2]);
        createCircle(5, 6, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(7, 2, CIRCLE_RADIUS, colorArr[3]);
        createCircle(6, 7, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(3, 3, CIRCLE_RADIUS, colorArr[4]);
        createCircle(3, 6, CIRCLE_RADIUS, colorArr[4]);
        
        circleCoors.initFromArray([
            [xn(6), yn(6), xn(5), yn(2)],
            [xn(5), yn(5), xn(8), yn(8)],
            [xn(6), yn(2), xn(5), yn(6)],
            [xn(7), yn(2), xn(6), yn(7)],
            [xn(3), yn(3), xn(3), yn(6)],
            ]);
    }
    else if(lvlNum == 10){
        createCircle(8, 4, CIRCLE_RADIUS, colorArr[0]);
        createCircle(2, 5, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(4, 7, CIRCLE_RADIUS, colorArr[1]);
        createCircle(7, 7, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(3, 7, CIRCLE_RADIUS, colorArr[2]);
        createCircle(7, 2, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(7, 4, CIRCLE_RADIUS, colorArr[3]);
        createCircle(4, 6, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(1, 8, CIRCLE_RADIUS, colorArr[4]);
        createCircle(5, 4, CIRCLE_RADIUS, colorArr[4]);
        
        createCircle(3, 3, CIRCLE_RADIUS, colorArr[5]);
        createCircle(6, 4, CIRCLE_RADIUS, colorArr[5]);
        
        circleCoors.initFromArray([
            [xn(8), yn(4), xn(2), yn(5)],
            [xn(4), yn(7), xn(7), yn(7)],
            [xn(3), yn(7), xn(7), yn(2)],
            [xn(7), yn(4), xn(4), yn(6)],
            [xn(1), yn(8), xn(5), yn(4)],
            [xn(3), yn(3), xn(6), yn(4)]
            ]);
    }
    else if(lvlNum == 11){
        createCircle(8, 5, CIRCLE_RADIUS, colorArr[0]);
        createCircle(6, 8, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(6, 4, CIRCLE_RADIUS, colorArr[1]);
        createCircle(6, 6, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(5, 6, CIRCLE_RADIUS, colorArr[2]);
        createCircle(3, 9, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(4, 4, CIRCLE_RADIUS, colorArr[3]);
        createCircle(3, 8, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(4, 5, CIRCLE_RADIUS, colorArr[4]);
        createCircle(4, 9, CIRCLE_RADIUS, colorArr[4]);
        
        createCircle(1, 1, CIRCLE_RADIUS, colorArr[5]);
        createCircle(8, 4, CIRCLE_RADIUS, colorArr[5]);
        
        createCircle(2, 6, CIRCLE_RADIUS, colorArr[6]);
        createCircle(2, 8, CIRCLE_RADIUS, colorArr[6]);
        
        createCircle(1, 4, CIRCLE_RADIUS, colorArr[7]);
        createCircle(8, 1, CIRCLE_RADIUS, colorArr[7]);
        
        circleCoors.initFromArray([
            [xn(8), yn(5), xn(6), yn(8)],
            [xn(6), yn(4), xn(6), yn(6)],
            [xn(5), yn(6), xn(3), yn(9)],
            [xn(4), yn(4), xn(3), yn(8)],
            [xn(4), yn(5), xn(4), yn(9)],
            [xn(1), yn(1), xn(8), yn(4)],
            [xn(2), yn(6), xn(2), yn(8)],
            [xn(1), yn(4), xn(8), yn(1)]
            ]);
    }
    else if(lvlNum == 12){
        createCircle(4, 3, CIRCLE_RADIUS, colorArr[0]);
        createCircle(9, 9, CIRCLE_RADIUS, colorArr[0]);
        
        createCircle(6, 2, CIRCLE_RADIUS, colorArr[1]);
        createCircle(8, 2, CIRCLE_RADIUS, colorArr[1]);
        
        createCircle(3, 7, CIRCLE_RADIUS, colorArr[2]);
        createCircle(7, 7, CIRCLE_RADIUS, colorArr[2]);
        
        createCircle(8, 5, CIRCLE_RADIUS, colorArr[3]);
        createCircle(8, 7, CIRCLE_RADIUS, colorArr[3]);
        
        createCircle(1, 2, CIRCLE_RADIUS, colorArr[4]);
        createCircle(5, 8, CIRCLE_RADIUS, colorArr[4]);
        
        createCircle(1, 1, CIRCLE_RADIUS, colorArr[5]);
        createCircle(9, 2, CIRCLE_RADIUS, colorArr[5]);
        
        createCircle(9, 3, CIRCLE_RADIUS, colorArr[6]);
        createCircle(6, 4, CIRCLE_RADIUS, colorArr[6]);
        
        createCircle(3, 6, CIRCLE_RADIUS, colorArr[7]);
        createCircle(5, 7, CIRCLE_RADIUS, colorArr[7]);
        
        circleCoors.initFromArray([
            [xn(4), yn(3), xn(9), yn(9)],
            [xn(6), yn(2), xn(8), yn(2)],
            [xn(3), yn(7), xn(7), yn(7)],
            [xn(8), yn(5), xn(8), yn(7)],
            [xn(1), yn(2), xn(5), yn(8)],
            [xn(1), yn(1), xn(9), yn(2)],
            [xn(9), yn(3), xn(6), yn(4)],
            [xn(3), yn(6), xn(5), yn(7)]
            ]);
    }
}
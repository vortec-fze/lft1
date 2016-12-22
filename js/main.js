function updateSlider(slideAmount) {       
    //placeholder function for body variables
    var display = document.getElementById("chosen");
    
        //get the slider value
        display.innerHTML=slideAmount;
        
            //show the slider value   
            
            head.setAttribute('r', slideAmount/2);
                // set the head's radius value BASED ON THE SLIDER    
}
function updatePullups(slideAmount) {
    var display2 = document.getElementById("CountPullups");
    display2.innerHTML=slideAmount;
}
function updateBenchpress(slideAmount) {
    var display3 = document.getElementById("CountBenchpress");
    display3.innerHTML=slideAmount;
}
function updateSquats(slideAmount) {
    var display4 = document.getElementById("CountSquats");
    display4.innerHTML=slideAmount;
}
function updateLunges(slideAmount) {
    var display5 = document.getElementById("CountLunges");
    display5.innerHTML=slideAmount;
}
function updateRows(slideAmount) {
    var display6 = document.getElementById("CountRows");
    display6.innerHTML=slideAmount;
}
function updateMilPress(slideAmount) {
    var display7 = document.getElementById("CountMilPress");
    display7.innerHTML=slideAmount;
}
function updateDeadlifts(slideAmount) {
    var display8 = document.getElementById("CountDeadlifts");
    display8.innerHTML=slideAmount;
}

$(document).ready(function () {
    
    var pic = document.getElementById("pic");
    var head = document.getElementById("head");
    var lshoulder = document.getElementById("lshoulder");
    var chestb = document.getElementById("chestb");
    var rbicep = document.getElementById("rbicep");
    var rshoulder = document.getElementById("rshoulder");
    var rforearm = document.getElementById("rforearm");
    var rquad = document.getElementById("rquad");
    var rcalf = document.getElementById("rcalf");
    var lbicep = document.getElementById("lbicep");
    var lshoulder = document.getElementById("lshoulder");
    var lforearm = document.getElementById("lforearm");
    var lquad = document.getElementById("lquad");
    var lcalf = document.getElementById("lcalf");
    var abvert = document.getElementById("abvert");
    var abhoriz1 = document.getElementById("abhoriz1");
    var abhoriz2 = document.getElementById("abhoriz2");
        // turn each svg body part into a variable
   
    var exerday = 0;
        // declare and assign a counter   
    var tShoulders = localStorage.getItem("tShoulders");
    var tChest = localStorage.getItem("tChest");
    var tTriceps = localStorage.getItem("tTriceps");
    var tForearms = localStorage.getItem("tForearms");
    var tBiceps = localStorage.getItem("tBiceps");
    var tStomach = localStorage.getItem("tStomach");
    var tUpperback = localStorage.getItem("tUpperback");
    var tMidback = localStorage.getItem("tMidback");
    var tLowerback = localStorage.getItem("tLowerback");
    var tHamstrings = localStorage.getItem("tHamstrings");
    var tQuads = localStorage.getItem("tQuads");
    var tCalves = localStorage.getItem("tCalves");
    var tButt = localStorage.getItem("tButt");
        // assign t values for local storage
    
    var d = new Date();
    document.getElementById("todayDate").innerHTML = d.toDateString();
        //gets the days date, displays the date
    
    $('#savebttn').bind('click', function() { 
        exerday++;
           
        var pullups = $('#slider_pullups').val();
        var benchpress = $('#slider_benchpress').val();
        var militarypress = $('#slider_militarypress').val();
        var squats = $('#slider_squats').val();
        var lunges = $('#slider_lunges').val();
        var rows = $('#slider_rows').val();
        var deadlifts = $('#slider_deadlifts').val();
            //gets the individual reps for each exercise
        
        var arr = [d, pullups, benchpress, militarypress, squats, lunges, rows, deadlifts];
        var arr2 = ['date', 'pullups', 'benchpress', 'militarypress', 'squats', 'lunges', 'rows', 'deadlifts'];
        var workday = {date: d, pullups: pullups, benchpress: benchpress, milpress: militarypress, squats: squats, lunges: lunges, rows: rows, deadlifts: deadlifts};
            //arrays to store info more efficiently - right now they don't do anything
        
        var primary = .04;
        var support = .02;
        var stable = .01;
            //multipliers for how much a muscle is worked by each rep of an exercise
        
        var shoulders = (benchpress * support) + (militarypress * primary);
        var biceps = (pullups * primary) + (rows * primary);
        var triceps = (benchpress * support) + (militarypress * support);
        var forearms = (pullups * support) + (deadlifts * primary) + (rows * stable);
        var chest = (benchpress * primary);
        var upperback = (pullups * primary) + (rows * support) + (deadlifts * stable);
        var midback = (pullups * primary) + (rows * primary) + (deadlifts * stable);
        var lowerback = (deadlifts * primary) + (rows * support);
        var stomach = (squats * support) + (deadlifts * support) + (lunges * stable);
        var butt = (deadlifts * primary) + (squats * support) + (lunges * support);
        var quads = (squats * primary) + (deadlifts * support) + (lunges * primary);
        var hamstrings = (squats * support) + (deadlifts * primary) + (lunges * support);
        var calves = (squats * stable) + (deadlifts * stable) + (lunges * stable);
            //applies the exercise reps and the multipliers to get the value for each muscle group
        
        if(localStorage.tShoulders){
            cShoulders = Number(shoulders) + Number(tShoulders);
            tShoulders = cShoulders;
        }
        else{
            tShoulders = Number(shoulders);
            localStorage.setItem('tShoulders', tShoulders);   
        }
        //shoulders
        
        if(localStorage.tBiceps){
            cBiceps = Number(biceps) + Number(tBiceps);
            tBiceps = cBiceps;
        }
        else{
            tBiceps = Number(biceps);
            localStorage.setItem('tBiceps', tBiceps);   
        }    
        //biceps
        
        if(localStorage.tTriceps){
            cTriceps = Number(triceps) + Number(tTriceps);
            tTriceps = cTriceps;
        }
        else{
            tTriceps = Number(triceps);
            localStorage.setItem('tTriceps', tTriceps);   
        }    
        //triceps
        
        if(localStorage.tForearms){
            cForearms = Number(forearms) + Number(tForearms);
            tForearms = cForearms;
        }
        else{
            tForearms = Number(forearms);
            localStorage.setItem('tForearms', tForearms);   
        }    
        //forearms
        
        if(localStorage.tChest){
            cChest = Number(chest) + Number(tChest);
            tChest = cChest;
        }
        else{
            tChest = Number(chest);
            localStorage.setItem('tChest', tChest);   
        }    
        //chest
        
        if(localStorage.tUpperback){
            cUpperback = Number(upperback) + Number(tUpperback);
            tUpperback = cUpperback;
        }
        else{
            tUpperback = Number(upperback);
            localStorage.setItem('tUpperback', tUpperback);   
        }    
        //upperback
        
        if(localStorage.tMidback){
            cMidback = Number(midback) + Number(tMidback);
            tMidback = cMidback;
        }
        else{
            tMidback = Number(midback);
            localStorage.setItem('tMidback', tMidback);   
        }    
        //midback
        
        if(localStorage.tLowerback){
            cLowerback = Number(lowerback) + Number(tLowerback);
            tLowerback = cLowerback;
        }
        else{
            tLowerback = Number(lowerback);
            localStorage.setItem('tLowerback', tLowerback);   
        }    
        //lowerback
        
        if(localStorage.tStomach){
            cStomach = Number(stomach) + Number(tStomach);
            tStomach = cStomach;
        }
        else{
            tStomach = Number(stomach);
            localStorage.setItem('tStomach', tStomach);   
        }    
        //stomach
        
        if(localStorage.tButt){
            cButt = Number(butt) + Number(tButt);
            tButt = cButt;
        }
        else{
            tButt = Number(butt);
            localStorage.setItem('tButt', tButt);   
        }    
        //butt
        
        if(localStorage.tQuads){
            cQuads = Number(quads) + Number(tQuads);
            tQuads = cQuads;
        }
        else{
            tQuads = Number(quads);
            localStorage.setItem('tQuads', tQuads);   
        }    
        //quads
        
        if(localStorage.tHamstrings){
            cHamstrings = Number(hamstrings) + Number(tHamstrings);
            tHamstrings = cHamstrings;
        }
        else{
            tHamstrings = Number(hamstrings);
            localStorage.setItem('tHamstrings', tHamstrings);   
        }    
        //hamstrings
        
        if(localStorage.tCalves){
            cCalves = Number(calves) + Number(tCalves);
            tCalves = cCalves;
        }
        else{
            tCalves = Number(calves);
            localStorage.setItem('tCalves', tCalves);   
        }    
        //calves
        
        
        var cShoulders = Number(tShoulders) + Number(shoulders);
        var cBiceps = Number(tBiceps) + Number(biceps);
        var cTriceps = Number(tTriceps) + Number(triceps);
        var cForearms = Number(tForearms) + Number(forearms);
        var cChest = Number(tChest) + Number(chest);
        var cUpperback = Number(tUpperback) + Number(upperback);
        var cMidback = Number(tMidback) + Number(midback);
        var cLowerback = Number(tLowerback) + Number(lowerback);
        var cStomach = Number(tStomach) + Number(stomach);
        var cButt = Number(tButt) + Number(butt);
        var cQuads = Number(tQuads) + Number(quads);
        var cHamstrings = Number(tHamstrings) + Number(hamstrings);
        var cCalves = Number(tCalves) + Number(calves);
            //add local storage values and slider pulled values        
        
        var dailytally = {date: d, shoulders: shoulders, biceps: biceps, triceps: triceps, forearms: forearms, chest: chest, upperback: upperback, midback: midback, lowerback: lowerback, stomach: stomach, butt: butt, quads: quads, hamstrings: hamstrings, calves: calves};
        
        
        
        lshoulder.setAttribute('stroke-width', cShoulders);
        rshoulder.setAttribute('stroke-width', cShoulders);
        chestb.setAttribute('stroke-width', cChest);
        rbicep.setAttribute('stroke-width', cBiceps);
        lbicep.setAttribute('stroke-width', cBiceps);
        rforearm.setAttribute('stroke-width', cForearms);
        lforearm.setAttribute('stroke-width', cForearms);
        rquad.setAttribute('stroke-width', cQuads);
        lquad.setAttribute('stroke-width', cQuads);
        rcalf.setAttribute('stroke-width', cCalves);
        lcalf.setAttribute('stroke-width', cCalves);
        abvert.setAttribute('stroke-width', cStomach);
        abhoriz1.setAttribute('stroke-width', cStomach);
        abhoriz2.setAttribute('stroke-width', cStomach);   
            //set the image strokes to the appropriate exercise values
        
        $('#dataDisplay').prepend("<li>" + d + ": " + tShoulders + ", " + tBiceps + ", " + tTriceps + ", " + tForearms + ", " + tChest + ", " + tUpperback + ", " + tMidback + ", " + tLowerback + ", " + tStomach + ", " + tButt + ", " + tQuads + ", " + tHamstrings + ", " + tCalves +", " + "</li>");
            //data dump to see if the values are working
        
        var dailyMatrix = $('#dataDisplay').html();
            localStorage.setItem('dailyMatrix', dailyMatrix);
            return false;
    });
    
    if(localStorage.getItem('dailyMatrix')) {
            $('#dataDisplay').html(localStorage.getItem('dailyMatrix'));
    }
    
    $('#clear').click( function() {
        window.localStorage.clear();
        location.reload();
        return false;
    });

});


function updateSlider(slideAmount) {       
    //placeholder function for body variables
    var display = document.getElementById("chosen");
        //get the slider value
        display.innerHTML=slideAmount;
            //show the slider value
       /*     var pic = document.getElementById("pic");
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
                // turn each svg body part into a variable   */
           
            head.setAttribute('r', slideAmount/2);
                // set the head's radius value BASED ON THE SLIDER    
    
    /*    lshoulder.setAttribute('stroke-width', slideAmount/20);
            rshoulder.setAttribute('stroke-width', slideAmount/20);
            chestb.setAttribute('stroke-width', slideAmount/20);
            rbicep.setAttribute('stroke-width', slideAmount/20);
            lbicep.setAttribute('stroke-width', slideAmount/50);
            rforearm.setAttribute('stroke-width', slideAmount/20);
            lforearm.setAttribute('stroke-width', slideAmount/20);
            rquad.setAttribute('stroke-width', slideAmount/20);
            lquad.setAttribute('stroke-width', slideAmount/10);
            rcalf.setAttribute('stroke-width', slideAmount/30);
            lcalf.setAttribute('stroke-width', slideAmount/2);
            abvert.setAttribute('stroke-width', slideAmount/20);
            abhoriz1.setAttribute('stroke-width', slideAmount/20);
            abhoriz2.setAttribute('stroke-width', slideAmount/20);      
            
            // Store
            localStorage.setItem("lastname", "Smith");
            // Retrieve
            document.getElementById("result").innerHTML = localStorage.getItem("lastname");
            */
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


var tShoulder = Number(localStorage.tShoulder);
var tChest;
var tTricep;
var tBicep;
var tStomach;
var tUpperback;
var tMidback;
var tLowerback;
var tHamstrings;
var tQuads;
var tCalves;
var tButt;

    
    var exerday = 0;
    var d = new Date();
    document.getElementById("todayDate").innerHTML = d.toDateString();
        //gets the days date
    
    $('#savebttn').bind('click', function() {
        exerday++;
        if(typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
            } 
            else {
            localStorage.clickcount = 1;
            }
        }
        // counter triggered on each click
        var pullups = $('#slider_pullups').val();
        var benchpress = $('#slider_benchpress').val();
        var militarypress = $('#slider_militarypress').val();
        var squats = $('#slider_squats').val();
        var lunges = $('#slider_lunges').val();
        var rows = $('#slider_rows').val();
        var deadlifts = $('#slider_deadlifts').val();
       // $('#slider_pullups').each(function(){
       // alert($(this).val());
       // });
        //alert(pullups);
        var arr = [d, pullups, benchpress, militarypress, squats, lunges, rows, deadlifts];
        var arr2 = ['date', 'pullups', 'benchpress', 'militarypress', 'squats', 'lunges', 'rows', 'deadlifts'];
        var workday = {date: d, pullups: pullups, benchpress: benchpress, milpress: militarypress, squats: squats, lunges: lunges, rows: rows, deadlifts: deadlifts};
        
        var primary = .04;
        var support = .02;
        var stable = .01;
        
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
/*        
var tShoulder;
var tChest;
var tTricep;
var tBicep;
var tStomach;
var tUpperback;
var tMidback;
var tLowerback;
var tHamstrings;
var tQuads;
var tCalves;
var tButt;
        
        cShoulder = tShoulder + shoulders;
        cChest = tChest + chest;
        cTricep = tTricep + triceps;
        cBicep + biceps;
        tStomach + stomach;
        tUpperback + upperback;
        tMidback + midback;
        tLowerback + lowerback;
        tHamstrings + hamstrings;
        tQuads + quads;
        tCalves + calves;
        tButt + butt;
        //trying to pull local storage values and add slider pulled values
*/        
        
        
        var dailytally = {date: d, shoulders: shoulders, biceps: biceps, triceps: triceps, forearms: forearms, chest: chest, upperback: upperback, midback: midback, lowerback: lowerback, stomach: stomach, butt: butt, quads: quads, hamstrings: hamstrings, calves: calves};
        
        
        
        lshoulder.setAttribute('stroke-width', tShoulder);
        rshoulder.setAttribute('stroke-width', tShoulder);
        chestb.setAttribute('stroke-width', tChest);
        rbicep.setAttribute('stroke-width', tBiceps);
        lbicep.setAttribute('stroke-width', tBiceps);
        rforearm.setAttribute('stroke-width', tForearms);
        lforearm.setAttribute('stroke-width', tForearms);
        rquad.setAttribute('stroke-width', tQuads);
        lquad.setAttribute('stroke-width', tQuads);
        rcalf.setAttribute('stroke-width', tCalves);
        lcalf.setAttribute('stroke-width', tCalves);
        abvert.setAttribute('stroke-width', tStomach);
        abhoriz1.setAttribute('stroke-width', tStomach);
        abhoriz2.setAttribute('stroke-width', tStomach);   
        
        tShoulder = tShoulder + shoulders;
        
        
        
        var dailyMatrix = $('#dataDisplay').html();
            localStorage.setItem('tShoulder', tShoulder);
            localStorage.setItem('tChest', dailyMatrix);
            localStorage.setItem('tTricep', tTricep);
            localStorage.setItem('tBicep', tBicep);   
            localStorage.setItem('tStomach', tStomach);   
            localStorage.setItem('tUpperback', tUpperback);   
            localStorage.setItem('tMidback', tMidback);   
            localStorage.setItem('tLowerback', tLowerback);   
            localStorage.setItem('tHamstrings', tHamstrings);   
            localStorage.setItem('tQuads', tQuads);   
            localStorage.setItem('tCalves', tCalves);
            localStorage.setItem('tButt', tButt);   
        
        localStorage.setItem('dailyMatrix', dailyMatrix);
        //    location.hash = "#page5";   
        $('#dataDisplay').prepend("<li>" + exerday + "number " + d + ": " + dailytally.shoulders + ", " + dailytally.biceps + ", " + dailytally.triceps + ", " + dailytally.forearms + ", " + dailytally.chest + ", " + dailytally.upperback + ", " + dailytally.midback + ", " + dailytally.lowerback + ", " + dailytally.stomach + ", " + dailytally.butt + ", " + dailytally.quads + ", " + dailytally.hamstrings + ", " + dailytally.calves + tShoulder + ", " + tQuads + ", " + "</li>");
        
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
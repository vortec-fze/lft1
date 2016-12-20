function updateSlider(slideAmount) {
    //get the element
    var display = document.getElementById("chosen");
        //show the amount
        display.innerHTML=slideAmount;
        //get the element
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
            //set the dimensions
           // pic.style.width=slideAmount+"%";
           // pic.style.height=slideAmount+"%";
    head.setAttribute('r', slideAmount/2);
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
            abhoriz2.setAttribute('stroke-width', slideAmount/20);        */
}

$(document).ready(function () {
    var exerday = 0;
    var d = new Date();
    document.getElementById("todayDate").innerHTML = d.toDateString();
    
    $('#savebttn').bind('click', function() {
        exerday++;
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
        
        var dailytally = {date: d, shoulders: shoulders, biceps: biceps, triceps: triceps, forearms: forearms, chest: chest, upperback: upperback, midback: midback, lowerback: lowerback, stomach: stomach, butt: butt, quads: quads, hamstrings: hamstrings, calves: calves};
        
        $('#dataDisplay').prepend("<li>" + exerday + "number " + d + ": " + dailytally.shoulders + ", " + dailytally.biceps + ", " + dailytally.triceps + ", " + dailytally.forearms + ", " + dailytally.chest + ", " + dailytally.upperback + ", " + dailytally.midback + ", " + dailytally.lowerback + ", " + dailytally.stomach + ", " + dailytally.butt + ", " + dailytally.quads + ", " + dailytally.hamstrings + ", " + dailytally.calves + "</li>");
        
        lshoulder.setAttribute('stroke-width', shoulders);
        rshoulder.setAttribute('stroke-width', shoulders);
        chestb.setAttribute('stroke-width', chest);
        rbicep.setAttribute('stroke-width', biceps);
        lbicep.setAttribute('stroke-width', biceps);
        rforearm.setAttribute('stroke-width', forearms);
        lforearm.setAttribute('stroke-width', forearms);
        rquad.setAttribute('stroke-width', quads);
        lquad.setAttribute('stroke-width', quads);
        rcalf.setAttribute('stroke-width', calves);
        lcalf.setAttribute('stroke-width', calves);
        abvert.setAttribute('stroke-width', stomach);
        abhoriz1.setAttribute('stroke-width', stomach);
        abhoriz2.setAttribute('stroke-width', stomach);   
        
        var dailyMatrix = $('#dataDisplay').html();
            localStorage.setItem('dailyMatrix', dailyMatrix);
        //    location.hash = "#page5";   
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
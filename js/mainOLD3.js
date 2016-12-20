var taskList = new Array();

  function ShowLocalDate()
    {
        var dNow = new Date();
        var localdate= (dNow.getMonth()+1) + '/' + dNow.getDate() + '/' + dNow.getFullYear();
        $('#currentDate').text(localdate)
    }
    
    window.onload = function() 
    {
        ShowDate();
    }

$(document).ready(function () {
   
    
    var $newTaskInput = $('#newTaskInput');
    var $taskList = $('#taskList');
    var taskTouchStart;
    var taskTouchEnd;
    var taskTouchStartX;
    var taskTouchEndX;
    
    if (window.localStorage)
        {
            taskList = JSON.parse(window.localStorage.getItem('taskList'));
        }
    
    if (null !== taskList)
        {
            for(i=0;i<taskList.length;i++)
            {
                var newTask = '<li data-key="' + taskList[i].key + '"><span>' + taskList[i].task + '</span></li>';
            $taskList.append( newTask );
            }
        }
    else
        {
            taskList = new Array();
        }
    
    $('#addNewTask').on('click', function()
    {
        var key = Date.now();
        var newTask = '<li data-key="' + key + '"><span>' + $newTaskInput.val() + '</span></li>';
        $taskList.append( newTask );
        taskList.push({key:key, task:$newTaskInput.val(), done:false});
        if(window.localStorage)
        {
            window.localStorage.setItem('taskList', JSON.stringify(taskList));
        }
        $newTaskInput.val('');
    })
    
    $taskList.on('touchstart', 'li', function(e)
    {
        var start = document.elementFromPoint(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY ); taskTouchStart = $(start).attr('data-key');
        taskTouchStartX = e.originalEvent.touches[0].pageX;
    });
    
    $taskList.on('touchend', 'li', function(e)
    {
        var $end;
        var $this = $(this);
        var end = document.elementFromPoint(e.originalEvent.touches[0].pageX, e.originalEvent.touches[0].pageY);
        $end = $(end);
        taskTouchEnd = $end.attr('data-key');
        taskTouchEndX = e.originalEvent.touches[0].pageX;
        if (taskTouchStart == taskTouchEnd)
        {
            if (taskTouchStartX < taskTouchEndX)
            {
                if ($this.hasClass('done'))
                {
                    $this.removeClass('done');
                }
                else
                {
                    $this.addClass('done');
                }
            }
            else
            {
                taskList = $.grep(taskList, function(e){ return e.key != taskTouchEnd;});
                if (window.localStorage)
                {
                    window.localStorage.setItem('taskList', JSON.stringify(taskList));
                }
                end.remove();
            }
        }
    });
    
  
});
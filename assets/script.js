

var createTimeBlock = function (hour) {

    var timeBlock = $("<li>").addClass("time-block row");

    var time = $("<span>").addClass("col-1").text(hour.format('h A'));

    var textarea = $("<textarea>").addClass("col-10");

    if(hour.hour() > moment().hour()){
        textarea.addClass("future");
    }
    else if(hour.hour() < moment().hour()){
        textarea.addClass("past");
    }
    else{
        textarea.addClass("present");
    }


    var saveButton = $("<button>").addClass("col-1 saveBtn").append('<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="floppy-disk" class="svg-inline--fa fa-floppy-disk" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M433.1 129.1l-83.9-83.9C342.3 38.32 327.1 32 316.1 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V163.9C448 152.9 441.7 137.7 433.1 129.1zM224 416c-35.34 0-64-28.66-64-64s28.66-64 64-64s64 28.66 64 64S259.3 416 224 416zM320 208C320 216.8 312.8 224 304 224h-224C71.16 224 64 216.8 64 208v-96C64 103.2 71.16 96 80 96h224C312.8 96 320 103.2 320 112V208z"></path></svg>');

    timeBlock.append(time, textarea, saveButton);

    $("#time-list").append(timeBlock);
};

var loadPage = function () {
    var time = moment();
    
    $("#currentDay").append(time.format('LLLL'));
    
    for (var i = 0; i < 9; i++) {
        var hour = time
            .hour(9)
            .add(i, 'h')
            
        createTimeBlock(hour);
    }
}

$("document").ready(loadPage());

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
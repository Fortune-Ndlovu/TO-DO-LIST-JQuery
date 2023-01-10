//form submission
$("form").submit(function (e) {
    e.preventDefault();

    //assigning users valuation input to a variable we are also declaring 
    let task = $("input[name='theTaskDescription']").val(); 
    let priority = $("input[name='thePriority']").val();
    let status = $("input[name='theStatus']").val();
    let startDate = $("input[name='theStartDate']").val();
    let endDate = $("input[name='theEndDate']").val();

    //appending a new table row with table cells containing the users input
    $(".data-table tbody").append(
    "<tr data-task='" +
    task +
    "' data-priority='" +
    priority +
    "' data-status='" +
    status +
    "' data-startDate='" +
    startDate +
    "' data-endDate='" +
    endDate +
    "'><td>" +
    task +
    "</td><td>" +
    priority +
    "</td><td>" +
    status +
    "</td><td>" +
    startDate +
    "</td><td>" +
    endDate +
    "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btnbtn-danger btn-xs btn-delete'>Delete</button></td></tr>"
    );
    $(".data-table tbody tr:last").hide().fadeIn();
});

//On the body tag, when a btn-delete is clicked  pass an anonymous function that removes it and its parent.
$("body").on("click", ".btn-delete", function () {
    $(this)
    .parents("tr")
    .hide("fast", function () { 
        $(this).remove("slow");
    });
});

//On the body tag, when a btn-edit is clicked pass an anonymous function to it. 
$("body").on("click", ".btn-edit", function () {

    //assigining each variable a specific attribute value thats on a table row
    let task = $(this).parents("tr").attr("data-task"); 
    let priority = $(this).parents("tr").attr("data-priority");
    let status = $(this).parents("tr").attr("data-status");
    let startDate = $(this).parents("tr").attr("data-startDate");
    let endDate = $(this).parents("tr").attr("data-endDate");

    //when a table cell inside a table row is equal to a num set or return the users value
    $(this)
    .parents("tr")
    .find("td:eq(0)")
    .html('<input name="edit_task" value="' + task + '">');
    $(this)
    .parents("tr")
    .find("td:eq(1)")
    .html('<input name="edit_priority" value="' + priority + '">');
    $(this)
    .parents("tr")
    .find("td:eq(2)")
    .html('<input name="edit_status" value="' + status + '">');
    $(this)
    .parents("tr")
    .find("td:eq(3)")
    .html('<input name="edit_startDate" value="' + startDate + '">');
    $(this)
    .parents("tr")
    .find("td:eq(4)")
    .html('<input name="edit_endDate" value="' + endDate + '">');

    $(this)
    .parents("tr")
    .find("td:eq(5)")
    .prepend(
        "<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xsbtn-cancel'>Cancel</button>"
    );
    $(this).hide("2000", function () {
    $(this).remove("fast");
    });
});

//On the body tag, when a btn-cancel is clicked pass an anonymous function to it.
$("body").on("click", ".btn-cancel", function () {

    //assigining each variable a specific attribute value thats on a table row
    let task = $(this).parents("tr").attr("data-task");
    let priority = $(this).parents("tr").attr("data-priority");
    let status = $(this).parents("tr").attr("data-status");
    let startDate = $(this).parents("tr").attr("data-startDate");
    let endDate = $(this).parents("tr").attr("data-endDate");

    //using the text() method to set or return the text content of the selected element, equal to a num, on a tr.
    $(this).parents("tr").find("td:eq(0)").text(task);
    $(this).parents("tr").find("td:eq(1)").text(priority);
    $(this).parents("tr").find("td:eq(2)").text(status);
    $(this).parents("tr").find("td:eq(3)").text(startDate);
    $(this).parents("tr").find("td:eq(4)").text(endDate);

    $(this).parents("tr").find(".btn-edit").show("fast");
    $(this)
    .parents("tr")
    .find(".btn-update")
    .hide("fast", function () {
        $(this).remove("slow");
    });
    $(this)
    .parents("tr")
    .find(".btn-cancel")
    .hide("fast", function () {
        $(this).remove("slow");
    });
});


//On the body tag, when a btn-update is clicked pass an anonymous function to it.
$("body").on("click", ".btn-update", function () {

    //assigning users valuation input to a variable we are also declaring but searching through the descendants of these elements in the DOM tree and construct a new jQuery object from the matching elements.
    let task = $(this).parents("tr").find("input[name='edit_task']").val();
    let priority = $(this)
    .parents("tr")
    .find("input[name='edit_priority']")
    .val();
    let status = $(this)
    .parents("tr")
    .find("input[name='edit_status']")
    .val();
    let startDate = $(this)
    .parents("tr")
    .find("input[name='edit_startDate']")
    .val();
    let endDate = $(this)
    .parents("tr")
    .find("input[name='edit_endDate']")
    .val();

    //using the text() method to set or return the text content of the selected element, but searching through the descendants of these elements in the DOM tree for a table cell that's equal to a num
    $(this).parents("tr").find("td:eq(0)").text(task);
    $(this).parents("tr").find("td:eq(1)").text(priority);
    $(this).parents("tr").find("td:eq(2)").text(status);
    $(this).parents("tr").find("td:eq(3)").text(startDate);
    $(this).parents("tr").find("td:eq(4)").text(endDate);

    $(this).parents("tr").attr("data-task", task);
    $(this).parents("tr").attr("data-priority", priority);
    $(this).parents("tr").attr("data-status", status);
    $(this).parents("tr").attr("data-startDate", startDate);
    $(this).parents("tr").attr("data-endDate", endDate);

    $(this).parents("tr").find(".btn -edit").show("fast");
    $(this)
    .parents("tr")
    .find(".btn-cancel")
    .hide("fast", function () {
        $(this).remove("slow");
    });
    $(this)
    .parents("tr")
    .find(".btn-update")
    .hide("fast", function () {
        $(this).remove("slow");
    });
});

    if (annyang) {
      var commands = {
        'submit': (function (e) { //the text we expect is 'submit' and then the function it should call
          let task = $("input[name='theTaskDescription']").val();
          let priority = $("input[name='thePriority']").val();
          let status = $("input[name='theStatus']").val();
          let startDate = $("input[name='theStartDate']").val();
          let endDate = $("input[name='theEndDate']").val();
          $(".data-table tbody").append("<tr data-task='" + task + "' data-priority='" + priority + "' data-status='" + status + "' data-startDate='" + startDate + "' data-endDate='" + endDate + "'><td>" + task + "</td><td>" + priority + "</td><td>" + status + "</td><td>" + startDate + "</td><td>" + endDate + "</td><td><button class='btn btn-info btn-xs btn-edit'>Edit</button><button class='btn btn-danger btn-xs btn-delete'>Delete</button></td></tr>");
          $("input[name='theTaskDescription']").val('');
          $("input[name='thePriority']").val('');
          $("input[name='theStatus']").val('');
          $("input[name='theStartDate']").val('');
              $("input[name='theEndDate']").val('');
                  $(".data-table tbody tr:last").hide().fadeIn();
        }),

        'delete': function () { //the text we expect is 'delete' and then the function it should call
          $('td').hide('fast', function () {
            $(this).remove('slow');
          });
        },

        'edit': function () { //the text we expect is 'edit' and then the function it should call
          let task = $('td').parents("tr").attr('data-task');
          let priority = $('td').parents("tr").attr('data-priority');
          let status = $('td').parents("tr").attr('data-status');
          let startDate = $('td').parents("tr").attr('data-startDate');
          let endDate = $('td').parents("tr").attr('data-endDate');

          $('td').parents("tr").find("td:eq(0)").html('<input name="edit_task" value="' + task + '">');
          $('td').parents("tr").find("td:eq(1)").html('<input name="edit_priority" value="' + priority + '">');
          $('td').parents("tr").find("td:eq(2)").html('<input name="edit_status" value="' + status + '">');
          $('td').parents("tr").find("td:eq(3)").html('<input name="edit_startDate" value="' + startDate + '">');
          $('td').parents("tr").find("td:eq(4)").html('<input name="edit_endDate" value="' + endDate + '">');

            $('td').parents("tr").find("td:eq(5)").prepend("<button class='btn btn-info btn-xs btn-update'>Update</button><button class='btn btn-warning btn-xs btn-cancel'>Cancel</button>");
            
        },

        'cancel': function () {  //the text we expect is 'cancel' and then the function it should call
          let task = $('td').parents("tr").attr('data-task');
          let priority = $('td').parents("tr").attr('data-priority');
          let status = $('td').parents("tr").attr('data-status');
          let startDate = $('td').parents("tr").attr('data-startDate');
          let endDate = $('td').parents("tr").attr('data-endDate');

          $('td').parents("tr").find("td:eq(0)").text(task);
          $('td').parents("tr").find("td:eq(1)").text(priority);
          $('td').parents("tr").find("td:eq(2)").text(status);
          $('td').parents("tr").find("td:eq(3)").text(startDate);
          $('td').parents("tr").find("td:eq(4)").text(endDate);

          $('td').parents("tr").find(".btn-edit").show('fast');
          $('td').parents("tr").find(".btn-update").hide('fast', function () {
            $(this).remove('slow');
          });
          $('td').parents("tr").find(".btn-cancel").hide('fast', function () {
            $(this).remove('slow');
          });
        },

        'update': function () { //the text we expect is 'update' and then the function it should call
          let task = $('td').parents("tr").find("input[name='edit_task']").val();
          let priority = $('td').parents("tr").find("input[name='edit_priority']").val();
          let status = $('td').parents("tr").find("input[name='edit_status']").val();
          let startDate = $('td').parents("tr").find("input[name='edit_startDate']").val();
          let endDate = $('td').parents("tr").find("input[name='edit_endDate']").val();

          $('td').parents("tr").find("td:eq(0)").text(task);
          $('td').parents("tr").find("td:eq(1)").text(priority);
          $('td').parents("tr").find("td:eq(2)").text(status);
          $('td').parents("tr").find("td:eq(3)").text(startDate);
          $('td').parents("tr").find("td:eq(4)").text(endDate);

          $('td').parents("tr").attr('data-task', task);
          $('td').parents("tr").attr('data-priority', priority);
          $('td').parents("tr").attr('data-status', status);
          $('td').parents("tr").attr('data-startDate', startDate);
          $('td').parents("tr").attr('data-endDate', endDate);

          $('td').parents("tr").find(".btn-edit").show('fast');
          $('td').parents("tr").find(".btn-cancel").hide('fast', function () {
            $(this).remove('slow');
          });
          $('td').parents("tr").find(".btn-update").hide('fast', function () {
            $(this).remove('slow');
          });
        }
      }

      annyang.addCommands(commands); //add commands

      //start listening
      annyang.start();
    }









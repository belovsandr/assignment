$(function(){

$('th').click(function(){
    var table = $(this).parents('table').eq(0);
    var rows = table.find("tr:not(:has('th'))").toArray().sort(compareCells($(this).index()));
    this.asc = !this.asc;
    if (!this.asc) {
        rows = rows.reverse();
    }
    for (var i = 0; i < rows.length; i++) {
        table.append(rows[i]);
    }
});

function compareCells(index) {
    return function(a, b) {
        var valA = getCellValue(a, index);
        var valB = getCellValue(b, index);
        return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.localeCompare(valB);
    }
}

function getCellValue(row, index) { 
    return $(row).children('td').eq(index).html(); 
}

$('.filter').keyup(function() {
    var table = $('.table-sort');
    var inputValue = this.value.split(" ");
    var tableRows = table.find("tr:not(:has(th))");
    tableRows.hide();
    tableRows.filter(function (i, v) {
        var $t = $(this);
        for (var d = 0; d < inputValue.length; ++d) {
            if ($t.is(":contains('" + inputValue[d] + "')")) {
                return true;
            }
        }
        return false;
    }).show();

});



//var jsonData = bigJSONData;

$(".sm-file").click(function() {
    var smallJSONData = "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D";     
    loadFile(smallJSONData);
});

$(".bg-file").click(function() {
    var bigJSONData = "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&adress=%7BaddressObject%7D&description=%7Blorem%7C32%7D";      
    loadFile(bigJSONData);
});


function loadFile(jsonData) {
    $(".main-wrapper").hide();
    $(".loading").show();
    $.getJSON( jsonData, function( data ) {

    $.each( data, function( key, val ) {
        $htmlstring ="<tr>"+
                                 "<td>"+val.id+"</td>"+
                                 "<td>"+val.firstName+"</td>"+
                                 "<td>"+val.lastName+"</td>"+
                                 "<td>"+val.email+"</td>"+
                                 "<td>"+val.phone+"</td>";
        $adressString = "";                  
        $.each( val.adress, function( keyAd, valAd ) {
            $adressString = $adressString + "<td>"+valAd+"</td>";
        });
                                 $descrString = "<td>"+val.description+"</td>"
                              +"</tr>";
        $fullStr = $htmlstring+$adressString+$descrString;


     $("#task-table").append($fullStr);
  });
    clickRow();
    paginateTable(); 
  $(".main-wrapper").show();
  $(".loading").hide();

});
}

function paginateTable() {

var maxRows = 50;                                               
               
$('.table-sort').each(function() {
    var tableVar = $(this);
    var rowsVar = tableVar.find('tr:gt(0)');
    var rowCount = rowsVar.length;

    if (rowCount < maxRows) {
        return;
    }

    rowsVar.filter(':gt(' + (maxRows - 1) + ')').hide();
    var prevBtn = tableVar.siblings('.prev');
    var nextBtn = tableVar.siblings('.next');

    prevBtn.click(function() {
        var cFirstVisible = rowsVar.index(rowsVar.filter(':visible'));
        rowsVar.hide();
        if (cFirstVisible - maxRows - 1 > 0) {
            rowsVar.filter(':lt(' + cFirstVisible + '):gt(' + (cFirstVisible - maxRows - 1) + ')').show();
        } else {
            rowsVar.filter(':lt(' + cFirstVisible + ')').show();
        }
        return false;
    });

    nextBtn.click(function() {
        var cFirstVisible = rowsVar.index(rowsVar.filter(':visible'));
        rowsVar.hide();
        rowsVar.filter(':lt(' + (cFirstVisible +2 * maxRows) + '):gt(' + (cFirstVisible + maxRows - 1) + ')').show();
        return false;
    });

});

}

function clickRow() {
    $("tr:not(:has(th))").click(function() {
      var td = this.cells[1];
      $(".info-first-name").text($(td).text());
      td = this.cells[2];
      $(".info-last-name").text($(td).text());
      td = this.cells[9];
      $(".info-description").text($(td).text());
      td = this.cells[5];
      $(".info-adress").text($(td).text());
      td = this.cells[6];
      $(".info-city").text($(td).text());
      td = this.cells[7];
      $(".info-state").text($(td).text());
      td = this.cells[8];
      $(".info-zip").text($(td).text());
      $(".info").show();
    });    
}

});
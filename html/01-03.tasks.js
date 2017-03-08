$(function(){
    /*дорисовка процентных индикаторов в прогресс-барах*/
    var progressVals = [];

    $('.progress-bar').each(function () {
      progressVals.push($(this).attr('value')); 
    });

    $('.progress-value').each(function (i) {
      $(this).text(progressVals[i]+"%");
    });
});
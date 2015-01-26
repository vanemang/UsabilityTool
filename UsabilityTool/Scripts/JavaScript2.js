function requestCrossDomain(site, callback) {

    // If no url was passed, exit.
    if (!site) {
        alert('No site was passed.');
        return false;
    }

    // Take the provided url, and add it to a YQL query. Make sure you encode it!
    var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + site + '"') + '&format=xml&callback=cbFunc';

    // Request that YSQL string, and run a callback function.
    // Pass a defined function to prevent cache-busting.
    $.getJSON(yql, function(data){
        if(data.results[0]){
            data = data.results[0].replace(/<script[^>]*>[\s\S]*?<\/script>/, '');

            if(typeof callback === 'function'){
                callback(data);
            }
        }
        else throw new Error('Nothing returned');
    });
}


//when document loads
$(document).ready(function () {


    //query string
    //var qsArray = window.location.href.split('?');
    //var qs = qsArray[qsArray.length - 1];

    //if (qs != '' && qsArray.length > 1) {
    //    loadPage('', qs);
    //}    

    //when the url textbox is used
    $('form').submit(function () {
        var path = $('#url input[type=text]').val();
        if (path.substr(0, 7) !== 'http://' && path.substr(0, 8) !== 'https://' && path.substr(0, 7) !== 'file://') {
            path = 'http://' + path;
        }

        requestCrossDomain(path, function (results) {
            $('#textbox1').html(results);
        });

        return false;
    });

});

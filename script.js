$(document).ready(function(){
    $.ajax({
        url: "http://localhost/news-website-backend/index.php",
        dataType: "json",
        success: function(data){
            $.each(data, function(i, item){
                var newsItem = '<div class="news-item">' +
                    '<h2>' + item.title + '</h2>' +
                    '<p>' + item.description + '</p>' +
                    '<span>'+ item.date + '</span>' +
                    '</div>';
                $('#news-container').append(newsItem);
            });
        }
    });
});
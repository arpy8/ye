var count = 0;

var audio = new Audio('assets/audio.mp3');
audio.play();

$("a").attr("src", "https://youtu.be/Bm5iA4Zupek");

fetch('https://api.kanye.rest/', {
  method: 'GET',
})

.then(response => response.json())
.then(data => 
    {
        // alert("A quote from Ye: "+data.quote);
    }
)
.catch(error => console.error('Error:', error));

$("h1, p").click(function() {
    if (count % 2 == 0) {
        $(".switch").html('<i class="bi bi-moon"></i>');

        $("body").addClass("body-light");
        $(".switch").addClass("button-light");
        $("a").addClass("body-light");

        $("body").removeClass("body-dark");
        $(".switch").removeClass("button-dark");
        $("a").removeClass("body-dark");
    }
    else {
        $(".switch").html('<i class="bi bi-sun"></i>');
        
        $("body").addClass("body-dark");
        $(".switch").addClass("button-dark");
        $("a").addClass("body-dark");

        $("body").removeClass("body-light");
        $(".switch").removeClass("button-light");
        $("a").removeClass("body-light");
    }
    count++;
});

$("button").click(function() {
    if (count % 2 != 0) {
        $("button").html('<i class="bi bi-volume-mute-fill"></i>');
        $("button").addClass('button-dark');
        $("button").removeClass('button-light');
        audio.pause();
    }
    else {
        $("button").html('<i class="bi bi-volume-up-fill"></i>');
        $("button").addClass('button-light');
        $("button").removeClass('button-dark');
        audio.play();
    }
    count++;
});
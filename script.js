// SpeakHello Module
var helloSpeaker = (function () {
    var speakWord = "Hello";
    function speak(name) {
        console.log(speakWord + " " + name);
    }
    return {
        speak: speak
    };
})();

// SpeakGoodBye Module
var byeSpeaker = (function () {
    var speakWord = "Goodbye";
    function speak(name) {
        console.log(speakWord + " " + name);
    }
    return {
        speak: speak
    };
})();

// Main Script Execution
(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();

        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
var glastoModule = (function () {
    'use strict';

    /**
     * Loads user details from local storage into text fields.
     */
    function loadPeople() {
        var people = JSON.parse(localStorage.getItem("people")) || [];

        for (var i = 0, j = people.length; i < j; i += 1) {
            document.getElementById("registrationNo" + i).value = people[i].registrationNumber;
            document.getElementById("postcode" + i).value = people[i].postcode;
        }
    }

    /**
     * Saves user details from text fields into local storage.
     */
    function savePeople() {
        var people = [];

        for (i = 0; i < 6; i += 1) {
            people.push({
                registrationNumber : document.getElementById("registrationNo" + i).value,
                postcode : document.getElementById("postcode" + i).value
            });
        }
        localStorage.setItem("people", JSON.stringify(people));
    }

    loadPeople();
    document.getElementById("save").onclick = savePeople;
}());

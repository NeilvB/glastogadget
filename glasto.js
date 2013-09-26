var glastoModule = (function () {
    'use strict';

    /**
     * Loads user details from local storage into text fields.
     */ 
    function loadPeople() {
        var people = JSON.parse(localStorage.getItem("people")) || [],
            i = 0;
        
        for(;i < people.length; i += 1) {            
            document.getElementById("registrationNo" + i).value = people[i].registrationNumber;
            document.getElementById("postcode" + i).value = people[i].postcode;
        }    
    }
    
    /**
     * Saves user details from text fields into local storage.
     */ 
    function savePeople() {
        var people = [],
            i = 0;
        
        for(;i < 6; i += 1) {
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

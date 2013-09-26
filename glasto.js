var glastoModule = (function () {
    'use strict';
    
    var people = JSON.parse(localStorage.getItem("people")) || [],
        i = 0;
            
    for(;i < people.length; i += 1) {            
        document.getElementById("registrationNo" + i).value = people[i].registrationNumber;
        document.getElementById("postcode" + i).value = people[i].postcode;
    }                    

    document.getElementById("save").onclick = function() {
        var people = [],
            i = 0;
        
        for(;i < 6; i += 1) {
            people.push({
                registrationNumber : document.getElementById("registrationNo" + i).value,
                postcode : document.getElementById("postcode" + i).value
            });
        }                                    
        localStorage.setItem("people", JSON.stringify(people));
    };
}());

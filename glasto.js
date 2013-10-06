var glastoModule = (function () {
    'use strict';

    /**
     * Construct and return outer div element of Gadget panel.
     */
    function createGadgetDiv() {
        var gadget = document.createElement('div');
        gadget.setAttribute('id', 'glastoGadget');

        gadget.style.position = 'fixed';
        gadget.style.top = '10px';
        gadget.style.right = '10px';
        gadget.style.height = '700px';
        gadget.style.width = '205px';
        gadget.style.backgroundColor = 'white';
        gadget.style.border = '1px solid black';
        gadget.style.fontFamily = 'sans-serif';
        gadget.style.textAlign = 'left';

        document.body.appendChild(gadget);
        return gadget;
    }

    /**
     * Constructs and returns a registration number and postcode
     * input div for a person, using supplied number for element
     * IDs.
     */
    function createPersonDetailsDiv(personNumber) {
        var person = document.createElement('div');
        person.setAttribute('class', 'person' + personNumber);
        person.style.border = '1px solid gray';

        var regLabel = document.createElement('label');
        regLabel.setAttribute('for', 'registrationNo' + personNumber);
        regLabel.textContent = 'Registration Number:';

        var regInput = document.createElement('input');
        regInput.setAttribute('type', 'text');
        regInput.setAttribute('id', 'registrationNo' + personNumber);

        var postLabel = document.createElement('label');
        postLabel.setAttribute('for', 'postcode' + personNumber);
        postLabel.textContent = 'Postcode:';

        var postInput = document.createElement('input');
        postInput.setAttribute('type', 'text');
        postInput.setAttribute('id', 'postcode' + personNumber);

        person.appendChild(regLabel);
        person.appendChild(regInput);
        person.appendChild(postLabel);
        person.appendChild(postInput);

        return person;
    }

    /**
     * Constructs and displays Gadget panel.
     */
    function showGadget() {
        var gadget = createGadgetDiv();

        for (var i = 0; i < 6; i += 1) {
            gadget.appendChild(createPersonDetailsDiv(i));
        }

        var saveButton = document.createElement('button');
        saveButton.innerText = 'Save all details';
        saveButton.setAttribute('id', 'save');
        saveButton.onclick = savePeople;

        var fillButton = document.createElement('button');
        fillButton.innerText = 'Fill Registration page';
        fillButton.setAttribute('id', 'fill');
        fillButton.onclick = fillPeople;

        var closeButton = document.createElement('button');
        closeButton.innerText = 'X';
        closeButton.setAttribute('id', 'close');
        closeButton.onclick = function () {
            document.body.removeChild(gadget);
        };
        closeButton.style.float = 'right';

        gadget.appendChild(saveButton);
        gadget.appendChild(fillButton);
        gadget.insertBefore(closeButton, gadget.firstChild);
    }

    /**
     * Fills the currently loaded people's details into the
     * registration page, based on our assumptions about the registration
     * page's HTML content.
     */
    function fillPeople() {
        var people = JSON.parse(localStorage.getItem('people')) || [];

        for(var i = 0, j = people.length; i < j; i += 1) {
            document.getElementById('registrations_' + i + '__RegistrationId').value = people[i].registrationNumber;
            document.getElementById('registrations_' + i + '__PostCode').value = people[i].postcode;
        }
    }

    /**
     * Loads user details from local storage into text fields.
     */
    function loadPeople() {
        var people = JSON.parse(localStorage.getItem('people')) || [];

        for (var i = 0, j = people.length; i < j; i += 1) {
            document.getElementById('registrationNo' + i).value = people[i].registrationNumber;
            document.getElementById('postcode' + i).value = people[i].postcode;
        }
    }

    /**
     * Saves user details from text fields into local storage.
     */
    function savePeople() {
        var people = [];

        for (var i = 0; i < 6; i += 1) {
            people.push({
                registrationNumber : document.getElementById('registrationNo' + i).value,
                postcode : document.getElementById('postcode' + i).value
            });
        }
        localStorage.setItem('people', JSON.stringify(people));
    }

    showGadget();
    loadPeople();
}());

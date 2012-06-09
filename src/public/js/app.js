(function (d) {
    'use strict';

    var inputField = d.getElementById('input-val'),
        unitField = d.getElementById('input-type'),
        dayField = d.getElementById('dob-day'),
        submitButton = d.getElementById('dob-submit'),
        cancelButton = d.getElementById('dob-cancel'),
        resultElement = d.getElementById('result'),
        resultContainer = d.getElementById('result-container'),
        fortnightPerSecond = 0.00000082671958,
        availableUnits = {
          'hour' : {
            'label' : 'Hours',
            'relativity' : 3600
          },
          'day' : {
            'label' : 'Days',
            'relativity' : 86400
          },
          'week' : {
            'label' : 'Weeks',
            'relativity' : 604800
          },
          'month' : {
            'label' : 'Months',
            'relativity' : 2592000
          },
          'year' : {
            'label' : 'Years',
            'relativity' : 31536000
          }
      };

    // Attach click event to submit
    submitButton.addEventListener('click', function (e) {   
        e.preventDefault();

        var selectedUnit = unitField.options[unitField.selectedIndex].value,
            inputValue = parseInt(inputField.value, 10),
            unitMeta = availableUnits[selectedUnit],
            result = (inputValue * unitMeta['relativity']) * fortnightPerSecond,
            resultHTML = inputValue + ' ' + unitMeta['label'] + ' = ' + result + ' Fortnight!';

        // Show results
        resultElement.innerHTML = resultHTML;
        resultContainer.style.display = 'block';

        return false;
    }, false);

    // Attach click event to cancel
    cancelButton.addEventListener('click', function (e) {
        e.preventDefault();
        
        inputField.value = '';
        unitField.selectedIndex = 0;

        resultContainer.style.display = 'none';
        resultElement.innerHTML = '';
    }, false);

}(document));
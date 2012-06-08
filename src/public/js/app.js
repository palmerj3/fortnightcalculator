(function (d) {
    'use strict';

    var inputField = d.getElementById('input-val'),
        unitField = d.getElementById('input-type'),
        dayField = d.getElementById('dob-day'),
        submitButton = d.getElementById('dob-submit'),
        cancelButton = d.getElementById('dob-cancel'),
        resultElement = d.getElementById('result'),
        resultContainer = d.getElementById('result-container'),
        availableUnits = {
          'hour' : {
            'label' : 'Hours',
            'relativity' : 0.00297619048
          },
          'day' : {
            'label' : 'Days',
            'relativity' : 0.0714285714
          },
          'week' : {
            'label' : 'Weeks',
            'relativity' : 0.5
          },
          'month' : {
            'label' : 'Months',
            'relativity' : 2.17406071
          },
          'year' : {
            'label' : 'Years',
            'relativity' : 26.0887285
          }
      };

    // Attach click event to submit
    submitButton.addEventListener('click', function (e) {   
        e.preventDefault();

        var selectedUnit = unitField.options[unitField.selectedIndex].value,
            inputValue = parseInt(inputField.value, 10),
            unitMeta = availableUnits[selectedUnit],
            result = inputValue * unitMeta['relativity'],
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
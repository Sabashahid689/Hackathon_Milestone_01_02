var buttons = document.querySelectorAll('.toggle-btn');
var options = document.querySelectorAll('.options');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var targetId = button.getAttribute('data-target');
        var targetOptions = document.getElementById(targetId);
        // Toggle visibility of the targeted option
        if (targetOptions) {
            if (targetOptions.style.display === 'block') {
                targetOptions.style.display = 'none';
            }
            else {
                // Hide all options first
                options.forEach(function (option) {
                    option.style.display = 'none';
                });
                // Show the targeted option
                targetOptions.style.display = 'block';
            }
        }
    });
});

let btn: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.toggle-btn');
let opt: NodeListOf<HTMLDivElement> = document.querySelectorAll('.options');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-target')!;
        const targetOptions = document.getElementById(targetId);

        // Toggle visibility of the targeted option
        if (targetOptions) {
            if (targetOptions.style.display === 'block') {
                targetOptions.style.display = 'none';
            } else {
                // Hide all options first
                opt.forEach(option => {
                    option.style.display = 'none';
                });
                // Show the targeted option
                targetOptions.style.display = 'block';
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {

    fetch('https://raw.githubusercontent.com/Rph-nsmb/rph-nsmb.github.io/refs/heads/main/Assets/Footer/Footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading footer');
            }
            return response.text();
        })
        .then(data => {

            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
});

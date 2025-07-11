document.addEventListener('DOMContentLoaded', () => {

    fetch('/Assets/Navbar/Navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error loading navbar');
            }
            return response.text();
        })
        .then(data => {

            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
});

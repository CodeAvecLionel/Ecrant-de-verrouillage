document.addEventListener('DOMContentLoaded', function() {
    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const day = now.getDate().toString().padStart(2, '0');
        const month = (now.getMonth() + 1).toString().padStart(2, '0');
        const year = now.getFullYear();

        document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
        document.getElementById('date').textContent = `${day}/${month}/${year}`;
    }

    setInterval(updateTime, 1000);
    updateTime();

    document.getElementById('unlock-btn').addEventListener('click', function() {
        const pin = document.getElementById('pin').value;
        const errorMessage = document.getElementById('error-message');

        if (pin === '1234') {
            window.location.href = 'home.html';
        } else {
            errorMessage.textContent = 'PIN incorrect';
            errorMessage.style.visibility = 'visible';

            setTimeout(() => {
                errorMessage.style.visibility = 'hidden';
            }, 2000);
        }
        document.getElementById('pin').value = '';
    });
});

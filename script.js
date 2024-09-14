document.getElementById('proxyForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const url = document.getElementById('url').value;
    const responseElement = document.getElementById('responseContent');

    try {
        const proxyUrl = 'http://localhost:8080/' + encodeURIComponent(url); // Change to your proxy server URL
        const response = await fetch(proxyUrl);
        const responseText = await response.text();

        responseElement.textContent = responseText;
    } catch (error) {
        responseElement.textContent = 'Error fetching URL: ' + error;
    }
});

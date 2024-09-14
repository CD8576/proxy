document.getElementById('proxyForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const url = document.getElementById('url').value;
    const responseElement = document.getElementById('responseContent');
    const proxyApiUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;

    try {
        const response = await fetch(proxyApiUrl);
        const responseText = await response.text();
        responseElement.textContent = responseText;
    } catch (error) {
        responseElement.textContent = 'Error fetching URL: ' + error;
    }
});

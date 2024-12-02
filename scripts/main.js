// Path to the Markdown file
const mdFilePath = 'pages/1_main/test.md';

// Fetch and render the Markdown content
fetch(mdFilePath)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Failed to fetch ${mdFilePath}: ${response.status}`);
        }
        return response.text();
    })
    .then((markdown) => {
        // Convert Markdown to HTML using marked.js
        document.getElementById('content').innerHTML = marked.parse(markdown);
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('content').textContent = 'Failed to load content.';
    });

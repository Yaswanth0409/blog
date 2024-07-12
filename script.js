// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all "Read more" links
    const readMoreLinks = document.querySelectorAll('article a[href="#"]');

    // Loop through each link and add a click event listener
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default action of the link

            // Example: Show an alert with the blog post content
            const postTitle = this.parentElement.querySelector('h2').textContent;
            const postContent = this.parentElement.querySelectorAll('p')[1].textContent;

            alert(`Post Title: ${postTitle}\n\n${postContent}`);
        });
    });
});

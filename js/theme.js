// Injects consistent header and footer on static pages
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const isAdminFolder = path.toLowerCase().includes('/admin/');
    const prefix = isAdminFolder ? '../' : '';

    // Inject Header
    const headerHTML = `
        <header class="custom-header">
            <div class="nav-container">
                <a href="${prefix}index.html" class="logo-text">
                    🌍 Go <span>Travel</span>
                </a>
                <ul class="nav-menu">
                    <li><a href="${prefix}index.html">Home</a></li>
                    <li><a href="${prefix}index.html#section-2">About</a></li>
                    <li><a href="${prefix}index.html#section-3">Gallery</a></li>
                    <li><a href="${prefix}category.html">Category</a></li>
                    <li><a href="${prefix}index.html#section-5">Contact</a></li>
                    <li><a href="${prefix}Admin/loginform.html">Admin Login</a></li>
                </ul>
            </div>
        </header>
    `;
    
    // Insert header at the very beginning of body
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    // Highlight current page active link
    const pageName = path.substring(path.lastIndexOf('/') + 1);
    
    document.querySelectorAll(".nav-menu a").forEach(link => {
        const href = link.getAttribute("href");
        const hrefPage = href.substring(href.lastIndexOf('/') + 1);
        if (hrefPage === pageName || (pageName === "" && hrefPage === "index.html")) {
            link.classList.add("active");
        }
    });

    // Inject Footer if not already present
    if (!document.querySelector("footer")) {
        const footerHTML = `
            <footer>
                <p>&copy; 2026 Go Travel & Tourism Ltd. Designed for Vijay Mahes. All Rights Reserved.</p>
            </footer>
        `;
        document.body.insertAdjacentHTML("beforeend", footerHTML);
    }
});

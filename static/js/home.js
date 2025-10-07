






function handleNewsletterSignup(event) {
        event.preventDefault();
        const email = event.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}! You'll receive our daily newsletter starting tomorrow.`);
        event.target.reset();
    }

    // Add click handlers for trending topics
    document.querySelectorAll('.trending-item').forEach(item => {
        item.addEventListener('click', function () {
            const topic = this.querySelector('span:last-child').textContent;
            alert(`Loading more articles about: ${topic}`);
        });
    });

    // Add click handlers for news cards
    document.querySelectorAll('.news-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.tagName !== 'BUTTON') {
                const headline = this.querySelector('h2, h3').textContent;
                alert(`Opening full article: ${headline}`);
            }
        });
    });

    // Add click handler for read more buttons
    document.querySelectorAll('button').forEach(button => {
        if (button.textContent.includes('Read More')) {
            button.addEventListener('click', function (e) {
                e.stopPropagation();
                const headline = this.closest('article').querySelector('h2, h3').textContent;
                alert(`Reading full article: ${headline}`);
            });
        }
    });





(function () {
    function c() {
        var b = a.contentDocument || a.contentWindow.document;
        if (b) {
            var d = b.createElement('script');
            d.innerHTML = "window.__CF$cv$params={r:'98a77d3dd304d39e',t:'MTc1OTc3ODE0NS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d)
        }
    }

    if (document.body) {
        var a = document.createElement('iframe');
        a.height = 1;
        a.width = 1;
        a.style.position = 'absolute';
        a.style.top = 0;
        a.style.left = 0;
        a.style.border = 'none';
        a.style.visibility = 'hidden';
        document.body.appendChild(a);
        if ('loading' !== document.readyState) c(); else if (window.addEventListener) document.addEventListener('DOMContentLoaded', c); else {
            var e = document.onreadystatechange || function () {
            };
            document.onreadystatechange = function (b) {
                e(b);
                'loading' !== document.readyState && (document.onreadystatechange = e, c())
            }
        }
    }
})();

const tabs = document.querySelectorAll('.ticker-header span');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});


//اسلایدر


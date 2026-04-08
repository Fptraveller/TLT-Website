    // Active trail nav highlight on scroll
    const sections = ['basecamp','pathfinding','trailwalking','summit','range'];
    const navLinks = document.querySelectorAll('.trail-nav a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) current = id;
      });
      navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + current) a.classList.add('active');
      });
    });

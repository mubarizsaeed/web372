function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.app-section').forEach(function (section) {
        section.style.display = 'none';
    });

    // Show selected section
    document.getElementById(sectionId).style.display = 'block';

    if (window.innerWidth <= 960) {
        document.querySelector('.navigation').style.display = 'none';
    }
}

function toggleNavigation() {
    var navigation = document.querySelector('.navigation');
    navigation.style.display = (navigation.style.display === 'none' || navigation.style.display === '') ? 'flex' : 'none';
}

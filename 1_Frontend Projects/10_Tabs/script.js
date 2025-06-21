function openTab(tabName, elem) {
    let tabContent = document.querySelectorAll('.tab-content');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    let tabLinks = document.querySelectorAll('.tablink');
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove('active');
    }
    document.getElementById(tabName).style.display = "block";
    elem.classList.add('active');
}

document.querySelector('.active').click();
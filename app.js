initialDisplay = () => {
    $('.mystory').hide();
    $('.projects').hide();
    $('.bio').fadeIn(600);
};

myStoryDisplay = () => {
    $('.bio').hide();
    $('.projects').hide();
    $('.mystory').fadeIn(600);
};

projectsDisplay = () => {
    $('.bio').hide();
    $('.mystory').hide();
    $('.projects').fadeIn(600);
};

$('.see-projects').click(event => {
    projectsDisplay();
});

$('.see-mystory').click(event => {
    myStoryDisplay();
});

$('.see-bio').click(event => {
    initialDisplay();
});

navArray = () => {
    var nav = ["Bio + Education", "Projects", "What I'm Doing", "Github", "LinkedIn", "Tech Meets Human"];
    nav.forEach((element) => {
        var navElement = $("<li><a id='" + nav.indexOf(element) +
            "' class='nav-link'>" + element + "</a></li>");
        $('.nav-list').append(navElement);
        navElement.click(() => {
            navRouter(navElement);
        });
    });
}


navRouter = (element) => {
    if (element.text() === "Bio + Education") {
        initialDisplay();
    } else if (element.text() === "Projects") {
        projectsDisplay();
    } else if (element.text() === "What I'm Doing") {
        myStoryDisplay();
    } else if (element.text() === "Github") {
        window.open('https://github.com/calorab', '_blank');
    } else if (element.text() === "LinkedIn") {
        window.open('https://www.linkedin.com/in/caleb-gammon-technologist', '_blank');
    } else if (element.text() === "Tech Meets Human") {
        window.open('https://medium.com/tech-meets-human', '_blank');
    } else {
        myStoryDisplay();
    }
}

$(() => {
    projectsDisplay();
    navArray();
});
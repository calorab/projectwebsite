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
    console.log('display projects...');
    projectsDisplay();
});

$('.see-mystory').click(event => {
    console.log('display my story...');
    myStoryDisplay();
});

$('.see-bio').click(event => {
    console.log('display bio...');
    initialDisplay();
});

navArray = () => {
    var nav = ["Bio + Education", "Projects", "My Story", "Github", "LinkedIn"];
    nav.forEach((element) => {
      var navElement = $("<li><a id='" + nav.indexOf(element) +
        "' class='nav-link'>" + element + "</a></li>");
      $('.nav-list').append(navElement);
      navElement.click(() => {
        navRouter(navElement);
      });
    });
}

// May need to switch back to location.replace(...) below
navRouter = (element) => {
    if (element.text() === "Bio + Education") {
      initialDisplay();
    } else if (element.text() === "Projects") {
        projectsDisplay();
    } else if (element.text() === "Github") {
        window.location.assign('https://github.com/calorab');
    } else if (element.text() === "LinkedIn") {
        window.location.assign('https://www.linkedin.com/in/caleb-gammon-18153040');
    } else {
        myStoryDisplay();
    }
}




$(() => {
    initialDisplay();
    navArray();
});
initialDisplay = () => {
    $('.mystory').hide();
    $('.projects').hide();
    $('.bio').show();
};

myStoryDisplay = () => {
    $('.bio').hide();
    $('.projects').hide();
    $('.mystory').show();
};

projectsDisplay = () => {
    $('.bio').hide();
    $('.mystory').hide();
    $('.projects').show();
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
  
navRouter = (element) => {
    if (element.text() === "Bio + Education") {
      initialDisplay();
    } else if (element.text() === "Projects") {
        projectsDisplay();
    } else if (element.text() === "Github") {
        alert('set up github link!');
    } else if (element.text() === "LinkedIn") {
        alert('set up LinkedIn link!');
    } else {
        myStoryDisplay();
    }
}




$(() => {
    initialDisplay();
    navArray();
});
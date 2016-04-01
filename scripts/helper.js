var skills = '<div class="col-md-3"><img src="./img/%data%.png" alt="My Skills" class="img-responsive img-circle skills-ind"></div>';

var skills_array = ['1', '2', '3', '4', '5', '6', '7', '8'];

var skills_new = '';

for(var i=0; i < skills_array.length; i += 1) {
  skills_new = skills.replace('%data%', skills_array[i]);
  $('.skills-section-images').append(skills_new);
}

var projects = '<li><h3>%data%</h3><div class="row"><div class="col-md-3"><img src="./img/%data1%.gif" alt="project-images" class="img-responsive"></div><div class="col-md-9"><h3>Language(s): %data2%</h3><h5>%data3%</h5></div></div></li><br><hr>';
var projects_array = [
  {
    name: 'Great Escape',
    img: 'repl' ,
    language: 'Ruby',
    info: 'This was one of my favorite projects, even though on a user level it looks pretty basic. Great Escape is a REPL game that can be played on the command line.  It takes single user inputs, evaluates them, and returns results based on that input. The excitement in creating this project, is that the results are literally endless. You have full creative control over what your game is about and where it will take a player, which is one of the major reasons it was so much fun to make.  Additional features would be to add some graphics to go along with the game.'
  },
  {
    name:'BrandPix',
    img:'brand',
    language: 'Ruby, RubyonRails, HTML, CSS,',
    info: 'The idea behind BrandPix stemmed from a need for companies to get user input on product/brand launches prior to spending billions of dollars on failed ideas.  It was my first opportunity to utilize the Ruby on Rails framework and was done so in a group setting.  I think of it as my Rails guinea pig, being that is the first project I created after very recently learning Rails.  Additional features would be improvement to the GUI.'
  },
  {
    name:'Amped Up',
    img:'amped',
    language: 'Ruby, RubyonRails, HTML, CSS, Javascript, JQuery, APIs, Twitter Bootstrap',
    info: 'Amped Up was born out of a love for music and concerts and recognition of a need for social activities centered around that love. Amped Up allows users going to the same concert to create pre and post concert events, as well as carpools to the specific concert.  It was created using the Rails framework, in addition to Twitter Bootstrap for the GUI. We also used the 5gig and Google Maps APIs.'
  }
];

var projects_new = '';

for(var i=0; i < projects_array.length; i+= 1){
  projects_new = projects.replace('%data%', projects_array[i]['name']);
  projects_new = projects_new.replace('%data1%', projects_array[i]['img']);
  projects_new = projects_new.replace('%data2%', projects_array[i]['language']);
  projects_new = projects_new.replace('%data3%', projects_array[i]['info']);
  $('.projects-section-info').append(projects_new);
}

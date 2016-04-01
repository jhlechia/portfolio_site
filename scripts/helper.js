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
    name: 'Great Escape REPL game',
    img: 'repl' ,
    language: 'Ruby',
    info: 'A read–eval–print loop (REPL), also known as an interactive toplevel or language shell, is a simple, interactive computer programming environment that takes single user inputs (i.e. single expressions), evaluates them, and returns the result to the user; a program written in a REPL environment is executed piecewise.'
  },
  {
    name:'BrandPix',
    img:'brand',
    language: 'Ruby, RubyonRails, HTML, CSS,',
    info: 'A read–eval–print loop (REPL), also known as an interactive toplevel or language shell, is a simple, interactive computer programming environment that takes single user inputs (i.e. single expressions), evaluates them, and returns the result to the user; a program written in a REPL environment is executed piecewise.'
  },
  {
    name:'AmpedUp',
    img:'amped',
    language: 'Ruby, RubyonRails, HTML, CSS, Javascript, JQuery, APIs, Twitter Bootstrap',
    info: 'A read–eval–print loop (REPL), also known as an interactive toplevel or language shell, is a simple, interactive computer programming environment that takes single user inputs (i.e. single expressions), evaluates them, and returns the result to the user; a program written in a REPL environment is executed piecewise.'
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

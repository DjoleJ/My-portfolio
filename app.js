(function() {
    

var html5String = 'Knowledge of HTML5, its modern concepts and semantic structure.';
var css3String = 'Knowledge of CSS3, responsive design and its modern concepts like CSS Grid, Flexbox, animations and much more.';
var javascriptString = 'Knowledge of Javascript and modern technologies like ES6, npm, webpack.';
var jqueryString = 'Knowledge of the JavaScript library jQuery and its core DOM manipulation functionalities.';
var bootstrapString = 'Knowledge of the front-end framework Bootstrap and its core functionalities like Grid System, responsive design, modal windows, carousels and much more.';
var sassString = 'Knowledge of CSS preprocessors SCSS and SASS, and its advantages like nesting, variables, mixins, functions and more.';
var gitString = 'Knowledge of version control system Git and GitHub, and its basic commands like adding, commiting, branching and pushing files to a remote repository.';
var reactString = 'Basic knowledge of JavaScript framework React, and its components, structures, methods and workflow.';
var ajaxString = 'Knowledge of Javascript fetch, promises, async/await and working with APIs.';
var webpackString = 'Basic knowledge of setting up and using module bundler webpack.';
var babelString = 'Basic knowledge of JavaScript compiler, setting it up and configuring it.';
var photoshopString = 'Basic knowledge of Adobe Photoshop.';



var strings = [html5String, css3String, javascriptString, jqueryString, bootstrapString, sassString, gitString, reactString, ajaxString, webpackString, babelString, photoshopString]


    
document.getElementById('skills').addEventListener('click', function(e) {
    
    var target = e.target;
    
    for(var i = 0; i < strings.length; i++) {
        
        if(target.id == ('skill-box-'+(i+1)) || target.parentNode.id == ('skill-box-'+(i+1))) {
            
            if(document.getElementById('skill-box-p-'+(i+1)).textContent == '' ) {
                document.getElementById('skill-box-p-'+(i+1)).textContent = strings[i];
            } else {
                document.getElementById('skill-box-p-'+(i+1)).textContent = '';
            }
        } 
    }
    
    
    
});
    
})();
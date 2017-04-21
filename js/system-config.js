SystemJS.config({
 // tell SystemJS which transpiler to use
 transpiler: 'plugin-babel',
 // tell SystemJS where to look for the dependencies
 map: {
     // SystemJS files
     
  'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
  'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
  
     // app start script
  'main': 'js/main.js',
  'jquery': 'node_modules/jquery/dist/jquery.min.js',
  'handlebars': 'node_modules/handlebars/dist/handlebars.amd.js',
  'bootstrap' : 'node_modules/bootstrap/dist/js/bootstrap.min.js'
 }
});

System.import('main');
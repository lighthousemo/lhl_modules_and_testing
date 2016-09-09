# Module Creation

- we need modules because we need to break up a program into several files
- explain that you can export any data type: integer, array, object, function, etc. Most commonly: objects.
- warcraft example: index.js peasant.js, building.js, resources.js
	- building can train a peasant
	- when a peasant is trained, we use up 20 gold and 4 food.
	- resources start out at 100 gold, 20 food.

- note: when a module B requires another module A and changes module A's data, the change is visible in all modules that require module A. i.e. requiring a module does not copy the data. it just provides a pointer to it. we can see that with the resources.js


# NPM Modules

- Modules that other people wrote. 
- Open source.
- You can use them in your program!
- Show commander.js module https://github.com/tj/commander.js/blob/master/package.json
- Your programs should define what npm modules they depend on using a package.json file.
- npm init
- npm install --save || --save-dev
- Modules can depend on eachother. When you install one, it will download all other modules it depends on.

# Testing: Mocha & Chai

Write tests for the warcraft assignment




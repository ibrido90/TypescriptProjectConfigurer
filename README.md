# TypescriptProjectConfigurer

## About
This project is born from the necessity of a fast, simple and standard way to configure most Typescript Projects. Whenever you may wish to start a new project simply run *tsconfig* from command line(more on that later) and it's done.

## Dependencies
Actually __there are NO dependecies__ for this project, except for *Node.js* -> *npm*. Pretty cool uh?

## Install
Use *npm* to install this script either:
* Globally:
	* ```npm install tsconfig --global ```
* Local (discouraged but working):
	* ```npm install tsconfig --save ```

## Use
Either you installed it in a local folder or globally you need to just run ``` tsconfig ``` in the folder of your project and it's black magic powers will put most of the stuff ypu need for a common Typescript project.
A special "support" for *vscode* is provided, in fact you can just open the project folder, start coding and press *ctrl* + *b*, to build it!
>__Note:__ At this time being the task that run the build is in watch mode. In a (very close) future will be added an option to make it possible to chosse between *watch* and*normal* mode (look at todo list at the ond of this file).

Also I work on Windows and, as you can see, the scripts `*.cmd` won't work in unix like systems. Also this is in the known things to do. By the way __*I THINK*__ that the tsconfig.js can still work.

__ANY__ help is welcome and appreciated.

## TODO
- [ ] Test the tsconfig.js also in unix systems
	- [ ] Make it work
- [ ] Create a more portable tsconfig.cmd, for example change it in another .js
- [ ] Add option to the tsconfig script to allow a choose between *watch mode* and *normal mode* of the build task
# Animal Kingdom Memory Game 
Milestone Project : Interactive Frontend Development - Code Institute 

<p align=center>
<img src="https://www.prestigiouspuzzles.com/wp-content/uploads/2018/09/17656.jpg">
</p>

<p align=center>
<a href="https://vasileia-apostolou.github.io/animal-kingdom-memory-game/">Click To Play</a></p>


## Table Of Content 
- [**About**](#About-My-Project)
- [**Demo**](#Demo)
- [**UX**](#UX)
    - [**User Stories**](#User-Stories)
    - [**Research**](#Research)
    - [**Wireframes**](#Wireframes)
    - [**Design**](#Design)
- [**Features**](#Features)
    - [**Functionality**](#Functionality)
    - [**Features Left To Implement**](#Features-Left-To-Implement)
- [**Testing**](##Testing)
    - [**Browsers**](#Browsers)
    - [**Devices**](#Devices)
- [**Technologies Used**](#Technologies-Used)
    - [**Languages**](#Languages)
    - [**Tools**](#Tools)
    - [**Libraries**](#Libraries)
- [**Deployment**](#Deployment)
- [**Credits**](#Credits)
    - [**Content**](#Content)
    - [**Code**](#Code)
    - [**Media**](#Media)
    - [**Acknowledgements**](#Acknowledgements)
    
## About My Project
I am a Full Stack Web Developer student and this is my memory game created for my second Milestone Project. It's a single page application with a card matching game that requires concentration and a good memory in order to to win the game before the time finishes.
## Demo 

## UX
### User Stories  
* I want a game that improves my memory.
* I want a game that is visually appealing, straightforward and non-distracting.
* I want to be presented with a game start window and be able to start the game on-click.
* I want to hear a background sound that suits the game's theme. 
* I want to be able to mute/unmute the background sound.
* I want to hear a card flipping sound.
* I want to hear a sound when the cards are being matched.
* I want to hear a sound when I win the game or lose the game.
* I want a pop-up that tells me if I won the game.
* I want a pop-up that tells me if I failed in finishing the game on time.
* I want to be able to start a new game after I win or lose.
* I want to be able to play the game on any device.

### Research 
I researched memory games on Youtube and Udemy, to understand more how such a game is built.
From the tutorials I have watched I could get a clear idea of what functionality and design I wanted my game to have.
### Wireframes
To create this project's wireframes I used Balsamiq. 
* [wireframes](https://github.com/Vasileia-Apostolou/animal-kingdom-memory-game/blob/master/assets/wireframes/game-wireframes.pdf)

During development process same changes were made.
### Design
I wanted the design of my game to be green and colorful. For the background, I used an image that has a lot of trees and plants and I kept the animals in the cards. For the animal cards, I took a collage image with wild animals and cropped the ones I wanted to use for my project. I have then done some editing to the images to improve their quality. For my pop-up results, I used `background: linear-gradient` to give it a green color with a little bit of style, GIF of a monkey that's clapping in the winning pop-up and GIF of a baby elephant that's running in the losing pop-up, to bring some comedy to it.
## Features
### Functionality
* The game starts with a "Click To Start" overlay.
* Pointer changes to cursor when hovered over the cards, sound icon, overlays and buttons.
* The cards have different images on the front and the same image on the back.
* When a card is flipped the user hears a flipping sound. 
* When the cards are matched the user hears a matching sound.
* Matches made are counted in the score.
* The timer gives the user 60 seconds to match all cards.
* The user hears a winning sound when all cards are matched before time runs out.
* "Congratulations!" overlay appears when the user has matched all the cards before time runs out. 
* The game reloads when the user clicks on "Play Again".
* The user hears a losing sound when cards are not matched before time runs out.
* "Game Failed!" overlay appears when the user fails to matched all the cards before time runs out. 
* The game reloads when the user clicks on "Try Again" and exits the overlay when the user clicks on "Exit".
* All the cards can't be seen at the same time. When the user clicks on one card, it stays flipped, and when the user clicks on the second card, both cards stay flipped if they match and both cards flip back if they don't. 
### Features Left To Implement
In the future, I would like to add levels to the game to increase complexity.

## Testing 
### Browsers
The site was tested in the following browsers to ensure the site is compatible and responsive.
  * Chrome
  * Mozilla
  * Safari
  * Opera
  * Internet Explorer 
### Devices 
The site was tested in the following devices to ensure the site is compatible and responsive.
  * Iphone 8 Plus
  * Huawei P30 Pro
  * Huawei Mediapad T5
  * MacBook Pro 

  The site's HTML, CSS code has been tested in [W3C Validator](https://validator.w3.org/) and JavaScript code has been tested in [JS Hint](https://jshint.com/).
    Responsiveness was tested in [Responsinator](https://www.responsinator.com/) , [Am I Responsive](http://ami.responsivedesign.is/) and [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly).


## Technologies Used 
### Languages
1. [HTML](https://en.wikipedia.org/wiki/HTML)

HTML was used in this project to keep up with the latest industry standards.

2. [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

CSS was used for styling the content on the website.

3. [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

JavaScript

### Tools 
1. [Git](https://git-scm.com/)

Git was used in this project for version control.

2. [Gitpod](https://www.gitpod.io/)

Gitpod was used to develop this project.

3. [Balsamiq](https://balsamiq.com/)

Balsamiq was used to create wireframes.


### Libraries 
1. Sound icon was obtained from [Font Awesome](https://fontawesome.com/).
2. Hover CSS Animations for buttons were taken from [Hover.css](http://ianlunn.github.io/Hover/).
3. Fonts were taken from [Google Fonts](https://fonts.google.com/).

## Deployment 
This project has been deployed to Github Pages from the master branch. A link to the deployed version of the site can be found [here](https://vasileia-apostolou.github.io/animal-kingdom-memory-game/).

All changes to the code were then added and committed to a local repository. The commits were then pushed to my GitHub repository. The project was hosted using GitHub pages directly from the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html. The process of deploying this project on GitHub pages can be seen as bellow; 

* Go to the settings tab of the repository, and scroll down to GitHub pages.
* Under GitHub pages, click on "source" and select the master branch.
* You will be automatically taken to the top of the page wherein a light blue bar will be stated: "GitHub pages source saved".
*  Scroll down to GitHub pages where will be stated "your site is ready to be published at "[https://vasileia-apostolou.github.io/animal-kingdom-memory-game/](https://vasileia-apostolou.github.io/animal-kingdom-memory-game/)".
* Click on the URL and you will be auto-referred to the published webpage. When returning to the GitHub repository setting, scroll down to GitHub pages and you will see a light green block stating "Your site is published at "[https://vasileia-apostolou.github.io/animal-kingdom-memory-game/](https://vasileia-apostolou.github.io/animal-kingdom-memory-game/)".

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone https://vasileia-apostolou.github.io/animal-kingdom-memory-game/.git` into your terminal. 

To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits 
### Content
### Code
* Memory game tutorial from [Udemy](https://www.udemy.com/).
* 3D flip ard code was taken from [w3schools](https://www.w3schools.com/).
* JavaScript shuffle function was taken from [w3resource](https://www.w3resource.com/).
* I got help on fixing errors and hints on how to solve problems from [Stack Overflow](https://stackoverflow.com/) and [Slack](https://slack.com/intl/en-dk/).


### Media
* Background image was taken from [dreamybackdrop.com](https://www.dreamybackdrop.com).
* Animal images were taken from [prestigiouspuzzles.com](https://www.prestigiouspuzzles.com/) and edited on [Photofox](http://www.photofoxapp.com/).
* Card front side image was taken from [artpal.com](https://www.artpal.com/) and edited on [Photofox](http://www.photofoxapp.com/).
* Winning/Losing result pop-up GIF was taken from [gifer.com](https://gifer.com/en/).
* Sounds used on my page application were taken from [freesound.org](https://freesound.org/).
### Acknowledgements


* I got my inspiration from [sabinemm's project](https://sabinemm.github.io/fruit-game/).
# Tic-Tac-Toe: Zombie Edition
This version of Tic-Tac-Toe has a zombie theme!  The Walking Dead is one of my
favorite shows so for that reason the player icons are a cartoon Rick Grimes
and a cartoon zombie.

You can play my game by following the below link!  Please don't use a real email
address when logging in.

[Tic-Tac-Toe: Zombie Edition](https://kibs86.github.io/tic-tac-toe-project)

## Technologies Used

#### HTML
HTML was used to build out the structure of my UI.

#### Bootstrap
Bootstrap was used specifically for my navbar and the modal functionality within
the navbar.

#### SASS
SASS was used to style my UI and I used flexbox for the header, main body and
footer of my game.  That helped me build something that was viewable on both
small and normal sized screens alike.

#### JavaScript
My primary game logic was built using JavaScript.

#### jQuery
jQuery was used for DOM manipulation.

#### AJAX
AJAX was used to make both auth and game calls to the API.

#### Ruby on Rails
The game API was built in Ruby on Rails although this API was provided and
not something built by me.

## Planning and Development Process

#### Planning
To start, I made a checklist of all of the functional and non-functional
requirements to make sure I had a concrete list of everything the app needed
to fulfill.  I also created wireframes to help me plan out my UI and user stories
to help me plan out some of my functionality.

#### Development
Once I started building the game, I wanted to find a way to keep myself
organized so I decided to build out features in the order they'd be used by a
user:

1. Base UI
1. Login functionality - signup, login, change password, sign out (in that order)
1. Create a new game
1. Game logic to handle playing the game and updating the game state
1. Game logic to handle what happens when somebody wins (or ties)
1. Game logic to handle clearing the board so a new one can be played
1. Get game statistics (including new modals and API calls)
1. Revisited the UI to make it usable on smaller screens
1. Went through everything to remove any unnecessary console log statements,
print out user friendly messages to give them feedback on successes/failures,
and general formatting fixes to make everything look a little nicer.

#### Version Control
GitHub was used for version control. For each main unit of work, I created a
separate branch in my git repository (ex. html-css branch, login api branch,
game logic branch, etc.).  I worked on one branch at a time and as I completed
and tested my code, I merged the branches with master.  I tried to save and
commit frequently with detailed commit messages for what was changed.

#### Problem Solving
To start, I tried to test out all of my code as I went.  For the UI that meant
refreshing the browser to make sure changes I was making were being reflected
the way I expected.  For the game logic, it meant sending a lot of console.log
statements to make sure my functions were calling things correctly.  I also
made use of the debugger a lot to validate what was being passed to/from the API.
Doing constant testing throughout the entire development cycle helped ensure
the issues I encountered were minimal and easy to locate.

I also made use of Google and Stack Overflow to help me find answers as they
popped up along with looking at closed issues for the project and asking
classmates.

## Unsolved Problems
Player X logs in and creates a game. Player O can either login within the
same browser session and join Player X's game or click "Play Now" to play as
a generic user. I need to find a way to force Player O to click "Join Game"
if they log in.  If they click "Play Now" then it breaks the current game and
the New Game button has to be clicked to fix it.

## Wireframes
Web images:
[Tic-Tac-Toe Web Pg. 1](http://imgur.com/UepNPW9 "Tic Tac Toe Web Page 1")
[Tic-Tac-Toe Web Pg. 2](http://imgur.com/21dwbm2 "Tic Tac Toe Web Page 2")

Mobile image:
[Tic-Tac-Toe Mobile](http://imgur.com/YyMZ14x "Tic Tac Toe Mobile")

## User Stories
I've never written user stories before, but below are some I attempted:
* As a user, I want a game that allows me to create an account so I can save my games.
* As a user, I want to be able to change my password so I can keep my account more secure.
* As a user, I would like the ability to play against another person.
* As a user, I would like the ability to retreive my game statistics.
* As a user, I would like the abilty to play a new game as soon as one ends.

# Philip Aberneithy Eurosport Unattended Test

Hi, hope you are well.

The task was to use the api to create a basic UI to display player stats. 

The following details my thoughts around User Experience (UX) and Architecture. As well as and How to Run the 
application.

## UX

Initially I drew out from a UX experience prospective what I assumed a User to the Eurosport site would want
to see in the PlayerStat component.

I took the following decisions -

*  To leave out the players sex, as User knows the sex of the player from the picture,
therefore I considered it unneeded data.

*  Country code. The User does not automatically infer the country from the country code, therefore I wanted
the User to see 'Switzerland' or 'Spain'.

* Less of a decision to make, more of a best practice: I knew the PlayerStat component had
to be responsive as it would need to fit in a section of a larger page.

## Architecture

This was a simple app, therefore I didn't want to over engineer it.

The tooling was as follows :

* Create React App to scaffold the application providing me with Webpack, Babel, ESLint, Jest.

* Git for source control, I do this for all builds, as I like keeping track of changes, and
it's easier to roll back changes / features if I make a mistake.

* Using Axios over fetch, as Eurosport has most likely millions of page views, and I'm assuming that a small
percentage of viewers around 3%? Still use IE11 as well as older browsers. If I were to use fetch, I would be
dependent on a polyfill to support it's use in IE11. Therefore I used Axios in this case, as it
supports IE11.

* Pure HTML and CSS used for responsive design. No Bootstrap, No Material Design, as the PlayerStat application
is currently very small, therefore a visual framework is not needed.

* Enzyme for Unit Testing components. I believe that unit testings is one of the most important elements
of application development, therefore I unit test everything.

* Styled Components. To provide more semantic naming of elements, and avoid CSS leaking from one component
to the next.


## How to Run

`npm install` - Installs the components required.
`npm start` - Runs the application in development mode.
`npm test` - Runs test suite.

Many thanks,

Philip 

END
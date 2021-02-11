# JeffClegg_18_Online-Offline-Budget-Trackers

This project was designed as a homework assignment for MSU's coding bootcamp. 

This project has been loaded to my Personal GitHub Page and deployed via a script "deploy": "gh-pages -d build". 
To get this project up and running, you can follow the deployment link that I have included in the Link Section below.

# Table of Contents
1. [Links](#Links)
2. [Project Overview](#projectoverview)
3. [Demo](#demo)
4. [Assignment](#assignment)
5. [File Structure](#filestructure)
6. [Future Development](futureDevelopment)
7. [Scripts](#Scripts)
8. [License](#license)
9. [Execution](Execution)
10. [Credit](#credit)
11. [Creators](#creators)

## Links

* [GitHub Repository](https://github.com/JC72/employee-directory)
* [Active Site](https://jc72.github.io/employee-directory/)

## Project Overview <a name="projectoverview"></a>
* Uses React to create a searchable & sortable embployee directory.  This was done by using the create-react-app {name of app} command in the terminal.

## Demo:

![](https://github.com/JC72/JeffClegg_18_Online-Offline-Budget-Trackers/blob/main/public/assets/video/demovideo.gif)

## Assignment
### This assignment contains the following features:

* Main Page
    * Contains a header for the title of the app.
    
    * One input field that allows user to enter the name of an employee on the list either by first or last name.

    * A Table Header containing the categories (photo, name, phone number, email & date of birth).

    * The Category Names are functional and when clicked on will sort the category ascending and/or descending order.

    * A Table data section containing all the information from randomuser.me API.

    ![Home Page](https://github.com/JC72/JeffClegg_18_Online-Offline-Budget-Trackers/blob/main/public/assets/screenshots/homepage.png)

    ![Home Page](https://github.com/JC72/JeffClegg_18_Online-Offline-Budget-Trackers/blob/main/public/assets/screenshots/apponline.png)

    ![Home Page](https://github.com/JC72/JeffClegg_18_Online-Offline-Budget-Trackers/blob/main/public/assets/screenshots/appoffline.png)



## File Structure <a name="filestructure"></a>

The following folders and what they contain are listed below:

```bash
  |-- EMPLOYEE-DIRECTORY
    |-- build (all these files were not push to masterdirectory but to a gh-pages branch)
        |-- static
            |-- asset-mainfest.json
            |-- favicon.ico
            |-- index.html
            |-- logo192.png
            |-- logo512.png
            |-- mainfest.json
            |-- robots.txt
    |-- node_modules (not push to repo)
    |-- public
    |   |-- asset-mainfest.json
            |-- favicon.ico
            |-- index.html
            |-- logo192.png
            |-- logo512.png
            |-- mainfest.json
            |-- robots.txt
    |-- src
    |   |-- compontents
            |-- EmployeeData
                |-- index.js (This file was not used due to functionality issues)
            |-- MainHeader
                |-- index.js
            |-- SearchBar
                |-- index.js
            |-- TableHeader
                |-- index.js
        |-- pages
            |--MainPage.js
        |-- util
            |-- API.js
        |-- App.css
        |-- App.js
        |-- App.test.js
        |-- index.css
        |-- index.js
        |-- logo.svg
        |-- reportWebVitals.js
        |-- setupTests.js
    |-- .eslintcache
    |-- .gitignore
    |-- README.md
    |-- package-lock.json
    |-- package.json
```

## Future Development <a name="futureDevelopment"></a>

    * Add search button instead of just a input field
    * Create a note to notify the user that there is no employee with that name in the directory when searching for a name that is not there.
    * Add a hover funtion to the table categories to know that they are clickable.

## Scripts

    * npm start
        * Runs the app in development mode

    * npm test
        * Launches the test runnre in the interactive watch mode

    * npm run build
        * builds the app for production to the build folder

    * npm run deploy
        * deploys the app to the github repository for deployment.

## License

This project is licensed under the MIT License License

![Badge for GitHub repo license](https://img.shields.io/github/license/JC72/employee-directory?style=flat&logo=appveyor)

## Execution
### To Execute File:
> Just click on the Active site link in the link section or go to
https://jc72.github.io/employee-directory/ in the web browser.


## Credit

* Would like to thank stackoverflow for helping me find fixes for some of my conflicts.  Especially with several errors when trying to compile the app.

* [Stack Overflow](https://stackoverflow.com/)

* Also would like to thank the React Documentation for certain ways to use react and React-Bootstrap where I found how to make the table.

* [React.org](https://reactjs.org/)
* [ReactTable](https://react-bootstrap.github.io/components/table/)



## Creators:

* **Jeff Clegg** - [Git Hub Profile](https://github.com/JC72)
* MSU BootCamp

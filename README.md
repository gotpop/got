# Got base build

[![Netlify Status](https://api.netlify.com/api/v1/badges/03d4d767-8a36-4443-9a99-e6d88fc32863/deploy-status)](https://app.netlify.com/sites/luminous/deploys)

A static hugo build content magaged with NetlifyCMS.

## Frontend

* Hugo pipes
* SCSS
* JS
* CSS Grid layout


Your website must itself be declared a Hugo module.

Go modules are updated via the use of Git tags.

Go modules inside the website are in memory and will not be rendered to the file system.
### Files

If you wish to view the files within the project you can use `hugo mod vender` this will render the files to a directory called `_vender` in the website´s project root.

https://www.hugofordevelopers.com/articles/master-hugo-modules-managing-themes-as-modules
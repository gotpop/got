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

Deleting the themes folder can create errors even if you are not using one.
### Files

If you wish to view the files within the project you can use `hugo mod vender` this will render the files to a directory called `_vender` in the website´s project root.

## Resources

https://www.hugofordevelopers.com/articles/master-hugo-modules-managing-themes-as-modules

https://craftsmandigital.net/blog/hugo-modules

https://blog.jemu.name/2020/05/hugo-theme-components-modules

https://thewebivore.com/using-replace-in-go-mod-to-point-to-your-local-module

https://discourse.gohugo.io/t/hugo-modules-for-dummies/20758

https://discourse.gohugo.io/t/how-to-add-a-theme-using-modules-for-beginners/20665/3

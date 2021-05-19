# Got base build

[![Netlify Status](https://api.netlify.com/api/v1/badges/b29ee9da-9db5-443e-90ab-866f18f20a36/deploy-status)](https://app.netlify.com/sites/gotpop/deploys)

A static hugo build, content magaged with NetlifyCMS.

## Live site

https://gotpop.netlify.app

## Build tools

* Hugo 
* Netlify
* SCSS
* JS
* CSS Grid layout & subgrid

## Local development

http://localhost:1313

Your website´s `config.toml` file should look something like this whilst developing the module locally. The replaced path only seems to work when it´s relative.

```
go 1.16

// For local testing
replace github.com/gotpop/gotscss => ../gotscss

require github.com/gotpop/gotscss v0.0.1 // indirect
```

## Hints and tips

* Your website must itself be declared a Hugo module.
* Go modules are updated via the use of Git tags. Push the tags to update changes to the module in your project.
* Go modules inside the website are in memory and will not be rendered to the file system.
* Deleting the themes folder from the root can create errors even if you are not using one.
* If you wish to view the files within the project you can use `hugo mod vender` this will render the files to a directory called `_vender` in the website´s project root.
* Ensure correct hugo version is specified in the netlify.toml config file in the project root.
## Resources

https://www.hugofordevelopers.com/articles/master-hugo-modules-managing-themes-as-modules

https://craftsmandigital.net/blog/hugo-modules

https://blog.jemu.name/2020/05/hugo-theme-components-modules

https://thewebivore.com/using-replace-in-go-mod-to-point-to-your-local-module

https://discourse.gohugo.io/t/hugo-modules-for-dummies/20758

https://discourse.gohugo.io/t/how-to-add-a-theme-using-modules-for-beginners/20665/3

https://stackoverflow.com/questions/59014404/referencing-a-go-module-that-is-local

# Netliy config
https://github.com/netlify/netlify-cms/blob/master/dev-test/config.yml

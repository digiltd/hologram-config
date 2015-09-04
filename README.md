# Styleguide new project setup using Hologram and Cortana

My basic setup for creating a self updating styleguide using the excellent [Hologram](https://github.com/trulia/hologram) with the [Cortana](https://github.com/Yago/Cortana) theme.


## Usage

Install **Hologram** :

````
$ gem install hologram
````

Install **Cortana**, **Grunt** and other dependancies :

````
$ bower install
$ npm install
````

I also like to clone the Cortana repo as that gives me the SASS files should I need to make changes.

Create a README.md file in the SASS folder (this will be your styleguide index page)

Customise the hologram_config.yml file to make sure you are including all the dependancies. For example, if you are using any sliders or other JS libraries in the main site, you reference them in the config and Hologram will copy them into the docs folder for you. I have left some in there to show you where they go.



# Adding items to the styleguide

Throughout your SASS, add YAML blocks to document as you go.

Read the [Hologram docs](https://github.com/trulia/hologram) for more details.

I have included my snippet I use in Sublime to quickly create these.

# Build

For a one off build

````
$ hologram
````

Or use grunt to watch for changes to your compiled CSS, then wipe and build a new doc everytime you save.


Note that Grunt is only watching for the compiled CSS (style.css) which is compiled by Codekit.

I like to keep the actual build seperate from the styleguide build. Though you can add a hook in Codekit so it can run the single 'hologram' build command after a sucessful compile if you prefer.

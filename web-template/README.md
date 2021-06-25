# oxn-web-codebase
## Includes:
- ready to use file and folder hierarchy
- webpack
- CSS defaults (including these from [oxn-css](https://github.com/Orexin/oxn-css))
- HTML components

### Webpack
#### Aliases for absolute paths
- `"@"` for `"./src"`
- `"@components"` for `"./src/components/"`
- `"@img"` for `"./src/img/"`
- `"@css"` for `"./src/css/"`
- `"@js"` for `"./src/js/"`

- used as global constant for absolute path to directory:
`import svgCloud from '@img/svg-cloud.svg';`

- you can simply add your own global constant just by adding this line with your path into
```
module.exports = {
	resolve: {
		alias: {
		 "@cats": path.resolve(__dirname, './src/img/cats/'),
		}
	}
}
```

module.exports > resolve > alias
#### Pages and assets bundle
- use `<img src="<%= require('@img/image.png') %>"/>` for importing new images directly into HTML
- use 
```
import svgContainer from '@img/SVG.svg';

document.getElementById('svg-container').innerHTML = svgContainer;
```
 for injecting images or SVGs into code

## how it works
- Use import a repository option when setting up a new project and import this repo
- after import and setup run `npm install` and `npm init`

# Links

- This project is part of the OXN project so feel free to checkout other tools from this amazing universe
[oxn-css](https://github.com/Orexin/oxn-css) </br>
[oxn-forms](https://github.com/Orexin/oxn-forms)
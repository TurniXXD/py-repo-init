#!/bin/bash

yarn global add create-react-app
yarn create react-app client --template typescript && cd client
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
yarn add dotenv @material-ui/core @material-ui/icons axios
touch .env.example
printf '{\n\t"trailingComma": "es5",\n\t"semi": false,\n\t"singleQuote": true,\n\t"useTabs": true,\n\t"printWidth": 120,\n\t"tabWidth": 2\n}' > .prettierrc.json
sed -i '2d' tailwind.config.js
sed -i '2s/^/\tcontent: [ ".\/src\/**\/*.{js,jsx,ts,tsx}", ],\n/' tailwind.config.js
cd src && sed -i '1s/^/@import "tailwindcss\/base";\n@import "tailwindcss\/components";\n@import "tailwindcss\/utilities";\n\n@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n /' index.css
cd ../.. && rm -r cra.sh
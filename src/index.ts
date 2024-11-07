import { execSync } from "child_process";
import fs from "fs"
import prompt from "prompt-sync"
import { readFileSync  , writeFileSync} from 'node:fs';

const Prompt = prompt({ sigint: true });
// this tool is made to help you easily configure your ts environment in one click



let projectName : string
let srcFolder : string
let entryFile : string
let useCommonjs : boolean
let installExpress : boolean
let installDotenv : boolean
let installJest : boolean
let installESLint : boolean
let installPrettier : boolean
let installFutures : boolean
let FDtype : "c" | "n" | "y"


const logInstallBegining = (dep : string)=> {
  console.log(`\n🔧 Installing ${dep} and its type definitions...`);
}
const logSuccessInstall = (dep : string)=> {
  console.log(`✅ ${dep} installed successfully!`);

}
const InstallFeatures = (): { success: boolean; message: string } => {
  console.log("🔧 Installing essential features for your app 😎🙈");

  try {
    // Installing Express
    logInstallBegining("Express")
    execSync("npm install express --save", { stdio: 'inherit' });
    execSync("npm install @types/express --save-dev", { stdio: 'inherit' });
    logSuccessInstall("Express")
    // Installing Dotenv
    logInstallBegining("Dotenv")
    execSync("npm install dotenv --save", { stdio: 'inherit' });
    execSync("npm install @types/dotenv --save-dev", { stdio: 'inherit' });
    generateDotenvFile()
    logSuccessInstall("Dotenv")

    // Installing Jest
    logInstallBegining("jest")
    execSync("npm install jest ts-jest @types/jest --save-dev", { stdio: 'inherit' });
    logSuccessInstall("jest")

    // Installing ESLint
    logInstallBegining("ESLint")
    execSync("npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev", { stdio: 'inherit' });
    generateESLintConfig()
    logSuccessInstall("ESLint")

    // Installing Prettier
    logInstallBegining("Prettier")
    execSync("npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev", { stdio: 'inherit' });
    generatePrettierConfig()
    logSuccessInstall("Prettier")


    return { success: true, message: '✅ All features installed successfully!' };
  } catch (error: any) {
    console.error({ success: false, message: error.message });
    return { success: false, message: error.message };
  }
};

const generateESLintConfig = () => {
  const eslintConfig = `
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // Ajoutez vos règles personnalisées ici
  },
};
`;
  try {
    writeFileSync(".eslintrc.js", eslintConfig);
    console.log("✅ .eslintrc.js created !");
  } catch (error) {
    console.error("❌ Erreur during .eslintrc.js creation :", error);
  }
};
const generateDotenvFile= ()=> {
  const env = `
   PORT =3000 
  `;

  try {
    writeFileSync(".env", env)
    console.log("✅ .env created !");
  } catch (error) {
    console.error("❌ Error lors de la création de .eslintrc.js:", error);

  }

}

// Fonction pour générer le fichier .prettierrc
const generatePrettierConfig = () => {
  const prettierConfig = `
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
`;
  try {
    writeFileSync(".prettierrc", prettierConfig);
    console.log("✅ .prettierrc created!");
  } catch (error) {
    console.error("❌ Error during .prettierrc creation:", error);
  }
};


  console.log(`


 ##::::'#######::'########::'########:'##::: ##:
'##.... ##: ##.... ##: ##.....:: ###:: ##:
 ##:::: ##: ##:::: ##: ##::::::: ####: ##:
 ##:::: ##: ########:: ######::: ## ## ##:
 ##:::: ##: ##.....::: ##...:::: ##. ####:
 ##:::: ##: ##:::::::: ##::::::: ##:. ###:
. #######:: ##:::::::: ########: ##::. ##:
:.......:::..:::::::::........::..::::..::
'##::: ##::'#######::'########::'########:
 ###:: ##:'##.... ##: ##.... ##: ##.....::
 ####: ##: ##:::: ##: ##:::: ##: ##:::::::
 ## ## ##: ##:::: ##: ##:::: ##: ######:::
 ##. ####: ##:::: ##: ##:::: ##: ##...::::
 ##:. ###: ##:::: ##: ##:::: ##: ##:::::::
 ##::. ##:. #######:: ########:: ########:
..::::..:::.......:::........:::........::


    `)
    console.log("Hello Developer! 😃👋 Let's configure the backend of your amazing project. 🚀");
    console.log("======================================================================");
    console.dir("⚠️ Some operations may require administrator rights. Please ensure you're running this program with the necessary permissions.");
    
 const projectNamePrompt = Prompt("The project Name : ");

 const srcFolderPrompt = Prompt("Source folder name (default : src ) : ") 
 const entryFilePromt = Prompt(`Entry file (default :  ${projectNamePrompt}/${srcFolderPrompt.length > 0 ? srcFolderPrompt+"/" :"" }server.ts ) : ` )
 
 const installFeaturesPrompt = Prompt(`Want to add some cool 😎 futures (Y for yes , N for no , C for choose) : `)

 let installExpressPrompt : string
 let installDotenvPrompt : string
 let installJestPromt  : string
 let installESLintPrompt : string
 let installPrettierPromt : string


 if (installFeaturesPrompt.toLocaleLowerCase().startsWith("c")) {
   FDtype = "c"
   console.dir("OK , Now you can select 🙈")
   installExpressPrompt = Prompt(`Do you want to use Express ( yes or no) : `)

   installDotenvPrompt = Prompt(`Do you want to use dotenv ( yes or no)  :`)
   installJestPromt = Prompt(`Do you want Jest for test (yes or no) : `)
   installESLintPrompt =  Prompt(`Do you want Eslint (yes or no) : `)
   installPrettierPromt = Prompt(`Do you want Prettier  (yes or no) : `)

   installFutures = false

   
 } else if (installFeaturesPrompt.toLocaleLowerCase().startsWith("n")) {
  FDtype = "n"
  console.log("Ok , let skip this step 😄")

  installExpressPrompt = ""

  installDotenvPrompt = ""
  installJestPromt = ""
  installESLintPrompt = ""
  installPrettierPromt = ""
  installFutures = false
 } else {
  FDtype = "y"
  console.log("Ok , let Add All 😺")

  installExpressPrompt = ""

  installDotenvPrompt = ""
  installJestPromt = ""
  installESLintPrompt = ""
  installPrettierPromt = ""


  installFutures = true
 }
 

 projectName = projectNamePrompt.length > 0? projectNamePrompt : "my_project"
 srcFolder = srcFolderPrompt.length >0 ? srcFolderPrompt  : "src"
 entryFile = entryFilePromt.length > 0 ? entryFilePromt.includes(".ts") ? entryFilePromt : entryFilePromt+'.ts' : "server.ts"
 



 if (installDotenvPrompt.toLocaleLowerCase().startsWith("y")) {
  installDotenv = true
  console.info("\n let add dotenv 😎")
} else  if (installDotenvPrompt.startsWith("n")){

  installDotenv = false

} else {
  installDotenv = true
}


if (installJestPromt.toLocaleLowerCase().startsWith("y")) {
  installJest = true
  console.info("\n let add Jest 😎")
} else  if (installJestPromt.startsWith("n")){

  installJest = false

} else {
  installJest = true
}


if (installESLintPrompt.toLocaleLowerCase().startsWith("y")) {
  installESLint = true
  console.info("\n let add ESlint 😎")

} else if (installESLintPrompt.startsWith("n")) {
  installESLint = false
} else {

  installESLint = true

}

if (installPrettierPromt.toLocaleLowerCase().startsWith("y")) {
  installPrettier = true
} else if (installPrettierPromt.startsWith("n")){
  installPrettier = false

} else {
  installPrettier = true
}


 let typeNumberChoice;
 do {
   typeNumberChoice = Prompt(`Enter "1" for CommonJS and "2" for Es module : `).trim();
   
   if (typeNumberChoice.toLocaleLowerCase().startsWith("1")) {
     console.log("Using CommonJS");
     useCommonjs = true;
     break;
   } else if (typeNumberChoice.toLocaleLowerCase().startsWith("2")) {
     console.log("Using ES Module");
     useCommonjs = false;
     break;
   } else {
     console.log("Invalid choice. Please enter 1 or 2.");
   }
 } while (true);
 

  const importheader = useCommonjs ? `const express = require('express')   `: `import express from 'express'; `


  if (installExpressPrompt.toLocaleLowerCase().startsWith("y")) {
    installExpress = true
    console.info("\n let work add Express 😎")
  } else  if (installExpressPrompt.startsWith("n")){
  
    installExpress = false
  
  } else {
    installExpress = true
  }
  

  const expressSimpleCode = `
  // import express
  ${importheader}
  import { Request, Response } from 'express';
  
  // init express as app
  const app = express();
  // A method that return hello world as response
  app.get('/', (req: Request, res: Response) => {
  res.send('hello world');
  });

  // express as app will listen to your localhost at PORT 3000
  app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
  });


`

 const helloWorldSimpleCode = `console.log(" welcome to ${projectName} , if you see this log that means your project is well configured and ready ")`

// Création du dossier de projet
console.dir(`Creating ${projectName}...`);

if (!fs.existsSync(projectName)) {
  fs.mkdirSync(projectName);
} else {
  console.error(`Error: The project directory "${projectName}" already exists.`);
  process.exit(1);
}


process.chdir(projectName);

// Initialisation de npm
console.dir("Inilializing the npm...");
try {
  execSync("npm init -y");
} catch (error) {
  console.error("Failed to initialize npm:", error);
  process.exit(1);
}



// Installation des dépendances
console.dir("Installing TypeScript and Node.js types...");

try {
  execSync("npm install typescript @types/node ts-node nodemon --save-dev");
} catch (error) {
  console.error("Failed to initialize npm ts types:", error);
  process.exit(1);
}

// Création de `tsconfig.json`
console.dir("Generation of the tsconfig.json...");

try {
  execSync("npx tsc --init");
} catch (error) {
  console.error("Failed to initialize npm ts :", error);
  process.exit(1);
}

// Modification du fichier `tsconfig.json`
const tsconfig = {
  compilerOptions: {
    target: "es6",
    module: useCommonjs ? "commonjs" : "NodeNext",
    outDir: "./dist",
    rootDir: `./${srcFolder}`,
    strict: true,
    esModuleInterop: true,
  },
  include: [`${srcFolder}/**/*`],
  exclude: ["node_modules"],
};

try {
    fs.writeFileSync("tsconfig.json", JSON.stringify(tsconfig, null, 2));

} catch (error) {
  console.error(error)
}

// Création du dossier `src` et fichier `index.ts`
console.dir(`\n Creating the project ${projectName}...`);

try {
  

  fs.mkdirSync(srcFolder, { recursive: true });
} catch (error) {
  console.log(error)
  
}

if (FDtype === "c") {
  console.dir("installing selected futures ")


if (installExpress) {
  try {
    
  logInstallBegining('Express')
  execSync("\n npm install express --save");
  execSync("\n npm install @types/express --save-dev");

logSuccessInstall("Express")
} catch (error) {
  console.error(error)
  
}
}

if (installDotenv) {
  try {
  logInstallBegining("Dotenv")  
  execSync("npm install dotenv --save");
    execSync("npm install @types/dotenv --save-dev");
    generateDotenvFile()
    logSuccessInstall("Dotenv")
  } catch (error) {
    console.warn("Error installing Dotenv:", error);
  }
}

if (installJest) {
  try {
    logInstallBegining("Jest")
    console.log("\n🔧 Installing Jest and its type definitions...");
    execSync("npm install jest ts-jest @types/jest --save-dev");
    logSuccessInstall("Jest")
  } catch (error) {
    console.warn("Error installing Jest:", error);
  }
}

if (installESLint) {



try {
  logInstallBegining('Eslint')
  execSync("npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev");
  generateESLintConfig()
  logSuccessInstall("Eslint")
} catch (error) {
  throw new Error(`Error installing eslint ${error}`);
}

}
if (installPrettier) {


try {
  logInstallBegining("Prettier")
  execSync("npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev");
  generatePrettierConfig()
  logSuccessInstall("Prettier")
} catch (error) {
  throw new Error(`Error prettier eslint ${error}`);
}

}

} else  if (installFutures){
  const installAll = InstallFeatures()
  if (installAll.success) {
    console.dir(installAll.message)
  } else {
    console.error(installAll.message)
  }
} 


const entryFilePath = `${srcFolder}/${entryFile}`;
try {
  


fs.writeFileSync(entryFilePath, installExpress ? expressSimpleCode : helloWorldSimpleCode);
fs.writeFileSync(".gitignore", "node_modules/\ndist/\n");
} catch (error) {
  console.error(error)
}

console.dir("\n Adding scripts in package.json...");
const packageJson = JSON.parse(readFileSync("package.json", "utf-8"));

packageJson.scripts = {
  build: "tsc",
  start: `node dist/${entryFile.replace('.ts', '.js')}`,
  dev: `nodemon --exec ts-node ${srcFolder}/${entryFile}`,
};

packageJson.type = useCommonjs  ? "commonjs" : "module"

try {
  

fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
} catch (error) {
  console.error(error)
}
const allFuturesmessage = `
 - Installed Features:
    - Express
    - Dotenv
    - Jest
    - ESLint
    -Prettier `

const Futuresinstalled = `
    - Installed Features:
    ${installExpress ? '- Express' : ''}
    ${installDotenv ? '- Dotenv' : ''}
    ${installJest ? '- Jest' : ''}
    ${installESLint ? '- ESLint' : ''}
    ${installPrettier ? '- Prettier' : ''}`

    const currentText = installFutures ? allFuturesmessage : Futuresinstalled

console.log(`
  ========================================
  ✅ Setup Summary:
  - Project Name: ${projectName}
  - Source Folder: ${srcFolder}
  - Entry File: ${entryFile}
  - Module System: ${useCommonjs ? 'CommonJS' : 'ES Modules'}
  ${FDtype !== "n" ? currentText : ""}
  ========================================

  Now Start With :

  - cd ${projectName}
  - npm run build
  - npm start

   and go to your localhost at PORT 3000
  
  🎉 All done! You're ready to start building your project.
  
  ❤️ Thanks for using Open Node Services! Visit our site: https://opennode.tech
  `);
  

console.dir("thanks for using open node services ♥️, visite the site : https://opennode.tech")

fs.writeFileSync("README.md", `
  # ${projectName}
  
  This project is configured automatically with a TypeScript and Node.js environment.
  
  ## Getting Started
  
  ### Installation
  
  \`\`\`bash
  ${ 'npm install'}
  \`\`\`
  
  ### Running the Project
  
  \`\`\`bash
  npm run dev
  \`\`\`
  
  ### Building the Project
  
  \`\`\`bash
  ${'npm run build'}
  \`\`\`
  
  ### Running Tests
  
  \`\`\`bash
  ${'npm test'}
  \`\`\`
  
  ### Environment Variables
  
  Create a \`.env\` file in the root directory and define your variables:
  
  \`\`\`
  PORT=3000
  \`\`\`
  
  ## Project Structure
  
  - \`${srcFolder}/\`: Source code
  - \`dist/\`: Compiled JavaScript files
  - \`tests/\`: Test files (if Jest is installed)
  
  ## Scripts
  
  - \`build\`: Compile TypeScript into JavaScript
  - \`start\`: Run the compiled code
  - \`dev\`: Start development mode with nodemon
  - \`test\`: Run tests with Jest
  
  ## Contributing
  
  Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
  
  ## License
  
  [MIT](LICENSE)
  
  Made with ♥ by Open Node Services
  `);

  console.log("README.md created successfully.");

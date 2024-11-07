
```
npm install -g speed-setup-cli
```


# SPEED - TypeScript & Node.js Project Setup CLI

![SPEED Logo](https://image.pinky.exchange/speed.png) <!-- Replace with your actual logo URL -->

**SPEED** is a powerful Command Line Interface (CLI) tool designed to streamline the setup of TypeScript and Node.js development environments. With SPEED, configuring your backend project becomes effortless—install essential dependencies and generate necessary configuration files with just a few commands.

---

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [Interactive Setup](#interactive-setup)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Features

- **One-Click Setup**: Initialize a TypeScript and Node.js project with a single command.
- **Automated Dependency Installation**: Installs essential packages like Express, dotenv, Jest, ESLint, and Prettier.
- **Configuration File Generation**: Automatically generates configuration files (\`tsconfig.json\`, \`.eslintrc.js\`, \`.prettierrc\`, \`.env\`).
- **Modular Installation Options**: Choose to install specific dependencies or all at once.
- **Flexible Module System**: Select between CommonJS and ES Modules.
- **Interactive CLI**: User-friendly prompts guide you through the setup process.
- **Customizable Project Structure**: Define your project name, source folder, and entry file.

---

## Prerequisites

Before using SPEED, ensure you have the following installed on your machine:

- **Node.js**: Version 12 or higher. [Download Node.js](https://nodejs.org/)
- **npm**: Comes bundled with Node.js. Ensure it's updated to the latest version:

```
npm install -g npm
```
---

## Installation

Install **SPEED** globally using npm to access it from anywhere in your terminal:

```
npm install -g speed-setup-cli
```
> **Note:** You might need administrator privileges to install global packages. Use \`sudo\` on Unix-based systems if necessary:

```
sudo npm install -g speed-setup-cli
```
---

## Usage

After installation, initiate the setup process by running:

```
speed
```
### Interactive Setup

When you execute \`speed\`, you'll be guided through a series of prompts to customize your project setup:

1. **Project Name**: Enter the desired name for your project. A directory with this name will be created.
2. **Source Folder Name**: Specify the name of the source folder (default is \`src\`).
3. **Entry File**: Define the entry file for your application (default is \`server.ts\`).
4. **Feature Installation**:
   - `Y`: Install all essential features (Express, dotenv, Jest, ESLint, Prettier).
   - `N`: Skip the installation of additional features.
   - `C`: Choose specific features to install.
5. **Module System**:
   - `1`: CommonJS
   - `2`: ES Modules

#### Example Session

```
$ speed
Hello Developer! 😃👋 Let's configure the backend of your amazing project. 🚀
=======================================================================
⚠️ Some operations may require administrator rights. Please ensure you're running this program with the necessary permissions.

The project Name: **my_project**
Source folder name (default: src): **src**
Entry file (default: my_project/src/server.ts): **server.ts**
Want to add some cool 😎 features (Y for yes, N for no, C for choose): **Y**

Enter "1" for CommonJS and "2" for ES Modules: **2**

🔧 Installing Express and its type definitions...
✅ Express installed successfully!
🔧 Installing Dotenv and its type definitions...
✅ Dotenv installed successfully!
🔧 Installing Jest and its type definitions...
✅ Jest installed successfully!
🔧 Installing ESLint and its type definitions...
✅ ESLint installed successfully!
🔧 Installing Prettier and its type definitions...
✅ Prettier installed successfully!

========================================
✅ **Setup Summary:**
- **Project Name**: my_project
- **Source Folder**: src
- **Entry File**: server.ts
- **Module System**: ES Modules
- **Installed Features**:
  - Express
  - Dotenv
  - Jest
  - ESLint
  - Prettier
========================================

**Next Steps:**

```
cd my_project
npm run build
npm start

```
Navigate to [http://localhost:3000](http://localhost:3000)

🎉 **All done!** You're ready to start building your project.

❤️ Thanks for using Open Node Services! Visit our site: [https://opennode.tech](https://opennode.tech)
```
---

## Project Structure

After running SPEED, your project directory will have the following structure:

```

my_project/
├── src/
│   └── server.ts
├── dist/
├── node_modules/
├── .env
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md

```
- **src/**: Contains the source TypeScript files.
- **dist/**: Compiled JavaScript files after building the project.
- **.env**: Environment variables.
- **.eslintrc.js**: ESLint configuration.
- **.prettierrc**: Prettier configuration.
- **package.json**: Project metadata and scripts.
- **tsconfig.json**: TypeScript compiler options.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **README.md**: Project documentation.

---

## Scripts

**SPEED** sets up several npm scripts to streamline your development workflow:

- **build**: Compiles TypeScript into JavaScript.

``` 
 npm run build
```
- **start**: Runs the compiled JavaScript code.

```  npm start
```
- **dev**: Starts development mode with nodemon and ts-node for automatic reloading.

```  npm run dev
```
- **test**: Runs tests using Jest (if installed).

```  npm test
```
---

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the GitHub repository.

### How to Contribute

1. **Fork the Repository**
2. **Create a New Branch**

```   git checkout -b feature/YourFeature
```
3. **Commit Your Changes**

```   git commit -m "Add some feature"
```
4. **Push to the Branch**

```   git push origin feature/YourFeature
```
5. **Open a Pull Request**

---

## License

This project is licensed under the [MIT License](LICENSE).

> Ensure you have a \`LICENSE\` file in your repository containing the MIT License text.

---
![SPEED Logo](https://image.pinky.exchange/OPENNODE.png) <!-- Replace with your actual logo URL -->
## Author

**DEVOUE-LI-TCHIBENI Dona-Dieu-Talliane**  
User: `donadev56`

Made with ♥ by [Open Node Services](https://opennode.tech)

---

## Getting Started

1. **Clone the Repository**

```   git clone  https://github.com/Donadev56/speed-setup-cli.git
```
2. **Navigate to the Directory**

```   cd speed-setup-cli
```
3. **Install Dependencies**

```   npm install
```
4. **Run the CLI**

```   speed
```
---

For any questions or support, feel free to reach out via our [GitHub Issues]( https://github.com/Donadev56/speed-setup-cli.git) or visit our [website](https://opennode.tech).

---

© 2024 Open Node Services. All rights reserved.


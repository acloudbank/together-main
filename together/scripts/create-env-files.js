const {generateKeys} = require("./generate-keys");
const { getProjectRootDir } = require("./getProjectRootDir");
const fs = require("fs");
const path = require("path");
const yaml = require('js-yaml');
const dotenv = require('dotenv'); 

const FRONTEND_FOLDER = "frontend";
const BACKEND_FOLDER = "backend";
const YAML_FILE = "env.yaml";
const PROJECT_ROOT_DIR = getProjectRootDir();

function getEnvVars() {
  let env = { ...process.env }

  const localEnvFilePath = path.resolve(PROJECT_ROOT_DIR, ".env.local");
  const exampleEnvFilePath = path.resolve(PROJECT_ROOT_DIR, ".env.example");

  if (fs.existsSync(localEnvFilePath)) {
    env = { ...dotenv.parse(fs.readFileSync(localEnvFilePath, 'utf8')), ...env }
  } else if (fs.existsSync(exampleEnvFilePath)) {
    env = { ...dotenv.parse(fs.readFileSync(exampleEnvFilePath, 'utf8')), ...env }
  } else {
    throw new Error(`No env file found: ${localEnvFilePath} or ${exampleEnvFilePath}`)
  }

  return env
}


async function createEnvFiles() {
  // Path for projects
  const frontendEnvConfigFilePath = path.resolve(
    PROJECT_ROOT_DIR,
    FRONTEND_FOLDER,
    YAML_FILE
  );
  const backendEnvConfigFilePath = path.resolve(
    PROJECT_ROOT_DIR,
    BACKEND_FOLDER,
    YAML_FILE
  );
  try {
    const keys = await generateKeys();
    if (!keys) {
      throw new Error("Unable to generate keys");
    } else {
      // Checking env.yml existence
      if (!fs.existsSync(frontendEnvConfigFilePath)) {
        throw new Error(`No env.yml file found: ${frontendEnvConfigFilePath}`)
      }
      if (!fs.existsSync(backendEnvConfigFilePath)) {
        throw new Error(`No env.yml file found: ${backendEnvConfigFilePath}`)
      }
      // loading required env variable in projects
      let frontendContents = yaml.load(
        fs.readFileSync(frontendEnvConfigFilePath, 'utf8')
      );
      let backendContents = yaml.load(
        fs.readFileSync(backendEnvConfigFilePath, 'utf8')
      );
      
      // loading the complete env variables
      const envVars = getEnvVars();

      // Creating env file for frontend
      let frontendEnv = frontendContents.uses.reduce(
        (accumulator, currentKey) => {
          const currentValue = envVars[`${currentKey}`];
          return `${accumulator}\n${currentKey}=${currentValue}`
        },
        ""
      );
      frontendEnv = `${frontendEnv}\nAUTH_PRIVATE_KEY=${JSON.stringify(keys.AUTH_PRIVATE_KEY)}`;
      fs.writeFileSync("frontend/.env", frontendEnv);

      //creating env file for backend
      let backendEnv = backendContents.uses.reduce(
        (accumulator, currentKey) => {
          const currentValue = envVars[`${currentKey}`];
          return `${accumulator}\n${currentKey}=${currentValue}`
        },
        ""
      );
      backendEnv = `${backendEnv}\nHASURA_GRAPHQL_JWT_SECRET=${JSON.stringify(keys.AUTH_PUBLIC_KEY)}`;
      fs.writeFileSync("backend/.env", backendEnv);

      console.log(".env files created");
    }
  } catch (e) {
    console.log(e);
  }
}

createEnvFiles();

const util = require("util");



const exec = util.promisify(require("child_process").exec);


async function generateKeys() {
  try {
    // Generate the private.pem file
    await exec("openssl genrsa -out private.pem 2048");

    // Generate the public.pem file
    await exec("openssl rsa -in private.pem -pubout > public.pem");

    // Get the value of the private key
    const { stdout: privateKey } = await exec(
      "awk -v ORS='\\n' '1' private.pem"
      );

    // Get the value of the public key
    const { stdout: publicKey } = await exec("awk -v ORS='\\n' '1' public.pem");

    // Construct the values of all the necessary keys
    const AUTH_PRIVATE_KEY = { type: "RS256", key: privateKey };
    const AUTH_PUBLIC_KEY = { type: "RS256", key: publicKey };

    return {
      AUTH_PRIVATE_KEY,
      AUTH_PUBLIC_KEY,
    };
  } catch (err) {
    console.error(err);
  }
}

module.exports = { generateKeys };

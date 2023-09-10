"use strict";
const yargs = require("yargs");
const { appCli } = require("./class_tool");

yargs.command({
  command: "create", // Nom de la commande
  describe: "créer utilisateur admin", // Description de la commande
  builder: {
    email: {
      // --email
      describe: "Adresse email",
      demandOption: true,
      type: "string",
    },
    password: {
      describe: "Mot de passe",
      demandOption: true,
      type: "string",
    },
  },
  handler: async (argv) => {
    appCli.createUser(argv.email, argv.password);
  },
});

yargs.command({
  command: "update", // Nom de la commande
  describe: "créer utilisateur admin", // Description de la commande
  builder: {
    email: {
      // --email
      describe: "Adresse email",
      demandOption: true,
      type: "string",
    },
    password: {
      describe: "Mot de passe",
      demandOption: true,
      type: "string",
    },
  },
  handler: async (argv) => {
    // appCli.createUser(argv.email, argv.password);
  },
});

yargs.parse();

exports.startCli = () => yargs;

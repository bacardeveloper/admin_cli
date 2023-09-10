"use strict";
const { print } = require("print_console_log");
const bcrypt = require("bcrypt");
const { createAdmin } = require("./supabase_api");
require("dotenv").config();

// config
const saltRounds = 10;

class AppCli {
  constructor() {}
  async createUser(email, password) {
    print(`Vos ID de création: ${email} ${password}`);
    bcrypt.hash(password, saltRounds, async (err, hash) => {
      if (hash) {
        await createAdmin(email, hash);
      } else {
        print(err);
      }
    });
  }
  deleteUser() {}
  updateUser() {}
  getAllUsers() {}
}

// export intialization
let appCli = new AppCli();
exports.appCli = appCli;

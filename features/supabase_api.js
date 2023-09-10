"use strict";
require("dotenv").config();
const { createClient } = require("@supabase/supabase-js");
const { print } = require("print_console_log");

// config
const supabase = createClient(
  process.env.URL_PAPERLESSHUB,
  process.env.KEY_PAPERLESSGUB,
  { auth: { persistSession: false } }
);

exports.createAdmin = async (email, password) => {
  try {
    await supabase.from("admin_user").insert({
      nom: "néant",
      prenom: "néant",
      poste: "néant",
      email: email,
      password: password,
    });
    //print(supabase);
  } catch (err) {
    print(err);
  }
};

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyXPG78PwXOJrDng" }).base(
  "appMPBJSSa0nNGRQO"
);

exports.getAllUsers = () => {
  let data = [];
  base("user")
    .select({
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          let email = record.get("email");
          let password = record.get("password");
          data.push({ email, password });
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return "error";
        }
        console.log(data);
        return data;
      }
    );
};
exports.login = (e, p) => {
  let isValid = false;
  base("user")
    .select({
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          if (record.get("email") === e)
            if (record.get("password") === p) isValid = true;
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return "error";
        }
        console.log(isValid);
      }
    );
  console.log(isValid);
  return isValid;
};

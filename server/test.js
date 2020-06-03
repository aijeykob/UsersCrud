const bodyParser = require("body-parser");
const routes = require("./routes");
const app = require("./app");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);
const test = require("ava");
const request = require("supertest");


// function thisIsTrue() {
//   return false;
// }

// test.cb('True is true?', function(t) {
//   t.is(thisIsTrue(), false);
//   t.end();
// });

test.cb("should return token and username", (t) => {
	request(app)
		.post("/registration")
		.send({ username: "sdfsdfsdhkgkfkig", password: "gjdffjfgjk6yutyugh" })
		.end((err, res) => {
			console.log(res.body);
			t.is(res.statusCode, 201);
			t.truthy(res.body.token);
			t.truthy(res.body.user.username);
			t.end();
		});
});
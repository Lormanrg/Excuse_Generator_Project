window.onload = () => {
  document.querySelector("#excuse").innerHTML = excuseGenerator();
  let body = document.body;
  body.style.margin = 0;
  body.style.height = "100vh";
  body.style.display = "flex";
  body.style.justifyContent = "center";
  body.style.alignItems = "center";

  console.log("Hello Rigo from the console!");
};

let excuseGenerator = () => {
  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return `${who[whoIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
};

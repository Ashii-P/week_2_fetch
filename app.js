console.log("Hello world!");

async function getMyStuffFromOverThere() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
}
getMyStuffFromOverThere();

async function getData() {
  const response = await fetch(
    "https://api.github.com/repos/Ashii-P/week_2_fetch"
  );
  const data = await response.json();
  console.log(data.stargazers_count);
}
getData();

const heading = document.createElement("h1");
heading.innerText = data.stargazers_count;

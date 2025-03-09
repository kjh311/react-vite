import "./style.css";

const names = ["Jack", "David", "Kevin", "John"];
const person = {
  Name: "Kevin",
  Age: 46,
  Occupation: "Truck Driver",
  Hobbies: "Gardening, web development, art",
};

const appDiv = document.querySelector("#app");

const content = `
  <div>
    <h1>Hello World</h1>
    ${Object.entries(person)
      .map(
        ([key, value]) => `
      <div>
        <p>${key}: ${value}</p>
      </div>
    `
      )
      .join("")}
  </div>
`;

appDiv.innerHTML = content;

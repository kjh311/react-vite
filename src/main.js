import "./style.css";

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
      .map(([key, value]) => {
        return `<div>
  ${
    value === "Kevin"
      ? `<h1 class="blue">${key}</h1>`
      : `<h1 class="red">${key}</h1>`
  }
  <p>${value}</p>
</div>`;
      })
      .join("")}

      ${names
        .map((name) => {
          return `<div>
        ${
          name === "David"
            ? `<p class="blue">${name}</p>`
            : `<p class="red">${name}</p>`
        }
        </div>`;
        })
        .join("")}

        ${nums
          .map((num) => {
            return `<div>
            ${
              num === 3
                ? `<span class='blue'>${num}</span>`
                : `<span class='red'>${num}</span>`
            }
          </div>`;
          })
          .join("")}
  </div>
`;

appDiv.innerHTML = content;

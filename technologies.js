const technologiesData = [
  {
    name: "React",
    image: "/public/react.svg",
    description:
      "We’ve chosen the world’s most popular rendering engine to power Greywood’s web frontend. With React, you’ll have your pick of learning materials, design systems, and trained employees.",
  },
  {
    name: "GraphQL",
    image: "/public/graphql.svg",
    description:
      "As your project grows, so will the number of client apps that need to talk to your backend. With a GraphQL API as your foundation, you can live in a multi-client world with ease.",
  },
  {
    name: "TypeScript",
    image: "/public/typescript.svg",
    description:
      "Optional TypeScript support gives you the best of JavaScript AND the best of a type system. Even if you build your app in JS, you’ll still get killer autocomplete because Greywood itself is written in TypeScript.",
  },
  {
    name: "Jest",
    image: "/public/jest.svg",
    description:
      "Sleep well at night knowing that your critical code paths are well tested. Greywood augments Jest with “scenarios” making it easy to setup your database for a given scenario, plus GraphQL mocking to easily test data flow.",
  },
  {
    name: "Storybook",
    image: "/public/storybook.svg",
    description:
      "If you design your components in isolation with Storybook, not only will you never have to fight with your framework to see it in a specific state, but you’ll also build up a comprehensive design reference for free!",
  },
];

let sectionHtml = "";
technologiesData.forEach(({ name, image, description }) => {
  sectionHtml += `
          <div class="col">
            <div class="card py-3" style="height:100%">
                <div class="row g-0 flex-md-column">
                    <div class="col-4 col-md-12 d-flex flex-row flex-md-column align-items-center justify-content-center">
                        <img src="${image}" class="img-icon" alt="${name}" />
                        <p class="image-caption fs-5 fw-bold m-2">${name}</p>
                    </div>
                    <div class="col-8 col-md-12">
                        <div class="card-body">
                            <p class="card-text">${description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
});

const parentRow = document.createElement("div");
parentRow.classList.add("row", "row-cols-1", "row-cols-md-5", "g-2");
parentRow.innerHTML = sectionHtml;

document.querySelector("#technologies .container").appendChild(parentRow);

const featureData = [
  {
    name: 'Design',
    image: './public/feature1.webp',
    description:
      'Mockup, build and verify components in Storybook, even in complete isolation from the backend. Work on design without worrying about data.',
  },
  {
    name: 'Test',
    image: './public/feature2.png',
    description:
      "Whether it's TDD or DDT, Redwood uses Jest along with mocks and scenarios to verify functionality on the frontend and the backend.",
  },
  {
    name: 'Auth & Security',
    image: './public/feature3.webp',
    description:
      'Lock down your front and backends with your own self-hosted auth or integrate with nearly a dozen third party auth providers. Verify access with RBAC and Validations.',
  },
  {
    name: 'Data & Transport',
    image: './public/feature4.webp',
    description:
      "When your API is GraphQL you're ready for any client, from the browser to native mobile apps and more. Transform your data with Directives and keep your business logic organized and reusable within Services.",
  },
  {
    name: 'Deploy',
    image: './public/feature5.webp',
    description:
      'Deploy your app to serverless hosts like Netlify and Vercel, build for containers, or deploy to bare metal.',
  },
  {
    name: 'Test',
    image: './public/feature2.png',
    description:
      "Whether it's TDD or DDT, Redwood uses Jest along with mocks and scenarios to verify functionality on the frontend and the backend.",
  },
];

let sectionHtml = '';
featureData.forEach(({ name, image, description }) => {
  sectionHtml += `
           <div class="col">
              <div class="card border-light">
                <div class="row">
                  <div class="col-4 d-flex align-items-center">
                    <img src="${image}" alt="${name}" />
                  </div>
                  <div class="col-8">
                    <div class="card-body">
                      <h5 class="card-title">${name}</h5>
                      <p class="card-text">${description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `;
});

const parentRow = document.createElement('div');
parentRow.classList.add('row', 'row-cols-1', 'row-cols-md-2', 'g-3');
parentRow.innerHTML = sectionHtml;

document.querySelector('#features .container').appendChild(parentRow);

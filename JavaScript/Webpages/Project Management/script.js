let projectsAll = [];

async function fetchProjects() {
  await fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
    .then((res) => res.json())
    .then((data) => {
      projectsAll = data;
      renderProjects(data);
    })
    .catch((err) => console.log(err));
}
document.addEventListener("DOMContentLoaded", () => {
  fetchProjects();
});

function renderProjects(projects) {
  document.getElementById("projectsRows").innerHTML = projects
    .map(
      (p, i) =>
        `<tr>
      <td>${i + 1}</td>
      <td>${p.ProjectName}</td>
      <td>${p.Department}</td>
      <td>${p.priority}</td>
      <td>${p.status}</td>
      <td>${p.startDate}</td>
      <td>${p.EndDate}</td>
    </tr>`,
    )
    .join("");
}

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
  srchInput = searchInput.value;
  console.log(srchInput);
  const filteredArray = projectsAll.filter((p) => {
    return (
      p.ProjectName.toLowerCase().includes(srchInput.toLowerCase()) ||
      p.Details.toLowerCase().includes(srchInput.toLowerCase()) ||
      p.Department.toLowerCase().includes(srchInput.toLowerCase()) ||
      p.priority.toLowerCase().includes(srchInput.toLowerCase()) ||
      p.status.toLowerCase().includes(srchInput.toLowerCase())
    );
  });
  currentPage = 1;
  projectsAll = filteredArray;

  renderProjects(filteredArray);
});

// pagination

fetchProjects();

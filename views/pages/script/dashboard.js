document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
  });

  const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((nav) => nav.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));
    item.classList.add("active");
    document.getElementById(item.dataset.section).classList.add("active");


    if (item.dataset.section === "dashboard") {
      resetBoxSelection();
    }
  });
});

  const userProfile = document.getElementById("userProfile");
  const profileDropdown = document.getElementById("profileDropdown");

  userProfile.addEventListener("click", () => {
    profileDropdown.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!userProfile.contains(e.target)) {
      profileDropdown.classList.remove("show");
    }
  });

  const themeToggle = document.getElementById("themeToggle");

  themeToggle.addEventListener("click", () => {
    document.body.setAttribute(
      "data-theme",
      document.body.getAttribute("data-theme") === "dark" ? "light" : "dark"
    );
    themeToggle.innerHTML =
      document.body.getAttribute("data-theme") === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
  });
  
});
const boxes = document.querySelectorAll(".parts-crm .box");
const boxSections = document.querySelectorAll(".all-sec-tables .section");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((b) => b.classList.remove("selected"));
    boxSections.forEach((section) => section.classList.remove("active"));

    box.classList.add("selected");
    const sectionId = box.getAttribute("data-section");
    document.getElementById(sectionId).classList.add("active");
  });
});

document.querySelector('.parts-crm .box[data-section="section1"]').classList.add("selected");
document.getElementById("section1").classList.add("active");


function resetBoxSelection() {
  boxes.forEach((box) => box.classList.remove("selected"));
  boxSections.forEach((section) => section.classList.remove("active"));

  document.querySelector('.parts-crm .box[data-section="section1"]').classList.add("selected");
  document.getElementById("section1").classList.add("active");
}

const departmentSelect = document.getElementById('department');
        const employeesSection = document.getElementById('employeesSection');
        const assignButton = document.getElementById('assignButton');
        const confirmModal = document.getElementById('confirmModal');
        const modalMessage = document.getElementById('modalMessage');
        const yesButton = document.getElementById('yesButton');
        const noButton = document.getElementById('noButton');
        const successMessage = document.getElementById('successMessage');

        departmentSelect.addEventListener('change', function() {
            if (this.value) {
                employeesSection.classList.add('visible');
                successMessage.classList.remove('visible');
            } else {
                employeesSection.classList.remove('visible');
            }
        });

        // Handle assign button click
        assignButton.addEventListener('click', function() {
            const selectedEmployees = Array.from(document.querySelectorAll('.employee-checkbox:checked'))
                .map(checkbox => checkbox.value);

            if (selectedEmployees.length === 0) {
                alert('Please select at least one employee.');
                return;
            }

            const employeeNames = selectedEmployees.join(', ');
            modalMessage.textContent = `Do you want to assign work to: ${employeeNames}?`;
            confirmModal.classList.add('visible');
        });

        yesButton.addEventListener('click', function() {
            confirmModal.classList.remove('visible');
            successMessage.classList.add('visible');
            

            document.querySelectorAll('.employee-checkbox').forEach(checkbox => {
                checkbox.checked = false;
            });
        });

        noButton.addEventListener('click', function() {
            confirmModal.classList.remove('visible');
        });

        confirmModal.addEventListener('click', function(e) {
            if (e.target === confirmModal) {
                confirmModal.classList.remove('visible');
            }
        });
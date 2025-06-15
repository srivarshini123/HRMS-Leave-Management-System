// Set default admin only if not already set
if (!localStorage.getItem("adminUser")) {
  const defaultAdmin = {
    username: "admin",
    password: "admin123"
  };
  localStorage.setItem("adminUser", JSON.stringify(defaultAdmin));
}

document.getElementById("adminLoginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevents page reload

  const username = document.getElementById("adminUsername").value;
  const password = document.getElementById("adminPassword").value;

  const savedAdmin = JSON.parse(localStorage.getItem("adminUser"));

  if (username === savedAdmin.username && password === savedAdmin.password) {
    alert("Login successful!");
    window.location.href = "admin_dashboard.html";
  } else {
    alert("Invalid credentials!");
  }
});

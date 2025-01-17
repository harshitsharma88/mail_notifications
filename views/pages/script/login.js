const toggleModeIcon = document.getElementById('toggleMode');
toggleModeIcon.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  
 
  toggleModeIcon.classList.toggle('ri-moon-line');
  toggleModeIcon.classList.toggle('ri-sun-line');
});


async function login(username, password) {
    const url = "/login"; 
    const loginData = {
        username: username,
        password: password,
    };

    try {
        const response = await fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(loginData), 
        });

        const result = await response.json(); 

        if (response.ok) {
            console.log("Success:", result.message);
            location.href = 'dashboard.html'
            
        } else {
            console.log("Error:", result.message);
            alert(result.message); 
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        alert("An error occurred while logging in. Please try again.");
    }
}


document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); 


    const username = document.getElementById("userId").value;
    const password = document.getElementById("password").value;

  
    login(username, password);
});







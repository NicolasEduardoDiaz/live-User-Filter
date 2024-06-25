document.addEventListener("DOMContentLoaded", async () => {
    const resultList = document.getElementById("result");
    const filterInput = document.getElementById("filter");

    if (!resultList || !filterInput) {
        console.error("Los elementos resultList o filterInput no se encontraron en el DOM.");
        return;
    }

    try {
        const response = await fetch('https://6674179975872d0e0a950e53.mockapi.io/user');
        console.log("Response status:", response.status);
        if (!response.ok) {
            throw new Error("Could not obtain user data");
        }
        const data = await response.json();
        console.log("Data received:", data);

        const displayUsers = (users) => {
            resultList.innerHTML = "";

            users.forEach(user => {
                const li = document.createElement("li");
                li.innerHTML = /*html*/`
                <img src="${user.avatar}" alt="${user.name_full}">
                <div class="user_info">
                        <h4>${user.name_full}</h4>
                        <p>${user.description}</p>
                </div>
                `;
                resultList.appendChild(li);
            });
        };
        displayUsers(data);

        filterInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filterUsers = data.filter(user => 
                user.name_full.toLowerCase().includes(searchTerm) || user.description.toLowerCase().includes(searchTerm)
            );
            displayUsers(filterUsers);
        });
    } catch (error) {
        console.error("Error al obtener la data:", error);
    }
});

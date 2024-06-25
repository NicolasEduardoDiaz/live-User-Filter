const resultList = document.getElementById("result");

const users = [
    { avatar: 'avatar_url1', name_full: 'Name User 1', description: 'Description Users 1' },
    { avatar: 'avatar_url2', name_full: 'Name User 2', description: 'Description Users 2' }
];

export const getUsers = ()=> {
    resultList.innerHTML = users.map(user =>
        /*html*/
        `<li>
            <img src="${user.avatar}">
            <div class="user_info">
                <h4>${user.name_full}</h4>
                <p>${user.description}</p>
            </div>
        </li>`
    ).join('');
}

getUsers();
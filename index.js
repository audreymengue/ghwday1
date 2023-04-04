const usersname = document.getElementById("usersname");
const usersaccount = document.getElementById("usersaccount");
const usersrep = document.getElementById("usersrep");
const getUsers = document.getElementById('getUser')


async function getStackExchangeUsers() {
    const apiUrl = "https://api.stackexchange.com/2.3/users?order=desc&sort=reputation&site=stackoverflow";

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
    const usersFromAPI = data.items.map(item => ({
        name: item.display_name,
        account: item.account_id,
        rep: item.reputation
    }));
    usersFromAPI.map((user) => {
        usersname.textContent = user.name
        usersaccount.textContent = user.account
        usersrep.textContent = user.rep
    })
}

getUsers.addEventListener('click', function () {
    getStackExchangeUsers();

})

let userName = prompt('enter username');
const URL = `https://api.github.com/users/${userName}/events/public`;
// const URL = `https://api.github.com/users/korgeron/events/public`;


fetch(URL, {headers: {'Authorization': `token ${GITHUB_TOKEN_KEY}`}}).then((resp) => {
    return resp.json();
})


    .then((data) => {
        return data.filter((filteredData) => {
            if (filteredData.type === 'PushEvent') {
                return filteredData
            }
        });
    })

    .then((filter) => {
        console.log(filter);
        console.log(filter[0].created_at);
        return filter[0].created_at;
    })

    .catch((error) => {
        console.error(error);
    })

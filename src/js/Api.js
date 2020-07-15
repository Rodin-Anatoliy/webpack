export class Api {
    constructor(infoForFetch) {
        this.infoForFetch = infoForFetch;
    }

    patchUserProfile({name, job}) {

        return fetch(`${this.infoForFetch.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.infoForFetch.headers,
            body: JSON.stringify({
                name: name,
                about: job
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(console.log(`Ошибка: ${res.status}`));
        });

    }

    getData(adress) {

        return fetch(`${this.infoForFetch.baseUrl}/${adress}`, {
                headers: {
                    authorization: this.infoForFetch.headers.authorization
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(console.log(`Ошибка: ${res.status}`));
            });
            

    }

}
function show() {
    let http = new XMLHttpRequest();
    http.open('GET', 'https://restcountries.com/v2/all', true);
    let table = document.getElementById('table');
    http.onload = function () {
        if (http.status === 200) {
            let countries = JSON.parse(this.response);
            console.log(countries);
            let tr = document.createElement('tr')
            countries.forEach(function (country, index) {
                if (index % 10 === 0) {
                    tr = document.createElement('tr')
                }

                let td = document.createElement('td');
                let image = document.createElement('img');
                image.src = country.flag;
                image.style.width = '100px';
                image.style.height = '100px';
                td.innerHTML = country.name;
                td.appendChild(image);
                tr.appendChild(td);
                if (index % 10 === 0) {
                    table.appendChild(tr)
                }
            })


        }
    }
    http.send();

}





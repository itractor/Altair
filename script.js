function fetchTopStocks() {
    fetch('http://localhost:8080/topStocks', {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      })
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    var list = document.createElement("ul");
                    list.setAttribute('class', 'list-group');
                    for (let i of data) {
                        var item = document.createElement("li");
                        item.setAttribute('class', 'list-group-item')
                        item.innerHTML = i["name"];
                        list.appendChild(item);
                    }
                    document.getElementById("stocklist").appendChild(list);
                });

            }
        ).catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
}

window.onload = fetchTopStocks;
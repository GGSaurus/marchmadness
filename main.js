var day = 18;
var month = 3;
var year = 2025;

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openSubTab(evt, subTabName) {
    var i, subtabcontent, subtablinks;
    subtabcontent = document.getElementsByClassName("sub-tab-content");
    for (i = 0; i < subtabcontent.length; i++) {
        subtabcontent[i].style.display = "none";
    }
    subtablinks = document.getElementsByClassName("sub-tab-button");
    for (i = 0; i < subtablinks.length; i++) {
        subtablinks[i].className = subtablinks[i].className.replace(" active", "");
    }
    document.getElementById(subTabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function getDate() {
    var date = new Date();
    day = date.getDate();
    month = '0' + (date.getMonth() + 1);
    year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    document.getElementById("date").innerHTML = year + month + day;
}
//'https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?groups&dates=20250318-20250408'

function updateMenGames() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?groups&dates=20250318-20250408')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const games =  data.events;
            const gameDiv = document.getElementById('mengames');
            console.log("found games");
            games.forEach(game => {
                const firstTeam = game.competitions[0].competitors[0].team.shortDisplayName;
                const secondTeam = game.competitions[0].competitors[1].team.shortDisplayName;
                const firstScore = game.competitions[0].competitors[0].score;
                const secondScore = game.competitions[0].competitors[1].score;
                const gameStatus = game.status.type.description;

                if (document.getElementById(game.name) != null) {
                    document.getElementById(game.name).textContent = `${firstTeam} ${firstScore} - ${secondScore} ${secondTeam} (${gameStatus})`;
                }
                else {
                    const gameElement = document.createElement('p');
                    gameElement.textContent = `${firstTeam} ${firstScore} - ${secondScore} ${secondTeam} (${gameStatus})`;
                    gameElement.id = game.name;
                    gameDiv.appendChild(gameElement);
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function updateWomenGames() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard?groups&dates=20250319-20250407')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const games =  data.events;
            const gameDiv = document.getElementById('womengames');
            console.log("found games");
            games.forEach(game => {
                const firstTeam = game.competitions[0].competitors[0].team.shortDisplayName;
                const secondTeam = game.competitions[0].competitors[1].team.shortDisplayName;
                const firstScore = game.competitions[0].competitors[0].score;
                const secondScore = game.competitions[0].competitors[1].score;
                const gameStatus = game.status.type.description;

                if (document.getElementById(game.name) != null) {
                    document.getElementById(game.name).textContent = `${firstTeam} ${firstScore} - ${secondScore} ${secondTeam} (${gameStatus})`;
                }
                else {
                    const gameElement = document.createElement('p');
                    gameElement.textContent = `${firstTeam} ${firstScore} - ${secondScore} ${secondTeam} (${gameStatus})`;
                    gameElement.id = game.name;
                    gameDiv.appendChild(gameElement);
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

updateMenGames();
updateWomenGames();

setInterval(getDate, 1000);
setInterval(updateMenGames, 5000);
setInterval(updateWomenGames, 5000);

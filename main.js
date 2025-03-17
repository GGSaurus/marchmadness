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
}

function updateMenGames() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?groups=100&dates=20250318-20250408')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const games = data.events;
            const gameDiv = document.getElementById('mengames');
            gameDiv.innerHTML = ''; // Clear previous content

            // Get today's date in Chicago time (Central Time Zone)
            const chicagoTime = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
            const today = new Date(chicagoTime).toISOString().split('T')[0];

            // Group games by date in Chicago time
            const gamesByDate = {};
            games.forEach(game => {
                const gameDateUTC = new Date(game.date);
                const chicagoOffset = -5;
                const gameDateChicago = new Date(gameDateUTC.getTime() + chicagoOffset * 60 * 60 * 1000);
                const gameDate = gameDateChicago.toISOString().split('T')[0]; // Extract the date (YYYY-MM-DD)

                if (!gamesByDate[gameDate]) {
                    gamesByDate[gameDate] = [];
                }
                gamesByDate[gameDate].push(game);
            });

            // Sort dates to ensure today's games are at the top
            const sortedDates = Object.keys(gamesByDate).sort((a, b) => {
                if (a === today) return -1; // Move today's games to the top
                if (b === today) return 1;
                return new Date(a) - new Date(b);
            });

            // Display games grouped by date
            sortedDates.forEach(date => {
                const dateHeader = document.createElement('h3');
                dateHeader.textContent = date === today ? `${date} (Today)` : date;
                gameDiv.appendChild(dateHeader);

                gamesByDate[date].forEach(game => {
                    const firstTeam = game.competitions[0].competitors[0].team.shortDisplayName;
                    const secondTeam = game.competitions[0].competitors[1].team.shortDisplayName;
                    const firstScore = game.competitions[0].competitors[0].score;
                    const secondScore = game.competitions[0].competitors[1].score;
                    const gameStatus = game.status.type.description;

                    const gameElement = document.createElement('p');
                    gameElement.textContent = `${firstTeam} ${firstScore} - ${secondScore} ${secondTeam} (${gameStatus})`;

                    // Highlight games in progress or at halftime
                    if (gameStatus.toLowerCase().includes('in progress') || gameStatus.toLowerCase().includes('halftime')) {
                        gameElement.style.color = 'red';
                        gameElement.style.fontWeight = 'bold';
                    }

                    gameDiv.appendChild(gameElement);
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

function updateWomenGames() {
    fetch('https://site.api.espn.com/apis/site/v2/sports/basketball/womens-college-basketball/scoreboard?groups=100&dates=20250319-20250407')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const games = data.events;
            const gameDiv = document.getElementById('womengames');
            gameDiv.innerHTML = ''; // Clear previous content

            // Get today's date in Chicago time (Central Time Zone)
            const chicagoTime = new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' });
            const today = new Date(chicagoTime).toISOString().split('T')[0];

            // Group games by date in Chicago time
            const gamesByDate = {};
            games.forEach(game => {
                // Convert game date from UTC to Chicago time
                const gameDateUTC = new Date(game.date);
                const chicagoOffset = -5;
                const gameDateChicago = new Date(gameDateUTC.getTime() + chicagoOffset * 60 * 60 * 1000);
                const gameDate = gameDateChicago.toISOString().split('T')[0]; // Extract the date (YYYY-MM-DD)

                if (!gamesByDate[gameDate]) {
                    gamesByDate[gameDate] = [];
                }
                gamesByDate[gameDate].push(game);
            });

            // Sort dates to ensure today's games are at the top
            const sortedDates = Object.keys(gamesByDate).sort((a, b) => {
                if (a === today) return -1; // Move today's games to the top
                if (b === today) return 1;
                return new Date(a) - new Date(b);
            });

            // Display games grouped by date
            sortedDates.forEach(date => {
                const dateHeader = document.createElement('h3');
                dateHeader.textContent = date === today ? `${date} (Today)` : date;
                gameDiv.appendChild(dateHeader);

                gamesByDate[date].forEach(game => {
                    const firstTeam = game.competitions[0].competitors[0].team.shortDisplayName;
                    const secondTeam = game.competitions[0].competitors[1].team.shortDisplayName;
                    const firstScore = game.competitions[0].competitors[0].score;
                    const secondScore = game.competitions[0].competitors[1].score;
                    const gameStatus = game.status.type.description;

                    const gameElement = document.createElement('p');
                    gameElement.textContent = `${firstTeam} ${firstScore} - ${secondScore} ${secondTeam} (${gameStatus})`;

                    // Highlight games in progress or at halftime
                    if (gameStatus.toLowerCase().includes('in progress') || gameStatus.toLowerCase().includes('halftime')) {
                        gameElement.style.color = 'red';
                        gameElement.style.fontWeight = 'bold';
                    }

                    gameDiv.appendChild(gameElement);
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

updateMenGames();
updateWomenGames();

setInterval(getDate, 1000);
setInterval(updateMenGames, 5000);
setInterval(updateWomenGames, 5000);

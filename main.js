function openSection(evt, sectionName, sectionClass, buttonClass) {
    var i, sectionContent, sectionButtons;
    sectionContent = document.getElementsByClassName(sectionClass);
    for (i = 0; i < sectionContent.length; i++) {
        sectionContent[i].style.display = "none";
    }
    sectionButtons = document.getElementsByClassName(buttonClass);
    for (i = 0; i < sectionButtons.length; i++) {
        sectionButtons[i].className = sectionButtons[i].className.replace(" active", "");
    }
    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.className += " active";
}

function updateGames(gender, startDate, endDate, elementId) {
    const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/${gender}-college-basketball/scoreboard?groups=100&dates=${startDate}-${endDate}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const games = data.events;
            const gameDiv = document.getElementById(elementId);
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
                    const firstSeed = game.competitions[0].competitors[0].curatedRank.current != 99 ? `(${game.competitions[0].competitors[0].curatedRank.current})` : '';
                    const secondSeed = game.competitions[0].competitors[1].curatedRank.current != 99 ? `(${game.competitions[0].competitors[1].curatedRank.current})` : '';
                    const gameStatus = game.status.type.description;

                    const gameElement = document.createElement('p');
                    gameElement.textContent = `${firstSeed} ${firstTeam} ${firstScore} - ${secondScore} ${secondSeed} ${secondTeam} (${gameStatus})`;

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

// Update calls to the new function
updateGames('mens', '20250318', '20250408', 'mengames');
updateGames('womens', '20250319', '20250407', 'womengames');

setInterval(() => updateGames('mens', '20250318', '20250408', 'mengames'), 5000);
setInterval(() => updateGames('womens', '20250319', '20250407', 'womengames'), 5000);
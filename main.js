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

let menBracketData = [
    {name: "Actual"},
    {name: "Geoffrey", firstfour1: "St Francis PA", firstfour2: "San Diego St", firstfour3: "Mount St Marys", firstfour4: "Xavier", south1: "Auburn", south8: "Louisville", south5: "UC San Diego", south4: "Texas A&M", south6: "Ole Miss", south3: "Iowa State", south7: "Marquette", south2: "Michigan St", west1: "Florida", west8: "UConn", west5: "Colorado St", west4: "Grand Canyon", west6: "Drake", west3: "Texas Tech", west7: "Arkansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Oregon", east4: "Arizona", east6: "VCU", east3: "Wisconsin", east7: "Saint Mary's", east2: "Alabama", midwest1: "Houston", midwest8: "Gonzaga", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Kentucky", midwest7: "Utah State", midwest2: "Tennessee", south16_1: "Auburn", south16_4: "UC San Diego", south16_3: "Iowa State", south16_2: "Michigan St", west16_1: "Florida", west16_4: "Colorado St", west16_3: "Texas Tech", west16_2: "St John's", east16_1: "Duke", east16_4: "Arizona", east16_3: "Wisconsin", east16_2: "Alabama", midwest16_1: "Houston", midwest16_4: "Clemson", midwest16_3: "Kentucky", midwest16_2: "Tennessee", south8_1: "Auburn", south8_2: "Michigan St", west8_1: "Florida", west8_2: "Texas Tech", east8_1: "Duke", east8_2: "Alabama", midwest8_1: "Houston", midwest8_2: "Tennessee", south: "Michigan St", west: "Florida", east: "Duke", midwest: "Houston", finalleft: "Florida", finalright: "Duke", champion: "Duke"},
    {name: "Dad 'Broome' Ben", firstfour1: "Alabama St", firstfour2: "North Carolina", firstfour3: "Mount St Marys", firstfour4: "Texas", south1: "Auburn", south8: "Louisville", south5: "Michigan", south4: "Yale", south6: "Ole Miss", south3: "Iowa State", south7: "Marquette", south2: "Michigan St", west1: "Florida", west8: "UConn", west5: "Colorado St", west4: "Maryland", west6: "Drake", west3: "Texas Tech", west7: "Arkansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Oregon", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Saint Mary's", east2: "Alabama", midwest1: "Houston", midwest8: "Gonzaga", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Kentucky", midwest7: "Utah State", midwest2: "Tennessee", south16_1: "Auburn", south16_4: "Michigan", south16_3: "Iowa State", south16_2: "Michigan St.", west16_1: "Florida", west16_4: "Maryland", west16_3: "Texas Tech", west16_2: "St John's", east16_1: "Duke", east16_4: "Oregon", east16_3: "BYU", east16_2: "Alabama", midwest16_1: "Houston", midwest16_4: "Clemson", midwest16_3: "Kentucky", midwest16_2: "Tennessee", south8_1: "Auburn", south8_2: "Michigan St", west8_1: "Florida", west8_2: "Texas Tech", east8_1: "Duke", east8_2: "Alabama", midwest8_1: "Houston", midwest8_2: "Tennessee", south: "Auburn", west: "Florida", east: "Duke", midwest: "Tennessee", finalleft: "Auburn", finalright: "Duke", champion: "Auburn"},
    {name: "Helena", firstfour1: "St Francis PA", firstfour2: "San Diego St", firstfour3: "American", firstfour4: "Xavier", south1: "Auburn", south8: "Louisville", south5: "Michigan", south4: "Texas A&M", south6: "Ole Miss", south3: "Lipscomb", south7: "Marquette", south2: "Michigan St", west1: "Florida", west8: "Oklahoma", west5: "Memphis", west4: "Grand Canyon", west6: "Drake", west3: "Texas Tech", west7: "Arkansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Liberty", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Vanderbilt", east2: "Alabama", midwest1: "Houston", midwest8: "Gonzaga", midwest5: "McNeese", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Troy", midwest7: "UCLA", midwest2: "Wofford", south16_1: "Auburn", south16_4: "Texas A&M", south16_3: "Ole Miss", south16_2: "Michigan St", west16_1: "Florida", west16_4: "Memphis", west16_3: "Texas Tech", west16_2: "St John's", east16_1: "Duke", east16_4: "Liberty", east16_3: "BYU", east16_2: "Alabama", midwest16_1: "Houston", midwest16_4: "Purdue", midwest16_3: "Illinois", midwest16_2: "UCLA", south8_1: "Auburn", south8_2: "Ole Miss", west8_1: "Florida", west8_2: "Texas Tech", east8_1: "Duke", east8_2: "Alabama", midwest8_1: "Purdue", midwest8_2: "Illinois", south: "Auburn", west: "Texas Tech", east: "Duke", midwest: "Illinois", finalleft: "Auburn", finalright: "Duke", champion: "Auburn"},
    {name: "Unc G", firstfour1: "St Francis PA", firstfour2: "North Carolina", firstfour3: "American", firstfour4: "Xavier", south1: "Auburn", south8: "Creighton", south5: "Michigan", south4: "Yale", south6: "North Carolina", south3: "Iowa State", south7: "New Mexico", south2: "Michigan St", west1: "Florida", west8: "UConn", west5: "Colorado St", west4: "Maryland", west6: "Drake", west3: "Texas Tech", west7: "Kansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Oregon", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Vanderbilt", east2: "Alabama", midwest1: "Houston", midwest8: "Georgia", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Kentucky", midwest7: "UCLA", midwest2: "Tennessee", south16_1: "Auburn", south16_4: "Michigan", south16_3: "Iowa State", south16_2: "New Mexico", west16_1: "Florida", west16_4: "Maryland", west16_3: "Texas Tech", west16_2: "St John's", east16_1: "Duke", east16_4: "Arizona", east16_3: "Wisconsin", east16_2:"Alabama", midwest16_1: "Houston", midwest16_4: "Purdue", midwest16_3: "Illinois", midwest16_2: "UCLA", south8_1: "Michigan", south8_2: "Iowa State", west8_1: "Florida", west8_2: "St John's", east8_1: "Arizona", east8_2: "Wisconsin", midwest8_1: "Houston", midwest8_2: "Illinois", south: "Michigan", west: "St John's", east: "Wisconsin", midwest: "Illinois", finalleft: "Michigan", finalright: "Illinois", champion: "Illinois"},
    {name: "Eric", firstfour1: "Alabama St", firstfour2: "North Carolina", firstfour3: "American", firstfour4: "Texas", south1: "Auburn", south8: "Creighton", south5: "Michigan", south4: "Yale", south6: "North Carolina", south3: "Iowa State", south7: "New Mexico", south2: "Michigan St", west1: "Florida", west8: "UConn", west5: "Colorado St", west4: "Maryland", west6: "Drake", west3: "UNC Wilmington", west7: "Arkansas", west2: "St John's", east1: "Duke", east8: "Mississippi St", east5: "Oregon", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Vanderbilt", east2: "Alabama", midwest1: "Houston", midwest8: "Gonzaga", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Kentucky", midwest7: "UCLA", midwest2: "Tennessee", south16_1: "Auburn", south16_4: "Michigan", south16_3: "Iowa State", south16_2: "Michigan St", west16_1: "UConn", west16_4: "Maryland", west16_3: "Drake", west16_2: "????????", east16_1: "Duke", east16_4: "Oregon", east16_3: "BYU", east16_2: "Alabama", midwest16_1: "Houston", midwest16_4: "Purdue", midwest16_3: "Illinois", midwest16_2: "Tennessee", south8_1: "Auburn", south8_2: "Iowa State", west8_1: "Maryland", west8_2: "Drake", east8_1: "Duke", east8_2: "BYU", midwest8_1: "Pudue", midwest8_2: "Tennessee", south: "Iowa State", west: "Maryland", east: "Duke", midwest: "Purdue", finalleft: "Iowa State", finalright: "Duke", champion: "Iowa State"},
    {name: "Camilla", firstfour1: "Alabama St", firstfour2: "San Diego St", firstfour3: "American", firstfour4: "Xavier", south1: "Auburn", south8: "Creighton", south5: "Michigan", south4: "Texas A&M", south6: "Ole Miss", south3: "Iowa State", south7: "Marquette", south2: "Michigan St", west1: "FLorida", west8: "Oklahoma", west5: "Memphis", west4: "Maryland", west6: "Missouri", west3: "Texas Tech", west7: "Kansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Oregon", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Saint Mary's", east2: "Alabama", midwest1: "Houston", midwest8: "Georgia", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Kentucky", midwest7: "UCLA", midwest2: "Tennessee"}
]

function countMenScore() {
    let menScoreData = [];
    const actual = menBracketData[0];
    menBracketData.forEach(data => {
        let score = 0;
        if (data.firstfour1 == actual.firstfour1) {
            score += 1;
        }
        if (data.firstfour2 == actual.firstfour2) {
            score += 1;
        }
        if (data.firstfour3 == actual.firstfour3) {
            score += 1;
        }
        if (data.firstfour4 == actual.firstfour4) {
            score += 1;
        }
        if (data.south1 == actual.south1) {
            score += 2;
        }
        if (data.south8 == actual.south8) {
            score += 2;
        }
        if (data.south5 == actual.south5) {
            score += 2;
        }
        if (data.south4 == actual.south4) {
            score += 2;
        }
        if (data.south6 == actual.south6) {
            score += 2;
        }
        if (data.south3 == actual.south3) {
            score += 2;
        }
        if (data.south7 == actual.south7) {
            score += 2;
        }
        if (data.south2 == actual.south2) {
            score += 2;
        }
        if (data.west1 == actual.west1) {
            score += 2;
        }
        if (data.west8 == actual.west8) {
            score += 2;
        }
        if (data.west5 == actual.west5) {
            score += 2;
        }
        if (data.west4 == actual.west4) {
            score += 2;
        }
        if (data.west6 == actual.west6) {
            score += 2;
        }
        if (data.west3 == actual.west3) {
            score += 2;
        }
        if (data.west7 == actual.west7) {
            score += 2;
        }
        if (data.west2 == actual.west2) {
            score += 2;
        }
        if (data.east1 == actual.east1) {
            score += 2;
        }
        if (data.east8 == actual.east8) {
            score += 2;
        }
        if (data.east5 == actual.east5) {
            score += 2;
        }
        if (data.east4 == actual.east4) {
            score += 2;
        }
        if (data.east6 == actual.east6) {
            score += 2;
        }
        if (data.east3 == actual.east3) {
            score += 2;
        }
        if (data.east7 == actual.east7) {
            score += 2;
        }
        if (data.east2 == actual.east2) {
            score += 2;
        }
        if (data.midwest1 == actual.midwest1) {
            score += 2;
        }
        if (data.midwest8 == actual.midwest8) {
            score += 2;
        }
        if (data.midwest5 == actual.midwest5) { 
            score += 2;
        }
        if (data.midwest4 == actual.midwest4) {
            score += 2;
        }
        if (data.midwest6 == actual.midwest6) {
            score += 2;
        }
        if (data.midwest3 == actual.midwest3) {
            score += 2;
        }
        if (data.midwest7 == actual.midwest7) {
            score += 2;
        }
        if (data.midwest2 == actual.midwest2) {
            score += 2;
        }
        if (data.south16_1 == actual.south16_1) {
            score += 4;
        }
        if (data.south16_4 == actual.south16_4) {
            score += 4;
        }
        if (data.south16_3 == actual.south16_3) {
            score += 4;
        }
        if (data.south16_2 == actual.south16_2) {
            score += 4;
        }
        if (data.west16_1 == actual.west16_1) {
            score += 4;
        }
        if (data.west16_4 == actual.west16_4) {
            score += 4;
        }
        if (data.west16_3 == actual.west16_3) {
            score += 4;
        }
        if (data.west16_2 == actual.west16_2) {
            score += 4;
        }
        if (data.east16_1 == actual.east16_1) {
            score += 4;
        }
        if (data.east16_4 == actual.east16_4) {
            score += 4;
        }
        if (data.east16_3 == actual.east16_3) {
            score += 4;
        }
        if (data.east16_2 == actual.east16_2) {
            score += 4;
        }
        if (data.midwest16_1 == actual.midwest16_1) {
            score += 4;
        }
        if (data.midwest16_4 == actual.midwest16_4) {
            score += 4;
        }
        if (data.midwest16_3 == actual.midwest16_3) {
            score += 4;
        }
        if (data.midwest16_2 == actual.midwest16_2) {
            score += 4;
        }
        if (data.south8_1 == actual.south8_1) {
            score += 8;
        }
        if (data.south8_2 == actual.south8_2) {
            score += 8;
        }
        if (data.west8_1 == actual.west8_1) {
            score += 8;
        }
        if (data.west8_2 == actual.west8_2) {
            score += 8;
        }
        if (data.east8_1 == actual.east8_1) {
            score += 8;
        }
        if (data.east8_2 == actual.east8_2) {
            score += 8;
        }
        if (data.midwest8_1 == actual.midwest8_1) {
            score += 8;
        }
        if (data.midwest8_2 == actual.midwest8_2) {
            score += 8;
        }
        if (data.south == actual.south) {
            score += 16;
        }
        if (data.west == actual.west) {
            score += 16;
        }
        if (data.east == actual.east) {
            score += 16;
        }
        if (data.midwest == actual.midwest) {
            score += 16;
        }
        if (data.finalleft == actual.finalleft) {
            score += 32;
        }
        if (data.finalright == actual.finalright) {
            score += 32;
        }
        if (data.champion == actual.champion) {
            score += 64;
        }
        menScoreData.push({name: data.name, score: score});
    })
    console.log(menScoreData);
}

function updateMenBracketData() {
    console.log(menBracketData[0]);
    const parentDiv = document.getElementById('menbracket');
    parentDiv.innerHTML = '';
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'sub-sub-tab';
    parentDiv.appendChild(buttonDiv);
    menBracketData.forEach(data => {
        const button = document.createElement('button');
        button.textContent = data.name;
        button.className = 'sub-sub-tab-button';
        button.onclick = function(event) { openSection(event, 'menbracket-' + data.name.toLowerCase(), 'sub-sub-tab-content', 'sub-sub-tab-button')};
        buttonDiv.appendChild(button);
        const bracketDiv = document.createElement('div');
        bracketDiv.id = 'menbracket-' + data.name.toLowerCase();
        bracketDiv.className = 'sub-sub-tab-content';
        const containerDiv = document.createElement('div');
        containerDiv.className = 'container';
        containerDiv.innerHTML = `<div class="section">
                        <p>1st Round</p>
                        <p class="date">March 20-21</p>
                        <p class="team">Auburn</p>
                        <p class="team lowleft">${data.firstfour1 || 'TBD'}</p>
                        <p class="team">Louisville</p>
                        <p class="team lowleft">Creighton</p>
                        <p class="team">Michigan</p>
                        <p class="team lowleft">UC San Diego</p>
                        <p class="team">Texas A&M</p>
                        <p class="team lowleft">Yale</p>
                        <p class="team">Ole Miss</p>
                        <p class="team lowleft">${data.firstfour2 || 'TBD'}</p>
                        <p class="team">Iowa State</p>
                        <p class="team lowleft">Lipscomb</p>
                        <p class="team">Marquette</p>
                        <p class="team lowleft">New Mexico</p>
                        <p class="team">Michigan St</p>
                        <p class="team lowleft">Bryant</p>
                        <p class="team">Florida</p>
                        <p class="team lowleft">Norfolk St</p>
                        <p class="team">UConn</p>
                        <p class="team lowleft">Oklahoma</p>
                        <p class="team">Memphis</p>
                        <p class="team lowleft">Colorado St</p>
                        <p class="team">Maryland</p>
                        <p class="team lowleft">Grand Canyon</p>
                        <p class="team">Missouri</p>
                        <p class="team lowleft">Drake</p>
                        <p class="team">Texas Tech</p>
                        <p class="team lowleft">UNC Wilmington</p>
                        <p class="team">Kansas</p>
                        <p class="team lowleft">Arkansas</p>
                        <p class="team">St John's</p>
                        <p class="team lowleft">Omaha</p>
                    </div>
                    <div class="section">
                        <p>2nd Round</p>
                        <p class="date">March 22-23</p>
                        <p class="team topset2">${data.south1 || 'TBD'}</p>
                        <p class="team lowleft lowset2">${data.south8 || 'TBD'}</p>
                        <p class="team lowset2">${data.south5 || 'TBD'}</p>
                        <p class="team lowleft lowset2">${data.south4 || 'TBD'}</p>
                        <p class="team lowset2">${data.south6 || 'TBD'}</p>
                        <p class="team lowleft lowset2">${data.south3 || 'TBD'}</p>
                        <p class="team lowset2">${data.south7 || 'TBD'}</p>
                        <p class="team lowleft lowset2">${data.south2 || 'TBD'}</p>
                        <p class="team lowset2">${data.west1 || 'TBD'}</p>
                        <p class="team lowleft lowset2">${data.west8 || 'TBD'}</p>
                        <p class="team lowset2">${data.west5 || 'TBD'}</p>
                        <p class="team lowleft lowset2">${data.west4 || 'TBD'}</p>
                        <p class="team lowset2">${data.west6 || 'TBD'}</p>
                        <p class="team lowleft lowset2">${data.west3 || 'TBD'}</p>
                        <p class="team lowset2">${data.west7 || 'TBD'}</p>
                        <p class="team lowleft lowset2">${data.west2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Sweet 16</p>
                        <p class="date">March 27-28</p>
                        <p class="team topset3">${data.south16_1 || 'TBD'}</p>
                        <p class="team lowleft lowset3">${data.south16_4 || 'TBD'}</p>
                        <p class="team lowset3">${data.south16_3 || 'TBD'}</p>
                        <p class="team lowleft lowset3">${data.south16_2 || 'TBD'}</p>
                        <p class="team lowset3">${data.west16_1 || 'TBD'}</p>
                        <p class="team lowleft lowset3">${data.west16_4 || 'TBD'}</p>
                        <p class="team lowset3">${data.west16_3 || 'TBD'}</p>
                        <p class="team lowleft lowset3">${data.west16_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Elite 8</p>
                        <p class="date">March 29-30</p>
                        <p class="team topset4">${data.south8_1 || 'TBD'}</p>
                        <p class="team lowleft lowset4">${data.south8_2 || 'TBD'}</p>
                        <p class="team lowset4">${data.west8_1 || 'TBD'}</p>
                        <p class="team lowleft lowset4">${data.west8_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Final 4</p>
                        <p class="date">April 5</p>
                        <p class="team topset5">${data.south || 'TBD'}</p>
                        <p class="team lowleft lowset5">${data.west || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Championship</p>
                        <p class="date">April 7</p>
                        <p class="team leftfinal">${data.finalleft || 'TBD'}</p>
                        <p class="team winner">${data.champion || 'TBD'}</p>
                        <div class="rightcontainer">
                            <p class="team rightfinal">${data.finalright || 'TBD'}</p>
                        </div>
                    </div>
                    <div class="section">
                        <p>Final 4</p>
                        <p class="date">April 5</p>
                        <p class="team topset5">${data.east || 'TBD'}</p>
                        <p class="team lowright lowset5">${data.midwest || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Elite 8</p>
                        <p class="date">March 29-30</p>
                        <p class="team topset4">${data.east8_1 || 'TBD'}</p>
                        <p class="team lowright lowset4">${data.east8_2 || 'TBD'}</p>
                        <p class="team lowset4">${data.midwest8_1 || 'TBD'}</p>
                        <p class="team lowright lowset4">${data.midwest8_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Sweet 16</p>
                        <p class="date">March 27-28</p>
                        <p class="team topset3">${data.east16_1 || 'TBD'}</p>
                        <p class="team lowright lowset3">${data.east16_4 || 'TBD'}</p>
                        <p class="team lowset3">${data.east16_3 || 'TBD'}</p>
                        <p class="team lowright lowset3">${data.east16_2 || 'TBD'}</p>
                        <p class="team lowset3">${data.midwest16_1 || 'TBD'}</p>
                        <p class="team lowright lowset3">${data.midwest16_4 || 'TBD'}</p>
                        <p class="team lowset3">${data.midwest16_3 || 'TBD'}</p>
                        <p class="team lowright lowset3">${data.midwest16_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>2nd Round</p>
                        <p class="date">March 22-23</p>
                        <p class="team topset2">${data.east1 || 'TBD'}</p>
                        <p class="team lowright lowset2">${data.east8 || 'TBD'}</p>
                        <p class="team lowset2">${data.east5 || 'TBD'}</p>
                        <p class="team lowright lowset2">${data.east4 || 'TBD'}</p>
                        <p class="team lowset2">${data.east6 || 'TBD'}</p>
                        <p class="team lowright lowset2">${data.east3 || 'TBD'}</p>
                        <p class="team lowset2">${data.east7 || 'TBD'}</p>
                        <p class="team lowright lowset2">${data.east2 || 'TBD'}</p>
                        <p class="team lowset2">${data.midwest1 || 'TBD'}</p>
                        <p class="team lowright lowset2">${data.midwest8 || 'TBD'}</p>
                        <p class="team lowset2">${data.midwest5 || 'TBD'}</p>
                        <p class="team lowright lowset2">${data.midwest4 || 'TBD'}</p>
                        <p class="team lowset2">${data.midwest6 || 'TBD'}</p>
                        <p class="team lowright lowset2">${data.midwest3 || 'TBD'}</p>
                        <p class="team lowset2">${data.midwest7 || 'TBD'}</p>
                        <p class="team lowright lowset2">${data.midwest2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>1st Round</p>
                        <p class="date">March 20-21</p>
                        <p class="team">Duke</p>
                        <p class="team lowright">${data.firstfour3 || 'TBD'}</p>
                        <p class="team">Mississippi St</p>
                        <p class="team lowright">Baylor</p>
                        <p class="team">Oregon</p>
                        <p class="team lowright">Liberty</p>
                        <p class="team">Arizona</p>
                        <p class="team lowright">Akron</p>
                        <p class="team">BYU</p>
                        <p class="team lowright">VCU</p>
                        <p class="team">Wisconsin</p>
                        <p class="team lowright">Montana</p>
                        <p class="team">Saint Mary's</p>
                        <p class="team lowright">Vanderbilt</p>
                        <p class="team">Alabama</p>
                        <p class="team lowright">Robert Morris</p>
                        <p class="team">Houston</p>
                        <p class="team lowright">SIUE</p>
                        <p class="team">Gonzaga</p>
                        <p class="team lowright">Georgia</p>
                        <p class="team">Clemson</p>
                        <p class="team lowright">McNeese</p>
                        <p class="team">Purdue</p>
                        <p class="team lowright">High Point</p>
                        <p class="team">Illinois</p>
                        <p class="team lowright">${data.firstfour4 || 'TBD'}</p>
                        <p class="team">Kentucky</p>
                        <p class="team lowright">Troy</p>
                        <p class="team">UCLA</p>
                        <p class="team lowright">Utah State</p>
                        <p class="team">Tennessee</p>
                        <p class="team lowright">Wofford</p>
                    </div>`;
        bracketDiv.appendChild(containerDiv);
        parentDiv.appendChild(bracketDiv);
    })
}

function updateGames(gender, startDate, endDate, elementId) {
    const url = `https://site.api.espn.com/apis/site/v2/sports/basketball/${gender}-college-basketball/scoreboard?groups=100&dates=${startDate}-${endDate}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const games = data.events;
            const gameDiv = document.getElementById(elementId);
            gameDiv.innerHTML = ''; // Clear previous content

            const chicagoOffset = -5;
            // Get today's date in Chicago time (Central Time Zone)
            const basicTime = new Date();
            const time = new Date(basicTime.getTime() + chicagoOffset * 60 * 60 * 1000);
            const today = new Date(time).toISOString().split('T')[0];

            // Group games by date in Chicago time
            const gamesByDate = {};
            games.forEach(game => {
                const gameDateUTC = new Date(game.date);
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
                    let victor = 'TBD';
                    if (gender == 'mens') {
                        if (gameStatus.toLowerCase().includes('final')) {
                            victor = game.competitions[0].competitors[0].winner === true ? firstTeam : secondTeam;
                        }
                        const headline = game.competitions[0].notes[0].headline.toLowerCase();
                        if (headline.includes('first four')) {
                            if (headline.includes('south')) {
                                if (firstSeed == '(16)') {
                                    menBracketData[0].firstfour1 = victor;
                                }
                                else if (firstSeed == '(11)') {
                                    menBracketData[0].firstfour2 = victor;
                                }
                            }
                            if (headline.includes('east')) {
                                menBracketData[0].firstfour3 = victor;
                            }
                            if (headline.includes('midwest')) {
                                menBracketData[0].firstfour4 = victor;
                            }
                        }
                        else if (headline.includes('1st round')) {
                            if (headline.includes('south')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)')) {
                                    menBracketData[0].south1 = victor;
                                }
                                if ((firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    menBracketData[0].south8 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)')) {
                                    menBracketData[0].south5 = victor;
                                }
                                if ((firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].south4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)')) {
                                    menBracketData[0].south6 = victor;
                                }
                                if ((firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    menBracketData[0].south3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)')) {
                                    menBracketData[0].south7 = victor;
                                }
                                if ((firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].south2 = victor;
                                }
                            }
                            if (headline.includes(' west')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)')) {
                                    menBracketData[0].west1 = victor;
                                }
                                if ((firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    menBracketData[0].west8 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)')) {
                                    menBracketData[0].west5 = victor;
                                }
                                if ((firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].west4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)')) {
                                    menBracketData[0].west6 = victor;
                                }
                                if ((firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    menBracketData[0].west3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)')) {
                                    menBracketData[0].west7 = victor;
                                }
                                if ((firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].west2 = victor;
                                }
                            }
                            if (headline.includes('east')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)')) {
                                    menBracketData[0].east1 = victor;
                                }
                                if ((firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    menBracketData[0].east8 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)')) {
                                    menBracketData[0].east5 = victor;
                                }
                                if ((firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].east4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)')) {
                                    menBracketData[0].east6 = victor;
                                }
                                if ((firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    menBracketData[0].east3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)')) {
                                    menBracketData[0].east7 = victor;
                                }
                                if ((firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].east2 = victor;
                                }
                            }
                            if (headline.includes('midwest')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)')) {
                                    menBracketData[0].midwest1 = victor;
                                }
                                if ((firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    menBracketData[0].midwest8 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)')) {
                                    menBracketData[0].midwest5 = victor;
                                }
                                if ((firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].midwest4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)')) {
                                    menBracketData[0].midwest6 = victor;
                                }
                                if ((firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    menBracketData[0].midwest3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)')) {
                                    menBracketData[0].midwest7 = victor;
                                }
                                if ((firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].midwest2 = victor;
                                }
                            }
                        }
                        else if (headline.includes('2nd round')) {
                            if (headline.includes('south')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    menBracketData[0].south16_1 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].south16_4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    menBracketData[0].south16_3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].south16_2 = victor;
                                }
                            }
                            if (headline.includes(' west')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    menBracketData[0].west16_1 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].west16_4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    menBracketData[0].west16_3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].west16_2 = victor;
                                }
                            }
                            if (headline.includes('east')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    menBracketData[0].east16_1 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].east16_4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    menBracketData[0].east16_3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].east16_2 = victor;
                                }
                            }
                            if (headline.includes('midwest')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    menBracketData[0].midwest16_1 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].midwest16_4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    menBracketData[0].midwest16_3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].midwest16_2 = victor;
                                }
                            }
                        }
                        else if (headline.includes('sweet 16')) {
                            if (headline.includes('south')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)') || (firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].south8_1 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)') || (firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].south8_2 = victor;
                                }
                            }
                            if (headline.includes(' west')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)') || (firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].west8_1 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)') || (firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].west8_2 = victor;
                                }
                            }
                            if (headline.includes('east')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)') || (firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].east8_1 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)') || (firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].east8_2 = victor;
                                }
                            }
                            if (headline.includes('midwest')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)') || (firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    menBracketData[0].midwest8_1 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)') || (firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    menBracketData[0].midwest8_2 = victor;
                                }
                            }
                        }
                        else if (headline.includes('elite 8')) {
                            if (headline.includes('south')) {
                                menBracketData[0].south = victor;
                            }
                            if (headline.includes(' west')) {
                                menBracketData[0].west = victor;
                            }
                            if (headline.includes('east')) {
                                menBracketData[0].east = victor;
                            }
                            if (headline.includes('midwest')) {
                                menBracketData[0].midwest = victor;
                            }
                        }
                        else if (headline.includes('final four')) {
                            if (game.id == 401746080) {
                                menBracketData[0].finalleft = victor;
                            }
                            else {
                                menBracketData[0].finalright = victor;
                            }
                        }
                        else if (headline.includes('national championship')) {
                            menBracketData[0].champion = victor;
                        }
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Update calls to the new function
updateMenBracketData();
updateGames('mens', '20250318', '20250408', 'mengames');
updateGames('womens', '20250319', '20250407', 'womengames');
setTimeout(() => updateMenBracketData(), 1000);
setTimeout(() => countMenScore(), 1500);

setInterval(() => updateGames('mens', '20250318', '20250408', 'mengames'), 5000);
setInterval(() => updateGames('womens', '20250319', '20250407', 'womengames'), 5000);
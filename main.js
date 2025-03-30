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
    {name: "Dad 'Broome' Ben", firstfour1: "Alabama St", firstfour2: "North Carolina", firstfour3: "Mount St Marys", firstfour4: "Texas", south1: "Auburn", south8: "Louisville", south5: "Michigan", south4: "Yale", south6: "Ole Miss", south3: "Iowa State", south7: "Marquette", south2: "Michigan St", west1: "Florida", west8: "UConn", west5: "Colorado St", west4: "Maryland", west6: "Drake", west3: "Texas Tech", west7: "Arkansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Oregon", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Saint Mary's", east2: "Alabama", midwest1: "Houston", midwest8: "Gonzaga", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Kentucky", midwest7: "Utah State", midwest2: "Tennessee", south16_1: "Auburn", south16_4: "Michigan", south16_3: "Iowa State", south16_2: "Michigan St", west16_1: "Florida", west16_4: "Maryland", west16_3: "Texas Tech", west16_2: "St John's", east16_1: "Duke", east16_4: "Oregon", east16_3: "BYU", east16_2: "Alabama", midwest16_1: "Houston", midwest16_4: "Clemson", midwest16_3: "Kentucky", midwest16_2: "Tennessee", south8_1: "Auburn", south8_2: "Michigan St", west8_1: "Florida", west8_2: "Texas Tech", east8_1: "Duke", east8_2: "Alabama", midwest8_1: "Houston", midwest8_2: "Tennessee", south: "Auburn", west: "Florida", east: "Duke", midwest: "Tennessee", finalleft: "Auburn", finalright: "Duke", champion: "Auburn"},
    {name: "Helena", firstfour1: "St Francis PA", firstfour2: "San Diego St", firstfour3: "American", firstfour4: "Xavier", south1: "Auburn", south8: "Louisville", south5: "Michigan", south4: "Texas A&M", south6: "Ole Miss", south3: "Lipscomb", south7: "Marquette", south2: "Michigan St", west1: "Florida", west8: "Oklahoma", west5: "Memphis", west4: "Grand Canyon", west6: "Drake", west3: "Texas Tech", west7: "Arkansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Liberty", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Vanderbilt", east2: "Alabama", midwest1: "Houston", midwest8: "Gonzaga", midwest5: "McNeese", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Troy", midwest7: "UCLA", midwest2: "Wofford", south16_1: "Auburn", south16_4: "Texas A&M", south16_3: "Ole Miss", south16_2: "Michigan St", west16_1: "Florida", west16_4: "Memphis", west16_3: "Texas Tech", west16_2: "St John's", east16_1: "Duke", east16_4: "Liberty", east16_3: "BYU", east16_2: "Alabama", midwest16_1: "Houston", midwest16_4: "Purdue", midwest16_3: "Illinois", midwest16_2: "UCLA", south8_1: "Auburn", south8_2: "Ole Miss", west8_1: "Florida", west8_2: "Texas Tech", east8_1: "Duke", east8_2: "Alabama", midwest8_1: "Purdue", midwest8_2: "Illinois", south: "Auburn", west: "Texas Tech", east: "Duke", midwest: "Illinois", finalleft: "Auburn", finalright: "Duke", champion: "Auburn"},
    {name: "Unc G", firstfour1: "St Francis PA", firstfour2: "North Carolina", firstfour3: "American", firstfour4: "Xavier", south1: "Auburn", south8: "Creighton", south5: "Michigan", south4: "Yale", south6: "North Carolina", south3: "Iowa State", south7: "New Mexico", south2: "Michigan St", west1: "Florida", west8: "UConn", west5: "Colorado St", west4: "Maryland", west6: "Drake", west3: "Texas Tech", west7: "Kansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Oregon", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Vanderbilt", east2: "Alabama", midwest1: "Houston", midwest8: "Georgia", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Kentucky", midwest7: "UCLA", midwest2: "Tennessee", south16_1: "Auburn", south16_4: "Michigan", south16_3: "Iowa State", south16_2: "New Mexico", west16_1: "Florida", west16_4: "Maryland", west16_3: "Texas Tech", west16_2: "St John's", east16_1: "Duke", east16_4: "Arizona", east16_3: "Wisconsin", east16_2:"Alabama", midwest16_1: "Houston", midwest16_4: "Purdue", midwest16_3: "Illinois", midwest16_2: "UCLA", south8_1: "Michigan", south8_2: "Iowa State", west8_1: "Florida", west8_2: "St John's", east8_1: "Arizona", east8_2: "Wisconsin", midwest8_1: "Houston", midwest8_2: "Illinois", south: "Michigan", west: "St John's", east: "Wisconsin", midwest: "Illinois", finalleft: "Michigan", finalright: "Illinois", champion: "Illinois"},
    {name: "Eric", firstfour1: "Alabama St", firstfour2: "North Carolina", firstfour3: "American", firstfour4: "Texas", south1: "Auburn", south8: "Creighton", south5: "Michigan", south4: "Yale", south6: "North Carolina", south3: "Iowa State", south7: "New Mexico", south2: "Michigan St", west1: "Florida", west8: "UConn", west5: "Colorado St", west4: "Maryland", west6: "Drake", west3: "UNC Wilmington", west7: "Arkansas", west2: "St John's", east1: "Duke", east8: "Mississippi St", east5: "Oregon", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Vanderbilt", east2: "Alabama", midwest1: "Houston", midwest8: "Gonzaga", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Kentucky", midwest7: "UCLA", midwest2: "Tennessee", south16_1: "Auburn", south16_4: "Michigan", south16_3: "Iowa State", south16_2: "Michigan St", west16_1: "UConn", west16_4: "Maryland", west16_3: "Drake", west16_2: "St John's", east16_1: "Duke", east16_4: "Oregon", east16_3: "BYU", east16_2: "Alabama", midwest16_1: "Houston", midwest16_4: "Purdue", midwest16_3: "Illinois", midwest16_2: "Tennessee", south8_1: "Auburn", south8_2: "Iowa State", west8_1: "Maryland", west8_2: "Drake", east8_1: "Duke", east8_2: "BYU", midwest8_1: "Purdue", midwest8_2: "Tennessee", south: "Iowa State", west: "Maryland", east: "Duke", midwest: "Purdue", finalleft: "Iowa State", finalright: "Duke", champion: "Iowa State"},
    {name: "LeBron (Elder)", firstfour1: "*Alabama St", firstfour2: "*North Carolina", firstfour3: "*Mount St Mary's", firstfour4: "*Xavier", south1: "Auburn", south8: "Louisville", south5: "Michigan", south4: "Texas A&M", south6: "Ole Miss", south3: "Iowa State", south7: "New Mexico", south2: "Michigan St", west1: "Florida", west8: "Oklahoma", west5: "Memphis", west4: "Maryland", west6: "Drake", west3: "Texas Tech", west7: "Kansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Oregon", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Vanderbilt", east2: "Alabama", midwest1: "Houston", midwest8: "Gonzaga", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Kentucky", midwest7: "Utah State", midwest2: "Tennessee", south16_1: "Auburn", south16_4: "Texas A&M", south16_3: "Iowa State", south16_2: "Michigan St", west16_1: "Florida", west16_4: "Memphis", west16_3: "Texas Tech", west16_2: "St John's", east16_1: "Duke", east16_4: "Oregon", east16_3: "BYU", east16_2: "Alabama", midwest16_1: "Houston", midwest16_4: "Clemson", midwest16_3: "Kentucky", midwest16_2: "Tennessee", south8_1: "Auburn", south8_2: "Iowa State", west8_1: "Florida", west8_2: "St John's", east8_1: "Duke", east8_2: "Alabama", midwest8_1: "Houston", midwest8_2: "Tennessee", south: "Auburn", west: "St John's", east: "Alabama", midwest: "Tennessee", finalleft: "St John's", finalright: "Tennessee", champion: "St John's"},
    {name: "Camilla", firstfour1: "Alabama St", firstfour2: "San Diego St", firstfour3: "American", firstfour4: "Xavier", south1: "Auburn", south8: "Creighton", south5: "Michigan", south4: "Texas A&M", south6: "Ole Miss", south3: "Iowa State", south7: "Marquette", south2: "Michigan St", west1: "Florida", west8: "Oklahoma", west5: "Memphis", west4: "Maryland", west6: "Missouri", west3: "Texas Tech", west7: "Kansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Oregon", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Saint Mary's", east2: "Alabama", midwest1: "Houston", midwest8: "Georgia", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Kentucky", midwest7: "UCLA", midwest2: "Tennessee", south16_1: "Auburn", south16_4: "Michigan", south16_3: "Iowa State", south16_2: "Michigan St", west16_1: "Florida", west16_4: "Memphis", west16_3: "Texas Tech", west16_2: "Kansas", east16_1: "Duke", east16_4: "Arizona", east16_3: "Wisconsin", east16_2: "Alabama", midwest16_1: "Houston", midwest16_4: "Purdue", midwest16_3: "Illinois", midwest16_2: "Tennessee", south8_1: "Auburn", south8_2: "Michigan St", west8_1: "Florida", west8_2: "Texas Tech", east8_1: "Arizona", east8_2: "Alabama", midwest8_1: "Purdue", midwest8_2: "Illinois", south: "Auburn", west: "Texas Tech", east: "Alabama", midwest: "Purdue", finalleft: "Auburn", finalright: "Alabama", champion: "Auburn"},
    {name: "Mom", firstfour1: "*Alabama St", firstfour2: "*North Carolina", firstfour3: "*Mount St Mary's", firstfour4: "*Xavier", south1: "Auburn", south8: "Creighton", south5: "Michigan", south4: "Texas A&M", south6: "Ole Miss", south3: "Iowa State", south7: "Marquette", south2: "Michigan St", west1: "Florida", west8: "UConn", west5: "Memphis", west4: "Maryland", west6: "Drake", west3: "Texas Tech", west7: "Kansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Oregon", east4: "Arizona", east6: "BYU", east3: "Wisconsin", east7: "Saint Mary's", east2: "Alabama", midwest1: "Houston", midwest8: "Georgia", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Kentucky", midwest7: "Utah State", midwest2: "Tennessee", south16_1: "Auburn", south16_4: "Texas A&M", south16_3: "Iowa State", south16_2: "Michigan St", west16_1: "UConn", west16_4: "Maryland", west16_3: "Texas Tech", west16_2: "Kansas", east16_1: "Duke", east16_4: "Arizona", east16_3: "Wisconsin", east16_2: "Alabama", midwest16_1: "Houston", midwest16_4: "Purdue", midwest16_3: "Kentucky", midwest16_2: "Tennessee", south8_1: "Texas A&M", south8_2: "Iowa State", west8_1: "Maryland", west8_2: "Texas Tech", east8_1: "Arizona", east8_2: "Wisconsin", midwest8_1: "Purdue", midwest8_2: "Tennessee", south: "Texas A&M", west: "Maryland", east: "Wisconsin", midwest: "Tennessee", finalleft: "Maryland", finalright: "Wisconsin", champion: "Maryland"},
    {name: "Andrew", firstfour1: "Saint Francis", firstfour2: "North Carolina", firstfour3: "American", firstfour4: "Xavier", south1: "Auburn", south8: "Louisville", south5: "Michigan", south4: "Texas A&M", south6: "North Carolina", south3: "Iowa State", south7: "Marquette", south2: "Michigan St", west1: "Florida", west8: "Oklahoma", west5: "Memphis", west4: "Maryland", west6: "Drake", west3: "Texas Tech", west7: "Kansas", west2: "St John's", east1: "Duke", east8: "Baylor", east5: "Oregon", east4: "Akron", east6: "BYU", east3: "Wisconsin", east7: "Vanderbilt", east2: "Alabama", midwest1: "Houston", midwest8: "Gonzaga", midwest5: "Clemson", midwest4: "Purdue", midwest6: "Illinois", midwest3: "Troy", midwest7: "Utah State", midwest2: "Tennessee", south16_1: "Auburn", south16_4: "Michigan", south16_3: "Iowa State", south16_2: "Marquette", west16_1: "Florida", west16_4: "Memphis", west16_3: "Texas Tech", west16_2: "Kansas", east16_1: "Duke", east16_4: "Oregon", east16_3: "Wisconsin", east16_2: "Alabama", midwest16_1: "Houston", midwest16_4: "Clemson", midwest16_3: "Illinois", midwest16_2: "Tennessee", south8_1: "Michigan", south8_2: "Iowa State", west8_1: "Florida", west8_2: "Kansas", east8_1: "Oregon", east8_2: "Wisconsin", midwest8_1: "Clemson", midwest8_2: "Illinois", south: "Iowa State", west: "Florida", east: "Wisconsin", midwest: "Illinois", finalleft: "Iowa State", finalright: "Illinois", champion: "Illinois"}
]

let menScoreData = [];

function countMenScore() {
    menScoreData = [];
    const actual = menBracketData[0];
    menBracketData.forEach(data => {
        const outer = document.getElementById("menbracket-"+data.name.toLowerCase());
        let score = 0;
        if (data.firstfour1 && data.firstfour1 !== 'TBD' && data.firstfour1 == actual.firstfour1) {
            score += 1;
            const inner = outer.querySelector("#firstfour1");
            inner.style.color = "#34b233";
        }
        else if (data.firstfour1 && actual.firstfour1 && data.firstfour1 !== 'TBD' && actual.firstfour1 !== 'TBD' && data.firstfour1 !== actual.firstfour1) {
            const inner = outer.querySelector("#firstfour1");
            inner.style.color = "#e83922";
        }
        if (data.firstfour2 && data.firstfour2 !== 'TBD' && data.firstfour2 == actual.firstfour2) {
            score += 1;
            const inner = outer.querySelector("#firstfour2");
            inner.style.color = "#34b233";
        }
        else if (data.firstfour2 && actual.firstfour2 && data.firstfour2 !== 'TBD' && actual.firstfour2 !== 'TBD' && data.firstfour2 !== actual.firstfour2) {
            const inner = outer.querySelector("#firstfour2");
            inner.style.color = "#e83922";
        }
        if (data.firstfour3 && data.firstfour3 !== 'TBD' && data.firstfour3 == actual.firstfour3) {
            score += 1;
            const inner = outer.querySelector("#firstfour3");
            inner.style.color = "#34b233";
        }
        else if (data.firstfour3 && actual.firstfour3 && data.firstfour3 !== 'TBD' && actual.firstfour3 !== 'TBD' && data.firstfour3 !== actual.firstfour3) {
            const inner = outer.querySelector("#firstfour3");
            inner.style.color = "#e83922";
        }
        if (data.firstfour4 && data.firstfour4 !== 'TBD' && data.firstfour4 == actual.firstfour4) {
            score += 1;
            const inner = outer.querySelector("#firstfour4");
            inner.style.color = "#34b233";
        }
        else if (data.firstfour4 && actual.firstfour4 && data.firstfour4 !== 'TBD' && actual.firstfour4 !== 'TBD' && data.firstfour4 !== actual.firstfour4) {
            const inner = outer.querySelector("#firstfour4");
            inner.style.color = "#e83922";
        }
        if (data.south1 && data.south1 !== 'TBD' && data.south1 == actual.south1) {
            score += 2;
            const inner = outer.querySelector("#south1");
            inner.style.color = "#34b233";
        }
        else if (data.south1 && actual.south1 && data.south1 !== 'TBD' && actual.south1 !== 'TBD' && data.south1 !== actual.south1) {
            const inner = outer.querySelector("#south1");
            inner.style.color = "#e83922";
        }
        if (data.south8 && data.south8 !== 'TBD' && data.south8 == actual.south8) {
            score += 2;
            const inner = outer.querySelector("#south8");
            inner.style.color = "#34b233";
        }
        else if (data.south8 && actual.south8 && data.south8 !== 'TBD' && actual.south8 !== 'TBD' && data.south8 !== actual.south8) {
            const inner = outer.querySelector("#south8");
            inner.style.color = "#e83922";
        }
        if (data.south5 && data.south5 !== 'TBD' && data.south5 == actual.south5) {
            score += 2;
            const inner = outer.querySelector("#south5");
            inner.style.color = "#34b233";
        }
        else if (data.south5 && actual.south5 && data.south5 !== 'TBD' && actual.south5 !== 'TBD' && data.south5 !== actual.south5) {
            const inner = outer.querySelector("#south5");
            inner.style.color = "#e83922";
        }
        if (data.south4 && data.south4 !== 'TBD' && data.south4 == actual.south4) {
            score += 2;
            const inner = outer.querySelector("#south4");
            inner.style.color = "#34b233";
        }
        else if (data.south4 && actual.south4 && data.south4 !== 'TBD' && actual.south4 !== 'TBD' && data.south4 !== actual.south4) {
            const inner = outer.querySelector("#south4");
            inner.style.color = "#e83922";
        }
        if (data.south6 && data.south6 !== 'TBD' && data.south6 == actual.south6) {
            score += 2;
            const inner = outer.querySelector("#south6");
            inner.style.color = "#34b233";
        }
        else if (data.south6 && actual.south6 && data.south6 !== 'TBD' && actual.south6 !== 'TBD' && data.south6 !== actual.south6) {
            const inner = outer.querySelector("#south6");
            inner.style.color = "#e83922";
        }
        if (data.south3 && data.south3 !== 'TBD' && data.south3 == actual.south3) {
            score += 2;
            const inner = outer.querySelector("#south3");
            inner.style.color = "#34b233";
        }
        else if (data.south3 && actual.south3 && data.south3 !== 'TBD' && actual.south3 !== 'TBD' && data.south3 !== actual.south3) {
            const inner = outer.querySelector("#south3");
            inner.style.color = "#e83922";
        }
        if (data.south7 && data.south7 !== 'TBD' && data.south7 == actual.south7) {
            score += 2;
            const inner = outer.querySelector("#south7");
            inner.style.color = "#34b233";
        }
        else if (data.south7 && actual.south7 && data.south7 !== 'TBD' && actual.south7 !== 'TBD' && data.south7 !== actual.south7) {
            const inner = outer.querySelector("#south7");
            inner.style.color = "#e83922";
        }
        if (data.south2 && data.south2 !== 'TBD' && data.south2 == actual.south2) {
            score += 2;
            const inner = outer.querySelector("#south2");
            inner.style.color = "#34b233";
        }
        else if (data.south2 && actual.south2 && data.south2 !== 'TBD' && actual.south2 !== 'TBD' && data.south2 !== actual.south2) {
            const inner = outer.querySelector("#south2");
            inner.style.color = "#e83922";
        }
        if (data.west1 && data.west1 !== 'TBD' && data.west1 == actual.west1) {
            score += 2;
            const inner = outer.querySelector("#west1");
            inner.style.color = "#34b233";
        }
        else if (data.west1 && actual.west1 && data.west1 !== 'TBD' && actual.west1 !== 'TBD' && data.west1 !== actual.west1) {
            const inner = outer.querySelector("#west1");
            inner.style.color = "#e83922";
        }
        if (data.west8 && data.west8 !== 'TBD' && data.west8 == actual.west8) {
            score += 2;
            const inner = outer.querySelector("#west8");
            inner.style.color = "#34b233";
        }
        else if (data.west8 && actual.west8 && data.west8 !== 'TBD' && actual.west8 !== 'TBD' && data.west8 !== actual.west8) {
            const inner = outer.querySelector("#west8");
            inner.style.color = "#e83922";
        }
        if (data.west5 && data.west5 !== 'TBD' && data.west5 == actual.west5) {
            score += 2;
            const inner = outer.querySelector("#west5");
            inner.style.color = "#34b233";
        }
        else if (data.west5 && actual.west5 && data.west5 !== 'TBD' && actual.west5 !== 'TBD' && data.west5 !== actual.west5) {
            const inner = outer.querySelector("#west5");
            inner.style.color = "#e83922";
        }
        if (data.west4 && data.west4 !== 'TBD' && data.west4 == actual.west4) {
            score += 2;
            const inner = outer.querySelector("#west4");
            inner.style.color = "#34b233";
        }
        else if (data.west4 && actual.west4 && data.west4 !== 'TBD' && actual.west4 !== 'TBD' && data.west4 !== actual.west4) {
            const inner = outer.querySelector("#west4");
            inner.style.color = "#e83922";
        }
        if (data.west6 && data.west6 !== 'TBD' && data.west6 == actual.west6) {
            score += 2;
            const inner = outer.querySelector("#west6");
            inner.style.color = "#34b233";
        }
        else if (data.west6 && actual.west6 && data.west6 !== 'TBD' && actual.west6 !== 'TBD' && data.west6 !== actual.west6) {
            const inner = outer.querySelector("#west6");
            inner.style.color = "#e83922";
        }
        if (data.west3 && data.west3 !== 'TBD' && data.west3 == actual.west3) {
            score += 2;
            const inner = outer.querySelector("#west3");
            inner.style.color = "#34b233";
        }
        else if (data.west3 && actual.west3 && data.west3 !== 'TBD' && actual.west3 !== 'TBD' && data.west3 !== actual.west3) {
            const inner = outer.querySelector("#west3");
            inner.style.color = "#e83922";
        }
        if (data.west7 && data.west7 !== 'TBD' && data.west7 == actual.west7) {
            score += 2;
            const inner = outer.querySelector("#west7");
            inner.style.color = "#34b233";
        }
        else if (data.west7 && actual.west7 && data.west7 !== 'TBD' && actual.west7 !== 'TBD' && data.west7 !== actual.west7) {
            const inner = outer.querySelector("#west7");
            inner.style.color = "#e83922";
        }
        if (data.west2 && data.west2 !== 'TBD' && data.west2 == actual.west2) {
            score += 2;
            const inner = outer.querySelector("#west2");
            inner.style.color = "#34b233";
        }
        else if (data.west2 && actual.west2 && data.west2 !== 'TBD' && actual.west2 !== 'TBD' && data.west2 !== actual.west2) {
            const inner = outer.querySelector("#west2");
            inner.style.color = "#e83922";
        }
        if (data.east1 && data.east1 !== 'TBD' && data.east1 == actual.east1) {
            score += 2;
            const inner = outer.querySelector("#east1");
            inner.style.color = "#34b233";
        }
        else if (data.east1 && actual.east1 && data.east1 !== 'TBD' && actual.east1 !== 'TBD' && data.east1 !== actual.east1) {
            const inner = outer.querySelector("#east1");
            inner.style.color = "#e83922";
        }
        if (data.east8 && data.east8 !== 'TBD' && data.east8 == actual.east8) {
            score += 2;
            const inner = outer.querySelector("#east8");
            inner.style.color = "#34b233";
        }
        else if (data.east8 && actual.east8 && data.east8 !== 'TBD' && actual.east8 !== 'TBD' && data.east8 !== actual.east8) {
            const inner = outer.querySelector("#east8");
            inner.style.color = "#e83922";
        }
        if (data.east5 && data.east5 !== 'TBD' && data.east5 == actual.east5) {
            score += 2;
            const inner = outer.querySelector("#east5");
            inner.style.color = "#34b233";
        }
        else if (data.east5 && actual.east5 && data.east5 !== 'TBD' && actual.east5 !== 'TBD' && data.east5 !== actual.east5) {
            const inner = outer.querySelector("#east5");
            inner.style.color = "#e83922";
        }
        if (data.east4 && data.east4 !== 'TBD' && data.east4 == actual.east4) {
            score += 2;
            const inner = outer.querySelector("#east4");
            inner.style.color = "#34b233";
        }
        else if (data.east4 && actual.east4 && data.east4 !== 'TBD' && actual.east4 !== 'TBD' && data.east4 !== actual.east4) {
            const inner = outer.querySelector("#east4");
            inner.style.color = "#e83922";
        }
        if (data.east6 && data.east6 !== 'TBD' && data.east6 == actual.east6) {
            score += 2;
            const inner = outer.querySelector("#east6");
            inner.style.color = "#34b233";
        }
        else if (data.east6 && actual.east6 && data.east6 !== 'TBD' && actual.east6 !== 'TBD' && data.east6 !== actual.east6) {
            const inner = outer.querySelector("#east6");
            inner.style.color = "#e83922";
        }
        if (data.east3 && data.east3 !== 'TBD' && data.east3 == actual.east3) {
            score += 2;
            const inner = outer.querySelector("#east3");
            inner.style.color = "#34b233";
        }
        else if (data.east3 && actual.east3 && data.east3 !== 'TBD' && actual.east3 !== 'TBD' && data.east3 !== actual.east3) {
            const inner = outer.querySelector("#east3");
            inner.style.color = "#e83922";
        }
        if (data.east7 && data.east7 !== 'TBD' && data.east7 == actual.east7) {
            score += 2;
            const inner = outer.querySelector("#east7");
            inner.style.color = "#34b233";
        }
        else if (data.east7 && actual.east7 && data.east7 !== 'TBD' && actual.east7 !== 'TBD' && data.east7 !== actual.east7) {
            const inner = outer.querySelector("#east7");
            inner.style.color = "#e83922";
        }
        if (data.east2 && data.east2 !== 'TBD' && data.east2 == actual.east2) {
            score += 2;
            const inner = outer.querySelector("#east2");
            inner.style.color = "#34b233";
        }
        else if (data.east2 && actual.east2 && data.east2 !== 'TBD' && actual.east2 !== 'TBD' && data.east2 !== actual.east2) {
            const inner = outer.querySelector("#east2");
            inner.style.color = "#e83922";
        }
        if (data.midwest1 && data.midwest1 !== 'TBD' && data.midwest1 == actual.midwest1) {
            score += 2;
            const inner = outer.querySelector("#midwest1");
            inner.style.color = "#34b233";
        }
        else if (data.midwest1 && actual.midwest1 && data.midwest1 !== 'TBD' && actual.midwest1 !== 'TBD' && data.midwest1 !== actual.midwest1) {
            const inner = outer.querySelector("#midwest1");
            inner.style.color = "#e83922";
        }
        if (data.midwest8 && data.midwest8 !== 'TBD' && data.midwest8 == actual.midwest8) {
            score += 2;
            const inner = outer.querySelector("#midwest8");
            inner.style.color = "#34b233";
        }
        else if (data.midwest8 && actual.midwest8 && data.midwest8 !== 'TBD' && actual.midwest8 !== 'TBD' && data.midwest8 !== actual.midwest8) {
            const inner = outer.querySelector("#midwest8");
            inner.style.color = "#e83922";
        }
        if (data.midwest5 && data.midwest5 !== 'TBD' && data.midwest5 == actual.midwest5) {
            score += 2;
            const inner = outer.querySelector("#midwest5");
            inner.style.color = "#34b233";
        }
        else if (data.midwest5 && actual.midwest5 && data.midwest5 !== 'TBD' && actual.midwest5 !== 'TBD' && data.midwest5 !== actual.midwest5) {
            const inner = outer.querySelector("#midwest5");
            inner.style.color = "#e83922";
        }
        if (data.midwest4 && data.midwest4 !== 'TBD' && data.midwest4 == actual.midwest4) {
            score += 2;
            const inner = outer.querySelector("#midwest4");
            inner.style.color = "#34b233";
        }
        else if (data.midwest4 && actual.midwest4 && data.midwest4 !== 'TBD' && actual.midwest4 !== 'TBD' && data.midwest4 !== actual.midwest4) {
            const inner = outer.querySelector("#midwest4");
            inner.style.color = "#e83922";
        }
        if (data.midwest6 && data.midwest6 !== 'TBD' && data.midwest6 == actual.midwest6) {
            score += 2;
            const inner = outer.querySelector("#midwest6");
            inner.style.color = "#34b233";
        }
        else if (data.midwest6 && actual.midwest6 && data.midwest6 !== 'TBD' && actual.midwest6 !== 'TBD' && data.midwest6 !== actual.midwest6) {
            const inner = outer.querySelector("#midwest6");
            inner.style.color = "#e83922";
        }
        if (data.midwest3 && data.midwest3 !== 'TBD' && data.midwest3 == actual.midwest3) {
            score += 2;
            const inner = outer.querySelector("#midwest3");
            inner.style.color = "#34b233";
        }
        else if (data.midwest3 && actual.midwest3 && data.midwest3 !== 'TBD' && actual.midwest3 !== 'TBD' && data.midwest3 !== actual.midwest3) {
            const inner = outer.querySelector("#midwest3");
            inner.style.color = "#e83922";
        }
        if (data.midwest7 && data.midwest7 !== 'TBD' && data.midwest7 == actual.midwest7) {
            score += 2;
            const inner = outer.querySelector("#midwest7");
            inner.style.color = "#34b233";
        }
        else if (data.midwest7 && actual.midwest7 && data.midwest7 !== 'TBD' && actual.midwest7 !== 'TBD' && data.midwest7 !== actual.midwest7) {
            const inner = outer.querySelector("#midwest7");
            inner.style.color = "#e83922";
        }
        if (data.midwest2 && data.midwest2 !== 'TBD' && data.midwest2 == actual.midwest2) {
            score += 2;
            const inner = outer.querySelector("#midwest2");
            inner.style.color = "#34b233";
        }
        else if (data.midwest2 && actual.midwest2 && data.midwest2 !== 'TBD' && actual.midwest2 !== 'TBD' && data.midwest2 !== actual.midwest2) {
            const inner = outer.querySelector("#midwest2");
            inner.style.color = "#e83922";
        }
        if (data.south16_1 && data.south16_1 !== 'TBD' && data.south16_1 == actual.south16_1) {
            score += 4;
            const inner = outer.querySelector("#south16_1");
            inner.style.color = "#34b233";
        }
        else if (data.south16_1 && actual.south16_1 && data.south16_1 !== 'TBD' && actual.south16_1 !== 'TBD' && data.south16_1 !== actual.south16_1) {
            const inner = outer.querySelector("#south16_1");
            inner.style.color = "#e83922";
        }
        if (data.south16_4 && data.south16_4 !== 'TBD' && data.south16_4 == actual.south16_4) {
            score += 4;
            const inner = outer.querySelector("#south16_4");
            inner.style.color = "#34b233";
        }
        else if (data.south16_4 && actual.south16_4 && data.south16_4 !== 'TBD' && actual.south16_4 !== 'TBD' && data.south16_4 !== actual.south16_4) {
            const inner = outer.querySelector("#south16_4");
            inner.style.color = "#e83922";
        }
        if (data.south16_3 && data.south16_3 !== 'TBD' && data.south16_3 == actual.south16_3) {
            score += 4;
            const inner = outer.querySelector("#south16_3");
            inner.style.color = "#34b233";
        }
        else if (data.south16_3 && actual.south16_3 && data.south16_3 !== 'TBD' && actual.south16_3 !== 'TBD' && data.south16_3 !== actual.south16_3) {
            const inner = outer.querySelector("#south16_3");
            inner.style.color = "#e83922";
        }
        if (data.south16_2 && data.south16_2 !== 'TBD' && data.south16_2 == actual.south16_2) {
            score += 4;
            const inner = outer.querySelector("#south16_2");
            inner.style.color = "#34b233";
        }
        else if (data.south16_2 && actual.south16_2 && data.south16_2 !== 'TBD' && actual.south16_2 !== 'TBD' && data.south16_2 !== actual.south16_2) {
            const inner = outer.querySelector("#south16_2");
            inner.style.color = "#e83922";
        }
        if (data.west16_1 && data.west16_1 !== 'TBD' && data.west16_1 == actual.west16_1) {
            score += 4;
            const inner = outer.querySelector("#west16_1");
            inner.style.color = "#34b233";
        }
        else if (data.west16_1 && actual.west16_1 && data.west16_1 !== 'TBD' && actual.west16_1 !== 'TBD' && data.west16_1 !== actual.west16_1) {
            const inner = outer.querySelector("#west16_1");
            inner.style.color = "#e83922";
        }
        if (data.west16_4 && data.west16_4 !== 'TBD' && data.west16_4 == actual.west16_4) {
            score += 4;
            const inner = outer.querySelector("#west16_4");
            inner.style.color = "#34b233";
        }
        else if (data.west16_4 && actual.west16_4 && data.west16_4 !== 'TBD' && actual.west16_4 !== 'TBD' && data.west16_4 !== actual.west16_4) {
            const inner = outer.querySelector("#west16_4");
            inner.style.color = "#e83922";
        }
        if (data.west16_3 && data.west16_3 !== 'TBD' && data.west16_3 == actual.west16_3) {
            score += 4;
            const inner = outer.querySelector("#west16_3");
            inner.style.color = "#34b233";
        }
        else if (data.west16_3 && actual.west16_3 && data.west16_3 !== 'TBD' && actual.west16_3 !== 'TBD' && data.west16_3 !== actual.west16_3) {
            const inner = outer.querySelector("#west16_3");
            inner.style.color = "#e83922";
        }
        if (data.west16_2 && data.west16_2 !== 'TBD' && data.west16_2 == actual.west16_2) {
            score += 4;
            const inner = outer.querySelector("#west16_2");
            inner.style.color = "#34b233";
        }
        else if (data.west16_2 && actual.west16_2 && data.west16_2 !== 'TBD' && actual.west16_2 !== 'TBD' && data.west16_2 !== actual.west16_2) {
            const inner = outer.querySelector("#west16_2");
            inner.style.color = "#e83922";
        }
        if (data.east16_1 && data.east16_1 !== 'TBD' && data.east16_1 == actual.east16_1) {
            score += 4;
            const inner = outer.querySelector("#east16_1");
            inner.style.color = "#34b233";
        }
        else if (data.east16_1 && actual.east16_1 && data.east16_1 !== 'TBD' && actual.east16_1 !== 'TBD' && data.east16_1 !== actual.east16_1) {
            const inner = outer.querySelector("#east16_1");
            inner.style.color = "#e83922";
        }
        if (data.east16_4 && data.east16_4 !== 'TBD' && data.east16_4 == actual.east16_4) {
            score += 4;
            const inner = outer.querySelector("#east16_4");
            inner.style.color = "#34b233";
        }
        else if (data.east16_4 && actual.east16_4 && data.east16_4 !== 'TBD' && actual.east16_4 !== 'TBD' && data.east16_4 !== actual.east16_4) {
            const inner = outer.querySelector("#east16_4");
            inner.style.color = "#e83922";
        }
        if (data.east16_3 && data.east16_3 !== 'TBD' && data.east16_3 == actual.east16_3) {
            score += 4;
            const inner = outer.querySelector("#east16_3");
            inner.style.color = "#34b233";
        }
        else if (data.east16_3 && actual.east16_3 && data.east16_3 !== 'TBD' && actual.east16_3 !== 'TBD' && data.east16_3 !== actual.east16_3) {
            const inner = outer.querySelector("#east16_3");
            inner.style.color = "#e83922";
        }
        if (data.east16_2 && data.east16_2 !== 'TBD' && data.east16_2 == actual.east16_2) {
            score += 4;
            const inner = outer.querySelector("#east16_2");
            inner.style.color = "#34b233";
        }
        else if (data.east16_2 && actual.east16_2 && data.east16_2 !== 'TBD' && actual.east16_2 !== 'TBD' && data.east16_2 !== actual.east16_2) {
            const inner = outer.querySelector("#east16_2");
            inner.style.color = "#e83922";
        }
        if (data.midwest16_1 && data.midwest16_1 !== 'TBD' && data.midwest16_1 == actual.midwest16_1) {
            score += 4;
            const inner = outer.querySelector("#midwest16_1");
            inner.style.color = "#34b233";
        }
        else if (data.midwest16_1 && actual.midwest16_1 && data.midwest16_1 !== 'TBD' && actual.midwest16_1 !== 'TBD' && data.midwest16_1 !== actual.midwest16_1) {
            const inner = outer.querySelector("#midwest16_1");
            inner.style.color = "#e83922";
        }
        if (data.midwest16_4 && data.midwest16_4 !== 'TBD' && data.midwest16_4 == actual.midwest16_4) {
            score += 4;
            const inner = outer.querySelector("#midwest16_4");
            inner.style.color = "#34b233";
        }
        else if (data.midwest16_4 && actual.midwest16_4 && data.midwest16_4 !== 'TBD' && actual.midwest16_4 !== 'TBD' && data.midwest16_4 !== actual.midwest16_4) {
            const inner = outer.querySelector("#midwest16_4");
            inner.style.color = "#e83922";
        }
        if (data.midwest16_3 && data.midwest16_3 !== 'TBD' && data.midwest16_3 == actual.midwest16_3) {
            score += 4;
            const inner = outer.querySelector("#midwest16_3");
            inner.style.color = "#34b233";
        }
        else if (data.midwest16_3 && actual.midwest16_3 && data.midwest16_3 !== 'TBD' && actual.midwest16_3 !== 'TBD' && data.midwest16_3 !== actual.midwest16_3) {
            const inner = outer.querySelector("#midwest16_3");
            inner.style.color = "#e83922";
        }
        if (data.midwest16_2 && data.midwest16_2 !== 'TBD' && data.midwest16_2 == actual.midwest16_2) {
            score += 4;
            const inner = outer.querySelector("#midwest16_2");
            inner.style.color = "#34b233";
        }
        else if (data.midwest16_2 && actual.midwest16_2 && data.midwest16_2 !== 'TBD' && actual.midwest16_2 !== 'TBD' && data.midwest16_2 !== actual.midwest16_2) {
            const inner = outer.querySelector("#midwest16_2");
            inner.style.color = "#e83922";
        }
        if (data.south8_1 && data.south8_1 !== 'TBD' && data.south8_1 == actual.south8_1) {
            score += 8;
            const inner = outer.querySelector("#south8_1");
            inner.style.color = "#34b233";
        }
        else if (data.south8_1 && actual.south8_1 && data.south8_1 !== 'TBD' && actual.south8_1 !== 'TBD' && data.south8_1 !== actual.south8_1) {
            const inner = outer.querySelector("#south8_1");
            inner.style.color = "#e83922";
        }
        if (data.south8_2 && data.south8_2 !== 'TBD' && data.south8_2 == actual.south8_2) {
            score += 8;
            const inner = outer.querySelector("#south8_2");
            inner.style.color = "#34b233";
        }
        else if (data.south8_2 && actual.south8_2 && data.south8_2 !== 'TBD' && actual.south8_2 !== 'TBD' && data.south8_2 !== actual.south8_2) {
            const inner = outer.querySelector("#south8_2");
            inner.style.color = "#e83922";
        }
        if (data.west8_1 && data.west8_1 !== 'TBD' && data.west8_1 == actual.west8_1) {
            score += 8;
            const inner = outer.querySelector("#west8_1");
            inner.style.color = "#34b233";
        }
        else if (data.west8_1 && actual.west8_1 && data.west8_1 !== 'TBD' && actual.west8_1 !== 'TBD' && data.west8_1 !== actual.west8_1) {
            const inner = outer.querySelector("#west8_1");
            inner.style.color = "#e83922";
        }
        if (data.west8_2 && data.west8_2 !== 'TBD' && data.west8_2 == actual.west8_2) {
            score += 8;
            const inner = outer.querySelector("#west8_2");
            inner.style.color = "#34b233";
        }
        else if (data.west8_2 && actual.west8_2 && data.west8_2 !== 'TBD' && actual.west8_2 !== 'TBD' && data.west8_2 !== actual.west8_2) {
            const inner = outer.querySelector("#west8_2");
            inner.style.color = "#e83922";
        }
        if (data.east8_1 && data.east8_1 !== 'TBD' && data.east8_1 == actual.east8_1) {
            score += 8;
            const inner = outer.querySelector("#east8_1");
            inner.style.color = "#34b233";
        }
        else if (data.east8_1 && actual.east8_1 && data.east8_1 !== 'TBD' && actual.east8_1 !== 'TBD' && data.east8_1 !== actual.east8_1) {
            const inner = outer.querySelector("#east8_1");
            inner.style.color = "#e83922";
        }
        if (data.east8_2 && data.east8_2 !== 'TBD' && data.east8_2 == actual.east8_2) {
            score += 8;
            const inner = outer.querySelector("#east8_2");
            inner.style.color = "#34b233";
        }
        else if (data.east8_2 && actual.east8_2 && data.east8_2 !== 'TBD' && actual.east8_2 !== 'TBD' && data.east8_2 !== actual.east8_2) {
            const inner = outer.querySelector("#east8_2");
            inner.style.color = "#e83922";
        }
        if (data.midwest8_1 && data.midwest8_1 !== 'TBD' && data.midwest8_1 == actual.midwest8_1) {
            score += 8;
            const inner = outer.querySelector("#midwest8_1");
            inner.style.color = "#34b233";
        }
        else if (data.midwest8_1 && actual.midwest8_1 && data.midwest8_1 !== 'TBD' && actual.midwest8_1 !== 'TBD' && data.midwest8_1 !== actual.midwest8_1) {
            const inner = outer.querySelector("#midwest8_1");
            inner.style.color = "#e83922";
        }
        if (data.midwest8_2 && data.midwest8_2 !== 'TBD' && data.midwest8_2 == actual.midwest8_2) {
            score += 8;
            const inner = outer.querySelector("#midwest8_2");
            inner.style.color = "#34b233";
        }
        else if (data.midwest8_2 && actual.midwest8_2 && data.midwest8_2 !== 'TBD' && actual.midwest8_2 !== 'TBD' && data.midwest8_2 !== actual.midwest8_2) {
            const inner = outer.querySelector("#midwest8_2");
            inner.style.color = "#e83922";
        }
        if (data.south && data.south !== 'TBD' && data.south == actual.south) {
            score += 16;
            const inner = outer.querySelector("#south");
            inner.style.color = "#34b233";
        }
        else if (data.south && actual.south && data.south !== 'TBD' && actual.south !== 'TBD' && data.south !== actual.south) {
            const inner = outer.querySelector("#south");
            inner.style.color = "#e83922";
        }
        if (data.west && data.west !== 'TBD' && data.west == actual.west) {
            score += 16;
            const inner = outer.querySelector("#west");
            inner.style.color = "#34b233";
        }
        else if (data.west && actual.west && data.west !== 'TBD' && actual.west !== 'TBD' && data.west !== actual.west) {
            const inner = outer.querySelector("#west");
            inner.style.color = "#e83922";
        }
        if (data.east && data.east !== 'TBD' && data.east == actual.east) {
            score += 16;
            const inner = outer.querySelector("#east");
            inner.style.color = "#34b233";
        }
        else if (data.east && actual.east && data.east !== 'TBD' && actual.east !== 'TBD' && data.east !== actual.east) {
            const inner = outer.querySelector("#east");
            inner.style.color = "#e83922";
        }
        if (data.midwest && data.midwest !== 'TBD' && data.midwest == actual.midwest) {
            score += 16;
            const inner = outer.querySelector("#midwest");
            inner.style.color = "#34b233";
        }
        else if (data.midwest && actual.midwest && data.midwest !== 'TBD' && actual.midwest !== 'TBD' && data.midwest !== actual.midwest) {
            const inner = outer.querySelector("#midwest");
            inner.style.color = "#e83922";
        }
        if (data.finalleft && data.finalleft !== 'TBD' && data.finalleft == actual.finalleft) {
            score += 32;
            const inner = outer.querySelector("#finalleft");
            inner.style.color = "#34b233";
        }
        else if (data.finalleft && actual.finalleft && data.finalleft !== 'TBD' && actual.finalleft !== 'TBD' && data.finalleft !== actual.finalleft) {
            const inner = outer.querySelector("#finalleft");
            inner.style.color = "#e83922";
        }
        if (data.finalright && data.finalright !== 'TBD' && data.finalright == actual.finalright) {
            score += 32;
            const inner = outer.querySelector("#finalright");
            inner.style.color = "#34b233";
        }
        else if (data.finalright && actual.finalright && data.finalright !== 'TBD' && actual.finalright !== 'TBD' && data.finalright !== actual.finalright) {
            const inner = outer.querySelector("#finalright");
            inner.style.color = "#e83922";
        }
        if (data.champion && data.champion !== 'TBD' && data.champion == actual.champion) {
            score += 64;
            const inner = outer.querySelector("#champion");
            inner.style.color = "#34b233";
        }
        else if (data.champion && actual.champion && data.champion !== 'TBD' && actual.champion !== 'TBD' && data.champion !== actual.champion) {
            const inner = outer.querySelector("#champion");
            inner.style.color = "#e83922";
        }
        menScoreData.push({name: data.name, score: score});
    })
    console.log(menScoreData);
    updateMenTable();
}

function updateMenBracketData() {
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
                        <p class="team lowleft" id="firstfour1">${data.firstfour1 || 'TBD'}</p>
                        <p class="team">Louisville</p>
                        <p class="team lowleft">Creighton</p>
                        <p class="team">Michigan</p>
                        <p class="team lowleft">UC San Diego</p>
                        <p class="team">Texas A&M</p>
                        <p class="team lowleft">Yale</p>
                        <p class="team">Ole Miss</p>
                        <p class="team lowleft" id="firstfour2">${data.firstfour2 || 'TBD'}</p>
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
                        <p class="team topset2" id="south1">${data.south1 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="south8">${data.south8 || 'TBD'}</p>
                        <p class="team lowset2" id="south5">${data.south5 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="south4">${data.south4 || 'TBD'}</p>
                        <p class="team lowset2" id="south6">${data.south6 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="south3">${data.south3 || 'TBD'}</p>
                        <p class="team lowset2" id="south7">${data.south7 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="south2">${data.south2 || 'TBD'}</p>
                        <p class="team lowset2" id="west1">${data.west1 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="west8">${data.west8 || 'TBD'}</p>
                        <p class="team lowset2" id="west5">${data.west5 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="west4">${data.west4 || 'TBD'}</p>
                        <p class="team lowset2" id="west6">${data.west6 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="west3">${data.west3 || 'TBD'}</p>
                        <p class="team lowset2" id="west7">${data.west7 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="west2">${data.west2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Sweet 16</p>
                        <p class="date">March 27-28</p>
                        <p class="team topset3" id="south16_1">${data.south16_1 || 'TBD'}</p>
                        <p class="team lowleft lowset3" id="south16_4">${data.south16_4 || 'TBD'}</p>
                        <p class="team lowset3" id="south16_3">${data.south16_3 || 'TBD'}</p>
                        <p class="team lowleft lowset3" id="south16_2">${data.south16_2 || 'TBD'}</p>
                        <p class="team lowset3" id="west16_1">${data.west16_1 || 'TBD'}</p>
                        <p class="team lowleft lowset3" id="west16_4">${data.west16_4 || 'TBD'}</p>
                        <p class="team lowset3" id="west16_3">${data.west16_3 || 'TBD'}</p>
                        <p class="team lowleft lowset3" id="west16_2">${data.west16_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Elite 8</p>
                        <p class="date">March 29-30</p>
                        <p class="team topset4" id="south8_1">${data.south8_1 || 'TBD'}</p>
                        <p class="team lowleft lowset4" id="south8_2">${data.south8_2 || 'TBD'}</p>
                        <p class="team lowset4" id="west8_1">${data.west8_1 || 'TBD'}</p>
                        <p class="team lowleft lowset4" id="west8_2">${data.west8_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Final 4</p>
                        <p class="date">April 5</p>
                        <p class="team topset5" id="south">${data.south || 'TBD'}</p>
                        <p class="team lowleft lowset5" id="west">${data.west || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Championship</p>
                        <p class="date">April 7</p>
                        <p class="team leftfinal" id="finalleft">${data.finalleft || 'TBD'}</p>
                        <p class="team winner" id="champion">${data.champion || 'TBD'}</p>
                        <div class="rightcontainer">
                            <p class="team rightfinal" id="finalright">${data.finalright || 'TBD'}</p>
                        </div>
                    </div>
                    <div class="section">
                        <p>Final 4</p>
                        <p class="date">April 5</p>
                        <p class="team topset5" id="east">${data.east || 'TBD'}</p>
                        <p class="team lowright lowset5" id="midwest">${data.midwest || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Elite 8</p>
                        <p class="date">March 29-30</p>
                        <p class="team topset4" id="east8_1">${data.east8_1 || 'TBD'}</p>
                        <p class="team lowright lowset4" id="east8_2">${data.east8_2 || 'TBD'}</p>
                        <p class="team lowset4" id="midwest8_1">${data.midwest8_1 || 'TBD'}</p>
                        <p class="team lowright lowset4" id="midwest8_2">${data.midwest8_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Sweet 16</p>
                        <p class="date">March 27-28</p>
                        <p class="team topset3" id="east16_1">${data.east16_1 || 'TBD'}</p>
                        <p class="team lowright lowset3" id="east16_4">${data.east16_4 || 'TBD'}</p>
                        <p class="team lowset3" id="east16_3">${data.east16_3 || 'TBD'}</p>
                        <p class="team lowright lowset3" id="east16_2">${data.east16_2 || 'TBD'}</p>
                        <p class="team lowset3" id="midwest16_1">${data.midwest16_1 || 'TBD'}</p>
                        <p class="team lowright lowset3" id="midwest16_4">${data.midwest16_4 || 'TBD'}</p>
                        <p class="team lowset3" id="midwest16_3">${data.midwest16_3 || 'TBD'}</p>
                        <p class="team lowright lowset3" id="midwest16_2">${data.midwest16_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>2nd Round</p>
                        <p class="date">March 22-23</p>
                        <p class="team topset2" id="east1">${data.east1 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="east8">${data.east8 || 'TBD'}</p>
                        <p class="team lowset2" id="east5">${data.east5 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="east4">${data.east4 || 'TBD'}</p>
                        <p class="team lowset2" id="east6">${data.east6 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="east3">${data.east3 || 'TBD'}</p>
                        <p class="team lowset2" id="east7">${data.east7 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="east2">${data.east2 || 'TBD'}</p>
                        <p class="team lowset2" id="midwest1">${data.midwest1 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="midwest8">${data.midwest8 || 'TBD'}</p>
                        <p class="team lowset2" id="midwest5">${data.midwest5 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="midwest4">${data.midwest4 || 'TBD'}</p>
                        <p class="team lowset2" id="midwest6">${data.midwest6 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="midwest3">${data.midwest3 || 'TBD'}</p>
                        <p class="team lowset2" id="midwest7">${data.midwest7 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="midwest2">${data.midwest2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>1st Round</p>
                        <p class="date">March 20-21</p>
                        <p class="team">Duke</p>
                        <p class="team lowright" id="firstfour3">${data.firstfour3 || 'TBD'}</p>
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
                        <p class="team lowright" id="firstfour4">${data.firstfour4 || 'TBD'}</p>
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

function updateMenTable() {
    const rankPlayers = menScoreData.slice(1);
    rankPlayers.sort((a,b) => b.score - a.score);
    const tableBody = document.querySelector("#menrankings-table tbody");
    const maxScoreRow = document.createElement("tr");
    const maxRankCell = document.createElement("td");
    maxScoreRow.appendChild(maxRankCell);
    const maxNameCell = document.createElement("td");
    maxNameCell.textContent = "Maximum";
    maxScoreRow.appendChild(maxNameCell);
    const maxScoreCell = document.createElement("td");
    maxScoreCell.textContent = menScoreData[0].score;
    maxScoreRow.appendChild(maxScoreCell);
    tableBody.appendChild(maxScoreRow);
    let currentRank = 1;
    rankPlayers.forEach((player, index) => {
        const row = document.createElement("tr");

        const rankCell = document.createElement("td");
        if (index > 0 && player.score === rankPlayers[index - 1].score) {
            rankCell.textContent = currentRank;
        }
        else {
            rankCell.textContent = index + 1;
            currentRank = index + 1;
        }
        row.appendChild(rankCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = player.name;
        row.appendChild(nameCell);

        const scoreCell = document.createElement("td");
        scoreCell.textContent = player.score;
        row.appendChild(scoreCell);

        tableBody.appendChild(row);
    });
}

let womenBracketData = [
    {name: "Actual"},
    {name: "Geoffrey", firstfour1: "Southern", firstfour2: "Columbia", firstfour3: "Princeton", firstfour4: "High Point", spokaneup1: "UCLA", spokaneup8: "Richmond", spokaneup5: "Ole Miss", spokaneup4: "Baylor", spokaneup6: "Florida St", spokaneup3: "LSU", spokaneup7: "Michigan St", spokaneup2: "NC State", spokanedown1: "USC", spokanedown8: "California", spokanedown5: "Kansas St", spokanedown4: "Kentucky", spokanedown6: "Iowa", spokanedown3: "Oklahoma", spokanedown7: "Oklahoma St", spokanedown2: "UConn", birminghamup1: "South Carolina", birminghamup8: "Indiana", birminghamup5: "Alabama", birminghamup4: "Maryland", birminghamup6: "West Virginia", birminghamup3: "North Carolina", birminghamup7: "Vanderbilt", birminghamup2: "Duke", birminghamdown1: "Texas", birminghamdown8: "Creighton", birminghamdown5: "Tennessee", birminghamdown4: "Ohio State", birminghamdown6: "Princeton", birminghamdown3: "Notre Dame", birminghamdown7: "Nebraska", birminghamdown2: "TCU", spokaneup16_1: "UCLA", spokaneup16_4: "Baylor", spokaneup16_3: "LSU", spokaneup16_2: "NC State", spokanedown16_1: "USC", spokanedown16_4: "Kansas St", spokanedown16_3: "Iowa", spokanedown16_2: "UConn", birminghamup16_1: "South Carolina", birminghamup16_4: "Maryland", birminghamup16_3: "North Carolina", birminghamup16_2: "Duke", birminghamdown16_1: "Texas", birminghamdown16_4: "Tennessee", birminghamdown16_3: "Notre Dame", birminghamdown16_2: "TCU", spokaneup8_1: "UCLA", spokaneup8_2: "LSU", spokanedown8_1: "USC", spokanedown8_2: "UConn", birminghamup8_1: "South Carolina", birminghamup8_2: "Duke", birminghamdown8_1: "Texas", birminghamdown8_2: "Notre Dame", spokaneup: "UCLA", spokanedown: "UConn", birminghamup: "South Carolina", birminghamdown: "Notre Dame", finalleft: "UConn", finalright: "South Carolina", champion: "UConn"},
    {name: "Dad 'JuJu' Ben", firstfour1: "UC San Diego", firstfour2: "Columbia", firstfour3: "Princeton", firstfour4: "High Point", spokaneup1: "UCLA", spokaneup8: "Georgia Tech", spokaneup5: "Ole Miss", spokaneup4: "Baylor", spokaneup6: "George Mason", spokaneup3: "LSU", spokaneup7: "Michigan St", spokaneup2: "NC State", spokanedown1: "USC", spokanedown8: "California", spokanedown5: "Kansas St", spokanedown4: "Kentucky", spokanedown6: "Iowa", spokanedown3: "Oklahoma", spokanedown7: "S Dakota St", spokanedown2: "UConn", birminghamup1: "South Carolina", birminghamup8: "Utah", birminghamup5: "Alabama", birminghamup4: "Maryland", birminghamup6: "West Virginia", birminghamup3: "North Carolina", birminghamup7: "Oregon", birminghamup2: "Duke", birminghamdown1: "Texas", birminghamdown8: "Illinois", birminghamdown5: "Tennessee", birminghamdown4: "Ohio State", birminghamdown6: "Michigan", birminghamdown3: "Notre Dame", birminghamdown7: "Nebraska", birminghamdown2: "TCU", spokaneup16_1: "UCLA", spokaneup16_4: "Baylor", spokaneup16_3: "LSU", spokaneup16_2: "NC State", spokanedown16_1: "USC", spokanedown16_4: "Kentucky", spokanedown16_3: "Oklahoma", spokanedown16_2: "UConn", birminghamup16_1: "South Carolina", birminghamup16_4: "Alabama", birminghamup16_3: "West Virginia", birminghamup16_2: "Duke", birminghamdown16_1: "Texas", birminghamdown16_4: "Tennessee", birminghamdown16_3: "Notre Dame", birminghamdown16_2: "TCU", spokaneup8_1: "UCLA", spokaneup8_2: "LSU", spokanedown8_1: "USC", spokanedown8_2: "UConn", birminghamup8_1: "South Carolina", birminghamup8_2: "Duke", birminghamdown8_1: "Texas", birminghamdown8_2: "TCU", spokaneup: "UCLA", spokanedown: "USC", birminghamup: "South Carolina", birminghamdown: "TCU", finalleft: "USC", finalright: "South Carolina", champion: "USC"},
    {name: "Helena", firstfour1: "UC San Diego", firstfour2: "Columbia", firstfour3: "Princeton", firstfour4: "William & Mary", spokaneup1: "UCLA", spokaneup8: "Richmond", spokaneup5: "Ole Miss", spokaneup4: "Baylor", spokaneup6: "George Mason", spokaneup3: "LSU", spokaneup7: "Harvard", spokaneup2: "NC State", spokanedown1: "USC", spokanedown8: "Mississippi St", spokanedown5: "Fairfield", spokanedown4: "Liberty", spokanedown6: "Murray St", spokanedown3: "Oklahoma", spokanedown7: "Oklahoma St", spokanedown2: "UConn", birminghamup1: "South Carolina", birminghamup8: "Indiana", birminghamup5: "Alabama", birminghamup4: "Maryland", birminghamup6: "West Virginia", birminghamup3: "North Carolina", birminghamup7: "Vanderbilt", birminghamup2: "Lehigh", birminghamdown1: "Texas", birminghamdown8: "Illinois", birminghamdown5: "South Florida", birminghamdown4: "Ohio State", birminghamdown6: "Princeton", birminghamdown3: "Notre Dame", birminghamdown7: "Louisville", birminghamdown2: "TCU", spokaneup16_1: "UCLA", spokaneup16_4: "Ole Miss", spokaneup16_3: "LSU", spokaneup16_2: "Harvard", spokanedown16_1: "USC", spokanedown16_4: "Liberty", spokanedown16_3: "Oklahoma", spokanedown16_2: "UConn", birminghamup16_1: "South Carolina", birminghamup16_4: "Alabama", birminghamup16_3: "North Carolina", birminghamup16_2: "Vanderbilt", birminghamdown16_1: "Texas", birminghamdown16_4: "Ohio State", birminghamdown16_3: "Notre Dame", birminghamdown16_2: "TCU", spokaneup8_1: "UCLA", spokaneup8_2: "LSU", spokanedown8_1: "USC", spokanedown8_2: "UConn", birminghamup8_1: "South Carolina", birminghamup8_2: "North Carolina", birminghamdown8_1: "Texas", birminghamdown8_2: "Notre Dame", spokaneup: "UCLA", spokanedown: "UConn", birminghamup: "South Carolina", birminghamdown: "Notre Dame", finalleft: "UCLA", finalright: "South Carolina", champion: "South Carolina"},
    {name: "Unc G", firstfour1: "UC San Diego", firstfour2: "Washington", firstfour3: "Princeton", firstfour4: "High Point", spokaneup1: "UCLA", spokaneup8: "Georgia Tech", spokaneup5: "Ole Miss", spokaneup4: "Baylor", spokaneup6: "Florida St", spokaneup3: "LSU", spokaneup7: "Harvard", spokaneup2: "NC State", spokanedown1: "USC", spokanedown8: "California", spokanedown5: "Kansas St", spokanedown4: "Kentucky", spokanedown6: "Iowa", spokanedown3: "FGCU", spokanedown7: "Oklahoma St", spokanedown2: "UConn", birminghamup1: "South Carolina", birminghamup8: "Utah", birminghamup5: "Alabama", birminghamup4: "Maryland", birminghamup6: "West Virginia", birminghamup3: "North Carolina", birminghamup7: "Oregon", birminghamup2: "Duke", birminghamdown1: "Texas", birminghamdown8: "Illinois", birminghamdown5: "Tennessee", birminghamdown4: "Ohio State", birminghamdown6: "Michigan", birminghamdown3: "Notre Dame", birminghamdown7: "Nebraska", birminghamdown2: "TCU", spokaneup16_1: "UCLA", spokaneup16_4: "Baylor", spokaneup16_3: "LSU", spokaneup16_2: "NC State", spokanedown16_1: "USC", spokanedown16_4: "Kentucky", spokanedown16_3: "FGCU", spokanedown16_2: "UConn", birminghamup16_1: "South Carolina", birminghamup16_4: "Maryland", birminghamup16_3: "North Carolina", birminghamup16_2: "Duke", birminghamdown16_1: "Texas", birminghamdown16_4: "Tennessee", birminghamdown16_3: "Notre Dame", birminghamdown16_2: "TCU", spokaneup8_1: "UCLA", spokaneup8_2: "LSU", spokanedown8_1: "USC", spokanedown8_2: "UConn", birminghamup8_1: "South Carolina", birminghamup8_2: "Duke", birminghamdown8_1: "Texas", birminghamdown8_2: "TCU", spokaneup: "LSU", spokanedown: "UConn", birminghamup: "South Carolina", birminghamdown: "TCU", finalleft: "UConn", finalright: "South Carolina", champion: "UConn"},
    {name: "Eric", firstfour1: "UC San Diego", firstfour2: "Washington", firstfour3: "Iowa State", firstfour4: "High Point", spokaneup1: "UCLA", spokaneup8: "Richmond", spokaneup5: "Ball State", spokaneup4: "Baylor", spokaneup6: "Florida St", spokaneup3: "LSU", spokaneup7: "Harvard", spokaneup2: "NC State", spokanedown1: "USC", spokanedown8: "California", spokanedown5: "Fairfield", spokanedown4: "Kentucky", spokanedown6: "Iowa", spokanedown3: "Oklahoma", spokanedown7: "S Dakota St", spokanedown2: "UConn", birminghamup1: "South Carolina", birminghamup8: "Utah", birminghamup5: "Alabama", birminghamup4: "Maryland", birminghamup6: "West Virginia", birminghamup3: "North Carolina", birminghamup7: "Oregon", birminghamup2: "Duke", birminghamdown1: "Texas", birminghamdown8: "Illinois", birminghamdown5: "Tennessee", birminghamdown4: "Ohio State", birminghamdown6: "Michigan", birminghamdown3: "Notre Dame", birminghamdown7: "Louisville", birminghamdown2: "TCU", spokaneup16_1: "UCLA", spokaneup16_4: "Baylor", spokaneup16_3: "LSU", spokaneup16_2: "NC State", spokanedown16_1: "USC", spokanedown16_4: "Kentucky", spokanedown16_3: "Iowa", spokanedown16_2: "UConn", birminghamup16_1: "South Carolina", birminghamup16_4: "Alabama", birminghamup16_3: "North Carolina", birminghamup16_2: "Duke", birminghamdown16_1: "Texas", birminghamdown16_4: "Ohio State", birminghamdown16_3: "Notre Dame", birminghamdown16_2: "TCU", spokaneup8_1: "UCLA", spokaneup8_2: "LSU", spokanedown8_1: "Kentucky", spokanedown8_2: "UConn", birminghamup8_1: "South Carolina", birminghamup8_2: "North Carolina", birminghamdown8_1: "Texas", birminghamdown8_2: "TCU", spokaneup: "LSU", spokanedown: "UConn", birminghamup: "North Carolina", birminghamdown: "TCU", finalleft: "UConn", finalright: "TCU", champion: "UConn"},
    {name: "Camilla", firstfour1: "UC San Diego", firstfour2: "Columbia", firstfour3: "Princeton", firstfour4: "High Point", spokaneup1: "UCLA", spokaneup8: "Richmond", spokaneup5: "Ole Miss", spokaneup4: "Grand Canyon", spokaneup6: "Florida St", spokaneup3: "LSU", spokaneup7: "Michigan St", spokaneup2: "NC State", spokanedown1: "USC", spokanedown8: "California", spokanedown5: "Fairfield", spokanedown4: "Kentucky", spokanedown6: "Iowa", spokanedown3: "Oklahoma", spokanedown7: "S Dakota St", spokanedown2: "UConn", birminghamup1: "South Carolina", birminghamup8: "Indiana", birminghamup5: "Alabama", birminghamup4: "Maryland", birminghamup6: "Columbia", birminghamup3: "North Carolina", birminghamup7: "Oregon", birminghamup2: "Duke", birminghamdown1: "Texas", birminghamdown8: "Illinois", birminghamdown5: "Tennessee", birminghamdown4: "Ohio State", birminghamdown6: "Michigan", birminghamdown3: "SF Austin", birminghamdown7: "Nebraska", birminghamdown2: "TCU", spokaneup16_1: "UCLA", spokaneup16_4: "Ole Miss", spokaneup16_3: "LSU", spokaneup16_2: "NC State", spokanedown16_1: "USC", spokanedown16_4: "Kentucky", spokanedown16_3: "Iowa", spokanedown16_2: "UConn", birminghamup16_1: "South Carolina", birminghamup16_4: "Alabama", birminghamup16_3: "North Carolina", birminghamup16_2: "Duke", birminghamdown16_1: "Illinois", birminghamdown16_4: "Tennessee", birminghamdown16_3: "Michigan", birminghamdown16_2: "TCU", spokaneup8_1: "UCLA", spokaneup8_2: "NC State", spokanedown8_1: "USC", spokanedown8_2: "Iowa", birminghamup8_1: "South Carolina", birminghamup8_2: "North Carolina", birminghamdown8_1: "Tennessee", birminghamdown8_2: "Michigan", spokaneup: "NC State", spokanedown: "USC", birminghamup: "North Carolina", birminghamdown: "Tennessee", finalleft: "NC State", finalright: "Tennessee", champion: "NC State"},
    {name: "Mom", firstfour1: "*Southern", firstfour2: "*Columbia", firstfour3: "*Iowa State", firstfour4: "*William & Mary", spokaneup1: "UCLA", spokaneup8: "Georgia Tech", spokaneup5: "Ole Miss", spokaneup4: "Baylor", spokaneup6: "George Mason", spokaneup3: "LSU", spokaneup7: "Michigan St", spokaneup2: "NC State", spokanedown1: "USC", spokanedown8: "California", spokanedown5: "Fairfield", spokanedown4: "Kentucky", spokanedown6: "Iowa", spokanedown3: "Oklahoma", spokanedown7: "S Dakota St", spokanedown2: "UConn", birminghamup1: "South Carolina", birminghamup8: "Indiana", birminghamup5: "Alabama", birminghamup4: "Maryland", birminghamup6: "West Virginia", birminghamup3: "North Carolina", birminghamup7: "Oregon", birminghamup2: "Duke", birminghamdown1: "Texas", birminghamdown8: "Illinois", birminghamdown5: "Tennessee", birminghamdown4: "Ohio State", birminghamdown6: "Michigan", birminghamdown3: "Notre Dame", birminghamdown7: "Nebraska", birminghamdown2: "TCU", spokaneup16_1: "UCLA", spokaneup16_4: "Baylor", spokaneup16_3: "LSU", spokaneup16_2: "NC State", spokanedown16_1: "USC", spokanedown16_4: "Kentucky", spokanedown16_3: "Iowa", spokanedown16_2: "UConn", birminghamup16_1: "South Carolina", birminghamup16_4: "Alabama", birminghamup16_3: "North Carolina", birminghamup16_2: "Duke", birminghamdown16_1: "Illinois", birminghamdown16_4: "Tennessee", birminghamdown16_3: "Notre Dame", birminghamdown16_2: "TCU", spokaneup8_1: "UCLA", spokaneup8_2: "LSU", spokanedown8_1: "Kentucky", spokanedown8_2: "UConn", birminghamup8_1: "South Carolina", birminghamup8_2: "North Carolina", birminghamdown8_1: "Tennessee", birminghamdown8_2: "Notre Dame", spokaneup: "LSU", spokanedown: "Kentucky", birminghamup: "South Carolina", birminghamdown: "Notre Dame", finalleft: "LSU", finalright: "Notre Dame", champion: "LSU"},
    {name: "Andrew", firstfour1: "UC San Diego", firstfour2: "Columbia", firstfour3: "Iowa State", firstfour4: "William & Mary", spokaneup1: "UCLA", spokaneup8: "Richmond", spokaneup5: "Ole Miss", spokaneup4: "Grand Canyon", spokaneup6: "George Mason", spokaneup3: "LSU", spokaneup7: "Michigan St", spokaneup2: "Vermont", spokanedown1: "USC", spokanedown8: "Mississippi St", spokanedown5: "Kansas St", spokanedown4: "Kentucky", spokanedown6: "Iowa", spokanedown3: "Oklahoma", spokanedown7: "S Dakota St", spokanedown2: "UConn", birminghamup1: "South Carolina", birminghamup8: "Utah", birminghamup5: "Alabama", birminghamup4: "Maryland", birminghamup6: "Columbia", birminghamup3: "North Carolina", birminghamup7: "Oregon", birminghamup2: "Duke", birminghamdown1: "Texas", birminghamdown8: "Illinois", birminghamdown5: "South Florida", birminghamdown4: "Ohio State", birminghamdown6: "Michigan", birminghamdown3: "SF Austin", birminghamdown7: "Louisville", birminghamdown2: "TCU", spokaneup16_1: "Richmond", spokaneup16_4: "Ole Miss", spokaneup16_3: "LSU", spokaneup16_2: "Michigan St", spokanedown16_1: "USC", spokanedown16_4: "Kansas St", spokanedown16_3: "Iowa", spokanedown16_2: "UConn", birminghamup16_1: "Utah", birminghamup16_4: "Maryland", birminghamup16_3: "Columbia", birminghamup16_2: "Duke", birminghamdown16_1: "Illinois", birminghamdown16_4: "Ohio State", birminghamdown16_3: "Michigan", birminghamdown16_2: "TCU", spokaneup8_1: "Ole Miss", spokaneup8_2: "LSU", spokanedown8_1: "USC", spokanedown8_2: "UConn", birminghamup8_1: "Utah", birminghamup8_2: "Columbia", birminghamdown8_1: "Ohio State", birminghamdown8_2: "Michigan", spokaneup: "LSU", spokanedown: "USC", birminghamup: "Utah", birminghamdown: "Michigan", finalleft: "LSU", finalright: "Michigan", champion: "LSU"}
]

let womenScoreData = [];

function countWomenScore() {
    womenScoreData = [];
    const actual = womenBracketData[0];
    womenBracketData.forEach(data => {
        const outer = document.getElementById("womenbracket-"+data.name.toLowerCase());
        let score = 0;
        if (data.firstfour1 && data.firstfour1 !== 'TBD' && data.firstfour1 == actual.firstfour1) {
            score += 1;
            const inner = outer.querySelector("#firstfour1");
            inner.style.color = "#34b233";
        }
        else if (data.firstfour1 && actual.firstfour1 && data.firstfour1 !== 'TBD' && actual.firstfour1 !== 'TBD' && data.firstfour1 !== actual.firstfour1) {
            const inner = outer.querySelector("#firstfour1");
            inner.style.color = "#e83922";
        }
        if (data.firstfour2 && data.firstfour2 !== 'TBD' && data.firstfour2 == actual.firstfour2) {
            score += 1;
            const inner = outer.querySelector("#firstfour2");
            inner.style.color = "#34b233";
        }
        else if (data.firstfour2 && actual.firstfour2 && data.firstfour2 !== 'TBD' && actual.firstfour2 !== 'TBD' && data.firstfour2 !== actual.firstfour2) {
            const inner = outer.querySelector("#firstfour2");
            inner.style.color = "#e83922";
        }
        if (data.firstfour3 && data.firstfour3 !== 'TBD' && data.firstfour3 == actual.firstfour3) {
            score += 1;
            const inner = outer.querySelector("#firstfour3");
            inner.style.color = "#34b233";
        }
        else if (data.firstfour3 && actual.firstfour3 && data.firstfour3 !== 'TBD' && actual.firstfour3 !== 'TBD' && data.firstfour3 !== actual.firstfour3) {
            const inner = outer.querySelector("#firstfour3");
            inner.style.color = "#e83922";
        }
        if (data.firstfour4 && data.firstfour4 !== 'TBD' && data.firstfour4 == actual.firstfour4) {
            score += 1;
            const inner = outer.querySelector("#firstfour4");
            inner.style.color = "#34b233";
        }
        else if (data.firstfour4 && actual.firstfour4 && data.firstfour4 !== 'TBD' && actual.firstfour4 !== 'TBD' && data.firstfour4 !== actual.firstfour4) {
            const inner = outer.querySelector("#firstfour4");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup1 && data.spokaneup1 !== 'TBD' && data.spokaneup1 == actual.spokaneup1) {
            score += 2;
            const inner = outer.querySelector("#spokaneup1");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup1 && actual.spokaneup1 && data.spokaneup1 !== 'TBD' && actual.spokaneup1 !== 'TBD' && data.spokaneup1 !== actual.spokaneup1) {
            const inner = outer.querySelector("#spokaneup1");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup8 && data.spokaneup8 !== 'TBD' && data.spokaneup8 == actual.spokaneup8) {
            score += 2;
            const inner = outer.querySelector("#spokaneup8");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup8 && actual.spokaneup8 && data.spokaneup8 !== 'TBD' && actual.spokaneup8 !== 'TBD' && data.spokaneup8 !== actual.spokaneup8) {
            const inner = outer.querySelector("#spokaneup8");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup5 && data.spokaneup5 !== 'TBD' && data.spokaneup5 == actual.spokaneup5) {
            score += 2;
            const inner = outer.querySelector("#spokaneup5");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup5 && actual.spokaneup5 && data.spokaneup5 !== 'TBD' && actual.spokaneup5 !== 'TBD' && data.spokaneup5 !== actual.spokaneup5) {
            const inner = outer.querySelector("#spokaneup5");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup4 && data.spokaneup4 !== 'TBD' && data.spokaneup4 == actual.spokaneup4) {
            score += 2;
            const inner = outer.querySelector("#spokaneup4");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup4 && actual.spokaneup4 && data.spokaneup4 !== 'TBD' && actual.spokaneup4 !== 'TBD' && data.spokaneup4 !== actual.spokaneup4) {
            const inner = outer.querySelector("#spokaneup4");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup6 && data.spokaneup6 !== 'TBD' && data.spokaneup6 == actual.spokaneup6) {
            score += 2;
            const inner = outer.querySelector("#spokaneup6");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup6 && actual.spokaneup6 && data.spokaneup6 !== 'TBD' && actual.spokaneup6 !== 'TBD' && data.spokaneup6 !== actual.spokaneup6) {
            const inner = outer.querySelector("#spokaneup6");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup3 && data.spokaneup3 !== 'TBD' && data.spokaneup3 == actual.spokaneup3) {
            score += 2;
            const inner = outer.querySelector("#spokaneup3");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup3 && actual.spokaneup3 && data.spokaneup3 !== 'TBD' && actual.spokaneup3 !== 'TBD' && data.spokaneup3 !== actual.spokaneup3) {
            const inner = outer.querySelector("#spokaneup3");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup7 && data.spokaneup7 !== 'TBD' && data.spokaneup7 == actual.spokaneup7) {
            score += 2;
            const inner = outer.querySelector("#spokaneup7");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup7 && actual.spokaneup7 && data.spokaneup7 !== 'TBD' && actual.spokaneup7 !== 'TBD' && data.spokaneup7 !== actual.spokaneup7) {
            const inner = outer.querySelector("#spokaneup7");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup2 && data.spokaneup2 !== 'TBD' && data.spokaneup2 == actual.spokaneup2) {
            score += 2;
            const inner = outer.querySelector("#spokaneup2");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup2 && actual.spokaneup2 && data.spokaneup2 !== 'TBD' && actual.spokaneup2 !== 'TBD' && data.spokaneup2 !== actual.spokaneup2) {
            const inner = outer.querySelector("#spokaneup2");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown1 && data.spokanedown1 !== 'TBD' && data.spokanedown1 == actual.spokanedown1) {
            score += 2;
            const inner = outer.querySelector("#spokanedown1");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown1 && actual.spokanedown1 && data.spokanedown1 !== 'TBD' && actual.spokanedown1 !== 'TBD' && data.spokanedown1 !== actual.spokanedown1) {
            const inner = outer.querySelector("#spokanedown1");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown8 && data.spokanedown8 !== 'TBD' && data.spokanedown8 == actual.spokanedown8) {
            score += 2;
            const inner = outer.querySelector("#spokanedown8");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown8 && actual.spokanedown8 && data.spokanedown8 !== 'TBD' && actual.spokanedown8 !== 'TBD' && data.spokanedown8 !== actual.spokanedown8) {
            const inner = outer.querySelector("#spokanedown8");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown5 && data.spokanedown5 !== 'TBD' && data.spokanedown5 == actual.spokanedown5) {
            score += 2;
            const inner = outer.querySelector("#spokanedown5");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown5 && actual.spokanedown5 && data.spokanedown5 !== 'TBD' && actual.spokanedown5 !== 'TBD' && data.spokanedown5 !== actual.spokanedown5) {
            const inner = outer.querySelector("#spokanedown5");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown4 && data.spokanedown4 !== 'TBD' && data.spokanedown4 == actual.spokanedown4) {
            score += 2;
            const inner = outer.querySelector("#spokanedown4");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown4 && actual.spokanedown4 && data.spokanedown4 !== 'TBD' && actual.spokanedown4 !== 'TBD' && data.spokanedown4 !== actual.spokanedown4) {
            const inner = outer.querySelector("#spokanedown4");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown6 && data.spokanedown6 !== 'TBD' && data.spokanedown6 == actual.spokanedown6) {
            score += 2;
            const inner = outer.querySelector("#spokanedown6");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown6 && actual.spokanedown6 && data.spokanedown6 !== 'TBD' && actual.spokanedown6 !== 'TBD' && data.spokanedown6 !== actual.spokanedown6) {
            const inner = outer.querySelector("#spokanedown6");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown3 && data.spokanedown3 !== 'TBD' && data.spokanedown3 == actual.spokanedown3) {
            score += 2;
            const inner = outer.querySelector("#spokanedown3");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown3 && actual.spokanedown3 && data.spokanedown3 !== 'TBD' && actual.spokanedown3 !== 'TBD' && data.spokanedown3 !== actual.spokanedown3) {
            const inner = outer.querySelector("#spokanedown3");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown7 && data.spokanedown7 !== 'TBD' && data.spokanedown7 == actual.spokanedown7) {
            score += 2;
            const inner = outer.querySelector("#spokanedown7");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown7 && actual.spokanedown7 && data.spokanedown7 !== 'TBD' && actual.spokanedown7 !== 'TBD' && data.spokanedown7 !== actual.spokanedown7) {
            const inner = outer.querySelector("#spokanedown7");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown2 && data.spokanedown2 !== 'TBD' && data.spokanedown2 == actual.spokanedown2) {
            score += 2;
            const inner = outer.querySelector("#spokanedown2");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown2 && actual.spokanedown2 && data.spokanedown2 !== 'TBD' && actual.spokanedown2 !== 'TBD' && data.spokanedown2 !== actual.spokanedown2) {
            const inner = outer.querySelector("#spokanedown2");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup1 && data.birminghamup1 !== 'TBD' && data.birminghamup1 == actual.birminghamup1) {
            score += 2;
            const inner = outer.querySelector("#birminghamup1");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup1 && actual.birminghamup1 && data.birminghamup1 !== 'TBD' && actual.birminghamup1 !== 'TBD' && data.birminghamup1 !== actual.birminghamup1) {
            const inner = outer.querySelector("#birminghamup1");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup8 && data.birminghamup8 !== 'TBD' && data.birminghamup8 == actual.birminghamup8) {
            score += 2;
            const inner = outer.querySelector("#birminghamup8");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup8 && actual.birminghamup8 && data.birminghamup8 !== 'TBD' && actual.birminghamup8 !== 'TBD' && data.birminghamup8 !== actual.birminghamup8) {
            const inner = outer.querySelector("#birminghamup8");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup5 && data.birminghamup5 !== 'TBD' && data.birminghamup5 == actual.birminghamup5) {
            score += 2;
            const inner = outer.querySelector("#birminghamup5");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup5 && actual.birminghamup5 && data.birminghamup5 !== 'TBD' && actual.birminghamup5 !== 'TBD' && data.birminghamup5 !== actual.birminghamup5) {
            const inner = outer.querySelector("#birminghamup5");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup4 && data.birminghamup4 !== 'TBD' && data.birminghamup4 == actual.birminghamup4) {
            score += 2;
            const inner = outer.querySelector("#birminghamup4");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup4 && actual.birminghamup4 && data.birminghamup4 !== 'TBD' && actual.birminghamup4 !== 'TBD' && data.birminghamup4 !== actual.birminghamup4) {
            const inner = outer.querySelector("#birminghamup4");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup6 && data.birminghamup6 !== 'TBD' && data.birminghamup6 == actual.birminghamup6) {
            score += 2;
            const inner = outer.querySelector("#birminghamup6");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup6 && actual.birminghamup6 && data.birminghamup6 !== 'TBD' && actual.birminghamup6 !== 'TBD' && data.birminghamup6 !== actual.birminghamup6) {
            const inner = outer.querySelector("#birminghamup6");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup3 && data.birminghamup3 !== 'TBD' && data.birminghamup3 == actual.birminghamup3) {
            score += 2;
            const inner = outer.querySelector("#birminghamup3");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup3 && actual.birminghamup3 && data.birminghamup3 !== 'TBD' && actual.birminghamup3 !== 'TBD' && data.birminghamup3 !== actual.birminghamup3) {
            const inner = outer.querySelector("#birminghamup3");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup7 && data.birminghamup7 !== 'TBD' && data.birminghamup7 == actual.birminghamup7) {
            score += 2;
            const inner = outer.querySelector("#birminghamup7");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup7 && actual.birminghamup7 && data.birminghamup7 !== 'TBD' && actual.birminghamup7 !== 'TBD' && data.birminghamup7 !== actual.birminghamup7) {
            const inner = outer.querySelector("#birminghamup7");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup2 && data.birminghamup2 !== 'TBD' && data.birminghamup2 == actual.birminghamup2) {
            score += 2;
            const inner = outer.querySelector("#birminghamup2");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup2 && actual.birminghamup2 && data.birminghamup2 !== 'TBD' && actual.birminghamup2 !== 'TBD' && data.birminghamup2 !== actual.birminghamup2) {
            const inner = outer.querySelector("#birminghamup2");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown1 && data.birminghamdown1 !== 'TBD' && data.birminghamdown1 == actual.birminghamdown1) {
            score += 2;
            const inner = outer.querySelector("#birminghamdown1");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown1 && actual.birminghamdown1 && data.birminghamdown1 !== 'TBD' && actual.birminghamdown1 !== 'TBD' && data.birminghamdown1 !== actual.birminghamdown1) {
            const inner = outer.querySelector("#birminghamdown1");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown8 && data.birminghamdown8 !== 'TBD' && data.birminghamdown8 == actual.birminghamdown8) {
            score += 2;
            const inner = outer.querySelector("#birminghamdown8");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown8 && actual.birminghamdown8 && data.birminghamdown8 !== 'TBD' && actual.birminghamdown8 !== 'TBD' && data.birminghamdown8 !== actual.birminghamdown8) {
            const inner = outer.querySelector("#birminghamdown8");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown5 && data.birminghamdown5 !== 'TBD' && data.birminghamdown5 == actual.birminghamdown5) {
            score += 2;
            const inner = outer.querySelector("#birminghamdown5");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown5 && actual.birminghamdown5 && data.birminghamdown5 !== 'TBD' && actual.birminghamdown5 !== 'TBD' && data.birminghamdown5 !== actual.birminghamdown5) {
            const inner = outer.querySelector("#birminghamdown5");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown4 && data.birminghamdown4 !== 'TBD' && data.birminghamdown4 == actual.birminghamdown4) {
            score += 2;
            const inner = outer.querySelector("#birminghamdown4");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown4 && actual.birminghamdown4 && data.birminghamdown4 !== 'TBD' && actual.birminghamdown4 !== 'TBD' && data.birminghamdown4 !== actual.birminghamdown4) {
            const inner = outer.querySelector("#birminghamdown4");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown6 && data.birminghamdown6 !== 'TBD' && data.birminghamdown6 == actual.birminghamdown6) {
            score += 2;
            const inner = outer.querySelector("#birminghamdown6");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown6 && actual.birminghamdown6 && data.birminghamdown6 !== 'TBD' && actual.birminghamdown6 !== 'TBD' && data.birminghamdown6 !== actual.birminghamdown6) {
            const inner = outer.querySelector("#birminghamdown6");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown3 && data.birminghamdown3 !== 'TBD' && data.birminghamdown3 == actual.birminghamdown3) {
            score += 2;
            const inner = outer.querySelector("#birminghamdown3");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown3 && actual.birminghamdown3 && data.birminghamdown3 !== 'TBD' && actual.birminghamdown3 !== 'TBD' && data.birminghamdown3 !== actual.birminghamdown3) {
            const inner = outer.querySelector("#birminghamdown3");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown7 && data.birminghamdown7 !== 'TBD' && data.birminghamdown7 == actual.birminghamdown7) {
            score += 2;
            const inner = outer.querySelector("#birminghamdown7");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown7 && actual.birminghamdown7 && data.birminghamdown7 !== 'TBD' && actual.birminghamdown7 !== 'TBD' && data.birminghamdown7 !== actual.birminghamdown7) {
            const inner = outer.querySelector("#birminghamdown7");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown2 && data.birminghamdown2 !== 'TBD' && data.birminghamdown2 == actual.birminghamdown2) {
            score += 2;
            const inner = outer.querySelector("#birminghamdown2");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown2 && actual.birminghamdown2 && data.birminghamdown2 !== 'TBD' && actual.birminghamdown2 !== 'TBD' && data.birminghamdown2 !== actual.birminghamdown2) {
            const inner = outer.querySelector("#birminghamdown2");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup16_1 && data.spokaneup16_1 !== 'TBD' && data.spokaneup16_1 == actual.spokaneup16_1) {
            score += 4;
            const inner = outer.querySelector("#spokaneup16_1");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup16_1 && actual.spokaneup16_1 && data.spokaneup16_1 !== 'TBD' && actual.spokaneup16_1 !== 'TBD' && data.spokaneup16_1 !== actual.spokaneup16_1) {
            const inner = outer.querySelector("#spokaneup16_1");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup16_4 && data.spokaneup16_4 !== 'TBD' && data.spokaneup16_4 == actual.spokaneup16_4) {
            score += 4;
            const inner = outer.querySelector("#spokaneup16_4");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup16_4 && actual.spokaneup16_4 && data.spokaneup16_4 !== 'TBD' && actual.spokaneup16_4 !== 'TBD' && data.spokaneup16_4 !== actual.spokaneup16_4) {
            const inner = outer.querySelector("#spokaneup16_4");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup16_3 && data.spokaneup16_3 !== 'TBD' && data.spokaneup16_3 == actual.spokaneup16_3) {
            score += 4;
            const inner = outer.querySelector("#spokaneup16_3");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup16_3 && actual.spokaneup16_3 && data.spokaneup16_3 !== 'TBD' && actual.spokaneup16_3 !== 'TBD' && data.spokaneup16_3 !== actual.spokaneup16_3) {
            const inner = outer.querySelector("#spokaneup16_3");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup16_2 && data.spokaneup16_2 !== 'TBD' && data.spokaneup16_2 == actual.spokaneup16_2) {
            score += 4;
            const inner = outer.querySelector("#spokaneup16_2");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup16_2 && actual.spokaneup16_2 && data.spokaneup16_2 !== 'TBD' && actual.spokaneup16_2 !== 'TBD' && data.spokaneup16_2 !== actual.spokaneup16_2) {
            const inner = outer.querySelector("#spokaneup16_2");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown16_1 && data.spokanedown16_1 !== 'TBD' && data.spokanedown16_1 == actual.spokanedown16_1) {
            score += 4;
            const inner = outer.querySelector("#spokanedown16_1");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown16_1 && actual.spokanedown16_1 && data.spokanedown16_1 !== 'TBD' && actual.spokanedown16_1 !== 'TBD' && data.spokanedown16_1 !== actual.spokanedown16_1) {
            const inner = outer.querySelector("#spokanedown16_1");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown16_4 && data.spokanedown16_4 !== 'TBD' && data.spokanedown16_4 == actual.spokanedown16_4) {
            score += 4;
            const inner = outer.querySelector("#spokanedown16_4");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown16_4 && actual.spokanedown16_4 && data.spokanedown16_4 !== 'TBD' && actual.spokanedown16_4 !== 'TBD' && data.spokanedown16_4 !== actual.spokanedown16_4) {
            const inner = outer.querySelector("#spokanedown16_4");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown16_3 && data.spokanedown16_3 !== 'TBD' && data.spokanedown16_3 == actual.spokanedown16_3) {
            score += 4;
            const inner = outer.querySelector("#spokanedown16_3");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown16_3 && actual.spokanedown16_3 && data.spokanedown16_3 !== 'TBD' && actual.spokanedown16_3 !== 'TBD' && data.spokanedown16_3 !== actual.spokanedown16_3) {
            const inner = outer.querySelector("#spokanedown16_3");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown16_2 && data.spokanedown16_2 !== 'TBD' && data.spokanedown16_2 == actual.spokanedown16_2) {
            score += 4;
            const inner = outer.querySelector("#spokanedown16_2");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown16_2 && actual.spokanedown16_2 && data.spokanedown16_2 !== 'TBD' && actual.spokanedown16_2 !== 'TBD' && data.spokanedown16_2 !== actual.spokanedown16_2) {
            const inner = outer.querySelector("#spokanedown16_2");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup16_1 && data.birminghamup16_1 !== 'TBD' && data.birminghamup16_1 == actual.birminghamup16_1) {
            score += 4;
            const inner = outer.querySelector("#birminghamup16_1");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup16_1 && actual.birminghamup16_1 && data.birminghamup16_1 !== 'TBD' && actual.birminghamup16_1 !== 'TBD' && data.birminghamup16_1 !== actual.birminghamup16_1) {
            const inner = outer.querySelector("#birminghamup16_1");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup16_4 && data.birminghamup16_4 !== 'TBD' && data.birminghamup16_4 == actual.birminghamup16_4) {
            score += 4;
            const inner = outer.querySelector("#birminghamup16_4");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup16_4 && actual.birminghamup16_4 && data.birminghamup16_4 !== 'TBD' && actual.birminghamup16_4 !== 'TBD' && data.birminghamup16_4 !== actual.birminghamup16_4) {
            const inner = outer.querySelector("#birminghamup16_4");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup16_3 && data.birminghamup16_3 !== 'TBD' && data.birminghamup16_3 == actual.birminghamup16_3) {
            score += 4;
            const inner = outer.querySelector("#birminghamup16_3");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup16_3 && actual.birminghamup16_3 && data.birminghamup16_3 !== 'TBD' && actual.birminghamup16_3 !== 'TBD' && data.birminghamup16_3 !== actual.birminghamup16_3) {
            const inner = outer.querySelector("#birminghamup16_3");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup16_2 && data.birminghamup16_2 !== 'TBD' && data.birminghamup16_2 == actual.birminghamup16_2) {
            score += 4;
            const inner = outer.querySelector("#birminghamup16_2");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup16_2 && actual.birminghamup16_2 && data.birminghamup16_2 !== 'TBD' && actual.birminghamup16_2 !== 'TBD' && data.birminghamup16_2 !== actual.birminghamup16_2) {
            const inner = outer.querySelector("#birminghamup16_2");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown16_1 && data.birminghamdown16_1 !== 'TBD' && data.birminghamdown16_1 == actual.birminghamdown16_1) {
            score += 4;
            const inner = outer.querySelector("#birminghamdown16_1");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown16_1 && actual.birminghamdown16_1 && data.birminghamdown16_1 !== 'TBD' && actual.birminghamdown16_1 !== 'TBD' && data.birminghamdown16_1 !== actual.birminghamdown16_1) {
            const inner = outer.querySelector("#birminghamdown16_1");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown16_4 && data.birminghamdown16_4 !== 'TBD' && data.birminghamdown16_4 == actual.birminghamdown16_4) {
            score += 4;
            const inner = outer.querySelector("#birminghamdown16_4");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown16_4 && actual.birminghamdown16_4 && data.birminghamdown16_4 !== 'TBD' && actual.birminghamdown16_4 !== 'TBD' && data.birminghamdown16_4 !== actual.birminghamdown16_4) {
            const inner = outer.querySelector("#birminghamdown16_4");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown16_3 && data.birminghamdown16_3 !== 'TBD' && data.birminghamdown16_3 == actual.birminghamdown16_3) {
            score += 4;
            const inner = outer.querySelector("#birminghamdown16_3");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown16_3 && actual.birminghamdown16_3 && data.birminghamdown16_3 !== 'TBD' && actual.birminghamdown16_3 !== 'TBD' && data.birminghamdown16_3 !== actual.birminghamdown16_3) {
            const inner = outer.querySelector("#birminghamdown16_3");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown16_2 && data.birminghamdown16_2 !== 'TBD' && data.birminghamdown16_2 == actual.birminghamdown16_2) {
            score += 4;
            const inner = outer.querySelector("#birminghamdown16_2");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown16_2 && actual.birminghamdown16_2 && data.birminghamdown16_2 !== 'TBD' && actual.birminghamdown16_2 !== 'TBD' && data.birminghamdown16_2 !== actual.birminghamdown16_2) {
            const inner = outer.querySelector("#birminghamdown16_2");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup8_1 && data.spokaneup8_1 !== 'TBD' && data.spokaneup8_1 == actual.spokaneup8_1) {
            score += 8;
            const inner = outer.querySelector("#spokaneup8_1");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup8_1 && actual.spokaneup8_1 && data.spokaneup8_1 !== 'TBD' && actual.spokaneup8_1 !== 'TBD' && data.spokaneup8_1 !== actual.spokaneup8_1) {
            const inner = outer.querySelector("#spokaneup8_1");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup8_2 && data.spokaneup8_2 !== 'TBD' && data.spokaneup8_2 == actual.spokaneup8_2) {
            score += 8;
            const inner = outer.querySelector("#spokaneup8_2");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup8_2 && actual.spokaneup8_2 && data.spokaneup8_2 !== 'TBD' && actual.spokaneup8_2 !== 'TBD' && data.spokaneup8_2 !== actual.spokaneup8_2) {
            const inner = outer.querySelector("#spokaneup8_2");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown8_1 && data.spokanedown8_1 !== 'TBD' && data.spokanedown8_1 == actual.spokanedown8_1) {
            score += 8;
            const inner = outer.querySelector("#spokanedown8_1");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown8_1 && actual.spokanedown8_1 && data.spokanedown8_1 !== 'TBD' && actual.spokanedown8_1 !== 'TBD' && data.spokanedown8_1 !== actual.spokanedown8_1) {
            const inner = outer.querySelector("#spokanedown8_1");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown8_2 && data.spokanedown8_2 !== 'TBD' && data.spokanedown8_2 == actual.spokanedown8_2) {
            score += 8;
            const inner = outer.querySelector("#spokanedown8_2");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown8_2 && actual.spokanedown8_2 && data.spokanedown8_2 !== 'TBD' && actual.spokanedown8_2 !== 'TBD' && data.spokanedown8_2 !== actual.spokanedown8_2) {
            const inner = outer.querySelector("#spokanedown8_2");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup8_1 && data.birminghamup8_1 !== 'TBD' && data.birminghamup8_1 == actual.birminghamup8_1) {
            score += 8;
            const inner = outer.querySelector("#birminghamup8_1");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup8_1 && actual.birminghamup8_1 && data.birminghamup8_1 !== 'TBD' && actual.birminghamup8_1 !== 'TBD' && data.birminghamup8_1 !== actual.birminghamup8_1) {
            const inner = outer.querySelector("#birminghamup8_1");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup8_2 && data.birminghamup8_2 !== 'TBD' && data.birminghamup8_2 == actual.birminghamup8_2) {
            score += 8;
            const inner = outer.querySelector("#birminghamup8_2");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup8_2 && actual.birminghamup8_2 && data.birminghamup8_2 !== 'TBD' && actual.birminghamup8_2 !== 'TBD' && data.birminghamup8_2 !== actual.birminghamup8_2) {
            const inner = outer.querySelector("#birminghamup8_2");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown8_1 && data.birminghamdown8_1 !== 'TBD' && data.birminghamdown8_1 == actual.birminghamdown8_1) {
            score += 8;
            const inner = outer.querySelector("#birminghamdown8_1");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown8_1 && actual.birminghamdown8_1 && data.birminghamdown8_1 !== 'TBD' && actual.birminghamdown8_1 !== 'TBD' && data.birminghamdown8_1 !== actual.birminghamdown8_1) {
            const inner = outer.querySelector("#birminghamdown8_1");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown8_2 && data.birminghamdown8_2 !== 'TBD' && data.birminghamdown8_2 == actual.birminghamdown8_2) {
            score += 8;
            const inner = outer.querySelector("#birminghamdown8_2");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown8_2 && actual.birminghamdown8_2 && data.birminghamdown8_2 !== 'TBD' && actual.birminghamdown8_2 !== 'TBD' && data.birminghamdown8_2 !== actual.birminghamdown8_2) {
            const inner = outer.querySelector("#birminghamdown8_2");
            inner.style.color = "#e83922";
        }
        if (data.spokaneup && data.spokaneup !== 'TBD' && data.spokaneup == actual.spokaneup) {
            score += 16;
            const inner = outer.querySelector("#spokaneup");
            inner.style.color = "#34b233";
        }
        else if (data.spokaneup && actual.spokaneup && data.spokaneup !== 'TBD' && actual.spokaneup !== 'TBD' && data.spokaneup !== actual.spokaneup) {
            const inner = outer.querySelector("#spokaneup");
            inner.style.color = "#e83922";
        }
        if (data.spokanedown && data.spokanedown !== 'TBD' && data.spokanedown == actual.spokanedown) {
            score += 16;
            const inner = outer.querySelector("#spokanedown");
            inner.style.color = "#34b233";
        }
        else if (data.spokanedown && actual.spokanedown && data.spokanedown !== 'TBD' && actual.spokanedown !== 'TBD' && data.spokanedown !== actual.spokanedown) {
            const inner = outer.querySelector("#spokanedown");
            inner.style.color = "#e83922";
        }
        if (data.birminghamup && data.birminghamup !== 'TBD' && data.birminghamup == actual.birminghamup) {
            score += 16;
            const inner = outer.querySelector("#birminghamup");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamup && actual.birminghamup && data.birminghamup !== 'TBD' && actual.birminghamup !== 'TBD' && data.birminghamup !== actual.birminghamup) {
            const inner = outer.querySelector("#birminghamup");
            inner.style.color = "#e83922";
        }
        if (data.birminghamdown && data.birminghamdown !== 'TBD' && data.birminghamdown == actual.birminghamdown) {
            score += 16;
            const inner = outer.querySelector("#birminghamdown");
            inner.style.color = "#34b233";
        }
        else if (data.birminghamdown && actual.birminghamdown && data.birminghamdown !== 'TBD' && actual.birminghamdown !== 'TBD' && data.birminghamdown !== actual.birminghamdown) {
            const inner = outer.querySelector("#birminghamdown");
            inner.style.color = "#e83922";
        }
        if (data.finalleft && data.finalleft !== 'TBD' && data.finalleft == actual.finalleft) {
            score += 32;
            const inner = outer.querySelector("#finalleft");
            inner.style.color = "#34b233";
        }
        else if (data.finalleft && actual.finalleft && data.finalleft !== 'TBD' && actual.finalleft !== 'TBD' && data.finalleft !== actual.finalleft) {
            const inner = outer.querySelector("#finalleft");
            inner.style.color = "#e83922";
        }
        if (data.finalright && data.finalright !== 'TBD' && data.finalright == actual.finalright) {
            score += 32;
            const inner = outer.querySelector("#finalright");
            inner.style.color = "#34b233";
        }
        else if (data.finalright && actual.finalright && data.finalright !== 'TBD' && actual.finalright !== 'TBD' && data.finalright !== actual.finalright) {
            const inner = outer.querySelector("#finalright");
            inner.style.color = "#e83922";
        }
        if (data.champion && data.champion !== 'TBD' && data.champion == actual.champion) {
            score += 64;
            const inner = outer.querySelector("#champion");
            inner.style.color = "#34b233";
        }
        else if (data.champion && actual.champion && data.champion !== 'TBD' && actual.champion !== 'TBD' && data.champion !== actual.champion) {
            const inner = outer.querySelector("#champion");
            inner.style.color = "#e83922";
        }
        womenScoreData.push({name: data.name, score: score});
    })
    console.log(womenScoreData);
    updateWomenTable();
}

function updateWomenBracketData() {
    const parentDiv = document.getElementById('womenbracket');
    parentDiv.innerHTML = '';
    const buttonDiv = document.createElement('div');
    buttonDiv.className = 'sub-sub-tab';
    parentDiv.appendChild(buttonDiv);
    womenBracketData.forEach(data => {
        const button = document.createElement('button');
        button.textContent = data.name;
        button.className = 'sub-sub-tab-button';
        button.onclick = function(event) { openSection(event, 'womenbracket-' + data.name.toLowerCase(), 'sub-sub-tab-content', 'sub-sub-tab-button')};
        buttonDiv.appendChild(button);
        const bracketDiv = document.createElement('div');
        bracketDiv.id = 'womenbracket-' + data.name.toLowerCase();
        bracketDiv.className = 'sub-sub-tab-content';
        const containerDiv = document.createElement('div');
        containerDiv.className = 'container';
        containerDiv.innerHTML = `<div class="section">
                        <p>1st Round</p>
                        <p class="date">March 21-22</p>
                        <p class="team">UCLA</p>
                        <p class="team lowleft" id="firstfour1">${data.firstfour1 || 'TBD'}</p>
                        <p class="team">Richmond</p>
                        <p class="team lowleft">Georgia Tech</p>
                        <p class="team">Ole Miss</p>
                        <p class="team lowleft">Ball State</p>
                        <p class="team">Baylor</p>
                        <p class="team lowleft">Grand Canyon</p>
                        <p class="team">Florida St</p>
                        <p class="team lowleft">George Mason</p>
                        <p class="team">LSU</p>
                        <p class="team lowleft">San Diego St</p>
                        <p class="team">Michigan St</p>
                        <p class="team lowleft">Harvard</p>
                        <p class="team">NC State</p>
                        <p class="team lowleft">Vermont</p>
                        <p class="team">USC</p>
                        <p class="team lowleft">UNC Greensboro</p>
                        <p class="team">California</p>
                        <p class="team lowleft">Mississippi St</p>
                        <p class="team">Kansas St</p>
                        <p class="team lowleft">Fairfield</p>
                        <p class="team">Kentucky</p>
                        <p class="team lowleft">Liberty</p>
                        <p class="team">Iowa</p>
                        <p class="team lowleft">Murray St</p>
                        <p class="team">Oklahoma</p>
                        <p class="team lowleft">FGCU</p>
                        <p class="team">Oklahoma St</p>
                        <p class="team lowleft">S Dakota St</p>
                        <p class="team">UConn</p>
                        <p class="team lowleft">Arkansas St</p>
                    </div>
                    <div class="section">
                        <p>2nd Round</p>
                        <p class="date">March 23-24</p>
                        <p class="team topset2" id="spokaneup1">${data.spokaneup1 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="spokaneup8">${data.spokaneup8 || 'TBD'}</p>
                        <p class="team lowset2" id="spokaneup5">${data.spokaneup5 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="spokaneup4">${data.spokaneup4 || 'TBD'}</p>
                        <p class="team lowset2" id="spokaneup6">${data.spokaneup6 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="spokaneup3">${data.spokaneup3 || 'TBD'}</p>
                        <p class="team lowset2" id="spokaneup7">${data.spokaneup7 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="spokaneup2">${data.spokaneup2 || 'TBD'}</p>
                        <p class="team lowset2" id="spokanedown1">${data.spokanedown1 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="spokanedown8">${data.spokanedown8 || 'TBD'}</p>
                        <p class="team lowset2" id="spokanedown5">${data.spokanedown5 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="spokanedown4">${data.spokanedown4 || 'TBD'}</p>
                        <p class="team lowset2" id="spokanedown6">${data.spokanedown6 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="spokanedown3">${data.spokanedown3 || 'TBD'}</p>
                        <p class="team lowset2" id="spokanedown7">${data.spokanedown7 || 'TBD'}</p>
                        <p class="team lowleft lowset2" id="spokanedown2">${data.spokanedown2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Sweet 16</p>
                        <p class="date">March 28-29</p>
                        <p class="team topset3" id="spokaneup16_1">${data.spokaneup16_1 || 'TBD'}</p>
                        <p class="team lowleft lowset3" id="spokaneup16_4">${data.spokaneup16_4 || 'TBD'}</p>
                        <p class="team lowset3" id="spokaneup16_3">${data.spokaneup16_3 || 'TBD'}</p>
                        <p class="team lowleft lowset3" id="spokaneup16_2">${data.spokaneup16_2 || 'TBD'}</p>
                        <p class="team lowset3" id="spokanedown16_1">${data.spokanedown16_1 || 'TBD'}</p>
                        <p class="team lowleft lowset3" id="spokanedown16_4">${data.spokanedown16_4 || 'TBD'}</p>
                        <p class="team lowset3" id="spokanedown16_3">${data.spokanedown16_3 || 'TBD'}</p>
                        <p class="team lowleft lowset3" id="spokanedown16_2">${data.spokanedown16_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Elite 8</p>
                        <p class="date">March 30-31</p>
                        <p class="team topset4" id="spokaneup8_1">${data.spokaneup8_1 || 'TBD'}</p>
                        <p class="team lowleft lowset4" id="spokaneup8_2">${data.spokaneup8_2 || 'TBD'}</p>
                        <p class="team lowset4" id="spokanedown8_1">${data.spokanedown8_1 || 'TBD'}</p>
                        <p class="team lowleft lowset4" id="spokanedown8_2">${data.spokanedown8_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Final 4</p>
                        <p class="date">April 4</p>
                        <p class="team topset5" id="spokaneup">${data.spokaneup || 'TBD'}</p>
                        <p class="team lowleft lowset5" id="spokanedown">${data.spokanedown || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Championship</p>
                        <p class="date">April 6</p>
                        <p class="team leftfinal" id="finalleft">${data.finalleft || 'TBD'}</p>
                        <p class="team winner" id="champion">${data.champion || 'TBD'}</p>
                        <div class="rightcontainer">
                            <p class="team rightfinal" id="finalright">${data.finalright || 'TBD'}</p>
                        </div>
                    </div>
                    <div class="section">
                        <p>Final 4</p>
                        <p class="date">April 4</p>
                        <p class="team topset5" id="birminghamup">${data.birminghamup || 'TBD'}</p>
                        <p class="team lowright lowset5" id="birminghamdown">${data.birminghamdown || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Elite 8</p>
                        <p class="date">March 30-31</p>
                        <p class="team topset4" id="birminghamup8_1">${data.birminghamup8_1 || 'TBD'}</p>
                        <p class="team lowright lowset4" id="birminghamup8_2">${data.birminghamup8_2 || 'TBD'}</p>
                        <p class="team lowset4" id="birminghamdown8_1">${data.birminghamdown8_1 || 'TBD'}</p>
                        <p class="team lowright lowset4" id="birminghamdown8_2">${data.birminghamdown8_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>Sweet 16</p>
                        <p class="date">March 28-29</p>
                        <p class="team topset3" id="birminghamup16_1">${data.birminghamup16_1 || 'TBD'}</p>
                        <p class="team lowright lowset3" id="birminghamup16_4">${data.birminghamup16_4 || 'TBD'}</p>
                        <p class="team lowset3" id="birminghamup16_3">${data.birminghamup16_3 || 'TBD'}</p>
                        <p class="team lowright lowset3" id="birminghamup16_2">${data.birminghamup16_2 || 'TBD'}</p>
                        <p class="team lowset3" id="birminghamdown16_1">${data.birminghamdown16_1 || 'TBD'}</p>
                        <p class="team lowright lowset3" id="birminghamdown16_4">${data.birminghamdown16_4 || 'TBD'}</p>
                        <p class="team lowset3" id="birminghamdown16_3">${data.birminghamdown16_3 || 'TBD'}</p>
                        <p class="team lowright lowset3" id="birminghamdown16_2">${data.birminghamdown16_2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>2nd Round</p>
                        <p class="date">March 23-24</p>
                        <p class="team topset2" id="birminghamup1">${data.birminghamup1 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="birminghamup8">${data.birminghamup8 || 'TBD'}</p>
                        <p class="team lowset2" id="birminghamup5">${data.birminghamup5 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="birminghamup4">${data.birminghamup4 || 'TBD'}</p>
                        <p class="team lowset2" id="birminghamup6">${data.birminghamup6 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="birminghamup3">${data.birminghamup3 || 'TBD'}</p>
                        <p class="team lowset2" id="birminghamup7">${data.birminghamup7 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="birminghamup2">${data.birminghamup2 || 'TBD'}</p>
                        <p class="team lowset2" id="birminghamdown1">${data.birminghamdown1 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="birminghamdown8">${data.birminghamdown8 || 'TBD'}</p>
                        <p class="team lowset2" id="birminghamdown5">${data.birminghamdown5 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="birminghamdown4">${data.birminghamdown4 || 'TBD'}</p>
                        <p class="team lowset2" id="birminghamdown6">${data.birminghamdown6 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="birminghamdown3">${data.birminghamdown3 || 'TBD'}</p>
                        <p class="team lowset2" id="birminghamdown7">${data.birminghamdown7 || 'TBD'}</p>
                        <p class="team lowright lowset2" id="birminghamdown2">${data.birminghamdown2 || 'TBD'}</p>
                    </div>
                    <div class="section">
                        <p>1st Round</p>
                        <p class="date">March 21-22</p>
                        <p class="team">South Carolina</p>
                        <p class="team lowright">Tennessee Tech</p>
                        <p class="team">Utah</p>
                        <p class="team lowright">Indiana</p>
                        <p class="team">Alabama</p>
                        <p class="team lowright">Green Bay</p>
                        <p class="team">Maryland</p>
                        <p class="team lowright">Norfolk St</p>
                        <p class="team">West Virginia</p>
                        <p class="team lowright" id="firstfour2">${data.firstfour2 || 'TBD'}</p>
                        <p class="team">North Carolina</p>
                        <p class="team lowright">Oregon St</p>
                        <p class="team">Vanderbilt</p>
                        <p class="team lowright">Oregon</p>
                        <p class="team">Duke</p>
                        <p class="team lowright">Lehigh</p>
                        <p class="team">Texas</p>
                        <p class="team lowright" id="firstfour4">${data.firstfour4 || 'TBD'}</p>
                        <p class="team">Illinois</p>
                        <p class="team lowright">Creighton</p>
                        <p class="team">Tennessee</p>
                        <p class="team lowright">South Florida</p>
                        <p class="team">Ohio State</p>
                        <p class="team lowright">Montana St</p>
                        <p class="team">Michigan</p>
                        <p class="team lowright" id="firstfour3">${data.firstfour3 || 'TBD'}</p>
                        <p class="team">Notre Dame</p>
                        <p class="team lowright">SF Austin</p>
                        <p class="team">Louisville</p>
                        <p class="team lowright">Nebraska</p>
                        <p class="team">TCU</p>
                        <p class="team lowright">Fair Dickinson</p>
                    </div>`;
        bracketDiv.appendChild(containerDiv);
        parentDiv.appendChild(bracketDiv);
    })
}

function updateWomenTable() {
    const rankPlayers = womenScoreData.slice(1);
    rankPlayers.sort((a,b) => b.score - a.score);
    const tableBody = document.querySelector("#womenrankings-table tbody");
    const maxScoreRow = document.createElement("tr");
    const maxRankCell = document.createElement("td");
    maxScoreRow.appendChild(maxRankCell);
    const maxNameCell = document.createElement("td");
    maxNameCell.textContent = "Maximum";
    maxScoreRow.appendChild(maxNameCell);
    const maxScoreCell = document.createElement("td");
    maxScoreCell.textContent = womenScoreData[0].score;
    maxScoreRow.appendChild(maxScoreCell);
    tableBody.appendChild(maxScoreRow);
    rankPlayers.forEach((player, index) => {
        const row = document.createElement("tr");

        const rankCell = document.createElement("td");
        if (index > 0 && player.score === rankPlayers[index - 1].score) {
            rankCell.textContent = currentRank;
        }
        else {
            rankCell.textContent = index + 1;
            currentRank = index + 1;
        }
        row.appendChild(rankCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = player.name;
        row.appendChild(nameCell);

        const scoreCell = document.createElement("td");
        scoreCell.textContent = player.score;
        row.appendChild(scoreCell);

        tableBody.appendChild(row);
    });
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
                    if (gameStatus.toLowerCase().includes('in progress') || gameStatus.toLowerCase().includes('halftime') || gameStatus.toLowerCase().includes('end of period')) {
                        gameElement.style.color = 'red';
                        gameElement.style.fontWeight = 'bold';
                    }

                    if (gameStatus.toLowerCase().includes('final')) {
                        if (parseInt(firstScore) > parseInt(secondScore)) {
                            gameElement.innerHTML = `<strong>${firstSeed} ${firstTeam} ${firstScore}</strong> - ${secondScore} ${secondSeed} ${secondTeam} (${gameStatus})`;
                        }
                        else {
                            gameElement.innerHTML = `${firstSeed} ${firstTeam} ${firstScore} - <strong>${secondScore} ${secondSeed} ${secondTeam}</strong> (${gameStatus})`;
                        }
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
                    if (gender == 'womens') {
                        if (gameStatus.toLowerCase().includes('final')) {
                            victor = game.competitions[0].competitors[0].winner === true ? firstTeam : secondTeam;
                        }
                        const headline = game.competitions[0].notes[0].headline.toLowerCase();
                        if (headline.includes('first four')) {
                            if (headline.includes('1')) {
                                womenBracketData[0].firstfour1 = victor;
                            }
                            if (headline.includes('2')) {
                                womenBracketData[0].firstfour2 = victor;
                            }
                            if (headline.includes('3')) {
                                if (firstSeed == '(11)') {
                                    womenBracketData[0].firstfour3 = victor;
                                }
                                if (firstSeed == '(16)') {
                                    womenBracketData[0].firstfour4 = victor;
                                }
                            }
                        }
                        else if (headline.includes('1st round')) {
                            if (headline.includes('regional 1')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)')) {
                                    womenBracketData[0].spokaneup1 = victor;
                                }
                                if ((firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    womenBracketData[0].spokaneup8 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)')) {
                                    womenBracketData[0].spokaneup5 = victor;
                                }
                                if ((firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].spokaneup4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)')) {
                                    womenBracketData[0].spokaneup6 = victor;
                                }
                                if ((firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    womenBracketData[0].spokaneup3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)')) {
                                    womenBracketData[0].spokaneup7 = victor;
                                }
                                if ((firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].spokaneup2 = victor;
                                }
                            }
                            if (headline.includes('regional 4')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)')) {
                                    womenBracketData[0].spokanedown1 = victor;
                                }
                                if ((firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    womenBracketData[0].spokanedown8 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)')) {
                                    womenBracketData[0].spokanedown5 = victor;
                                }
                                if ((firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].spokanedown4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)')) {
                                    womenBracketData[0].spokanedown6 = victor;
                                }
                                if ((firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    womenBracketData[0].spokanedown3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)')) {
                                    womenBracketData[0].spokanedown7 = victor;
                                }
                                if ((firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].spokanedown2 = victor;
                                }
                            }
                            if (headline.includes('regional 2')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)')) {
                                    womenBracketData[0].birminghamup1 = victor;
                                }
                                if ((firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    womenBracketData[0].birminghamup8 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)')) {
                                    womenBracketData[0].birminghamup5 = victor;
                                }
                                if ((firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].birminghamup4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)')) {
                                    womenBracketData[0].birminghamup6 = victor;
                                }
                                if ((firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    womenBracketData[0].birminghamup3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)')) {
                                    womenBracketData[0].birminghamup7 = victor;
                                }
                                if ((firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].birminghamup2 = victor;
                                }
                            }
                            if (headline.includes('regional 3')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)')) {
                                    womenBracketData[0].birminghamdown1 = victor;
                                }
                                if ((firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    womenBracketData[0].birminghamdown8 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)')) {
                                    womenBracketData[0].birminghamdown5 = victor;
                                }
                                if ((firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].birminghamdown4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)')) {
                                    womenBracketData[0].birminghamdown6 = victor;
                                }
                                if ((firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    womenBracketData[0].birminghamdown3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)')) {
                                    womenBracketData[0].birminghamdown7 = victor;
                                }
                                if ((firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].birminghamdown2 = victor;
                                }
                            }
                        }
                        else if (headline.includes('2nd round')) {
                            if (headline.includes('regional 1')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    womenBracketData[0].spokaneup16_1 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].spokaneup16_4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    womenBracketData[0].spokaneup16_3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].spokaneup16_2 = victor;
                                }
                            }
                            if (headline.includes('regional 4')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    womenBracketData[0].spokanedown16_1 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].spokanedown16_4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    womenBracketData[0].spokanedown16_3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].spokanedown16_2 = victor;
                                }
                            }
                            if (headline.includes('regional 2')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    womenBracketData[0].birminghamup16_1 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].birminghamup16_4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    womenBracketData[0].birminghamup16_3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].birminghamup16_2 = victor;
                                }
                            }
                            if (headline.includes('regional 3')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)')) {
                                    womenBracketData[0].birminghamdown16_1 = victor;
                                }
                                if ((firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].birminghamdown16_4 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)')) {
                                    womenBracketData[0].birminghamdown16_3 = victor;
                                }
                                if ((firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].birminghamdown16_2 = victor;
                                }
                            }
                        }
                        else if (headline.includes('sweet 16')) {
                            if (headline.includes('regional 1')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)') || (firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].spokaneup8_1 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)') || (firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].spokaneup8_2 = victor;
                                }
                            }
                            if (headline.includes('regional 4')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)') || (firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].spokanedown8_1 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)') || (firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].spokanedown8_2 = victor;
                                }
                            }
                            if (headline.includes('regional 2')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)') || (firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].birminghamup8_1 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)') || (firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].birminghamup8_2 = victor;
                                }
                            }
                            if (headline.includes('regional 3')) {
                                if ((firstSeed == '(1)') || (firstSeed == '(16)') || (firstSeed == '(8)') || (firstSeed == '(9)') || (firstSeed == '(5)') || (firstSeed == '(12)') || (firstSeed == '(4)') || (firstSeed == '(13)')) {
                                    womenBracketData[0].birminghamdown8_1 = victor;
                                }
                                if ((firstSeed == '(6)') || (firstSeed == '(11)') || (firstSeed == '(3)') || (firstSeed == '(14)') || (firstSeed == '(7)') || (firstSeed == '(10)') || (firstSeed == '(2)') || (firstSeed == '(15)')) {
                                    womenBracketData[0].birminghamdown8_2 = victor;
                                }
                            }
                        }
                        else if (headline.includes('elite 8')) {
                            if (headline.includes('regional 1')) {
                                womenBracketData[0].spokaneup = victor;
                            }
                            if (headline.includes('regional 4')) {
                                womenBracketData[0].spokanedown = victor;
                            }
                            if (headline.includes('regional 2')) {
                                womenBracketData[0].birminghamup = victor;
                            }
                            if (headline.includes('regional 3')) {
                                womenBracketData[0].birminghamdown = victor;
                            }
                        }
                        else if (headline.includes('final four')) {
                            if (game.id == 401746073) {
                                womenBracketData[0].finalleft = victor;
                            }
                            else {
                                womenBracketData[0].finalright = victor;
                            }
                        }
                        else if (headline.includes('national championship')) {
                            womenBracketData[0].champion = victor;
                        }
                    }
                });
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Update calls to the new function
updateMenBracketData();
updateWomenBracketData();
updateGames('mens', '20250318', '20250408', 'mengames');
updateGames('womens', '20250319', '20250407', 'womengames');
setTimeout(() => {updateMenBracketData(), updateWomenBracketData()}, 1000);
setTimeout(() => {countMenScore(), countWomenScore()}, 1500);

setInterval(() => updateGames('mens', '20250318', '20250408', 'mengames'), 5000);
setInterval(() => updateGames('womens', '20250319', '20250407', 'womengames'), 5000);

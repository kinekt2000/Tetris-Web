function showScoreBoard() {
    document.location.href = "scoreboard.html"
}


function submitAndGo() {
    let nickname = document.getElementsByName("login")[0].value;
    if(nickname.length < 4) {
        alert("Nickname length must be more than 4 characters");
    }
    if(nickname.length > 20) {
        alert("Nickname length cannot exceed 20 characters");
    }
}

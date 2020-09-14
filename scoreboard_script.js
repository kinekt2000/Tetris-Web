function onLoad() {

    for(let i = 1; i < 10; i++) {
        let ul = document.getElementById("list");
        let li = document.createElement("li");

        let elements_count = ul.children.length+1;

        let nick = `Element ${elements_count}`;
        let score = `000${elements_count}`;

        let nick_field = document.createElement("span");
        nick_field.setAttribute("class", "nick text-field line-part");
        nick_field.appendChild(document.createTextNode(nick));

        let score_field = document.createElement("span");
        score_field.setAttribute("class", "score text-field line-part");
        score_field.appendChild(document.createTextNode(score))

        li.setAttribute("id", `element${elements_count}`);
        li.appendChild(nick_field);
        li.appendChild(score_field);

        ul.appendChild(li);
    }
}

function backToMenu() {
    document.location.href = "login.html"
}
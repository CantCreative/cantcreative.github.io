function toggleDarkMode() {
    var body = document.getElementsByTagName('body')[0];
    var icon = document.getElementById("github");
    if (body.className == 'dark') {
        body.className = 'light';
        icon.src = "img/Github-Mark-64px.png";
    } else {
        body.className = 'dark';
        icon.src = "img/GitHub-Mark-Light-64px.png";
    }
}
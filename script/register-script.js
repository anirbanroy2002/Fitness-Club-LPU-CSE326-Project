let pageUrl = window.location.href;
if (pageUrl.indexOf('?') != -1)
{
    document.getElementById('register-content').style.display = 'none';
    let personName = pageUrl.substring(pageUrl.indexOf('name=') + 5, pageUrl.indexOf('&'));
    document.querySelector("#thank-you>h1").innerHTML = "Thank you, " + decodeURI(personName).replace("+"," ") + "!";
    document.getElementById("thank-you").style.display='block';
}

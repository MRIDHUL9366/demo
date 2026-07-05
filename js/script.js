const heading = document.getElementById("heading");

heading.addEventListener("mouseover", function () {
    heading.style.color = "blue";
});

heading.addEventListener("mouseout", function () {
    heading.style.color = "black";
});

function showmessage(){
    
    let name=document.getElementById('name').value;
    document.getElementById('message').innerText="Registration Successful! Welcome, " + name;
}

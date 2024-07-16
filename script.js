
const btn = document.querySelector("#btn");
const display = document.querySelector("#display");
const search = document.querySelector("#search");

async function getProfile() {
    let searchInput = search.value; // getting the value of search when user hit to click

    if (search.value !== "") {
        const api = `https://api.github.com/users/${searchInput}`;
        try {
            let response = await fetch(api);
            let data = await response.json();
            console.log(data);

            display.classList.add("main");
            let img = document.createElement("img");
            img.classList.add("img");
            img.setAttribute("src", data.avatar_url);
            let p = document.createElement("p");
            p.classList.add("para");
            p.textContent = data.login;
            let a = document.createElement("a");
            a.classList.add("link");
            a.textContent = "Enter to github profile";
            a.target = "_blank";
            a.href = data.html_url;
            let span1 = document.createElement("span");
            let span2 = document.createElement("span");
            let span3 = document.createElement("span");
            span1.textContent = `followers : ${data.followers}`;
            span2.textContent = `following : ${data.following}`;
            span3.textContent = `Public Repos : ${data.public_repos}`;


            display.appendChild(img);
            display.appendChild(p);
            display.appendChild(a);
            display.appendChild(span1);
            display.appendChild(span2);
            display.appendChild(span3);

            // searchInput = "";
            btn.setAttribute("disabled", true);

        } catch (error) {
            console.error(error);

        }

    }
    else {
        alert("Please enter the valid username");
    }
}



btn.addEventListener("click", (e) => {
    getProfile(e);
    document.title = search.value;

    search.value = "";
});


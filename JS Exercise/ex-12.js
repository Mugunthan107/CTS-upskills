const user = {
    name: "Mugunthan",
    email: "mugunthan@gmail.com"
};
setTimeout(() => {
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
})
.then(response => response.json())
.then(data => {
    console.log("Registration Successful");
    console.log(data);
})
.catch(error => {
    console.log("Registration Failed");
});
}, 2000);
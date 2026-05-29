function submitForm() {
    console.log("Form Submission Started");
    const user = {
        name: "Mugunthan",
        event: "Music Festival"
    };
    console.log("User Data:", user);
    debugger;
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    });
}
submitForm();
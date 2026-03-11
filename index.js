function validateUser() {
    let user = document.forms["index-page"]["user"].value;
    document.forms["index-page"]["user"].value = student.trim();
    if (student.trim() === "") {
        alert("something is wrong please input it clearly");
        return false;
    }

    return true;
}
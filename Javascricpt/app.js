

function requireState(key, redirectPage) {
    if (localStorage.getItem(key) !== "true") {
        window.location.href = redirectPage;
    }
}

function setState(key) {
    localStorage.setItem(key, "true");
}

function resetSystem() {
    localStorage.clear();
}

function checkSession() {
    let session = JSON.parse(localStorage.getItem("session"));
    
    if (!session || !session.loggedIn) {
        return false;
    }

    let now = Date.now();
    let limit = 5 * 60 * 1000; 

    if (now - session.time > limit) {
        localStorage.clear();
        return false;
    }

    return true;
}
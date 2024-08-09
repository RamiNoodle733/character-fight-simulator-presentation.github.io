function loadMainShortcut(url, description) {
    document.getElementById('website-frame').src = url;
    document.getElementById('main-description').textContent = description;
    document.getElementById('sub-description').textContent = ''; // Clear sub-shortcut description
}

function loadSubShortcut(url, description) {
    document.getElementById('website-frame').src = url;
    document.getElementById('sub-description').textContent = description;
    document.getElementById('main-description').textContent = ''; // Clear main shortcut description
}

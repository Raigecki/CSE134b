function hideInputTab() {
    //check user type
    if (localStorage.getItem('currentUser') != undefined) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var userType = currentUser['type'];
        if (userType != 'coach'){
            document.getElementsByClassName('inputTab')[0].style.display = 'none';
        }
    }
}
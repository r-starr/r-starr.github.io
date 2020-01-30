$(document).ready( () => {
    console.log("checking mobile user");
    console.log(isMobileUser());
    if(isMobileUser()) {
        $("#displayStylesheet").attr("href", "mobile.css");
    }
});

// Defining "mobile user" as a user whose screen is taller than it is wide, and as a result would benefit from having a full width display
function isMobileUser() {
    return screen.width < screen.height;
}
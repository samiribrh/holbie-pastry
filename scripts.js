function expandSearchBar() {
    var searchBar = document.getElementById("searchBar");
    var currentWidth = searchBar.style.width;

    console.log("Current width:", currentWidth);

    if (!currentWidth || currentWidth === "230px") {
        searchBar.style.width = "300px";
        console.log("Expanded width:", searchBar.style.width);
        document.addEventListener("click", closeSearchBar);
    }

    function closeSearchBar(event) {
        console.log("Clicked!");
        var searchBar = document.getElementById("searchBar");
        // if the clicked element is not part of the search bar
        if (!searchBar.contains(event.target)) {
            searchBar.style.width = "230px";
            console.log("Shrunk width:", searchBar.style.width);
            document.removeEventListener("click", closeSearchBar);
        }
    }
}

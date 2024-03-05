document.addEventListener("DOMContentLoaded", function() {
    var moreDropdownLink = document.getElementById("moreDropdownLink");
    var moreDropdownMenu = document.getElementById("moreDropdownMenu");

    moreDropdownLink.addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작 방지
        if (moreDropdownMenu.style.display === "block") {
            moreDropdownMenu.style.display = "none";
        } else {
            moreDropdownMenu.style.display = "block";
            // 더보기 바로 아래로 이동
            var rect = moreDropdownLink.getBoundingClientRect();
            moreDropdownMenu.style.left = rect.left + "px";
            moreDropdownMenu.style.top = rect.bottom + "px";
        }
    });
});
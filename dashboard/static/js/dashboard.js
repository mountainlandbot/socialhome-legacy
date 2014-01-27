$(document).ready(function() {
    var msnry = new Masonry("#masonry-container", {
        isInitLayout: false,
        itemSelector: ".item",
        columnWidth: 380
    });
    msnry.layout();
    $(document).ajaxStop(function() {
        msnry.layout();
    });
    $(".item").resize(function() {
        msnry.layout();
    });
});
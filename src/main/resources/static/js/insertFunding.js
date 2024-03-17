document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("thumbnailImage").addEventListener("change", function(event) {
        // Thumbnail image selected, set the fileDiv value to 'T'
        document.getElementById("fileDiv").value = 'T';
        console.log("Thumbnail image selected. fileDiv value set to 'T'");
    });

    document.getElementById("detailImage").addEventListener("change", function(event) {
        // Detail image selected, set the fileDiv value to 'D'
        document.getElementById("fileDiv").value = 'D';
        console.log("Detail image selected. fileDiv value set to 'D'");

    });

    document.getElementById("businessCertif").addEventListener("change", function(event) {
        // Business certificate image selected, set the fileDiv value to 'B'
        document.getElementById("fileDiv").value = 'B';
        console.log("Business certificate image selected. fileDiv value set to 'B'");

    });

    document.getElementById("sttrImg").addEventListener("change", function(event) {
        // Business certificate image selected, set the fileDiv value to 'B'
        document.getElementById("fileDiv").value = 'S';
        console.log("sttrImg image selected. fileDiv value set to 'S'");

    });
});
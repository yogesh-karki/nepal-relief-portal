import { districts, provinces } from "../resources.js";

// Distirct with respect to province
provinces.forEach((item) => {
    $("#provinces").append(`<option value="${item.id}">${item.title}</option>`);
});

$("#provinces").on("change", function () {
    var provinceID = $(this).val();
    $("#districts").html("");
    $("#districts").siblings(".nice-select").remove();
    var items = districts.filter((item) => {
        return item.province == provinceID;
    });
    $("#districts").append(`<option value="-1" selected disabled>Select</option>`);
    items.forEach((item) => {
        $("#districts").append(`<option value="${item.id}">${item.title}</option>`);
    });
    $("select").niceSelect();
});
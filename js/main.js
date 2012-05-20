function link_handler(id) {
    var section_label;

    switch(id)
    {
    case "cuandodonde":
        section_label = "Cu&aacute;ndo y D&oacute;nde";
        break;
    case "alojamiento":
        section_label = "Alojamiento";
        break;
    case "comollegar":
        section_label = "C&oacute;mo Llegar";
        break;
    }

    $(".content_wrapper").hide();
    $("#sectiontitle").html(section_label).show();
    $("#" + id + "_div").show();
}

$(document).ready(function() {
    $("#navigation_pri li").click(function (){
        var id = $(this).attr('id');
        link_handler(id);
    });
});

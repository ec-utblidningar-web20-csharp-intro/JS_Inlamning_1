window.onload = function() {
    document.getElementById("input-number").oninput = function (){
        removeAllSections();

        var count = parseInt(this.value);
        for(var i = 0; i < count; i++){

            var parent = document.querySelector("main");

            var child = document.createElement("section");
            var title = document.createElement("h4");
            var blurb = document.createElement("p");

            title.innerHTML = "Title " + i;
            blurb.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, commodi praesentium eius quod suscipit! Tenetur magnam eligendi amet fugiat adipisci impedit.";
            
            makeEditable(title);
            makeEditable(blurb);

            child.appendChild(title);
            child.appendChild(blurb);
            parent.appendChild(child);
        }
    }

}

function removeAllSections(){
    var test_sections = document.querySelectorAll("section");
    for(var i = 0; i < test_sections.length; i++){
        test_sections[i].remove();
    }
}

function makeEditable(elem){
    elem.onclick = function(){
        elem.contentEditable = true;
        elem.focus();
    }
    elem.onblur = function(){
        elem.contentEditable = false;
    }
}
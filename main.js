document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
  let inputBox = document.querySelector("#input-number");

  inputBox.oninput = function() {
    removeAllSections();
    makeSections(parseInt(inputBox.value));
  };
}

function makeSections(count){
  for (var i = 0; i < count; i++) {
    var parent = document.querySelector("main");

    var child = document.createElement("section");
    var title = document.createElement("h4");
    var blurb = document.createElement("p");

    title.innerText = "Title " + i;
    blurb.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, 
      commodi praesentium eius quod suscipit! 
      Tenetur magnam eligendi amet fugiat adipisci impedit.`;

    makeEditable(title);
    makeEditable(blurb);

    child.append(title);
    child.append(blurb);
    parent.append(child);
  }
}

function removeAllSections(){
  var test_sections = document.querySelectorAll("section");
  for (var i = 0; i < test_sections.length; i++) {
    test_sections[i].remove();
  }
}

function makeEditable(elem){
  elem.onclick = function(e) {
    elem.contentEditable = true;
    elem.focus();
  };
  elem.onblur = function(e) {
    elem.contentEditable = false;
  };
}

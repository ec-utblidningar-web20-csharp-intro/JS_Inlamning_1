document.addEventListener("DOMContentLoaded", onPageLoad);

function onPageLoad() {
  let inputBox = document.querySelector("#input-number");

  inputBox.oninput = function () {
    removeAllSections();
    makeSections(parseInt(inputBox.value));
  };
}

function makeSections(count) {
  var main = document.querySelector("main");

  for (var i = 0; i < count; i++) {
    // https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

    // Skapa HTML element direkt via template strings
    var fragment = fragmentFromString(/*html*/ `
      <section id="sec${i}">
        <h4 contenteditable="true">Title ${i}</h4>
        <p contenteditable="true">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, 
          commodi praesentium eius quod suscipit! 
          Tenetur magnam eligendi amet fugiat adipisci impedit.
        </p>
      </section>
    `);
    // Pilla på de htmlElement vi har skapat från HTML strängen
    fragment.querySelector("h4").onclick = function (e) {
      e.currentTarget.style.backgroundColor = "#11AA1155";
    };

    // Stoppa in vår mini-DOM i riktiga DOM
    main.append(fragment);

    /*
    var child = document.createElement("section");
    var title = document.createElement("h4");
    var blurb = document.createElement("p");

    title.innerText = "Title " + i;
    blurb.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Inventore harum, quasi dicta ex totam quisquam quo tempore maxime, 
      commodi praesentium eius quod suscipit! 
      Tenetur magnam eligendi amet fugiat adipisci impedit.`;

    title.onclick = function (e) {
      e.currentTarget.style.backgroundColor = "#11AA1155";
    };

    child.append(title);
    child.append(blurb);
    parent.append(child);
    */
  }
}

function fragmentFromString(strHTML) {
  return document.createRange().createContextualFragment(strHTML);
}

function removeAllSections() {
  var test_sections = document.querySelectorAll("section");
  for (var i = 0; i < test_sections.length; i++) {
    test_sections[i].remove();
  }
}

function makeEditable(elem) {
  elem.onclick = function (e) {
    elem.contentEditable = true;
    elem.focus();
  };
  elem.onblur = function (e) {
    elem.contentEditable = false;
  };
}

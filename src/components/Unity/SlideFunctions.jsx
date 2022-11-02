export function rightButton() {
  var cards = document.getElementsByClassName("unityCard");

  // right working
  for (var i = 0; i < cards.length; i++) {
    if (cards.length - 2 - i < 0) {
      break;
    }

    cards[cards.length - 1 - i].insertAdjacentElement(
      "afterend",
      cards[cards.length - 2 - i]
    );
  }

  enablePosts();
}

export function leftButton() {
  var cards = document.getElementsByClassName("unityCard");

  // left working

  for (var i = 0; i < cards.length; i++) {
    if (i + 1 === cards.length) {
      break;
    }
    cards[i].insertAdjacentElement("beforebegin", cards[i + 1]);
  }

  enablePosts();
}

function enablePosts() {
  var video = document.querySelector("#vidBox");

  video.pause();
  video.currentTime = 0;
  var cards = document.getElementsByClassName("unityCard");

  // maybe we just want to show 1 post when on a smaller screen but thats a future problem, just leaving here for later
  var width = window.matchMedia("(max-width: 1050px)");
  width = width.matches;
  width = false;
  //
  for (var i = 0; i < cards.length; i++) {
    if (width == true && i < 1) {
      cards[i].style.display = "block";
    } else if (i < 1 && width == false) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

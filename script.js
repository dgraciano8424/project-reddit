let submitComment = document.getElementsByClassName("submit-comment")[0];

let submitPost = document.getElementsByClassName("submit-post")[0];

// * let body = document.getElementsByClassName("body");
let commentList = document.getElementsByClassName("commentList")[0];

// * comment text input
let commentText = document.getElementsByClassName("commentInputText")[0];

// * comment name input
let commentName = document.getElementsByClassName("commentInputName")[0];

// * Stored Post index
let selectedPostIndex;

// * holds comments
let comArr = [];

// * holds posts
let postArr = [];

// * Post Text Input
let postText = document.getElementsByClassName("postInputText")[0];

// * Post Name Input
let postName = document.getElementsByClassName("postInputName")[0];

// * Post Container
let postList = document.getElementsByClassName("postList")[0];

// * Remove Button
let contentContainer = document.getElementsByClassName("contentContainer")[0];

contentContainer.addEventListener("click", function (e) {
  console.log(e.target);
});

// * Comment button
// * let commentBTN = comment.addEventListener("click", function (e) {
// *   selectedPostIndex = e.target.dataset.index;
// * });

// * Submit Comment button
let subComBTN = submitComment.addEventListener("click", function () {
  console.log(selectedPostIndex);
  let comment = {
    text: commentText.value,
    name: commentName.value,
  };

  postArr[selectedPostIndex].comments.push(comment);
  commentText.value = "";
  commentName.value = "";
  renderPost();
});

// * Submit Post button
let subPostBTN = submitPost.addEventListener("click", function () {
  let post = {
    text: postText.value,
    name: postName.value,
    comments: [],
  };

  postArr.push(post);
  postText.innerHTML = "";
  postName.innerHTML = "";
  renderPost();
});

let renderPost = function () {
  // * Comment Loop
  commentList.innerHTML = "";

  for (var i = 0; i < comArr.length; i++) {
    commentsHTML +=
      "<div class='remove>" +
      "<button class='remove' data-index='" +
      i +
      "'>Remove</button>" +
      "remove " +
      "<button class='comment' data-index='" +
      i +
      "'>Comment</button>" +
      comArr[i].text +
      "  Posted by:  " +
      comArr[i].name +
      "</div>";
  }

  let commentsHTML = "";
  // *  needs to be fixed both set empty strings

  commentList.innerHTML = commentsHTML;

  // * Post loop
  let postHTML = "";

  for (var i = 0; i < postArr.length; i++) {
    postHTML +=
      "<div>" +
      "<button class='comment' data-index='" +
      i +
      "'>Remove</button>" +
      "<button class='comment' data-index='" +
      i +
      "'>Comment</button>" +
      "<div class='text'>" +
      postArr[i].text +
      "  Posted by:  " +
      postArr[i].name +
      "</div>";
    ("</div>");
  }
  postList.innerHTML = postHTML;
};

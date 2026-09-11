// * let postLine = `${postArr.text} - Posted By: ${postArr.name}`;
// * let commentLine = `${comArr.text} - Posted By: ${comArr.name}`;

let submitComment = document.getElementsByClassName("submit-comment")[0];

let submitPost = document.getElementsByClassName("submit-post")[0];

// * let body = document.getElementsByClassName("body");
let commentList = document.getElementsByClassName("commentList")[0];
// * comment text input
let commentText = document.getElementsByClassName("commentInputText")[0];
// * comment name input
let commentName = document.getElementsByClassName("commentInputName")[0];
// * not sure if I need
let allPostArr = [];
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

// * Submit Comment button
let subComBTN = submitComment.addEventListener("click", function () {
  // * console.log(commentText, "hello");

  // * if (commentText.value == "" || commentName.value == "") {

  // *   alert "hello"
  // * };
  let comment = {
    text: commentText.value,
    name: commentName.value,
    comments: comArr
  };

  comArr.push(comment);
  commentText.value = "";
  commentName.value = "";
  renderPost();
});

// * Submit Post button
let subPostBTN = submitPost.addEventListener("click", function () {
  console.log(postText, "hello");
  let post = {
    text: postText.value,
    name: postName.value,
    comments: postArr
  };

  postArr.push(post);
  postText.innerHTML = "";
  postName.innerHTML = "";
  renderPost();
});

let renderPost = function () {
  // * Comment Loop
  commentList.innerHTML = "";

  let commentsHTML = "";
  for (var i = 0; i < comArr.length; i++) {
    commentsHTML += "<div>" + "<button class='sd'>" + "remove " + " </button>" + " <button> </button>" + comArr[i].text + "  Posted by:  " + comArr[i].name + "</div>";
  }
  commentList.innerHTML = commentsHTML;
let removeBTN = 
  // * Post loop
  let postHTML = "";

  for (var i = 0; i < postArr.length; i++) {
    postHTML += "<div>" + " <button> </button>" + " <button> </button>" + postArr[i].text + "  Posted by:  " + postArr[i].name + "</div>";
  }
  postList.innerHTML = postHTML;
};

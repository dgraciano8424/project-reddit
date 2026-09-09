let submitComment = document.getElementsByClassName("submit-comment")[0];

let submitPost = document.getElementsByClassName("submit-post")[0];

// * let body = document.getElementsByClassName("body");
let commentList = document.getElementsByClassName("commentList");

let allPostArr = [];

let comArr = [];

let postArr = [];

// * Submit Comment button

let subComBTN = submitComment.addEventListener("click", function () {
  let commentText = document.getElementsByClassName("commentInputText")[0].value;

  console.log(commentText, "hello");

  let commentName = document.getElementsByClassName("commentInputName")[0].value;
  commentList.push();

  comment = {
    text: commentText,
    name: commentName
  };
});

// * Submit Post button
let subPostBTN = submitPost.addEventListener("click", function () {
  let postText = document.getElementsByClassName("postInputText")[0].value;

  console.log(postText, "hello");

  let postName = document.getElementsByClassName("postInputName")[0].value;
});

render();
`"" + "-" + "Posted By: ${name}"`;

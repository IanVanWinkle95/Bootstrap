const cList = document.getElementById("commentList")
const cInput = document.getElementById("commentInput")
const cBtn = document.getElementById("addCommentBtn")

function addComment() {
    const newComment = cInput.ariaValueMax
    if (newComment === "") return
}
cBtn.addEventListener("click", addComment)
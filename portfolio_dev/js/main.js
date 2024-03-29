function submitComment() {
    var comment = document.getElementById('comment').value;
    var commentList = document.getElementById('commentList');
    //createanewcommentelement
    var commentItem = document.createElement('div');
    commentItem.className = "comment-item";
    commentItem.textContent = comment;

    //append the comment to the comment list
    commentList.appendChild(commentItem);

    //clear the comment box
    document.getElementById('comment').value='';

}


//password must be more than 8

const menuIcon =document.querySelector('#menu');

menuIcon.addEventListener('click',function(){
 menuIcon.classList.toggle('clicked');
});



window.addEventListener("scroll", function(){
    var scrollToTop = document.getElementById("scrollToTop");
    if(window.scrollY > 100) {
        scrollToTop.style.display ="block";
    } else{
        scrollToTop.style.display ="none";
    }
}
);

document.getElementById("scrollToTop"). addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


//toggle menu

//$(document).ready(function() {
 //   $('#menu').click(function(){
 //       $('.ox').toggleClass('active');
  //  });
//});

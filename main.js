



var pages = document.getElementById('page');
// function Page(pageNumber){
  // var page=pageNubmer;=
  // return page;
// }



var ip = 0;
   function buttonClick() {
       document.getElementById('inc').value = ++ip;
         console.log("what should be a "+document.getElementById('inc').value);
          document.getElementById('page').innerHTML=document.getElementById('inc').value;
          ip=document.getElementById('inc').value;




var ajaxhttp = new XMLHttpRequest();
console.log(ajaxhttp);


var url= "data/article-"+ip+".json";
ajaxhttp.open("GET",url,true);
ajaxhttp.setRequestHeader("content-type","application/json");
ajaxhttp.onreadystatechange=function() {
    if(ajaxhttp.readyState==4 && ajaxhttp.status==200){
      /*get the text and parse it into object format*/
      var jcontent= JSON.parse(ajaxhttp.responseText);
      // console.log(ajaxhttp);
      // finding how many types are in jason object
       console.log(Object.keys(jcontent.body).length);

// clear previous values from the page
removeMyPage();
// show new values on the page
displayMyPage();

// fucntion to clean the html fiel
function removeMyPage(){
var k;
for(k=0; k<10;k++){
   removeList(k);
  removeImage(k);
  removeHeading(k);
  removeParagraph(k);
}
}


// function to shouw json data on to the html page
function displayMyPage(){
var i;
  var title=document.getElementById('title');
    title.innerHTML=jcontent.title;
  for(i=0; i<Object.keys(jcontent.body).length;i++){
      // console.log(i);
      if(jcontent.body[i].type=="heading"){
        console.log("heading was found");

          getHeading(i);
      }  if(jcontent.body[i].type=="image"){
          console.log("image was found");

          getImage(i);

        }  if(jcontent.body[i].type=="paragraph"){
            console.log("paragraph was found");
            removeParagraph(i)
              getParagraph(i);
          }  if(jcontent.body[i].type=="list"){
              console.log("list was found");
              console.log("objects in the list "+Object.keys(jcontent.body[i].model.items).length);
              getList(i);

            }
  }
}

//get heading from json file
function getHeading(i){
  var heading=document.getElementById('heading'+i);
  heading.innerHTML=jcontent.body[i].model.text;
}

//get image from json file
function getImage(i){
  var img=document.getElementById('img'+i);
  img.src=jcontent.body[i].model.url;
  img.alt=jcontent.body[i].model.altText;
  img.height=jcontent.body[i].model.height;
  img.width=jcontent.body[i].model.width;
}
//get paragraph from json file
function getParagraph(i){
  var paragraph=document.getElementById('paragraph'+i);
  paragraph.innerHTML=jcontent.body[i].model.text;
}
//get list from json file
function getList(i){
var k;
  for(k=0; k<Object.keys(jcontent.body[i].model.items).length;k++){
    var list=document.getElementById('l'+i+k);
    list.innerHTML=jcontent.body[i].model.items[k];
    // console.log(k+" "+i)
  }
}


function removeHeading(i){
  var heading=document.getElementById('heading'+i);
  heading.innerHTML='';
}

function removeImage(i){
  var img=document.getElementById('img'+i);
  img.src='';
  img.alt='';
  img.height='';
  img.width='';
}

function removeParagraph(i){
  var paragraph=document.getElementById('paragraph'+i);
  paragraph.innerHTML='';
}

function removeList(i){
var k;
  for(k=0; k<10;k++){
    var list=document.getElementById('l'+i+k);
    list.innerHTML='';
    // console.log(k+" "+i)
  }
}

    }


}

ajaxhttp.send(null);



}

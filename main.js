/*
var jcontent= {
  "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  "body": [
    {
      "type": "heading",
      "model": {
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    },
    {
      "type": "paragraph",
      "model": {
        "text": "Etiam ornare nulla in sem pharetra, vel varius magna tempus. Praesent pulvinar eget dolor vitae elementum. Donec id velit at sem gravida tristique non vitae lorem."
      }
    },
    {
      "type": "image",
      "model": {
        "url": "https://picsum.photos/640/420/?random",
        "altText": "Vestibulum pellentesque laoreet urna, eget dignissim lorem maximus vel",
        "height": "420",
        "width": "640"
      }
    },
    {
      "type": "paragraph",
      "model": {
        "text": "Nulla tortor nunc, posuere eu purus eget, ultricies ullamcorper sapien. Duis viverra lectus eget dolor gravida rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce molestie, odio at mattis auctor, mauris lectus luctus risus, eget pulvinar tortor erat a est."
      }
    },
    {
      "type": "paragraph",
      "model": {
        "text": "Mauris accumsan maximus enim, eleifend consectetur turpis molestie malesuada. Proin vulputate dui non mattis venenatis. Nam ornare sapien eget nibh placerat, faucibus dapibus lacus consectetur."
      }
    },
    {
      "type": "list",
      "model": {
        "type": "unordered",
        "items": [
          "Vestibulum viverra viverra ullamcorper",
          "Aenean ut felis hendrerit, scelerisque est sed, rhoncus sem"
        ]
      }
    }
  ]
}

console.log(jcontent);
console.log(jcontent.body[0].type);

/*geting the title form the object in first json article
var output=document.getElementById('title');
title.innerHTML=jcontent.title;

/*gting the first type from array body
var heading=document.getElementById('heading');
heading.innerHTML=jcontent.body[0].type;

var text=document.getElementById('text');
text.innerHTML=jcontent.body[0].model.text;

*/
//  pageNumber=1;

// getNextPage();
// document.getElementById("clickMe").onclick = getNextPage();



//   var button=document.getElementById("nextPage");
//
//
// function getNextPage(){
// var pageNumber= document.getElementById('page').innerHTML;
//       pageNumber++;
//       document.getElementById("page").innerHTML=pageNubmer;
// console.log(pageNumber);
// }


function getNextPage(){
    var pages = document.getElementById('page');
    var number = pages.innerHTML;
    number++;
    pages.innerHTML = number;
    return number;
}


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

//
// var pages = document.getElementById('page');
// var number = pages.innerHTML;
// console.log("dfkaljdlf;ajldfka   "+number);

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

removeMyPage();
displayMyPage();

// find how many types was found ang go throug each one and calll apropriate functions.

function removeMyPage(){
var k;
for(k=0; k<10;k++){
   removeList(k);
  removeImage(k);
  removeHeading(k);
  removeParagraph(k);
}
}









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


function getHeading(i){
  var heading=document.getElementById('heading'+i);
  heading.innerHTML=jcontent.body[i].model.text;
}

function getImage(i){
  var img=document.getElementById('img'+i);
  img.src=jcontent.body[i].model.url;
  img.alt=jcontent.body[i].model.altText;
  img.height=jcontent.body[i].model.height;
  img.width=jcontent.body[i].model.width;
}

function getParagraph(i){
  var paragraph=document.getElementById('paragraph'+i);
  paragraph.innerHTML=jcontent.body[i].model.text;
}

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




      //
      // var title=document.getElementById('title');
      // title.innerHTML=jcontent.title;
      // /*gting the first type from array body*/
      // var heading=document.getElementById('heading');
      // heading.innerHTML=jcontent.body[0].model.text;

      // var paragraph=document.getElementById('paragraph-1');
      // paragraph.innerHTML=jcontent.body[1].model.text;

      // var img=document.getElementById('imgA1');
      // img.src=jcontent.body[2].model.url;
      // img.alt=jcontent.body[2].model.altText;
      // img.height=jcontent.body[2].model.height;
      // img.width=jcontent.body[2].model.width;
      //
      // var paragraph1=document.getElementById('paragraph-2');
      // paragraph1.innerHTML=jcontent.body[3].model.text;
      //
      // var paragraph2=document.getElementById('paragraph-3');
      // paragraph2.innerHTML=jcontent.body[4].model.text;

      // var list=document.getElementById('l1');
      // list.innerHTML=jcontent.body[5].model.items[0];
      // var list=document.getElementById('l2');
      // list.innerHTML=jcontent.body[5].model.items[1];
    }


}

ajaxhttp.send(null);



}



/*
fucntion getPage()
      return 'Article-'+i  get the rigtht article page

function getTypes()
        return list<Types>   --get the structure of json file to fill in the html page

fucntion dispalyOnHTML()
        for list<Types>{
        if type=heading{
        fucntio heading(p,p)
      }if type =paragapgh{
      fucntoin paragraph
    }if type =list{
    function list(p,p)
  }if type=image{
  fucnction image(p,p,p)
}
  }


function heading(){}

function paragraph(){}

function image(){}
*/












/*var output= document.getElementById('p1');
p1.innerHTML='new content';


    console.log("fetching the json file");
    fetch("rainbow.jpg")
      .then(response=>{
        console.log(response);
        return response.blob();
      })
      .then(blob =>{
        console.log(blob);
        document.getElementById("imagee").src=URL.createObjectURL(blob);
      });
*/

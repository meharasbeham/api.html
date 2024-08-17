var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.className="row"

var h1=document.createElement("h1");
h1.innerHTML="BEAUTY WORLD";
h1.style.textAlign="center";
h1.style.marginTop="50px";
document.body.append( h1);

var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","brand name");
input.style.width="30%";

input.setAttribute("placeholder","what you want");

var linebreak=document.createElement("br");
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.style.margin="10px";
button.innerHTML="Search";
button.addEventListener("click",foo);


div.append(input,linebreak,button);
document.body.append(div);

async function foo(){
  let res=document.getElementById("brand").value;
  console.log(res);
  let url=`https://colourpop.com/collections/lippie-pencil","website_link`;
  let res1 =await fetch(url);
  let res2= await res1.json();
  console.log(res2);
  var index=res2.length
  console.log(res2[index]);
  document.body.append(container);
}

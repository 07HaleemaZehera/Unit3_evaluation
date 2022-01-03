let meal_list = JSON.parse(localStorage.getItem("store:"));
displayImages();
function displayImages(){
    meal_list.map(function(el){
      document.getElementById("h1").innerText="Total meals"+"("+meal_list.length+")";
        var containerDiv = document.createElement("div");
        containerDiv.setAttribute("id","cont")
       var img = document.createElement("img");
       img.src = el.strCategoryThumb;
       var h3_tag = document.createElement("h3");
       h3_tag.innerText = el.strCategory;
       var p1_tag = document.createElement("p1");
       p1_tag.innerText = el.strCategoryDescription;
       var remove_meal = document.createElement("button");
       remove_meal.innerHTML ="remove";
       remove_meal.style.backgroundColor="red";
       remove_meal.style.color="white";
       remove_meal.addEventListener("click",function(){
          
          document.getElementById("cont").innerHTML=null;
          
       })
       containerDiv.append(img,h3_tag,p1_tag,remove_meal);
       document.getElementById("foodlist").append(containerDiv);
       });
    }
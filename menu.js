 //let url = "https://www.themealdb.com/api.php?ref=apilist.fun";
 let data;
 let meal_list = JSON.parse(localStorage.getItem("store:"))||[];
      // var food = document.getElementById("food").value;
     //let url = "https://www.themealdb.com/api/json/v1/1/search.php?s="+food;
     let url = "https://www.themealdb.com/api/json/v1/1/categories.php"
      async function viewMenu(){
          try{
              let response = await fetch(url);
              let data = await response.json();
              // console.log(data);
              return data;
          }
          catch(err){
              console.log("err:",err);
          }
      }
      async function displayMenu(){
          meal_data = await viewMenu();
         let meals = meal_data.categories;
         console.log(meals)
         meals.map(function(el){
          //    console.log(el.categories.strCategoryThumb);
          var containerDiv = document.createElement("div");
          var img = document.createElement("img");
          img.src = el.strCategoryThumb;
          var h3_tag = document.createElement("h3");
          h3_tag.innerText = el.strCategory;
          var p1_tag = document.createElement("p1");
          p1_tag.innerText = el.strCategoryDescription;
          var button_meal = document.createElement("button");
          button_meal.setAttribute("id","button_meal");
          button_meal.innerText = "ADD TO CART";
          button_meal.style.backgroundColor="green";
          button_meal.style.color="white";
          button_meal.addEventListener("click",function(){
            storeInlocal(el);
          })
          containerDiv.append(img,h3_tag,p1_tag,button_meal);
          document.getElementById("foodlist").append(containerDiv);
       cartButton.addEventListener("click",gotoCartpage);
         function gotoCartpage(){
            window.location.href = "cart.html";
         }
         })
       function storeInlocal(el){
           console.log(el);
           meal_list.push(el);
           localStorage.setItem("store:",JSON.stringify(meal_list));
       }
      }
      displayMenu()
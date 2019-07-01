$(document).ready(function() {
    //Variables
    var selectedSides = {
      dish: "(None)",
      price: 0
    };
    var selectedMain = {
      dish: "(None)",
      price: 0
    };
    var selectedDessert = {
      dish: "(None)",
      price: 0
    };
    var Sides = {
      firstDish: "Salad",
      firstDishPrice: 5,
      secondDish: "Boneless Wings",
      secondDishPrice: 10,
      thirdDish: "Breadsticks",
      thirdDishPrice: 6
    };
  
    var main = {
      firstDish: "Steak & Potato",
      firstDishPrice: 17,
      secondDish: "Hickory Smoked Brisket",
      secondDishPrice: 12,
      thirdDish: "Southern Chipolte Burger",
      thirdDishPrice: 9
    };
  
    var dessert = {
      firstDish: "Ice Cream",
      firstDishPrice: 4,
      secondDish: "Molten Brownie",
      secondDishPrice: 6,
      thirdDish: "Cherry Pie",
      thirdDishPrice: 5
    };
  
    function total() {
      return selectedSides.price + selectedMain.price + selectedDessert.price;
    }
  
    function selectedSidesFnc(dish, price) {
      selectedSides.price = price;
      selectedSides.dish = dish;
      $("#total").html(total());
      return dish + "(" + price + ")";
    }
  
    function selectedMainFnc(dish, price) {
      selectedMain.price = price;
      selectedMain.dish = dish;
      $("#total").html(total());
      return dish + "(" + price + ")";
    }
  
    function selectedDessertFnc(dish, price) {
      selectedDessert.price = price;
      selectedDessert.dish = dish;
      $("#total").html(total());
      return dish + "(" + price + ")";
    }
  
    // Instantiating HTML Button Elements
    // Sides Elements
    document.getElementById("btSides1").value =
      Sides.firstDish + ": " + "$" + Sides.firstDishPrice;
  
    document.getElementById("btSides2").value =
      Sides.secondDish + ": " + "$" + Sides.secondDishPrice;
  
    document.getElementById("btSides3").value =
      Sides.thirdDish + ": " + "$" + Sides.thirdDishPrice;
  
    // Main Elements
    document.getElementById("btMain1").value =
      main.firstDish + ": " + "$" + main.firstDishPrice;
  
    document.getElementById("btMain2").value =
      main.secondDish + ": " + "$" + main.secondDishPrice;
  
    document.getElementById("btMain3").value =
      main.thirdDish + ": " + "$" + main.thirdDishPrice;
  
    // Dessert Elements
    document.getElementById("btDessert1").value =
      dessert.firstDish + ": " + "$" + dessert.firstDishPrice;
  
    document.getElementById("btDessert2").value =
      dessert.secondDish + ": " + "$" + dessert.secondDishPrice;
  
    document.getElementById("btDessert3").value =
      dessert.thirdDish + ": " + "$" + dessert.thirdDishPrice;
  
    // Your Order: Elements
    document.getElementById("selectedSides").innerHTML =
      selectedSides.dish + " $ (" + selectedSides.price + ")";
  
    document.getElementById("selectedMain").innerHTML =
      selectedMain.dish + " $ (" + selectedMain.price + ")";
  
    document.getElementById("selectedDessert").innerHTML =
      selectedDessert.dish + " $ (" + selectedDessert.price + ")";
  
    // Functions (JQuery)
    // Main menu onClicks handler
    $("#btMenu").click(function() {
      $("#liMainMenu").toggle("slow");
    });
  
    $("#btSides").click(function() {
      $("#liSides").toggle("slow", function() {
        if ($(this).css("display") == "none") {
          $("#btSides").css("background-color", "black");
        } else {
          $("#btSides").css("background-color", "blue");
        }
      });
    });
  
    $("#btMain").click(function() {
      $("#liMain").toggle("slow", function() {
        if ($(this).css("display") == "none") {
          $("#btMain").css("background-color", "black");
        } else {
          $("#btMain").css("background-color", "blue");
        }
      });
    });
  
    $("#btDessert").click(function() {
      $("#liDessert").toggle("slow", function() {
        if ($(this).css("display") == "none") {
          $("#btDessert").css("background-color", "black");
        } else {
          $("#btDessert").css("background-color", "blue");
        }
      });
    });
  
    // Sides onClicks
    $("#btSides1").click(function() {
      $("#liSides").children("li").children("input").css("background-color", "black");
      $(this).css("background-color", "blue");
      $("#selectedSides").html(selectedSidesFnc(Sides.firstDish, Sides.firstDishPrice));
    });
  
    $("#btSides2").click(function() {
      $("#liSides").children("li").children("input").css("background-color", "black");
      $(this).css("background-color", "blue");
      $("#selectedSides").html(selectedSidesFnc(Sides.secondDish, Sides.secondDishPrice));
    });
  
    $("#btSides3").click(function() {
      $("#liSides").children("li").children("input").css("background-color", "black");
      $(this).css("background-color", "blue");
      $("#selectedSides").html(selectedSidesFnc(Sides.thirdDish, Sides.thirdDishPrice));
    });
  
    // Main onClicks
    $("#btMain1").click(function() {
      $("#liMain").children("li").children("input").css("background-color", "black");
      $(this).css("background-color", "blue");
      $("#selectedMain").html(selectedMainFnc(main.firstDish, main.firstDishPrice));
    });
  
    $("#btMain2").click(function() {
      $("#liMain").children("li").children("input").css("background-color", "black");
      $(this).css("background-color", "blue");
      $("#selectedMain").html(selectedMainFnc(main.secondDish, main.secondDishPrice));
    });
  
    $("#btMain3").click(function() {
      $("#liMain").children("li").children("input").css("background-color", "black");
      $(this).css("background-color", "blue");
      $("#selectedMain").html(selectedMainFnc(main.thirdDish, main.thirdDishPrice));
    });
  
    // Dessert onClicks
    $("#btDessert1").click(function() {
      $("#liDessert").children("li").children("input").css("background-color", "black");
      $(this).css("background-color", "blue");
      $("#selectedDessert").html(selectedDessertFnc(dessert.firstDish, dessert.firstDishPrice));
    });
  
    $("#btDessert2").click(function() {
      $("#liDessert").children("li").children("input").css("background-color", "black");
      $(this).css("background-color", "blue");
      $("#selectedDessert").html(selectedDessertFnc(dessert.secondDish, dessert.secondDishPrice));
    });
  
    $("#btDessert3").click(function() {
      $("#liDessert").children("li").children("input").css("background-color", "black");
      $(this).css("background-color", "blue");
      $("#selectedDessert").html(selectedDessertFnc(dessert.thirdDish, dessert.thirdDishPrice));
    });
  });
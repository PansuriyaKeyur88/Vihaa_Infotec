fetch("message.json")
  .then(response => response.json())
  .then(data => {
    var result = data.result;
    var datacontainer = document.getElementById("datacontainer");

    function makeButton(status, elementbtn, btnName) {
      var countDisplay = document.getElementById(elementbtn);
      if (status === "result") {
        var totalCount = result.filter(function (element) {
          return element.status += result.status;
        });
        countDisplay.innerHTML = `${btnName} (${totalCount.length})`;
        countDisplay.addEventListener("click", function () {
          dataput(totalCount.length);
        });
      } 
      else {
        var totalCount = result.filter(function (element) {
          return element.status === status;
        });
      }
      countDisplay.innerHTML = `${btnName} (${totalCount.length})`;
      countDisplay.addEventListener("click", function () {
        dataput(totalCount);
      });
    }

    function dataput(item) {
      datacontainer.innerHTML = "";

      item.forEach(element => {
        var ratingStars = "";
        var filledStars = element.property_reviews;
        var emptyStars = 5 - filledStars;

        for (var i = 0; i < filledStars; i++) {
          ratingStars += '<i class="icon fa-solid fa-star"></i>';
        }

        for (var i = 0; i < emptyStars; i++) {
          ratingStars += '<i class="icon fa-regular fa-star "></i>';
        }

        var images = document.createElement("div");
        var date = element.createdAt;
        images.innerHTML = `
        <div class="row">
          <div class="col-lg-3">            
            <div class="product">  
              <img class='img card-img-top' src="${element.image[element.image.length - 1]}">                    
              <div class="rupee">${element.price.map((e) => e.number + " " + e.currency[0])  }</div>
              <div class="title">${element.title.slice(0, 15)}</div>
              <div class="city">${element.location_name}</div>             
              <hr class="m-auto">
              <div class="date"> ${date.slice(0, 10)}
              <span class="rating">Rate ${ratingStars}</span>
              </div>                    
            </div>
          </div>
        </div>
        `
        datacontainer.appendChild(images);
      });
    }
    makeButton("approved", "all", "Approved");
    makeButton("pending", "bad", "Pending");
    makeButton("decline", "good", "Decline");
    makeButton("result", "all-product", "All");
    dataput(result);
  });




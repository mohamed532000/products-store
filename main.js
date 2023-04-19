let preloadDiv = document.querySelector(".preolader-div");
let containerOfLinks = document.getElementById("container-of-links");
let links = document.querySelectorAll(".first-list li");
let navIcons = document.querySelectorAll(".nav-icons li");
let logo = document.querySelector(".logo");
let firstList = document.querySelector(".first-list")
let dropFirstListIcon = document.querySelector(".drob-first-list");
let spansOfDrobingList = document.querySelectorAll(".drob-first-list span");
let showSecondList = document.getElementById("show-more");
let secondList = document.querySelector(".second-list");
let letterOfOrganic = document.querySelectorAll(".letter-heading span");

let searchAndUserAndAloginDivs = document.querySelectorAll(".search-shop-user-divs div");
let closeIcons = document.querySelectorAll(".close-this");

// acsess on about section
let AboutSection = document.getElementById("About-section");
// acsess on first word in heading of about section
let firstSpanOfABoutSection = document.getElementById("first-span-of-head");
// acsess on second word in heading of about section
let secondSpanOfABoutSection = document.getElementById("second-span-of-head");

// Access on All spans of head in each section

// in about section
let allSpanOfPargraphHeadinB = document.querySelectorAll(".B-spans span");
// in feature section
let allSpanOfPargraphHeadInF = document.querySelectorAll(".F-spans span");
// in products section
let allSpanOfPargraphHeadInProducts = document.querySelectorAll(".Products-spans span");
// in blogs section
let allSpanOfPargraphHeadInBlogs = document.querySelectorAll(".Blog-spans span");



//////////////////////////////////////////////////////////////////////////////////////////////////
// acsess on about boxes
let aboutBoxes = document.querySelectorAll(".container .about-box");
let readMoreInputOfAbout = document.querySelector(".read-more");

// acsess on first word in heading of feature section
let firstSpanOfFeaturesSection = document.querySelector(".first-span-of-head-feature");
// acsess on second word in heading of feature section
let secondSpanOfFeaturesSection = document.querySelector(".second-span-of-head-feature");

// acsess on feature section
let featuresSection = document.getElementById("Features-section");
// acsess on feature boxes
let featuresBoxes = document.querySelectorAll(".container .feature-box");
let textInOrder = document.querySelector(".in-order");

// acsess on products section
let productsSection = document.getElementById("Products-section");
// acsess on first word in heading of products section
let firstSpanOfProductsSection = document.querySelector(".first-span-of-head-products");
// acsess on second word in heading of products section
let secondSpanOfProductsSection = document.querySelector(".second-span-of-head-products");
// acsess on products boxes
let productsBoxes = document.querySelectorAll(".container .product-box");
// acsess on icon to increase or decrease num of product
let decreaseProductIcon = document.querySelectorAll(".decrease-div i");
let increaseProductIcon = document.querySelectorAll(".increase-div i");
// acsess on number of product who increase it or decrease
let numsOfProcucts = document.querySelectorAll(".num-of-this-product");

// acsess on blogs section
let blogsSection = document.getElementById("Blogs-section");
// acsess on blogs boxes
let blogsBoxes = document.querySelectorAll(".container .blog-box");
// acsess on first word in heading of blogs section
let firstSpanOfBlogsSection = document.querySelector(".first-span-of-head-blogs");
// acsess on second word in heading of blogs section
let secondSpanOfBlogsSection = document.querySelector(".second-span-of-head-blogs");


// acsess on footer section
let footerSection = document.querySelector(".footer-section");

// acsess on all boxes of footer section
let footerBoxes = document.querySelectorAll(".container .foot-box");


// acsess on all animated span in sections

// about spans 
let aboutSectionSpans = document.querySelectorAll("about > span")

// some events will happen when our website loaded
window.onload = ()=>{

    preloadDiv.style.display = "none";

    links.forEach(link=>{
        link.classList.add("drobing-from-top");
    });
    navIcons.forEach(icon=>{
        icon.classList.add("drobing-from-top");
    });
    logo.classList.add("drobing-from-top");

    letterOfOrganic.forEach(letter=>{
        letter.classList.add("drobing-from-top");
    });

};

// click event on icon when the screen will be small to drob the list of links to customer
dropFirstListIcon.addEventListener("click",()=>{
    dropFirstListIcon.classList.toggle("rotaition");

    spansOfDrobingList[0].classList.toggle("rotate");

    spansOfDrobingList[1].classList.toggle("hide");

    spansOfDrobingList[2].classList.toggle("second-rotate");

    firstList.classList.toggle("drobed");

});

// click event on more-link-text to send the second list of links to customer
showSecondList.addEventListener("click" , (e)=>{
    e.preventDefault()
    secondList.classList.toggle("show-more");
});



// for each on all navbar icon to swip between search and cart and login divs to translate it to customer 
navIcons.forEach((icon)=>{
    icon.onclick = ()=>{
        searchAndUserAndAloginDivs.forEach((div)=>{
            div.classList.remove("translate-to-client");
        })
        document.querySelector(`${icon.dataset.get}`).classList.add("translate-to-client");
    };

});
// for each on all close icon to clos his parent element
closeIcons.forEach(closeIcon=>{
    closeIcon.onclick = ()=>{
        closeIcon.parentElement.classList.remove("translate-to-client");
    };
});

let allSections = document.querySelectorAll("section");
// console.log(allSpanOfPargraphHeadInF)

window.onscroll = ()=>{
    // if customer stop on any any section will add active class on this section
    allSections.forEach(section=>{
        // acsess on the position of scrolling
        let scrollingPosition = document.documentElement.scrollTop;
    
        if(scrollingPosition >= section.offsetTop && scrollingPosition < section.offsetTop + section.offsetHeight) {
            section.classList.add("active");
        }else {
            section.classList.remove("active")
        };
    });


    // code for about section ****************************************************************

    if(window.scrollY >= AboutSection.offsetTop - 50) {
        // AboutSection.classList.add("active");
        firstSpanOfABoutSection.classList.add("drobing-from-top");
        secondSpanOfABoutSection.classList.add("scaling-of-head");

        let firstArrayOfSpansB =[
            allSpanOfPargraphHeadinB[0],
            allSpanOfPargraphHeadinB[1],
            allSpanOfPargraphHeadinB[2]
        ];
        firstArrayOfSpansB.forEach(span=>{
            span.classList.add("no-transform-1");
        });
        allSpanOfPargraphHeadinB[3].classList.add("drobing-from-top");

        let secondArrayOfSpansB =[
            allSpanOfPargraphHeadinB[4],
            allSpanOfPargraphHeadinB[5],
            allSpanOfPargraphHeadinB[6],
            allSpanOfPargraphHeadinB[7],
            allSpanOfPargraphHeadinB[8]
        ];

        secondArrayOfSpansB.forEach(span=>{
            span.classList.add("no-transform-2");
        });

        aboutBoxes.forEach(aboutBox=>{
            aboutBox.classList.add("no-translate");
        });

    };

    // code for features section ****************************************************************

    if(window.scrollY >= featuresSection.offsetTop - 100) {
        // featuresSection.classList.add("active");
        firstSpanOfFeaturesSection.classList.add("drobing-from-top");
        secondSpanOfFeaturesSection.classList.add("scaling-of-head");

        featuresBoxes.forEach(featureBox=>{
            featureBox.classList.add("no-translate");
        })
        let firstArrayOfSpansF =[
            allSpanOfPargraphHeadInF[0],
            allSpanOfPargraphHeadInF[1],
            allSpanOfPargraphHeadInF[2]
        ];
        firstArrayOfSpansF.forEach(span=>{
            span.classList.add("no-transform-1");
        });
        allSpanOfPargraphHeadInF[3].classList.add("drobing-from-top");

        let secondArrayOfSpansF =[
            allSpanOfPargraphHeadInF[4],
            allSpanOfPargraphHeadInF[5],
            allSpanOfPargraphHeadInF[6],
            allSpanOfPargraphHeadInF[7],
            allSpanOfPargraphHeadInF[8]
        ];

        secondArrayOfSpansF.forEach(span=>{
            span.classList.add("no-transform-2");
        });

    };

    // code for products section ****************************************************************

    if(window.scrollY >= productsSection.offsetTop) {
        // productsSection.classList.add("active");
        firstSpanOfProductsSection.classList.add("drobing-from-top");
        secondSpanOfProductsSection.classList.add("scaling-of-head");

        let firstArrayOfSpansProducts =[
            allSpanOfPargraphHeadInProducts[0],
            allSpanOfPargraphHeadInProducts[1],
            allSpanOfPargraphHeadInProducts[2]
        ];
        firstArrayOfSpansProducts.forEach(span=>{
            span.classList.add("no-transform-1");
        });
        allSpanOfPargraphHeadInProducts[3].classList.add("drobing-from-top");

        let secondArrayOfSpansProducts = [
            allSpanOfPargraphHeadInProducts[4],
            allSpanOfPargraphHeadInProducts[5],
            allSpanOfPargraphHeadInProducts[6],
            allSpanOfPargraphHeadInProducts[7],
            allSpanOfPargraphHeadInProducts[8]
        ];

        secondArrayOfSpansProducts.forEach(span=>{
            span.classList.add("no-transform-2");
        });

        // check if this container has a selected class will add no translate to all product of this type container
        productsBoxes.forEach(productBox=>{
            if(productBox.parentElement.classList.contains("selected")) {
                productBox.classList.add("no-translate");
            }else {
                productBox.classList.remove("no-translate");
            }
        });


    };

    // code for blog section ****************************************************************

    if(window.scrollY >= blogsSection.offsetTop - 100) {
        // blogsSection.classList.add("active");
        firstSpanOfBlogsSection.classList.add("drobing-from-top");
        secondSpanOfBlogsSection.classList.add("scaling-of-head");

        let firstArrayOfSpansBlogs =[
            allSpanOfPargraphHeadInBlogs[0],
            allSpanOfPargraphHeadInBlogs[1],
            allSpanOfPargraphHeadInBlogs[2]
        ];
        firstArrayOfSpansBlogs.forEach(span=>{
            span.classList.add("no-transform-1")
        });
        allSpanOfPargraphHeadInBlogs[3].classList.add("drobing-from-top");

        let secondArrayOfSpansBlogs =[
            allSpanOfPargraphHeadInBlogs[4],
            allSpanOfPargraphHeadInBlogs[5],
            allSpanOfPargraphHeadInBlogs[6],
            allSpanOfPargraphHeadInBlogs[7],
            allSpanOfPargraphHeadInBlogs[8]
        ];

        secondArrayOfSpansBlogs.forEach(span=>{
            span.classList.add("no-transform-2")
        });
    };

    if(window.scrollY >= blogsSection.offsetTop + 100) {
        blogsBoxes.forEach(blogBox=>{
            blogBox.classList.add("no-translate");
        });
    };

    if(window.scrollY >= footerSection.offsetTop - 200) {
        footerSection.classList.add("active");
    }else {
        footerSection.classList.remove("active");
    };
    if(window.scrollY >= footerSection.offsetTop - 200) {
        footerBoxes.forEach(footerBox=>{
            footerBox.classList.add("no-translate")
        })
    }

};


// *************************** create function to swip between types of all products ************************* //

// acsess on swipper list to swip between all container of products
let typesOfProductsList = document.querySelectorAll("ul.types li.type");
// acsess on all container of all products to swip between it
let listOfAllContainerProducts = document.querySelectorAll(".all-container .container");
// the function
typesOfProductsList.forEach(type=>{
    type.onclick = ()=>{
        typesOfProductsList.forEach(type=>{
            type.classList.remove("active")
        })
        type.classList.add("active");

        listOfAllContainerProducts.forEach(container=>{
            container.classList.remove("selected")
        })

        document.querySelector(`${type.dataset.get}`).classList.add("selected");
    // check on click on type of product if this container has a selected class will add no translate to all product of this type container
        productsBoxes.forEach(productBox=>{
            if(productBox.parentElement.classList.contains("selected")) {
                productBox.classList.add("no-translate");
            }else {
                productBox.classList.remove("no-translate");
            }
        });
        
    };
});

// acsess on cart of produucts
let cartDiv = document.querySelector(".choosin")
// acsess on all of addition buttons in all products
let additionButtons = document.querySelectorAll(".product-box .add-to-cart-div .add"); 

additionButtons.forEach(button=>{
    button.onclick = ()=>{

        // call calc function when click on addition  button
        calcTotalPrice(button);
        // call create function when click on addition  button
        create(button);

    };
});


// ********************** create function who calck all price of quantity of product who will select *********************** //
function calcTotalPrice(button){

    // acess on total price place to change his value when select quantity of product
    let totalPrice = button.parentElement.parentElement.children[1].children[0].children[0];
    // acsess on price of product
    let priceOfProduct = Number.parseInt(button.parentElement.parentElement.children[1].children[1].children[0].textContent);
    // acess on quantity of product
    let selectValue = Number.parseInt(button.nextElementSibling.children[1].value);
    // calc quantity and price of product to tell customer about total price
    totalPrice.textContent = priceOfProduct * selectValue;

}



function create(button) {

    let productDiv = document.createElement("div");
        productDiv.classList.add("produc");
    // ***************************** creat produc img div **************************************** //
    let productImgDiv = document.createElement("div");
        productImgDiv.classList.add("produc-img");
    let productImg = document.createElement("img");
        productImg.src = button.parentElement.parentElement.children[0].children[0].src;
        productImgDiv.append(productImg);



    // ********************  create product information div and append information in this div ************************* //

    let productInfo = document.createElement("div");
        productInfo.classList.add("produc-info")
    let productName = document.createElement("h2");
        productName.append(button.parentElement.parentElement.children[2].children[0].textContent);
        productName.classList.add("produc-name");

        productInfo.append(productName);


    // ********************  create total price and quantity div and append information in this div ************************* //

    let totalPriceAndQuantityDiv = document.createElement("div");
        totalPriceAndQuantityDiv.classList.add("total-price-and-quantity");
    
    let totalPriceSpan = document.createElement("span");

        totalPriceSpan.classList.add("total-price");

    let totalpriceNumSpan = document.createElement("span");

        totalpriceNumSpan.classList.add("total-price-num");

        totalpriceNumSpan.append(Number.parseInt(button.parentElement.parentElement.children[1].children[0].children[0].textContent));

        totalPriceSpan.append(`Total Price $ ${totalpriceNumSpan.textContent}`);


    // ********************  create quantity span ************************* //
    let quantitySpan = document.createElement("span");
        quantitySpan.classList.add("quantity");

    // ********************  create quantity number span ************************* //
    let  quantityNumSpan = document.createElement("span");
         quantityNumSpan.classList.add("quantity-num");

    // ********************  set value of quantity in quantity span ************************* //
         quantityNumSpan.append(Number.parseInt(button.nextElementSibling.children[1].value));
         quantitySpan.append(`Quantity ${quantityNumSpan.textContent}`);


    // ************* add total price and value of quantity to total price and quantity div ************* //
         totalPriceAndQuantityDiv.append(totalPriceSpan);
         totalPriceAndQuantityDiv.append(quantitySpan);

    // ****************************** add total price and quantity div to product info div ********************* //
         productInfo.append(totalPriceAndQuantityDiv);



    // *********************************  create delete div and add tow span in this div ********************************* //

    let deleteDiv = document.createElement("div");
        deleteDiv.classList.add("delete-div");

    let firstDeleteSpan = document.createElement("span");
        firstDeleteSpan.classList.add("first");
    
        let secondDeleteSpan = document.createElement("span");
        secondDeleteSpan.classList.add("second");

        deleteDiv.append(firstDeleteSpan);
        deleteDiv.append(secondDeleteSpan);


    // ********** add img of selection product and add information about this product and add deleting div in it ******* //

        productDiv.append(productImgDiv);
        productDiv.append(productInfo);
        productDiv.append(deleteDiv);



    //************ create if condition to add div to cart just if quantity number bigger than zero ********************* //
        if(button.nextElementSibling.children[1].value >= 1) {
            // function add active class to addition done div
            addActiveClassFromAddistionDiv();
            cartDiv.append(productDiv);
            // add clicked class on button who add product to can't add this product again
            button.classList.add("clicked");
            button.classList.add("added");
            // acsess on all buttons who are contain clicked class
            let allButtonWasClicked = document.querySelectorAll(".add-to-cart-div .clicked");

            // acsess on there is no products text to change his style
            let noProductsText = document.querySelector(".if-no-products");
            // if there are products in cart will remove no products text
            noProductsText.style.display = "none";

    // *****************************create function to onclick on delete div will remove this product *********************** //

            let allDeletebtn = document.querySelectorAll(".produc .delete-div");

            // acsess on length of all products who are in the customer's bag 
            let lengthOfProductsInCart = cartDiv.children.length;

            allDeletebtn.forEach(btn =>{

                btn.onclick = ()=>{
                    // remove the product when click on the delete button by customer
                    btn.parentElement.style.display = "none";
                    // decrease length of the broducts when click delete eny product
                    lengthOfProductsInCart--;

                    if(lengthOfProductsInCart < 1) {
                        // if there is no any products in cart will display block to tell customer there is no any products in cart
                        noProductsText.style.display = "block";

                        // remove clicked class from all buttons who are clicked if there is no products in the customer's bag
                        allButtonWasClicked.forEach(btn=>{
                            btn.classList.remove("clicked");
                        });
                        // empty the cart div for no save current products
                        cartDiv.textContent = "";
                    }else {
                        noProductsText.style.display = "none";
                    };

                    
                };
            });

        };  
};


// acsess on closing icon to close done addition product
let closeAdditionDoneIcon = document.querySelector(".close-addition-div");
// acsess on addition div
let additionDiv = document.querySelector(".addition-done");

// function to remove active class from addition full secreen
function removeActiveClassFromAddistionDiv() {

    additionDiv.classList.remove("active");

}

// function add active class to addition done div
function addActiveClassFromAddistionDiv() {

    additionDiv.classList.add("active");

};
// on click on the close icon will remove active class from addition div
closeAdditionDoneIcon.onclick = removeActiveClassFromAddistionDiv;
// acsess on go to cart button
let goToCartBtn = document.querySelector(".go-to-cart-div");
// acsess on the cart
let cartShop = document.querySelector(".shop");
// on click on go to cart button will remove active class from addition div and translate the cart to client
goToCartBtn.onclick = ()=>{
    removeActiveClassFromAddistionDiv();
    goToCart();
}
// go to cart function
function goToCart(){

    cartShop.classList.add("translate-to-client");
    
};


$(function () {

    var params = new URLSearchParams(window.location.search);
    let status = params.get('status');
    if (status == "successful") {
        $("#statusModal").modal();
        $("#statusModalHtml").html("Order successful");
    }


    function productDetail(productId = Number(params.get('product_id'))) {

        $.get('/product_detail', { product_id: productId }).done(function (data) {

            dat = JSON.parse(data);


            $("#telPhone").attr({ "href": "tel:" + dat[0].product_phone });
            // $("#bizName").text(dat[0].business_name);
            // $("#wasap").attr({"href":"https://wa.me/"+dat[0].product_phone+"?text=I am interested."});
            //   console.log("tel:"+dat[0].product_phone);

            let product_detail_html = '';

            dat.forEach(product => {

                product_detail_html += `<div class="row">`;

                product_detail_html += `<div class="col-md-6 card">
                 <div id="demo" class="carousel slide" data-ride="carousel">
                    <!-- The slideshow -->
                    <div class="carousel-inner">`;

                let pictures = '';
                pictures = product.product_picture;
                console.log(pictures);
                let product_pictures = pictures.split(';');
                for (let i = 1; i < product_pictures.length; i++) {

                    if (i == 1) {
                        product_detail_html += `      
            <div class="carousel-item active">
                        <img onclick="imageModal('images/${product_pictures[i]}');" src="images/${product_pictures[i]}" alt="${product.product_name}" style="width:100%; height:100%;">
                        <!--<i class="fa fa-heart pull-right mr-2 mt-3" onclick="saveProduct(event,${product.product_id})"></i>-->
                      </div>`;
                    } else {
                        product_detail_html += ` <div class="carousel-item">
                        <img onclick="imageModal('images/${product_pictures[i]}');" src="images/${product_pictures[i]}" alt="${product.product_name}" style="width:100%; height:100%;">
                        <!--<i class="fa fa-heart pull-right mr-2 mt-3" onclick="saveProduct(event,${product.product_id})"></i>-->
                      </div>`;
                    }
                }

                product_detail_html += `</div>`;

                product_detail_html += `
                    <!-- Indicators -->
                    <ul class="carousel-indicators mb-5">`;
                for (let i = 0; i < product_pictures.length - 1; i++) {

                    if (i == 0) {
                        product_detail_html += `<li data-target="#demo" data-slide-to="0" class="active bg-danger"></li>`;
                    } else {
                        product_detail_html += '<li data-target="#demo" class="bg-danger" data-slide-to="' + i + '"></li>';
                    }

                }
                product_detail_html += `</ul>`;
                product_detail_html += `       
                    <!-- Left and right controls -->
                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                      <span class="carousel-control-prev-icon bg-danger"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                      <span class="carousel-control-next-icon bg-danger"></span>
                    </a>
                  
                  </div> 
            </div>`;

                // product_detail_html += ` <li class="list-group-item"><img onclick="imageModal();" src="images/${product_pictures[1]}"
                //   class="card-img-top img-fluid w-50 d-block mx-auto rounded-circle mt-2" alt="picture"><i
                //   class="fa fa-heart pull-right mr-2 mt-3" onclick="saveProduct(${product.product_id})"></i></li>`;

                product_detail_html += `<div class="col-md-6 card d-flex align-items-center justify-content-center"><p>${product.product_name}</p></div>
      <div class="col-md-6 card " id="pricing">
      <p><span>&#8358</span>${product.product_price} <strike>${Number(product.product_price) + 5000}</strike> <span class="float-right">you'll save
          N5000</span></p></div>
      <div class="col-md-6 card"><p><a href="https://wa.me/234${product.product_phone}?text=I am interested." class="btn btn-link" ><span class="fa fa-whatsapp">  Chat</span></a><a class="btn btn-link pull-right"><span onclick="shareProduct('${window.location.origin + '/senior-cart?product_id=' + product.product_id}')" class="fa fa-share"> Share</span></a></p></div>`;

                if (product.product_feature) {
                    product_detail_html += `
      <div class="col-md-6 card" id="feature">
      <h6>MAIN FEATURES</h6>
      <p>${product.product_feature ? product.product_feature : 'Nothing yet'}</p>
      </div>`;
                }

                if (product.product_description) {
                    product_detail_html += `
      <div class="col-md-6 card" id="description">
        <h6>DESCRIPTION</h6>
      <p> ${product.product_description ? product.product_description : 'Nothing yet'}</p>
      <p>Size: <span>${product.product_size ? product.product_size : 'Nothing yet'}</span></p>
      <p>Weight: <span>${product.product_weight ? product.product_weight : 'Nothing yet'}</span>kg</p>
      <p>Available quantities: <span>${product.product_quantity ? product.product_quantity : 'Nothing yet'}</span></p>
      </div>`;
                }


                if (product.product_video) {
                    product_detail_html += `<div class="col-md-6 card" id="demo">
                <h6>PRODUCT DEMO</h6>
      <div class="embed-responsive embed-responsive-16by9"><iframe class="embed-responsive-item"
            src="${product.product_video}" allowfullscreen frameborder="0"></iframe></div>
      </div>`;
                }


                if (product.product_shipping) {
                    product_detail_html += `<div class="col-md-6 card"><h6>SHIPPING</h6><p>${product.product_shipping ? product.product_shipping : 'Nothing yet'}</p></div>`;
                }

                if (product.product_warranty) {
                    product_detail_html += `
      <div class="col-md-6 card">
        <h6>WARRANTY</h6>
      <p>${product.product_warranty ? product.product_warranty : 'Nothing yet'}</p>
      </div>`;
                }

                if (product.product_return) {
                    product_detail_html += `
        <div class="col-md-6 card">
          <h6>RETURN POLICY</h6>
      <p>${product.product_return ? product.product_return : 'Nothing yet'}</p>
        </div>`;
                }

                if (product.product_review) {
                    let reviews = '';
                    reviews = product.product_review;
                    console.log(reviews);
                    let product_reviews = reviews.split(';');

                    product_detail_html += `
        <div class="col-md-12 card" id="review">
          <h6>REVIEW<span><a class="btn btn-success btn-sm pull-right text-white" onclick="reviewModal()">Post review</a></span><span id="productNumber" hidden>${product.product_id}</span></h6>`;
                    for (let i = 1; i < product_reviews.length; i++) {
                        product_detail_html += `<p><img src="images/${product_reviews[i]}" alt="${product_reviews[i]}" class="w-100 img-fluid"></p>`;
                    }
                    product_detail_html += `</div>`;
                }

                product_detail_html += `
      <div class="col-md-6 card">
        <p>
          <!--  <span class="float-left"><a class="btn btn-sm btn-primary float-left text-white ml-2"
             onclick="addToCart(${product.product_id})"><small><i class="fa fa-cart-plus">Add to
         cart</i></small></a></span>-->
          <span class="float-leftl fixed-bottom mr-4 ml-4"><a class="btn  btn-block btn-lg rounded btn-success text-white" onclick="checkout(${product.product_id + ',' + product.product_price})"><small><i
                  class="fa fa-money"> BUY NOW </i></small></a></span>
        </p>
      </div>
      </div>
`;

            });
            // console.log(data);

            $("#productDetailHtml").html(product_detail_html);

        }).fail(function (error) {
            console.warn(error);
        });



    }
    productDetail();



    window.reviewModal = function () {
        $("#reviewModal").modal();
    }




    $.get('/get_review', { product_id: Number(params.get('product_id')) }).done(function (rev) {
        let revw = JSON.parse(rev);
        console.log(revw);
        let review_detail_html = '';
        revw.forEach(review => {
            review_detail_html += `<p><span class="text-success">${review.name}</span> <br> ${review.message}</p>`;
        });
        $("#reviewHtml").html(review_detail_html);
    });


    let pidprice = [];
    window.checkout = function (pid, price) {
        pidprice = [pid, price];
        $("#checkoutModal").modal();
    }



    /**
   * Show toast when data is added or remove
   * @param {string} message the result after adding or remove the favourite item
   */
    window.showToast = function (message) {
        $('.toast-body').text(message);    //text(message);
        $('.toast').removeClass('d-none');
        $('.toast').toast('show');
    }

    window.shareProduct = async function (link = 'https://okfarm.com') {
        // const resultParam = $('#shareResult');
        const dataToShare = {
            title: 'Siniocart',
            text: 'Check out this product you may like it.',
            url: link
        }
        if (navigator.share) {
            try {
                await navigator.share(dataToShare);
                // resultParam.text('OkRides shared successfully');
            } catch (error) {
                // resultParam.text('Error: ' + error);
                console.log(error);
            }
        }
    }




    $("#reviewForm").submit(function (evt) {
        evt.preventDefault();

        let reviewForm = $(this);
        let productId = Number($("#productNumber").text());
        let name = reviewForm.find('input[name=name]').val();
        let email = reviewForm.find('input[name=email]').val();
        let message = reviewForm.find('textarea[name=message]').val();
        let reviewObj = {
            product_id: productId,
            name: name,
            email: email,
            message: message
        };

        console.log(reviewObj);

        if (email) {
            $.post("/check", { email: email }).done(function (resEmail) {
                console.log(resEmail);
                let realRes = JSON.parse(resEmail);
                if (realRes.result == "success") {

                    $.post("/post_review", reviewObj).done(function (res) {
                        $("#reviewModal").modal('hide');
                        let rest = JSON.parse(res);
                        console.log(rest.result);
                        if (rest.result == "success") {
                            $("#statusModal").modal();
                            $("#statusModalHtml").html('Successfully submitted');
                            // alert("successfully submitted");
                        }
                    }).fail(function (err) {
                        console.warn(err);
                    });

                } else {
                    //   alert("You have not placed order for this item so you can post a review now.") ;
                    $("#reviewModal").modal('hide');
                    $("#statusModal").modal();
                    $("#statusModalHtml").html('You have not placed order for this item so you can not post a review now.');
                }

            }).fail(function (err) {
                console.warn(err);

            });
        }



    });


    $("#cartForm").submit(function (event) {

        event.preventDefault();
        let cartForm = $(this);
        let first_name = cartForm.find('input[name=first_name]').val();
        let last_name = cartForm.find('input[name=last_name]').val();
        let phone = cartForm.find('input[name=phone]').val();
        let email = cartForm.find('input[name=email]').val();
        let address = cartForm.find('input[name=address]').val();
        let loc_govt = cartForm.find('input[name=loc_govt]').val();
        let state = cartForm.find('input[name=state]').val();
        let method = cartForm.find('select[name=method]').val();
        let quantity = cartForm.find('select[name=quantity]').val();

        let checkoutObj = {
            product_id: Number($("#productNumber").text()),
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            email: email,
            address: address,
            loc_govt: loc_govt,
            state: state,
            quantity: quantity
        };

        $("#checkoutModal").modal("hide");
        console.log(checkoutObj);

        if (method == 1) {


            $.post('/order',
                {
                    first_name: checkoutObj.first_name,
                    last_name: checkoutObj.last_name,
                    phone: checkoutObj.phone,
                    email: checkoutObj.email,
                    address: checkoutObj.address,
                    loc_govt: checkoutObj.loc_govt,
                    state: checkoutObj.state,
                    product_id: checkoutObj.product_id,
                    order_no: (Math.floor((Math.random() * 1000000000) + 1)),
                    price: pidprice[1],
                    quantity: checkoutObj.quantity,
                    total: Number(pidprice[1]) * checkoutObj.quantity
                }).done(function (data) {
                    let result = JSON.parse(data);
                    // let result = data;
                    if (result.result == "success") {
                        $("#statusModal").modal();
                        $("#statusModalHtml").html("Order successfully submitted and pay N" + (Number(pidprice[1]) * checkoutObj.quantity) + " on delivery");
                    }
                    console.log(data);
                }).fail(function (error) {
                    if (result.result == "success") {
                        $("#statusModal").modal();
                        $("#statusModalHtml").html("Error!");
                    }
                    console.error(error);
                });

        } else if (method == 2) {

            $.post('/order',
                {
                    first_name: checkoutObj.first_name,
                    last_name: checkoutObj.last_name,
                    phone: checkoutObj.phone,
                    email: checkoutObj.email,
                    address: checkoutObj.address,
                    loc_govt: checkoutObj.loc_govt,
                    state: checkoutObj.state,
                    product_id: checkoutObj.product_id,
                    order_no: (Math.floor((Math.random() * 1000000000) + 1)),
                    price: pidprice[1],
                    quantity: checkoutObj.quantity,
                    total: Number(pidprice[1]) * checkoutObj.quantity
                }).done(function (data) {
                    let result = JSON.parse(data);
                    // let result = data;
                    if (result.result == "success") {
                        $("#statusModal").modal();
                        $("#statusModalHtml").html("<p>Pay to the account detail below: <br></p><p>Account name: Siniotech Information and Communication Technology Co. </p><p>Account number: 0020345409</p> <p>Bank: Guarranty Trust Bank (GTB)</p>");
                    }
                    console.log(data);
                }).fail(function (error) {
                    if (result.result == "success") {
                        $("#statusModal").modal();
                        $("#statusModalHtml").html("Error!");
                    }
                    console.error(error);
                });

        } else if (method == 3) {
            payWithPaystack(pidprice[0], pidprice[1], checkoutObj);
        } else {
            makePayment(pidprice[0], pidprice[1], checkoutObj);
        }


    });


    //  pay for booking of a ride payment api or function
    function payWithPaystack(pid, price, checkoutObj) {

        var handler = PaystackPop.setup({
            key: 'pk_test_2ae6f4d367d1966aef717a01edf9623d51143db2',
            email: checkoutObj.email, //'customer@email.com',
            amount: Number(price) * checkoutObj.quantity * 100, //10000,
            currency: "NGN",
            ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            metadata: {
                custom_fields: [
                    {
                        display_name: "Mobile Number",
                        variable_name: "mobile_number",
                        value: "+2348065899144"
                    }
                ]
            },
            callback: function (response) {
                console.log('success. transaction ref is ' + response.reference);

                $.post('/order',
                    {
                        first_name: checkoutObj.first_name,
                        last_name: checkoutObj.last_name,
                        phone: checkoutObj.phone,
                        email: checkoutObj.email,
                        address: checkoutObj.address,
                        loc_govt: checkoutObj.loc_govt,
                        state: checkoutObj.state,
                        product_id: checkoutObj.product_id,
                        order_no: (Math.floor((Math.random() * 1000000000) + 1)),
                        price: pidprice[1],
                        quantity: checkoutObj.quantity,
                        total: Number(pidprice[1]) * checkoutObj.quantity
                    }).done(function (data) {
                        let result = JSON.parse(data);
                        // let result = data;
                        if (result.result == "success") {
                            $("#statusModal").modal();
                            $("#statusModalHtml").html("Order successful");
                        }
                        console.log(data);
                    }).fail(function (error) {
                        if (result.result == "success") {
                            $("#statusModal").modal();
                            $("#statusModalHtml").html("Error!");
                        }
                        console.error(error);
                    });

                //  $.post('/sendmail',
                //     {
                //       customerEmail: customerEmail,
                //       vendorEmail: 'alybaba2009@gmail.com',
                //       customer_id: customerId
                //     }).done(function (data) {
                //       console.log(data);
                //     }).fail(function (error) {
                //       console.error(error);
                //     });

                //   window.location.assign('tel:+2348065899144');
            },

            onClose: function () {
                console.log('window closed');
            }
        });
        handler.openIframe();
    }

    function makePayment(pid, price, checkoutObj) {

        FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
            tx_ref: '' + Math.floor((Math.random() * 1000000000) + 1), //"hooli-tx-1920bbtyt",
            amount: Number(price) * checkoutObj.quantity, //54600,
            currency: "NGN",
            country: "NG",
            payment_options: "card, mobilemoneyghana, ussd",
            redirect_url: window.location.origin + '/senior-cart?product_id=' + pidprice[0], // specified redirect URL "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: checkoutObj.email, //"user@gmail.com",
                phone_number: checkoutObj.phone, //"08102909304",
                name: checkoutObj.first_name + ' ' + checkoutObj.last_name //"yemi desola",
            },
            callback: function (data) {
                console.log(data);
            },
            onclose: function () {
                // close modal
            },
            customizations: {
                title: "SINIOCART",
                description: "Payment for items in cart",
                logo: "https://assets.piedpiper.com/logo.png",
            },
        });

        $.post('/order',
            {
                first_name: checkoutObj.first_name,
                last_name: checkoutObj.last_name,
                phone: checkoutObj.phone,
                email: checkoutObj.email,
                address: checkoutObj.address,
                loc_govt: checkoutObj.loc_govt,
                state: checkoutObj.state,
                product_id: checkoutObj.product_id,
                order_no: (Math.floor((Math.random() * 1000000000) + 1)),
                price: pidprice[1],
                quantity: checkoutObj.quantity,
                total: Number(pidprice[1]) * checkoutObj.quantity
            }).done(function (data) {
                let result = JSON.parse(data);
                // let result = data;
                if (result.result == "success") {
                    //   $("#statusModal").modal();
                    //   $("#statusModalHtml").html("Order successful"); 
                    console.log(result.result);
                }
                console.log(data);
            }).fail(function (error) {
                if (result.result == "success") {
                    $("#statusModal").modal();
                    $("#statusModalHtml").html("Error!");
                }
                console.error(error);
            });
    }
})
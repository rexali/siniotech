$(function () {


    window.showProductPicture = function (evt) {
        let objUrl;
        try {
            objUrl = URL.createObjectURL(evt.target.files[0]);
        } catch (error) { console.log(error) }
        console.log(objUrl);
        $("#productPicture").attr({ "src": objUrl, "width": "100px", "height": "100px" });
        $("#productPicture").css({ "display": "block", "margin": "auto" });
    }

    function uploadProductPicture() {
        let vehObj;
        let formData = new FormData();
        formData.append('product_picture', $('#product_picture')[0].files[0]);
        $("#productPictureResult").innerHTML = "Checking data...";
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                vehObj = JSON.parse(this.responseText);
                $("#productPictureResult").html(vehObj.result);
            }
        };
        xmlhttp.responseType = '';
        xmlhttp.open("POST", "/product_picture", true);
        xmlhttp.send(formData);
    }


    $("#addProductForm").submit(function (event) {
        // alert("welcome")
        event.preventDefault();
        let addProductForm = $(this);
        let vendor_id = Number($('#vendor_id').text());
        let productName = addProductForm.find('input[name=product_name]').val();
        // let productPicture = addProductForm.find('input[name=product_picture]').val();
        let productPicture = ($('#product_picture')[0].files)[0].name;
        let productCategory = addProductForm.find('input[name=product_category]').val();
        let productSubCategory = addProductForm.find('input[name=product_sub_category]').val();
        let productDescription = addProductForm.find('textarea[name=product_description]').val();
        let productPrice = addProductForm.find('input[name=product_price]').val();
        let productQuantity = addProductForm.find('input[name=product_quantity]').val();
        let productWeight = addProductForm.find('input[name=product_weight]').val();
        let productSize = addProductForm.find('input[name=product_size]').val();

        let productObj = {
            //   vendor_id: vendor_id,
            product_name: productName,
            product_picture: productPicture,
            product_category: productCategory,
            product_sub_category: productSubCategory,
            product_description: productDescription,
            product_price: productPrice,
            product_quantity: productQuantity,
            product_size: productSize,
            product_weight: productWeight
        }

        $.post("/add_product", productObj).done(function (data) {
            console.log(data);
            if (data.result == "success") {
                uploadProductPicture();
                $("#statusModal").modal();
                $("#statusModalHtml").html("Success");
                $("#addProductResultS").html(data.result);
            }

        }).fail(function (error) {
            console.warn(error);
            $("#statusModal").modal();
            $("#statusModalHtml").html("Error!");
            $("#addProductResultF").html('Error!');
        });

    });


    $("#addProductForm2").submit(function (event) {
        event.preventDefault();
        let addProductForm = $(this);
        // let vendor_id = Number($('#vendor_id').text());
        // let businessName = addProductForm.find('input[name=business_name]').val();
        let productName = addProductForm.find('input[name=product_name]').val();
        // let productPicture = addProductForm.find('input[name=product_picture]').val();
        let product_picture = $('#product_picture2')[0].files;
        // let productVideo = ($('#product_video')[0].files)[0].name;
        let productVideo = addProductForm.find('input[name=product_video]').val();
        // let productCategory = addProductForm.find('select[name=product_category]').val();
        let productCategory = addProductForm.find('input[name=product_category]').val();
        // let productSubcategory = addProductForm.find('select[name=product_sub_category]').val();
        let productSubcategory = addProductForm.find('input[name=product_sub_category]').val();
        let productFeature = addProductForm.find('textarea[name=product_feature]').val();
        let productDescription = addProductForm.find('textarea[name=product_description]').val();
        let productPackage = addProductForm.find('input[name=product_package]').val();
        let productColour = addProductForm.find('input[name=product_colour]').val();
        let productModel = addProductForm.find('input[name=product_model]').val();
        let productQuantity = addProductForm.find('input[name=product_quantity]').val();
        let productSize = addProductForm.find('input[name=product_size]').val();
        let productWeight = addProductForm.find('input[name=product_weight]').val();
        let productPrice = addProductForm.find('input[name=product_price]').val();
        let productShipping = addProductForm.find('input[name=product_shipping]').val();
        let productWarranty = addProductForm.find('input[name=product_warranty]').val();
        let productReturn = addProductForm.find('textarea[name=product_return]').val();
        let productSeller = addProductForm.find('input[name=product_seller]').val();
        let productPhone = addProductForm.find('input[name=product_phone]').val();
        let productEmail = addProductForm.find('input[name=product_email]').val();
        // let productReview = addProductForm.find('input[name=product_review]').val();
        let product_review = $('#product_review')[0].files;

        let productPicture = '';
        if (product_picture.length > 0) {
            for (let i = 0; i < product_picture.length; i++) {
                var fileName = product_picture[i].name;
                productPicture += ';' + fileName;
            }
        }


        let productReview = '';
        if (product_review.length > 0) {
            for (let i = 0; i < product_review.length; i++) {
                var fileName = product_review[i].name;
                productReview += ';' + fileName;
            }
        }

        let productObj = {
            //   vendor_id: vendor_id,
            //   businessName:businessName,
            productName: productName,
            productPicture: productPicture,
            productVideo: productVideo,
            productCategory: productCategory,
            productSubcategory: productSubcategory,
            productFeature: productFeature,
            productDescription: productDescription,
            productPackage: productPackage,
            productColour: productColour,
            productModel: productModel,
            productQuantity: productQuantity,
            productSize: productSize,
            productWeight: productWeight,
            productPrice: productPrice,
            productShipping: productShipping,
            productWarranty: productWarranty,
            productReturn: productReturn,
            productSeller: productSeller,
            productPhone: productPhone,
            productEmail: productEmail,
            productReview: productReview
        };

        console.log(productObj)

        $.post("/add_product", productObj).done(function (data) {
            let newData = JSON.parse(data);
            if (newData.result == "success") {
                console.log(newData);
                //   upload video file
                //  uploadProductVideo();
                //  upload pictures' files
                getFiles();
                //  upload review pictures or screenshots
                getReviewFiles();
                $("#newProductResultSuccess").html(data.result);
                $("#statusModal").modal();
                $("#statusModalHtml").html(`Success <br><hr> Copy this link below for your promotion <br><hr>: ${window.location.origin + '/senior-cart?product_id=' + newData.last_id}`);
                //   ${window.location.origin + '/senior-cart?product_id=' + product.product_id}
            } else {
                alert("Error!");
            }

        }).fail(function (error) {
            console.warn(error);
            $("#newProductResultFailure").html(data.result);
            $("#statusModal").modal();
            $("#statusModalHtml").html("Error!");
        });

    });




    window.showProductPictures = function (evt) {
        let objUrl;
        var items = evt.target.files;
        var lg = evt.target.files.length;
        var frg = "";
        let img = "";
        var images = '';
        // let list = $("<ul class='list-group mb-1'></ul>");
        if (lg > 0) {
            for (let i = 0; i < lg; i++) {
                var fileName = items[i].name;
                var fileSize = items[i].size;
                var fileType = items[i].type;
                // frg += "<li class='list-group-item'>" + fileName + '<br>' + fileSize + '<br>' + fileType + "</li>";
                frg += "<li class='list-group-item'>" + fileName + "</li>";
                img += "<img src='" + URL.createObjectURL(evt.target.files[i]) + "' width='50px' height='50px' style='display:blockd; margin:autod;' class='mr-1'>";
            }
            //   list.append(frg);

            //   $("#imageList").html(list);

            $("#productPictures").append(img);

            for (let i = 0; i < lg; i++) {
                var fileName = items[i].name;
                images += ',' + fileName;
            }

        }

        console.log(images);

    }


    window.showProductReviewPictures = function (evt) {
        let objUrl;
        var items = evt.target.files;
        var lg = evt.target.files.length;
        var frg = "";
        let img = "";
        var images = '';
        if (lg > 0) {
            for (let i = 0; i < lg; i++) {
                var fileName = items[i].name;
                var fileSize = items[i].size;
                var fileType = items[i].type;
                frg += "<li class='list-group-item'>" + fileName + "</li>";
                img += "<img src='" + URL.createObjectURL(evt.target.files[i]) + "' width='50px' height='50px' style='display:blockd; margin:autod;' class='mr-1'>";
            }

            $("#productReview").append(img);

            for (let i = 0; i < lg; i++) {
                var fileName = items[i].name;
                images += ',' + fileName;
            }

        }

    }


    function getReviewFiles() {
        var fileList = [];
        var files = $('#product_review')[0].files;
        for (let i = 0; i < files.length; i++) {
            fileList.push(files[i])
        }
        console.log(fileList);
        fileList.forEach(file => {
            sendFile(file);
        });
    }


    window.showProductVideo = function (evt) {
        let objUrl;
        try {
            objUrl = URL.createObjectURL(evt.target.files[0]);
        } catch (error) { console.log(error) }
        console.log(objUrl);
        $("#productVideo").attr({ "src": objUrl });
    }


    function getFiles() {
        var fileList = [];
        var files = $('#product_picture2')[0].files;
        for (let i = 0; i < files.length; i++) {
            fileList.push(files[i])
        }
        console.log(fileList);
        fileList.forEach(file => {
            sendFile(file);
        });
        // sendFile();
    }

    window.sendFile = function (file) {
        var formData = new FormData();
        formData.append('product_picture', file);
        var request = new XMLHttpRequest();
        // formData.set('file', file);
        request.open("POST", "/product_picture", true);
        request.send(formData);
    }



    function uploadProductVideo() {
        console.log('uploading...');
        let vehObj;
        let formData = new FormData();
        formData.append('file', $('#product_video')[0].files[0]);
        $("#productVideoResult").innerHTML = "Checking data...";
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                vehObj = JSON.parse(this.responseText);
                $("#productVideoResult").html(vehObj.result);
            }
        };
        xmlhttp.responseType = '';
        xmlhttp.open("POST", "/product_video", true);
        xmlhttp.send(formData);
    }


})
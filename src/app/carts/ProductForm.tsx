import Image from "next/image";

export default function ProductForm() {

    function showProductPictures(event: Event | undefined) {
        throw new Error("Function not implemented.");
    }


    function showProductPicture(event: Event | undefined) {
        throw new Error("Function not implemented.");
    }

    function showProductReviewPictures(event: any): void {
        throw new Error("Function not implemented.");
    }

    return (
        <main><nav className="navbar navbar-expand-md navbar-dark fixed-top bg-success">
            <a data-toggle="offcanvas"><i className="fa fa-bars text-white d-md-none"></i></a>
            <a href="/" className="navbar-brand text-white">SINIOCART</a>
            <a href="/" className="text-white d-md-none">Home</a>

            <div className="collapse navbar-collapse" id="navbarCollapse">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="/">Home</a>
                    </li>
                </ul>
            </div>
        </nav>
        
        <main className="container mt-5"><br />
                {/* <!-- Nav tabs --> */}
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#addProduct">Add a product</a>
                    </li>
                </ul>

                {/* <!-- Tab panes --> */}
                <div className="tab-content">
                    <div className="tab-pane active container mt-5" id="addProduct">

                        <form name="addProductForm" id="addProductForm">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="product_name" id="product_name" placeholder="product name"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <Image src="" width={150} height={150} alt="pic" className="rounded img-fluid d-block mx-auto" />
                                        <label htmlFor="picture">Choose or take picture</label>
                                        <input type="file" name="product_picture" id="product_picture" accept="images/*"
                                            className="form-control rounded" onChange={(event: any) => showProductPicture(event)} required />
                                        <span id="productPictureResult"></span>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="product_category" id="product_category" placeholder="product category"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="product_sub_category" id="product_sub_category" placeholder="product sub-category"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea name="product_description" id="product_description" cols={30} rows={5} maxLength={100}
                                            placeholder="detail or description of product" className="form-control rounded"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="number" name="product_quantity" id="product_quantity" placeholder="product quantity"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="number" name="product_price" id="product_price" placeholder="product price"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="tel" name="product_weight" id="product_weight" placeholder="product weight of a unit"
                                            className="form-control rounded" required />
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="product_size" id="product_size" placeholder="product's size"
                                            className="form-control rounded" required />
                                    </div>
                                </div>



                                <div className="col-12 col-md-12 text-center">
                                    <div className="form-group">
                                        <span id="addProductResultS" className="bg-success text-white"></span>
                                        <span id="addProductResultF" className="bg-danger text-white"></span>
                                        <input type="submit" value="Add" className="btn btn-outline-success btn-block" />

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                    {/* <!--second tab--> */}

                    <div className="tab-pane fade container mt-5" id="test">
                        <form name="addProductForm2" id="addProductForm2">

                            <div className="row">

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="">Product Name</label>
                                        <input type="text" name="product_name" placeholder="product name"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <span id="productPictures" className="d-block"></span>
                                        <label htmlFor="picture">Select all products&apos; pictures at once</label>
                                        <input type="file" name="product_picture" id="product_picture2" accept="images/*"
                                            className="form-control rounded" onChange={(event: any) => showProductPictures(event)} required multiple />
                                        <span id="productPictureResult"></span>
                                    </div>
                                </div>

                                <div className="col-md-6">

                                    <div className="form-group">

                                        <label htmlFor="video">Copy the uploaded product&apos;s Youtube video link</label>
                                        <input type="text" name="product_video" className="form-control rounded" placeholder="Paste the product's video link here" required />




                                    </div>
                                </div>



                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="cat">Product category</label>
                                        <input type="text" name="product_category" placeholder="product category"
                                            className="form-control rounded" required />

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="sub-cat">Sub-category</label>
                                        <input type="text" name="product_sub_category" placeholder="product sub-category"
                                            className="form-control rounded" required />

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="feature">Product&apos;s key Feature</label>
                                        <textarea name="product_feature" cols={30} maxLength={50000}
                                            placeholder="copy and paste product features and benefits especially" className="form-control rounded"></textarea>
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="text">Product description</label>
                                        <textarea name="product_description" cols={30} maxLength={50000}
                                            placeholder="copy and paste product detail description" className="form-control rounded"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="package">Product&apos;s package?</label>
                                        <input type="text" name="product_package"
                                            placeholder="What is in the box or package?" className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="color">Product&apos;s Colour</label>
                                        <input type="text" name="product_colour" placeholder="product colour"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="model">Model or Version</label>
                                        <input type="text" name="product_model" placeholder="product model or version"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="qty">Quantity</label>
                                        <input type="number" name="product_quantity" placeholder="product quantity"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="price">Price per unit</label>
                                        <input type="number" name="product_price" placeholder="product price"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="weight">Weight (in KG)</label>
                                        <input type="tel" name="product_weight" placeholder="product weight of a unit"
                                            className="form-control rounded" required />
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="size">Product size (in mm or cm or m)</label>
                                        <input type="text" name="product_size" placeholder="product's size"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="size">Shipping fee</label>
                                        <input type="number" name="product_shipping" placeholder="shipping fee you are charging"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="size">Warranty</label>
                                        <input type="text" name="product_warranty"
                                            placeholder="product's warranty here" className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="size">Delivery and Return policy</label>
                                        <textarea name="product_return" placeholder="product's delivery & return policy" className="form-control rounded" required></textarea>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="size">Seller full Name</label>
                                        <input type="text" name="product_seller" placeholder="product's seller"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="size">Whatsapp Number</label>
                                        <input type="text" name="product_phone" placeholder="phone number"
                                            className="form-control rounded" required />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="size">Email</label>
                                        <input type="text" name="product_email" placeholder="email address"
                                            className="form-control rounded" required />
                                    </div>
                                </div>


                                <div className="col-md-6">
                                    <div className="form-group">
                                        <span id="productReview" className="d-block"></span>
                                        <label htmlFor="picture">Select all your products&apos;reviews screenshots <span className="fa fa-question-circle pull-right" title="Screenshot your customers reviews after using your service or product and upload here"></span></label>
                                        <input type="file" name="product_review" id="product_review" accept="images/*"
                                            className="form-control rounded" onChange={(event: any) => showProductReviewPictures(event)} required multiple />
                                        <span id="productReviewResult"></span>
                                    </div>
                                </div>



                                <div className="col-12 col-md-12 text-center">
                                    <div className="form-group">
                                        <input type="submit" value="Add" className="btn btn-outline-success btn-block" />
                                        <span id="newProductResultSuccess" className="bg-success text-white"></span>
                                        <span id="newProductResultFailure" className="bg-danger text-white"></span>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </main></main>
    )
}
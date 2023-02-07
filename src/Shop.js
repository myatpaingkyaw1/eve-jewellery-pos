
function Shop() {
  return (
    <div className="shop-container"> 
        <section class="page-header">
            <div class="overlay"></div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="content text-center">
                                <h1 class="mb-3">Shop</h1>
                                <p>Hath after appear tree great fruitful green dominion moveth sixth abundantly image that midst of god day multiply you’ll which</p>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb bg-transparent justify-content-center">
                                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                                        <li class="breadcrumb-item active" aria-current="page">Shop</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <section class="products-shop section">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="row align-items-center">
                            <div class="col-lg-12 mb-4 mb-lg-0">
                                <div class="section-title">
                                    <h2 class="d-block text-left-sm">Shop</h2>
                                    <div class="heading d-flex justify-content-between mb-5">
                                        <p class="result-count mb-0">Showing 1-6 of 17 results</p>
                                        <form class="ordering" method="get">
                                            <select name="orderby" class="orderby form-control" aria-label="Shop order">
                                                <option value="" selected="selected">Default sorting</option>
                                                <option value="">Sort by popularity</option>
                                                <option value="">Sort by average rating</option>
                                                <option value="">Sort by latest</option>
                                                <option value="">Sort by price: low to high</option>
                                                <option value="">Sort by price: high to low</option>
                                            </select>
                                            <input type="hidden" name="paged" value="1" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-12  col-md-6 col-sm-6 mb-5">
                                <div class="product">
                                    <div class="product-wrap">
                                        <a href="/product-single"><img class="img-fluid w-100 mb-3 img-first" src="assets/images/322.jpg" alt="product-img" /></a>
                                        <a href="/product-single"><img class="img-fluid w-100 mb-3 img-second" src="assets/images/444.jpg" alt="product-img" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default Shop;
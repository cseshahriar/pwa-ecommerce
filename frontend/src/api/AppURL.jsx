class AppURL {
    // base url
    static BaseURL = "http://127.0.0.1:8000/api"
    
    // visitor
    static VisitorDetails = this.BaseURL + "/visitor/create"
    
    // contact
    static createContact = this.BaseURL + "/contact/create"
    
    // site info
    static getSiteInfo = this.BaseURL + "/site-info"
    
    // category
    static getCategories = this.BaseURL + "/categories"

    // product
    static getProductByRemark(remark){
        return `${this.BaseURL}/products/remark/${remark}`
    }
    
    static getProductByCategory(category) {
        return `${this.BaseURL}/products/category/${category}`
    }

    static getProductBySubCategory(category, subcategory) {
        return `${this.BaseURL}/products/subcategory/${category}/${subcategory}`
    }

    // sliders
    static getHomeSliders = this.BaseURL + "/sliders/home"

    // product details
    static getProductDetails(id) {
        return `${this.BaseURL}/product_details/${id}`
    }

    // product by search
    static ProductBySearch(searchKey) {
        return `${this.BaseURL}/search/${searchKey}`
    }

    static getNotifications = this.BaseURL + "/notifications"
}

export default AppURL
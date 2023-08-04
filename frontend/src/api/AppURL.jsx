class AppURL {
    static BaseURL = "http://127.0.0.1:8000/api"
    static VisitorDetails = this.BaseURL + "/visitor/create"
    static createContact = this.BaseURL + "/contact/create"
    static getSiteInfo = this.BaseURL + "/site-info"
    static getCategories = this.BaseURL + "/categories"
}

export default AppURL
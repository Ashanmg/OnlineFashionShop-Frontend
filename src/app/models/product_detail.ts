export class ProductDetail {
    allowCustomerReview: number;
        approvedRatingSum: number;
        approvedTotalReview: number;
        createdOnUTC: string;
        id: number;
        manufacturer: any;
        manufacturerId: number;
        name: string;
        picture: any;
        pictureId: number;
        price: number;
        productType: any;
        productTypeId: number;
        shortDescription: string;
        showOnCategoryPage: number;
        taxIncluded: number;
    constructor(
        allowCustomerReview: number,
        approvedRatingSum: number,
        approvedTotalReview: number,
        createdOnUTC: string,
        id: number,
        manufacturer: any,
        manufacturerId: number,
        name: string,
        picture: any,
        pictureId: number,
        price: number,
        productType: any,
        productTypeId: number,
        shortDescription: string,
        showOnCategoryPage: number,
        taxIncluded: number
    ) {
        this.allowCustomerReview = allowCustomerReview;
        this.approvedRatingSum = approvedRatingSum;
        this.approvedTotalReview = approvedTotalReview;
        this.createdOnUTC = createdOnUTC;
        this.id = id;
        this.manufacturer = manufacturer;
        this.manufacturerId = manufacturerId;
        this.name = name;
        this.picture = picture;
        this.pictureId = pictureId;
        this.price = price;
        this.productType = productType;
        this.productTypeId = productTypeId;
        this.shortDescription = shortDescription;
        this.showOnCategoryPage = showOnCategoryPage;
        this.taxIncluded = taxIncluded;
    }
}


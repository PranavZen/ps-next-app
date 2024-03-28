"use client";
import "./productdetails.css";
import React from "react";
import { HiOutlineChevronLeft, HiChevronRight } from "react-icons/hi";
import ProductDataDisplay from "@/components/productcontent/ProductDataDisplay";
import ProductImageSlider from "@/components/syncslider/ProductImageSlider";
import dummyProducts from "@/components/Data/dummyProducts";
import YouMayLikeSlider from "@/components/youmaylike/YouMayLikeSlider";
import CommonProductModal from "@/components/ShopSection/CommonProductModal/CommonProductModal";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const images = [
  {
    src: "https://media.istockphoto.com/id/1404885250/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas.jpg?s=2048x2048&w=is&k=20&c=Su2wYszfDTThmt7AcCA5OHfGcqFVBxy73W-5YtemT28=",
    alt: "Image 1",
  },
  {
    src: "https://media.istockphoto.com/id/1404885162/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas.jpg?s=2048x2048&w=is&k=20&c=phfQJIw7VF-HjB3YYCCKvVg0LIHoEp6DI4HPRWrpbnk=",
    alt: "Image 2",
  },
  {
    src: "https://media.istockphoto.com/id/510682838/photo/the-dance-competition.jpg?s=2048x2048&w=is&k=20&c=EmqQUXumenXjCAvJzoVi9g3SCwL18p2MnK317Rd8rQ0=",
    alt: "Image 3",
  },
  {
    src: "https://media.istockphoto.com/id/1404885250/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas.jpg?s=2048x2048&w=is&k=20&c=Su2wYszfDTThmt7AcCA5OHfGcqFVBxy73W-5YtemT28=",
    alt: "Image 1",
  },
  {
    src: "https://media.istockphoto.com/id/1404885162/photo/mahabaleshwar-and-panchagani-nature-and-hill-areas.jpg?s=2048x2048&w=is&k=20&c=phfQJIw7VF-HjB3YYCCKvVg0LIHoEp6DI4HPRWrpbnk=",
    alt: "Image 2",
  },
  {
    src: "https://media.istockphoto.com/id/510682838/photo/the-dance-competition.jpg?s=2048x2048&w=is&k=20&c=EmqQUXumenXjCAvJzoVi9g3SCwL18p2MnK317Rd8rQ0=",
    alt: "Image 3",
  },
];

function ProductDetails({ params }) {

  const formattedSlug = params.slug.replace(/%20/g, " ");
  const category = findCategoryBySlug(formattedSlug);

  const productToDisplay = findProductByNameAndCategory(
    formattedSlug,
    category
  );

  function findCategoryBySlug(formattedSlug) {
    for (const category of dummyProducts.categories) {
      for (const product of category.products) {
        if (product.title === formattedSlug) {
          return category.category_title;
        }
      }
    }
    return "Category not found";
  }
  
  function findProductByNameAndCategory(formattedSlug, category) {
    const foundCategory = dummyProducts.categories.find(
      (cat) => cat.category_title === category
    );
    if (foundCategory) {
      const foundProduct = foundCategory.products.find(
        (product) => product.title === formattedSlug
      );
      if (foundProduct) {
        return foundProduct;
      }
    }
    return null;
  }

  const { productModalVisible } = useSelector((store) => store.productModal);

  const router = useRouter();

  return (
    <section className="innerPage">
      {productModalVisible && <CommonProductModal />}
      <div className="container-fluid customWidth">
        <div className="breadCrumWrap">
          <button className="backBtn btn" onClick={() => { router.back()}} >
            <span>
              <HiOutlineChevronLeft />
            </span>
            Back
          </button>
          <div className="pagePathWrap">
            <span>Home</span>
            <span>
              <HiChevronRight />
            </span>
            <span>{category}</span>
            <span>
              <HiChevronRight />
            </span>
            <span>{formattedSlug}</span>
          </div>
        </div>
        <div className="whiteWrap px-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <ProductImageSlider images={images} />
            </div>
            <div className="col-md-6">
              <ProductDataDisplay productData={productToDisplay} />
            </div>
          </div>
        </div>
        <YouMayLikeSlider />
      </div>
    </section>
  );
}

export default ProductDetails;

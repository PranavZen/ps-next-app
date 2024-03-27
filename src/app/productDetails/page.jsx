import Slider from "@/components/syncslider/Slider";
import '../productDetails/productdetails.css'
import "../../components/syncslider/slider.css";
import React from "react";
import Link from "next/link";
import { HiOutlineChevronLeft, HiChevronRight } from "react-icons/hi";
import ProductDataDisplay from "@/components/productcontent/ProductDataDisplay";
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

function ProductDetails() {
  return (
    <section className="innerPage">
      <div className="container-fluid customWidth">
        <div className="breadCrumWrap">
          <Link href="/" className="backBtn btn">
            <span>
            <HiOutlineChevronLeft />
            </span>
            Back
          </Link>
          <div className="pagePathWrap">
            <span>Home</span>
            <span>
              <HiChevronRight />
            </span>
            <span>Sweets</span>
            <span>
              <HiChevronRight />
            </span>
            <span>Khajoor Dry Fruit Barfi</span>
          </div>
        </div>
        <div className="whiteWrap px-5 py-5">
          <div className="row">
            <div className="col-md-6">
              <Slider images={images} />
            </div>
            <div className="col-md-6">
              <ProductDataDisplay/>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default ProductDetails;

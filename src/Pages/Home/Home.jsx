import React from 'react'
import Navbar from './Navbar'
import Slideshow from './Slideshow'
import Category from './Category'
import Product from './Product'
const products = [
    {
      name: 'Product 1',
      image: "./Images/slides1.jpg",
      price: '29.99',
      category : "Action",
    },
    {
      name: 'Product 2',
      image: "./Images/slides2.jpg",
      price: '39.99',
      category : "Racing",
    },
    {
      name: 'Product 3',
      image: "./Images/slides3.jpg",
      price: '49.99',
      category : "Action",
    },
    {
      name: 'Product 3',
      image: "./Images/slides4.jpg",
      price: '49.99',
      category : "Sport",
    },
    {
      name: 'Product 3',
      image: "./Images/slides4.jpg",
      price: '49.99',
      category : "Card",
    },
    {
      name: 'Product 3',
      image: "./Images/slides4.jpg",
      price: '49.99',
      category : "Adventure",
    },
    {
      name: 'Product 3',
      image: "./Images/slides4.jpg",
      price: '49.99',
      category : "Action",
    },
    {
      name: 'Product 3',
      image: "./Images/slides4.jpg",
      price: '49.99',
      category : "Action",
    },
    {
      name: 'Product 3',
      image: "./Images/slides4.jpg",
      price: '49.99',
      category : "Adventure",
    },
    
  ];
  
function Home() {
  return (
    <>
    <Navbar/>
    <Slideshow/>
    <Category/>
    {/* <Product/> */}
    <div className="container flex justify-center flex-wrap gap-6 p-6">
      {products.map((product, index) => (
        <Product key={index} product={product}  />
      ))}
    </div>
    </>
  )
}

export default Home
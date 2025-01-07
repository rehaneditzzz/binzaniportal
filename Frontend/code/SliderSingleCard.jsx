// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const SliderSingleCard = () => {

//   const cardsData = [
//     { id: 1, title: "Card 1", description: "This is the first card." },
//     { id: 2, title: "Card 2", description: "This is the second card." },
//     { id: 3, title: "Card 3", description: "This is the third card." },
//     { id: 4, title: "Card 4", description: "This is the fourth card." },
//     { id: 5, title: "Card 5", description: "This is the fifth card." },
//     { id: 6, title: "Card 6", description: "This is the sixth card." },
//   ];


//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="w-full px-4 py-8">
//       <Slider {...settings}>
//         {cardsData.map((card) => (
//           <div key={card.id} className="p-4">
//             <div className="bg-gray-200 p-6 rounded-lg shadow-md text-center">
//               <h3 className="text-lg font-semibold">{card.title}</h3>
//               <p className="mt-2 text-gray-600">{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default SliderSingleCard;
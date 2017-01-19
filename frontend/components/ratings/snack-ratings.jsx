// import React from 'react';
// import SnackRatingsItem from './snack_ratings_item';
//
// class SnackRatings extends React.Component {
//
//   constructor(props) {
//     super(props);
//     // console.log(this.props);
//   }
//
//   // componentDidMount() {
//   //   this.props.requestSnackRatings(this.props.id);
//   // }
//
//   render() {
//     const ratings = this.props.ratings;
//     console.log(ratings);
//     if (ratings) {
//       return (
//         <div className="snack-rating-index">
//           <div className="snack-rating-container">
//             {ratings.map(rating => <SnackRatingItem key={rating.id} rating={rating} />)}
//           </div>
//         </div>
//       );
//     } else {
//       return <div></div>;
//     }
//   }
// }
//
// export default SnackRatings;

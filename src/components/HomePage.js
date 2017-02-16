import $ from "jquery";
import React from 'react';
import LetterStyle from '../components/LetterStyle';
import { Link } from 'react-router';




//Home page component. This serves as the welcome page with link to the library
const HomePage = () => {
  return (

    <div className="jumbotron center">
      <LetterStyle>
          WELCOME TO MEDIA LIBRARY BUILT WITH REACT, REDUX, AND REDUX-SAGA
      </LetterStyle>
      <div>
        <Link to="library">
          <button className="btn btn-lg btn-primary">Visit Library</button>
        </Link>
      </div>
    </div>
  );

}







export default HomePage;

import React from 'react';
import "./AddCards.css";
import trending_section from "../../../assets/MovieRadar-Trendinf_Section.png";
import search_section from "../../../assets/MovieRadar-Search_SectionIMG.png";
import responsive_section from "../../../assets/MovieRadar-Responsive_Sect-2.png";
import detail_section from "../../../assets/MovieRadar-Detail_Section.png";

const AddCards = () => {

    const frameCards = [
    {
      image: trending_section,
      title: "Stay Updated With Trending Movies",
      description: "Discover what’s popular in the movie world with real-time ratings, release details, and trending titles."
    },
    {
      image: search_section,
      title: "Search & Explore Movies Easily",
      description: "Find detailed movie information instantly including storylines, cast, genres, and audience ratings."
    },
    {
      image: responsive_section,
      title: "Built For Every Device",
      description: "Browse movie details smoothly across desktop, tablet, and mobile with a clean responsive design."
    },
    {
      image: detail_section,
      title: "Get Detailed Movie Insights",
      description: "View storylines, ratings, release date, revenue, and more in one place."
    }
  ]; 

  return (
    <div>
        <div className="addCardsMain">
        {frameCards.map((item) => (
            <div className="addCard" key={item}>
              <div className="addCrdData">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>

              <div className="addImage">
                <img src={item.image} alt="" />
              </div>
            </div>  
        ))
        }
      </div>
    </div>
  )
}

export default AddCards
import React from 'react';
import "./AddCards.css";

const AddCards = () => {

    const frameCards = [
    {
      image: "https://www.flatpanelshd.com/pictures/MZnkkQ.gif",
      title: "Enjoy on your TV",
      description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,Blu-ray players and more."
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0516/3761/6830/articles/downloading-netflix-movies-on-tablet_6418c98f-e30f-463c-a1a2-e88f1b9bda21.jpg?v=1768461857",
      title: "Download your shows",
      description: "Save your favourites easily and always have something to watch."
    },
    {
      image: "https://i.pinimg.com/originals/86/bd/10/86bd10cd84b3c90bd759c2c50417086e.gif",
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    },
    {
      image: "https://uploads-ssl.webflow.com/628e0fe9a6929e74a5b07735/628e408f623bf975fa17d1dc_kids.png",
      title: "Create profiles for kids",
      description: "Send children on adventures with their favourite characters in a space made just for them."
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
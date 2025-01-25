import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";


// Define the type for a single card
interface Card {
  id: number;
  image: string;
  time: string;
  type: string;
  text: string;
}

const Content: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]); // State with type annotation

  useEffect(() => {
    // Fetch the JSON data
    fetch("/news.json")
      .then((response) => response.json())
      .then((news: Card[]) => setCards(news)) // Explicitly type the fetched data
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="all-content">
    <div className="top-content">

    <div className="with-bg-image">
        <img className="bg-image" src="/gaza.jpg"></img>
        <div className="text"><p >غزة: عودة النازحين الى بيوتهم</p>
        </div>
    </div>
    <div className='reddiv'>
      {cards.map((news) => (
        <div className="news-card" key={news.id}>
            <div className="news-content">
          <img
          className="news-image"
            src={news.image}
            alt={news.text}/>
          <div className="news-texts">
            <div className="top-text">
          <span >{news.time}</span> | <span >{news.type}</span>
          
          </div>
          <span style={{ marginTop: "8px" }}>{news.text}</span>
          </div>
        </div>
        <div className="actions">
        0<FontAwesomeIcon icon={faThumbsUp}  className="icon" />
        0<FontAwesomeIcon icon={faThumbsDown} className="icon" />
        |<FontAwesomeIcon icon={faShare} className="icon" />
        |<FontAwesomeIcon icon={faBookmark} className="icon" />
        </div>
        </div>
      ))}
    </div>
    </div>

    <div className="middle-content">
    <button className="scroll-button left" onClick={scrollLeft}>
        &lt;
      </button>
      <div className="scrollable-wrapper" ref={scrollContainerRef}>
    <div className="with-bg-image">
        <img className="bg-image" src="/gold.jpg"></img>
        <div className="text"><p > الذهب: ارتفاع اسعار الذهب يؤدي الى ارتفاع اسعار باقي المعادن</p>
        </div>
    </div>
    <div className="with-bg-image">
        <img className="bg-image" src="/jordan.jpg"></img>
        <div className="text"><p >مجلس النواب: قوانين جديدة في مجلس النواب</p>
        </div>
    </div>
    <div className="with-bg-image">
        <img className="bg-image" src="/sport.jpg"></img>
        <div className="text"><p >الرياضة: فوز اللاعب الاردني في المركز الاول </p>
        </div>
    </div>
    <div className="with-bg-image">
        <img className="bg-image" src="/shop.jpg"></img>
        <div className="text"><p >الغذاء: ازدياد الطلب على المواد الغذائية قبل حلول شهر رمضان</p>
        </div>
    </div>
    <div className="with-bg-image">
        <img className="bg-image" src="/sport.jpg"></img>
        <div className="text"><p >الرياضة: فوز اللاعب الاردني في المركز الاول </p>
        </div>
    </div>
    <div className="with-bg-image">
        <img className="bg-image" src="/shop.jpg"></img>
        <div className="text"><p >الغذاء: ازدياد الطلب على المواد الغذائية قبل حلول شهر رمضان</p>
        </div>
    </div>
    </div>
    <button className="scroll-button right" onClick={scrollRight}>
        &gt;
      </button>
    </div>
    <div className="bottom-content">
    <div className='reddiv'>
      {cards.map((news) => (
        <div className="news-card" key={news.id}>
            <div className="news-content">
          <img
          className="news-image"
            src={news.image}
            alt={news.text}/>
          <div className="news-texts">
            <div className="top-text">
          <span >{news.time}</span> | <span >{news.type}</span>
          
          </div>
          <span style={{ marginTop: "8px" }}>{news.text}</span>
          </div>
        </div>
        <div className="actions">
        0<FontAwesomeIcon icon={faThumbsUp}  className="icon" />
        0<FontAwesomeIcon icon={faThumbsDown} className="icon" />
        |<FontAwesomeIcon icon={faShare} className="icon" />
        |<FontAwesomeIcon icon={faBookmark} className="icon" />
        </div>
        </div>
      ))}
    </div>
    <div className="middle-div">
    <div className="with-bg-image">
        <img className="bg-image" src="/shop.jpg"></img>
        <div className="text"><p >الغذاء: ازدياد الطلب على المواد الغذائية قبل حلول شهر رمضان</p>
        </div>
        <div className="actions">
        0<FontAwesomeIcon icon={faThumbsUp}  className="icon" />
        0<FontAwesomeIcon icon={faThumbsDown} className="icon" />
        |<FontAwesomeIcon icon={faShare} className="icon" />
        |<FontAwesomeIcon icon={faBookmark} className="icon" />
        </div>
    </div>
    <div className="with-bg-image">
        <img className="bg-image" src="/sport.jpg"></img>
        <div className="text"><p >الرياضة: فوز اللاعب الاردني في المركز الاول </p>
        </div>
        <div className="actions">
        0<FontAwesomeIcon icon={faThumbsUp}  className="icon" />
        0<FontAwesomeIcon icon={faThumbsDown} className="icon" />
        |<FontAwesomeIcon icon={faShare} className="icon" />
        |<FontAwesomeIcon icon={faBookmark} className="icon" />
        </div>
    </div>
    </div>
    <div className='reddiv'>
      {cards.map((news) => (
        <div className="news-card" key={news.id}>
            <div className="news-content">
          <img
          className="news-image"
            src={news.image}
            alt={news.text}/>
          <div className="news-texts">
            <div className="top-text">
          <span >{news.time}</span> | <span >{news.type}</span>
          
          </div>
          <span style={{ marginTop: "8px" }}>{news.text}</span>
          </div>
        </div>
        <div className="actions">
        0<FontAwesomeIcon icon={faThumbsUp}  className="icon" />
        0<FontAwesomeIcon icon={faThumbsDown} className="icon" />
        |<FontAwesomeIcon icon={faShare} className="icon" />
        |<FontAwesomeIcon icon={faBookmark} className="icon" />
        </div>
        </div>
      ))}
    </div>

    </div>
    </div>
    </>
  );
};

export default Content;

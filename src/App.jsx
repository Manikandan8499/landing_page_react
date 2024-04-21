import './App.css'
import Card from "./component/Card.jsx";
// import Header from './component/Header.jsx';
import image1 from './1st_img.png'; 
import image2 from './2nd_img.png'; 
import image3 from './3rd_img.png'; 

const cardData = [
  {
    type: "description",
    title: "Fully Responsive Design",
    description: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg",
  },
  {
    type: "description",
    title: "Updated For Bootstrap 5",
    description: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg",
  },
  {
    type: "description",
    title: "Easy to Use & Customize",
    description :"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg",
  },
];

const headerSection = [
  {
    description: "Generate more leads with a professional landing page!",
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg"
  },
];

const Header = ({description, image}) =>{
  const myStyle = {
  backgroundImage:
    `url(${image})`,
  height: "600px",
      width: '100vw',
    backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
};
  return ( 
      <>
      <div className="descript" style ={myStyle}>
      <h2 style={{width:"400px", height: "50px"}}>{description}</h2>
      <br></br>
      <input className="email" type="Email" placeholder="Email Address"></input>
      <button className="search-btn" style={{backgroundColor:"blue", color: "white", opacity: "0.5"}}> Submit </button>
      </div>
    </>
  );

};

const featureSection = [
  {
    title : "Fully Responsive",
    description : "This theme will look great on any device, no matter the size!",
    image: image1,
  },
  {
    title : "Bootstrap 5 Ready",
    description : "Featuring the latest build of the new Bootstrap 5 framework!",
    image: image2,
  },
  {
    title : "Easy to Use",
    description : "Ready to use with your own content, or customize the source files!",
    image: image3,
  },
];

const Features = ({title, description, image}) =>{

  return (
      <div className="cards">
           <img src={image} alt="image-1" />
           <h5>{title}</h5>
           <p>{description}</p>
      </div>
  );
};


const feedback = [
   {
      person_img: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
      person_name:"Margaret E.",
      person_feeback: `"This is fantastic! Thanks so much guys!"`,
   },
   {
      person_img: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
    person_name:"Fred S.",
    person_feeback: `"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`,
   },
   {
      person_img: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
    person_name:"Sarah W.",
    person_feeback: `"Thanks so much for making these free resources available to us!"`,
 },

];


const Feedback =( { person_img, person_name, person_feeback }) =>{

  return(
    <>
       <div className='feedback_box'>
        <img src={person_img} alt=""/>
        <h6>{person_name}</h6>
        <p>{person_feeback}</p>
       </div>
    </>
  );

};
const footerSection = [
  {
    description : "Ready to get started? Sign up now!",
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg"
  },

];
const Footer = ({description, image}) =>{
  const myStyle = {
    backgroundImage:
      `url(${image})`,
    height: "300px",
        width: '100vw',
      backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
  };
    return ( 
        <>
        <div className="descript" style ={myStyle}>
        <h2>{description}</h2>
        <input className="email" type="Email" placeholder="Email Address"></input>
        <button className="search-btn" style={{backgroundColor:"blue", color: "white", opacity: "0.5"}}> Submit </button>
        </div>
      </>
    );
};
function App() {
  return (
    <>
     <nav className="navbar navbar-light bg-light">
     <a className="navbar-brand" href="#">Start Bootstrap</a>
     <nav className="navbar navbar-light bg-light">
       <form className="form-inline">
       <button className="btn btn-outline-success my-2 my-sm-0" type="submit" style = {{backgroundColor: "blue", color : "white"}}>Sign Up</button>
       </form>
    </nav>
   </nav>
   <div>
      {headerSection.map((val) =>(
        <Header {...val} key={val.description}/>
      ))}
   </div>


   <div className="AllCards">
{featureSection.map((param)=>(
  <Features {...param} key={param.description} />
))}
</div>
    <div className="app">
{cardData.map((cd, index) => (
        <div className="row" key={index}>
          {index === 0 ? (
            <>
              <Card title={cd.title} description={cd.description}/>
              <Card image={cd.image}/>
            </>
          ) : (
            <>
              {index % 2 !== 0 ? (
                <>
                  <Card image={cd.image}/>
                  <Card title={cd.title} description={cd.description}/>
                </>
              ) : (
                <>
                  <Card title={cd.title} description={cd.description} />
                  <Card image={cd.image} />
                </>
              )}
            </>
          )}
        </div>

      ))}
      </div>
        <br></br>
        <br></br>
        <h2>What people are saying...</h2>
        <div className="feedback_div">
            {feedback.map((val)=>(
              <Feedback {...val} key={val.person_name}/>
            ))}

        </div>






      <div>
      {footerSection.map((val) =>(
        <Footer {...val} key={val.description}/>
      ))}
   </div>

    <br></br>
<br></br>
   <div className="footer">
    <div className='links'>
       <a href="About">About</a>
       <a href="Contact">Contact</a>
       <a href="Terms of Use">Terms of Use</a>
       <a href="Privacy Policy">Privacy Policy</a>
       </div>
       <br></br>
       <p className='copyright'>© Your Website 2023. All Rights Reserved.</p>
       <div className='icons'>
       <i className="fa-brands fa-facebook"></i>
       <i className="fa-brands fa-twitter"></i>
       <i className="fa-brands fa-instagram"></i>
       </div>
   </div>
    </>
  );
}

export default App

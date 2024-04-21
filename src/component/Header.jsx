

const Header = ({description, image}) =>{
    const myStyle = {
		backgroundImage:
			`url(${image})`,
		height: "700px",
        width: '100vw',
		  backgroundSize: 'cover',
		 backgroundRepeat: 'no-repeat',
	};
    return ( 
        <>
        <div className="descript" style ={myStyle}>
        <h2>{description}</h2>
        <input className="email" type="Email" placeholder="Email Address"></input>
        <button className="search-btn"> Submit </button>
        </div>
      </>
    );

  };

  export default Header;
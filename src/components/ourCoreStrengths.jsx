
const ourStrengths = () => {
  return (
    <div className="App">
      <h1>Our Core Strengths</h1>
      <div className="strengths">
        <Strength 
          number="700+" 
          title="Global University Tie Ups" 
          description="We have tie-ups with over 700 universities worldwide."
        />
        <Strength 
          number="65+" 
          title="Offices across the Globe" 
          description="We have more than 65 offices around the world."
        />
        <Strength 
          number="25" 
          title="Years of Industry Presence" 
          description="We have been in the industry for 25 years."
        />
      </div>
    </div>
  );
}

const Strength = ({number, title, description}) => {
  return (
    <div className="strength">
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ourStrengths;

import Brand from "./ratatoui.jpg";
import './brand.css'

export function Logotipo() {
  return (
    <a href="/">
      <div className="logo">
        <img src={Brand} alt="#"></img>
        <div>
          <h3>Ratatouille</h3>
          <h6>Gourmet fast food</h6>
        </div>
      </div>
    </a>
  );
}

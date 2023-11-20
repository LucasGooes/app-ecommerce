import './global/styles/style.css'
import './global/styles/reset.css'
import './global/js/slick/slick.css'

export default function Home() {

  return (

    <div className="top-bar">
      <ul className="top-bar__text-list container">
        <li className="top-bar__text-list__item">
          <span>Lorem ipsum dolor sit amet</span>
        </li>
        <li className="top-bar__text-list__item">
          <span>Lorem ipsum dolor sit amet</span>
        </li>
        <li className="top-bar__text-list__item">
          <span>Lorem ipsum dolor sit amet</span>
        </li>
      </ul>
    </div>
    // ESTES SCRIPTS ESTÃO NA PASTA GLOBAL
    <script type="text/javascript" src="src/slick/slick.min.js"></script>
    <script src="js/slick-initializer.js"></script>
    <script src="js/base-script.js"></script>

  )
}



import Avengers_logo from '../../resources/img/Avengers_logo.png';
import Avengers from '../../resources/img/Avengers.png';
import './appBanner.scss';

const AppBanner = () => {
    return (
        <div className="app__banner">
            <img src={Avengers} alt="Avengers"/>
            <p className="app__banner-text">
                New comics every week!
                Stay tuned!
            </p>
            <img src={Avengers_logo} alt="Avg_logo"/>
        </div>
    )
}

export default AppBanner;
import AppHeader from '../appHeader/AppHeader';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import RandomChar from '../randomChar/RandomChar';
import decoration from '../../resources/img/vision.png';
import '../../style/style.scss';

const App = () => {
    return (
        <div className='app'>
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList/>
                    <CharInfo/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
            
        </div>
    )
}

export default App;
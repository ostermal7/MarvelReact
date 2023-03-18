
class MarvelService {

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=a8a0bbea56beb292f393b7371da71a50';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
        return res.data.results.map(this._tranformCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
        return this._tranformCharacter(res.data.results[0]);
    }

    _tranformCharacter = (charData) => {
        return {
            name: charData.name,
            description: charData.description ? `${charData.description.slice(0,210)}...` : 'Описание отсутствует',
            thumbnail: charData.thumbnail.path + '.' + charData.thumbnail.extension,
            homepage: charData.urls[0].url,
            wiki: charData.urls[1].url
        } 
    }
}

export default MarvelService;
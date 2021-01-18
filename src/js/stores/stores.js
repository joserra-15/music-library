import {footer} from '../views/components/Footer.js';
import {filter} from '../views/components/Filter.js';
import {navbar} from '../views/components/Navbar.js';
import {countryOptions} from '../views/components/CountryOptions.js';
import {main} from '../views/components/Main.js';
import {musicCard} from '../views/components/MusicCard.js'
import {renderView} from '../views/renderView.js';
import {get, getCountry} from '../api.js'
import {createFragmentList} from '../helpers/helpers.js'

const mainPage = () => {
    getCountry().done(result => {
        const fragment = $(document.createDocumentFragment());
        $(fragment).append(navbar);
        $(fragment).append(filter);
        $(fragment).append(main);
        $(fragment).append(footer);
        renderView(fragment);
        $(countryModal).append(createFragmentList(result, countryOptions));
    })
};

const search = () => {
    const option = $('.options input:checked').val()
    const value = $('.header input').val();
    get(value, option).done(({results}) => {
        console.log(results)
        renderView(createFragmentList(results, musicCard), $('.main'));
    })
}




export {mainPage, search};

import {createCards} from "./cardCreation";
import {useIndexedDb} from "./indexedDB";

useIndexedDb("favorites", "FavoritesStore", "get").then(results => {
    createCards(results);
});
import {createCards} from "./cardCreation";
import {loadImages} from "./app";

loadImages().then(data => createCards(data));
import {getTours} from "@rest/tours";
import '@myCss';
import {images} from "@services/img/img";
import {ITours} from "@models/tours/itours";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";
import {initToursDivElements} from "@services/initapp";

export let  toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist

initApp();

/**
 * 
 * Функция Init App:
 */
function initApp(): void {
  initHeaderTitle('Туры', 'h1');
  initFooterTitle('Туры по всему миру', 'h2');
  // init data
  const tourData: Promise<ITours[]> = getTours();

  tourData.then((data): void => {
    console.log('call ')
    toursDataArray = data;
    initToursDivElements(data);
  });  
}

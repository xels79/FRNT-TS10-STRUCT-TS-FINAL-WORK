import {getTours} from "@rest/tours";
import '@myCss';
import {images} from "@services/img/img";
import {ITours} from "@models/tours/itours";
import {initFooterTitle, initHeaderTitle} from "@services/general/general";
import {initToursDivElements} from "@services/initapp";

export let  toursDataArray: ITours[] = [];
const imagesStore = images; // ссылка на изображения нужна чтобы webpack формировал изображения в папке dist


/**
 * 
 * Функция Init App:
 */
(function(){
  initHeaderTitle('Туры', 'h1');
  initFooterTitle('Туры по всему миру', 'h2');
  // init data
  const tourData: Promise<ITours[]> = getTours();

  tourData.then((data): void => {
    console.log('call ')
    toursDataArray = data;
    initToursDivElements(data);
  });  
})();


// init app

/*  - перенести все методы ниже в раздел services (сюда импортировать и вызывать)
-   создать метод initApp который будет здесь вызываться, в теле метода добавить эти имортированные методы
    - Указать в методах возвращающие типы, типы для параметров, в теле функции также указать типы чтобы не было ошибок
*/


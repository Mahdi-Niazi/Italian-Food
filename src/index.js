import './style.css';
import { fetchData} from './module/addScore.js';

const menuList = document.querySelector('.lists');

const displayLists = async () => {
  const menu = await fetchData();
  menuList.innerHTML = '';
  menu.forEach((data, index) => {
    if (index <= 18 && index > 9) {
      menuList.innerHTML += `

        <li dataId='${data.idMeal}'>

        <img src="${data.strMealThumb}" alt="${data.strMeal}">
        <div class="name-con">
            <span class="menu-name">${data.strMeal}</span>
            <div class="like-con">
              <i class="fa-regular fa-heart"></i>
              <span class="likes">5 likes</span>
            </div>
        </div>
        <div class="button-con">
        <button type="button" class="addComment">Comment</button>
        <button type="button" class="addReservation">Reservation</button>
        </div>
    </li>`;
    }
  });
};

displayLists();

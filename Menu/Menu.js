/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

//Step 1

// 0-Create component function
function menuCreator(menuList) {
  //1-Create HTML markup
  const menu = document.createElement('div');
  const list = document.createElement('ul');

  //2-Define HTML structure
  menu.append(list);

  //3-Add CSS styles using classes
  menu.classList.add('menu');
  menu.classList.add('menu--open');
  list.classList.add('ul');

  //4-Configure text/img content

  //5-Add functionality
  menuButton.addEventListener('click', () => {
    // toggle the toggle class on the menu
    menu.classList.toggle('menu--open');
  });

  //6-Generate new elements from data
  menuList.forEach(element => {
    let li = document.createElement('li');
    list.append(li);
    li.textContent = element;
  })

  return menu;
}
//Selecting the container where we want to add our components to
const menuButton = document.querySelector('.header');


menuButton.append(menuCreator(menuItems));

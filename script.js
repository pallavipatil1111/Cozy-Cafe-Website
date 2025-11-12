function showDetails(item) {
  // Save the clicked item in localStorage
  localStorage.setItem('selectedItem', item);
  // Go to details page
  window.location.href = 'details.html';
}

document.addEventListener('DOMContentLoaded', () => {
  const item = localStorage.getItem('selectedItem');
  if (!item) return;

  const itemsData = {
    espresso: {
      name: 'Espresso',
      img: 'https://www.nestleprofessional.in/sites/default/files/2021-08/Espresso_0.jpg',
      price: 'Rs.180',
      ingredients: 'Freshly brewed coffee beans'
    },
    latte: {
      name: 'Latte',
      img: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Latte_with_winged_tulip_art.jpg',
      price: 'Rs.220',
      ingredients: 'Espresso, steamed milk, foam'
    },
    cappuccino: {
      name: 'Cappuccino',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvLGduXZkIN87rUyfpYKdovmpt3ErSk7jNjw&s',
      price: 'Rs.280',
      ingredients: 'Espresso, steamed milk, milk foam'
    }
  };

  if(itemsData[item]) {
    document.getElementById('item-name').textContent = itemsData[item].name;
    document.getElementById('item-img').src = itemsData[item].img;
    document.getElementById('item-price').textContent = itemsData[item].price;
    document.getElementById('item-ingredients').textContent = `Ingredients: ${itemsData[item].ingredients}`;
  }
});

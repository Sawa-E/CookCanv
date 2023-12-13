document.getElementById('searchBar').addEventListener('input', function (e) {
  var searchQuery = e.target.value.toLowerCase();

  var dishes = [
    { name: 'ラーメン', url: 'ramen.html' },
    { name: '豚骨ラーメン', url: 'tonnkotu.html' },
    { name: '味噌ラーメン', url: 'miso.html' },
    { name: '醤油ラーメン', url: 'syoyu.html' },
    { name: '寿司', url: 'sushi.html' },
    // 他の料理をここに追加
  ];

  if (searchQuery === '') {
    displayResults([]);
    return;
  }

  var filteredDishes = dishes.filter(function (dish) {
    return dish.name.toLowerCase().includes(searchQuery);
  });

  displayResults(filteredDishes);
});

function displayResults(dishes) {
  var searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  dishes.forEach(function (dish) {
    var element = document.createElement('a');
    element.textContent = dish.name;
    element.href = dish.url;
    searchResults.appendChild(element);
    searchResults.appendChild(document.createElement('br'));
  });
}

window.onload = function () {
  document.getElementById('search-results').style.display = 'none';
};

document.getElementById('search-input').addEventListener('input', function (event) {
  var searchText = event.target.value;
  var searchResults = document.getElementById('search-results');

  if (searchText.length === 0) {
    // 入力が空の場合、検索結果を非表示にする
    searchResults.style.display = 'none';
    return;
  } else {
    // 入力がある場合、検索結果を表示する
    searchResults.style.display = 'block';
  }

  searchResults.innerHTML = ''; // 結果をクリア

  // サンプルデータ
  var recipes = [
    { name: '醤油ラーメン', url: 'syoyu.html' },
    { name: '味噌ラーメン', url: 'miso.html' },
    { name: '塩ラーメン', url: 'salt.html' },
    // 他のレシピ...
  ];

  // 部分一致検索
  var filteredRecipes = recipes.filter(function (recipe) {
    return recipe.name.includes(searchText);
  });

  // 検索結果を表示
  filteredRecipes.forEach(function (recipe) {
    var link = document.createElement('a');
    link.href = recipe.url;
    link.textContent = recipe.name;
    link.style.display = 'block'; // リンクをブロック要素として表示
    searchResults.appendChild(link);
  });
});

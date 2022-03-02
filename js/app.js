const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText);

    searchField.value = '';
    const url = https://openapi.programming-hero.com/api/phones?search=${searchText}
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data.slice(0, 20)))
}

const displaySearchResult = phones => {
    const searshResult = document.getElementById('seach-result')
    searshResult.textContent = '';
    phones.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="card w-75">
            <img src="${phone.image}" class="card-img-top p-4" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">${phone.brand}</p>
                <button onclick="LoadPhoneDetail('${phone.slug}')" class="bg-primary text-white">see details </button>
            
             </div>
         </div>
        `;
        searshResult.appendChild(div);
    });
}
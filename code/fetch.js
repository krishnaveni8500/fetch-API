fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(data=>{
    root.innerHTML=data.map((item)=>{
        return(
            `
            <tr>
            <td>${item.title}</td>
            <td><img src=${item.image} width="80px" height="80px"/></td>
            <td>${item.price}</td>
            <td>${item.category}</td>

            </tr>
            `
        )
    }).join('')
})
const services = [
    { id: 1, name: "LG K40 ($80.000)", area: "Celulares" },
    { id: 2, name: "Samsung A10 ($150.000)", cost: 75000, area: "Celulares" },
    { id: 3, name: "Iphone 12 ($240.000)", area: "Celulares" },
    { id: 4, name: "Samsung Pocket ($1.000.000)", area: "Celulares" },
    { id: 5, name: "Samsung Galaxy Tab A A8 ($100.000)", area: "Tablets" },
    { id: 6, name: "Samsung Galaxy Tab A A7 Lite ($150.000)", area: "Tablets" },
    { id: 7, name: "Apple iPad 9ª generación ($200.000)", area: "Tablets" },
    { id: 8, name: "Spica Tab-x30 ($240.000)", area: "Tablets" },
    { id: 9, name: "Lenovo Ideapad 1i ($120.000)", area: "Notebooks" },
    { id: 10, name: "EXO Smart T38 ($150.000)", area: "Notebooks" },
    { id: 11, name: "Hp 15-dy5001la ($220.000)", area: "Notebooks" },
    { id: 12, name: "Exo Smart T55 ($250.000)", area: "Notebooks" }
]

let bienvenida = "Bienvenidos a pepito technology. Elija una opción\n1 - Celulares\n2 - Tablets\n3 - Notebooks\n4 - Salir"
let option;

do {
    option = Number(prompt(bienvenida));

    if (option === 1) {
        const celularesItems = services.filter(service => service.area === "Celulares")
        let celularesOptions = celularesItems.map((service, index) => `${index + 1}. ${service.name}`)
        celularesOptions = celularesOptions.join('\n')
        alert(`Lista de celulares:\n${celularesOptions}`)
    } else if (option === 2) {
        const tabletsItems = services.filter(service => service.area === 'Tablets')
        let tabletsOptions = tabletsItems.map((service, index) => `${index + 1}. ${service.name}`)
        tabletsOptions = tabletsOptions.join('\n')
        alert(`Lista de tablets:\n${tabletsOptions}`)
    } else if (option === 3) {
        const notebooksItems = services.filter(service => service.area === 'Notebooks')
        let notebooksOptions = notebooksItems.map((service, index) => `${index + 1}. ${service.name}`)
        notebooksOptions = notebooksOptions.join('\n')
        alert(`Lista de notebooks:\n${notebooksOptions}`)
    }
} while (option !== 4)
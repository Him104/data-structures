const menu = [
    {
      name: "Menu 1",
      link: "http://google.com",
      subitems: [
        {
          name: "Menu 2",
          link: "http://google.com"
        },
        {
          name: "Menu 3",
          link: "http://google.com",
          subitems: [
            {
              name: "Menu 4",
              link: "http://google.com"
            }
          ]
        }
      ]
    },
    {
      name: "Menu 5",
      link: "http://google.com"
    }
  ];
  
const printMenu = (itmes) => {
itmes.forEach(item =>{
    console.log(item.name);
    console.log(item.link);

    if(item.subitems){
        printMenu(item.subitems);
    }

    console.log("**********");

})

}

printMenu(menu)
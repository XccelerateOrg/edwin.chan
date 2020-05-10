

var personDetail = {
  name: 'Sam',
  programmingLevel: 'Master'
}

var classes = [
  {
    name: 'FTSE',
    instructor: 'Sam'
  },
  {
    name: 'FTDS',
    instructor: 'Jyoti'
  }
]

var venues = [
  {
    name: 'RM1',
    className: 'FTSE'
  },
  {
    name: 'RM2',
    className: 'FTDS'
  }
]

// part1 
/* 
 andy's functions are called in a clumsy way which is not concise enough 
 there are many parts of his function repeated*/
// part2
function getVenue() {
  console.log('Getting person detail...')  
  promise('Person detail received!',personDetail.name)
    .then(function (name) {
      console.log('Getting class name...')
      for (i = 0; classes.length > i; i++) {
        if (name === classes[i].instructor) {
          promise('Class name found!',classes[i].name)
          .then(function (classN) {
            console.log('Getting venue name...')
            for (i = 0; venues.length > i; i++) {
              if (classN === venues[i].className) {
                promise('Venue found!',venues[i].name)
                .then(function (room) {
                  console.log(room)
                  console.log('Program ends here')
                })
              }
            }
          })
        }
      }
    })
    function promise(str1,x){
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(x);
          console.log(str1)
        }, 2000)
    })
}}
getVenue()


//part3

async function getVenue() {
  console.log('Getting person detail...')  
   let name = await promise('Person detail received!',personDetail.name)
      console.log('Getting class name...')
      for (i = 0; classes.length > i; i++) {
        if (name === classes[i].instructor) {
          let classN = await promise('Class name found!',classes[i].name)
            console.log('Getting venue name...')
            for (i = 0; venues.length > i; i++) {
              if (classN === venues[i].className) {
               let room = await  promise('Venue found!',venues[i].name)
                  console.log(room)
                  console.log('Program ends here')
                
              }
            }
          
        }
      }
    
    function promise(str1,x){
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(x);
          console.log(str1)
        }, 2000)
    })
}}
getVenue()

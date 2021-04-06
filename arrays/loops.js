let catNames =[
    'Misifu',
    'Pelusa',
    'Michi',
    'Chikilino',
    'Oreo',
    'Machito'
]

// Looping with forEach
catNames.forEach(function(name, index){  // <--- callback function: function that's passed to another function
    console.log(index, ' :: ', name)
})

// Looping with for
for (let index = 0; index < catNames.length; index++) {
    const element = catNames[index];
    console.log('------> ', element)
}

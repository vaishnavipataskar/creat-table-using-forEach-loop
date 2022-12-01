var cl=console.log;

var data=[
   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
 ];

  var dataInfo=document.getElementById('dataInfo');

  var result='';
  data.forEach(function(ele,i){
   result+=`<tr>
               <td>${i+1}</td>
               <td>${ele.name}</td>
               <td>${ele.weight}</td>
               <td>${ele.symbol}</td>
               <td>${ele.position}</td>   
            </tr>`
  })

  dataInfo.innerHTML=result;

 var authorsInfo=[ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

   var stdArray = [{
      fname: "Tony",
      lname: 'Stark',
      nickName: 'Ironman',
      email: 'tony@stark.com'
  },
  {
      fname: "Peter",
      lname: 'Parkar',
      nickName: 'SpiderMan',
      email: 'peter@stark.com'
  },
  {
      fname: "Bruce",
      lname: 'Wayne',
      nickName: 'BatMan',
      email: 'bruce@wayne.com'
  },
  {
      fname: "Stephen",
      lname: 'Strange',
      nickName: 'Dr. Strange',
      email: 'dr@strange.com'
  },
]

var stdInfo=document.getElementById('stdInfo');

var result1=" ";
stdArray.forEach(function(std,index){
   result1+=`<tr>
               <td>${index+1}</td>
               <td>${std.fname}</td>
               <td>${std.lname}</td>
               <td>${std.nickname}</td>
               <td>${std.email}</td>   
            </tr>`
})

stdInfo.innerHTML=result1;
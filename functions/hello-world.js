// // /functions/hello-world.js
// exports.handler = async function(event) {
//     console.log(event,'====')  
//   return {
//       statusCode: 200,
//       body: "Hello Bootcampers new world",
//     };
//   }



// /functions/hello-world.js
exports.handler = async function(event) {
  const {body}= event 
  console.log(JSON.parse(body).name,'dsadsdas====') 
return {
    statusCode: 200,
    body: JSON.parse(body).name,
  };
}
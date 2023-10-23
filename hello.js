module.exports.handler = async(event) => {
    return{
        statusCode: 200,
        headers:{
            "Content-Type": "application/json"

        },
        body: JSON.stringify({message: "Hello from from youtube demo api"}),
    };
};

// export const handler = async (event) => {
//     // TODO implement
//     const response = {
//       statusCode: 200,
//       body: JSON.stringify('Hello from shree Lambda! Serverless'),
//     };
//     return response;
//   };
  
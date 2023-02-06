module.exports.handler = async (event) => {

  const multiplier = 7;
  var catAge = multiplier * event.age;

  console.log("Recieved: ",JSON.stringify(event,null,2))

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: catAge,
        input: event,
      },
      null,
      2
    ),
  };
};

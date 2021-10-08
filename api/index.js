exports.handler = async function http (req) {
  console.log('Begin API called')
const data= await  fetch('https://v6.exchangerate-api.com/v6/1f88a2cead881e5036e60f6b/latest/USD')
  return {
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from your Begin API!',data
    })
  }
}


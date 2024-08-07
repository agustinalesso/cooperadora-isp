export default async function handler(req, res) {
  const {method} = req;

  if(method === 'POST') {
    const data = JSON.parse(req.body);
    // Fetch a backend
    try {
      const response = await fetch('http://localhost:1973/pagos', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const responseData = await response.json();
      res.send(responseData);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.get('/api/image', async (req, res) => {
  try {
    const imageUrl = 'https://images.metmuseum.org/CRDImages/ep/web-large/DP273977.jpg'; // Replace this with the MET API image URL
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    // Set the appropriate content type for the image
    res.set('Content-Type', response.headers['content-type']);

    // Send the image data as a Buffer
    res.send(Buffer.from(response.data));
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Error fetching image');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

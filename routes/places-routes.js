const express = require('express');

const HttpError = require('../models/http-error');

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Philadelphia Art Museum',
    description: 'Rocky made this world famous by running up the steps',
    location: {
      lat: 39.9655697,
      lng: -75.1831548,
    },
    address: '2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130',
    creator: 'u1',
  },
];

router.get('/:pid', (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    return next(new HttpError('Could not find a provided id', 404));
  }

  res.json({ place });
});

router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creatoer === userId;
  });

  if (!place) {
    throw new HttpError('Could not find a provided id', 404);
  }
  res.json({ place });
});

module.exports = router;

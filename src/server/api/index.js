import express from 'express';

import dataAPI from './data';

const router = express.Router();

router.get('/data', dataAPI);

export default router;

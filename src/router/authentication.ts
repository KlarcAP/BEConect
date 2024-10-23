import type express from 'express';

import { register } from '../controllers/authetication.ts';

export default (router: express.Router) => {
    router.post ('/auth/register', register);
};

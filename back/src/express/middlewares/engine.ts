import mustacheExpress from 'mustache-express';

import { app } from '../../config/server';

app.engine('mustache', mustacheExpress());

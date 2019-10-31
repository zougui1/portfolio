import { app, express } from '../../config/server';

// create a build
const build = express.static('/root/portfolio-v2/front/build');

// send the build to any URL
app.use('/', build);
app.use('*', build);

import { NextFunction, Response, Request } from 'express';

import { app, express } from '../../config/server';
import { Translations } from '../../services/Translations';

// create a build
//const build = express.static('/root/portfolio-v2/front/build');
const build = express.static('E:/www/projects/portfolio/front/build');

app.set('view engine', 'mustache');
app.set('views', 'E:/www/projects/portfolio/front/build');

const handler = (req: Request, res: Response, next: NextFunction) => {
  const lang = req.acceptsLanguages('fr', 'en') || 'en';

  // @ts-ignore
  res.render('index', Translations.getMetatagsObject(lang));
  console.log(Translations.getMetatagsObject(lang))
}

// send the build to any URL
app.use('/', build);
app.use('*', build);
app.use('/', handler);
app.use('*', handler);
//app.get('/', handler)

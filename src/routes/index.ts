import { Router } from "express";
import * as PagesController from '../controlers/pegesController';
import * as SearchController from '../controlers/searchController';

const router = Router();

router.get('/', PagesController.home);
router.get('/dogs', PagesController.dogs);
router.get('/cats', PagesController.cats);
router.get('/fishes', PagesController.fishes);



router.get('/', SearchController.search);

export default router;
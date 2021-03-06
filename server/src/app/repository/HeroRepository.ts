/**
 * Created by Kundan Singh
 */

import HeroModel = require("./../model/HeroModel");
import IHeroModel = require("./../model/interfaces/HeroModel");
import HeroSchema = require("./../dataAccess/schemas/HeroSchema");
import RepositoryBase = require("./BaseRepository");

class HeroRepository extends RepositoryBase<IHeroModel> {
    constructor() {
        super(HeroSchema);
    }
}

Object.seal(HeroRepository);
export = HeroRepository;
/**
 * Created by Kundan Singh
 */

import mongoose = require("mongoose");

interface HeroModel extends mongoose.Document {
    power: string;
    amountPeopleSaved: number;
    name: string;
}

export = HeroModel;
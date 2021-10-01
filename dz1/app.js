const boysFolder = `${__dirname}/boys`;
const girlsFolder = `${__dirname}/girls`;
const builder = require("./function/functionMoveToFolder");
builder.moveToCorrectFolder(girlsFolder, boysFolder, "male");
builder.moveToCorrectFolder(boysFolder, girlsFolder, "female");

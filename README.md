# Bingo Card Generator

A tool to create 'bingo' cards for events (think Apple Keynote bingo).

This project uses NodeJS, make sure you have it, and npm, installed, then you can run
`npm install` to get the dependencies and `npm start` to start the webserver. You can
change the port the webserver runs on by changing an environment variable (useful when
deploying on Heroku).

To customize the generator with your entries, create a file called cardEntries.json in
the `public/` directory, in the format of cardEntriesEXAMPLE.json.

Yes I know this project probably doesn't need Node but it made it easy to work with.

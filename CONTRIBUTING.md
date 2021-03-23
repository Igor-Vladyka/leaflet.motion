Contributing to Leaflet
=======================

 1. [Getting Involved](#getting-involved)
 2. [Reporting Bugs](#reporting-bugs)
 3. [Contributing Code](#contributing-code)
 4. [Running the Tests](#running-the-tests)
 6. [Improving Documentation](#improving-documentation)
 7. [Code of Conduct](#code-of-conduct)
 8. [Thank You](#thank-you)

## Getting Involved

There are several ways to help improve Leaflet Motion:

 * Discovering and [reporting bugs](#reporting-bugs);
 * [Improving Documentation](#improving-documentation) - especially if you've figured something out which is not covered by the documentation;
 * Helping others on [GitHub issues](https://github.com/Igor-Vladyka/leaflet.motion/issues);

## Reporting Bugs

Before posting a bug on the Project [issues page](https://github.com/Igor-Vladyka/leaflet.motion/issues) please first make sure the issue is caused by Leaflet Motion and not by something else in your project, by [Leaflet itself](https://github.com/Leaflet/Leaflet/issues) or by another Leaflet plugin.


Here are some tips for creating a helpful report that will make fixing it much easier and quicker.

 * Write a **descriptive, specific title**. Bad: *Problem with polylines*. Good: *Doing X in IE9 causes Z*.
 * Include **browser, OS and Leaflet version** info in the description.
 * Create a **simple test case** that demonstrates the bug (e.g. fork the [Leaflet.Motion Plnkr](https://plnkr.co/edit/YEuyoRUebDyPi55k?preview)) and create a minimal version.
 * Check whether the bug can be reproduced in **other browsers** (very easy once you've made a Plnkr).
 * Check if the bug occurs in the stable version, master, or both (add version constraints to the unpkg.com URLs).
 * *Bonus tip:* if the bug only appears in the master version but the stable version is fine,
   use `git bisect` to find the exact commit that introduced the bug.

## Contributing Code

### Considerations for Accepting Patches

Small, focused, well documented and tested code is most likely to be accepted. Leaflet.motion has
very few maintainers, so the more production-ready your pull request is the more likely it is to help.

Where relevant please remember to include commits updating the documentation.

### Setting up the Build System

The Leaflet build system uses [NodeJS](http://nodejs.org/).
To set up the Leaflet build system, install [NodeJS](https://nodejs.org/).
Then run the following commands in the project root to install dependencies:

```
npm install
```
or, if you prefer [`yarn`](https://yarnpkg.com/) over `npm`:
```
yarn install
```

### Improving Documentation
The documentation for Leaflet.Motion is in `README.md`. Good documentation means other
people will be able to use your contributions.

### Making Changes to Leaflet Source
 * TODO: Detail basic intro to understanding the source
 * TODO: Detail how to test the project
 * TODO: Detail how to build the project

## Code of Conduct

Everyone is invited to participate in the Leaflet community and related projects:
we want to create a welcoming and friendly environment.
Harassment of participants or other unethical and unprofessional behavior will not be tolerated in our spaces.
All projects under the official Leaflet organisation follow the
[Contributor Covenant](http://contributor-covenant.org/version/1/3/0/), it's a good covenant - so we might
as well stick to it here!

## Thank You

Not only does your contribution to Leaflet Motion and its community earn our gratitude, but it also makes you AWESOME.
Join [this approved list of awesome people](https://github.com/Igor-Vladyka/leaflet.motion/graphs/contributors).

## Credits
This `CONTRIBUTING.md` was forked from the excellent one found in the main [Leaflet Project](https://github.com/Leaflet/Leaflet/blob/master/CONTRIBUTING.md)

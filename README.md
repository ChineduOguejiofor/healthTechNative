<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

  <h3 align="center">Health Tech</h3>

  <p align="center">
   An App that shows you the hospitals near by to aid in these corona times
    <br />
    <br />
   
  </p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contributors](#contributors)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

Health Tech **a mobile app that shows near by hosiptials**.

### Built With

- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Redux-Saga](https://redux.js.org/)
- Redux-Saga

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure to have **NodeJS** installed on your local machine. you can visit [here](https://nodejs.org/en/) and follow the intructions to set it up.

### Installation

1. Clone this repo

2) Install NPM packages

```sh
yarn add
```

3. Generate your google API Key and link them up in the app using **.env** variables with the following format:

```
GOOGLE_API_KEY
PLACES_BASE_URL=https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=
```

`

<!-- Technical Desicions -->

1. First I tried to make the components as reusable as possible
2. The MapComponent is quite BIG so I splitted it up into sub components ie Markers,input etc
3. I used Redux to connect everything
4. Finally added sagas to the flow to make API calls

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contributors

- **Chinedu Oguejiofor** - [@alexcajetan](https://twitter.com/alexcajetan) - chineduknight@gmail.com

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/Enye-Team-Cougar/cleanit-frontend.svg?style=flat-square
[contributors-url]: https://github.com/Enye-Team-Cougar/cleanit-frontend/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Enye-Team-Cougar/cleanit-frontend.svg?style=flat-square
[forks-url]: https://github.com/Enye-Team-Cougar/cleanit-frontend/network/members
[stars-shield]: https://img.shields.io/github/stars/Enye-Team-Cougar/cleanit-frontend.svg?style=flat-square
[stars-url]: https://github.com/Enye-Team-Cougar/cleanit-frontend/stargazers
[issues-shield]: https://img.shields.io/github/issues/Enye-Team-Cougar/cleanit-frontend.svg?style=flat-square
[issues-url]: https://github.com/Enye-Team-Cougar/cleanit-frontend/issues
[license-shield]: https://img.shields.io/github/license/Enye-Team-Cougar/cleanit-frontend.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Enye-Team-Cougar/cleanit-frontend/blob/master/LICENSE.txt
[travis-shield]: https://travis-ci.org/Enye-Team-Cougar/cleanit-frontend.svg?branch=master
[travis-url]: https://travis-ci.org/Enye-Team-Cougar/cleanit-frontend
[coveralls-shield]: https://coveralls.io/repos/github/Enye-Team-Cougar/cleanit-frontend/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/Enye-Team-Cougar/cleanit-frontend?branch=master
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png

<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->







<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://i.imgur.com/mCGl69Y.png" alt="Logo" width="280" height="80">
    
  </a>

<h3 align="center">Two Left Thumbs</h3>

  <p align="center">
    Stackoverflow Clone
    <br />
    <a href="https://github.com/CroissantAhhh/TwoLeftThumbs/wiki"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://two-left-thumbs.herokuapp.com/">View Demo</a>
    ·
    <a href="https://github.com/CroissantAhhh/TwoLeftThumbs/issues">Report Bug</a>
    ·
    <a href="https://github.com/CroissantAhhh/TwoLeftThumbs/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

Two Left Thumbs is a question and answer site for passionate videogamers on all platforms. It's built and run by you as part of the Stack Exchange network of sites. With your help, we're working together to build a library of detailed answers to every question about videogames and videogame consoles.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [Pug](https://pugjs.org/language/code.html)
* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


## *IMPORTANT!*
   If you add any python dependencies to your pipfiles, you'll need to regenerate your requirements.txt before deployment.
   You can do this by running:

   ```bash
   pipenv lock -r > requirements.txt
   ```

## *ALSO IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on apline-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Signup for a new account, or login to a pre existing account. 

<img src="https://i.imgur.com/0PM1Sgb.png" alt="" width="900" height="450">


Post a new image to your account.

<img src="https://i.imgur.com/6RJyuYm.png" alt="" width="500" height="600">

Feel free to like or comment on a followers images

<img src="https://i.imgur.com/R7ITidH.png" alt="" width="500" height="750">



_For more examples, please refer to the [Documentation](https://github.com/KristyCS/Foodstagram/wiki)_

<p align="right">(<a href="#top">back to top</a>)</p>







<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Afton Slone Jr - [@AftonSlone](https://twitter.com/AftonSlone) - [Linkedin](https://www.linkedin.com/in/afton-slone/)

Project Link: [https://foodstagram-aa.herokuapp.com/login](https://foodstagram-aa.herokuapp.com/login)

<p align="right">(<a href="#top">back to top</a>)</p>







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png


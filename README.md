# Take home assignment

> :timer_clock: This project should be completed in 48 hours, expected to be done over the
> February 26th-27th.

## :information_source: Directions

* Fork this repository and implement the following functionality
  - :no_entry_sign: **Do not open Pull Requests against this repository**

### :scroll: The Backend

> Write a Node.JS back-end that contains one endpoint that utilzes an http GET request and returns the following crypto currency data.


1. Ticker (Name of the crypto currency in question)
2. Price

> This backend will simply wrap a 3rd party Rest API such as (your choice)

1. [Coin Gecko](https://www.coingecko.com/en/api/documentation)
2. [Coin Base](https://developers.coinbase.com/docs/wallet/guides/price-data)

#### The Backend should be implemented in one of the following Rest Api frameworks (your choice)

1. express
2. fastify

### :scroll: The Frontend

> Build a React front-end that queries the endpoint in your back-end, and displays the data.

1. Make use of a React UI framework such as `Material UI`
2. Create a simple front end which contains a user input form where a user can enter the name of a crypto-currencies ticker [e.g BTC],
   and the price of that currency is then displayed when the user clicks a button.
   - Design choice, colorschemes etc are left up to the applicant

## :telescope: Criteria (What the review team will be looking for)

> **Please read carefully**: *We are providing the below information to help you succeed*.
> If there are questions about the project specifications please email *matt@dmgblockchain.com* for backend questions,
> or *ryo@dmgblockchain.com* for front-end questions. Emailing on the weekend is fine.

1. The project has a clean folder structure with clear seperation of backend and frontend code.
  - All code is formatted in a unified manner using a `.prettierrc.json`
  - All code obeys the [Js Doc commenting style](https://jsdoc.app/about-getting-started.html)

2. Git branching strategies were used
  - Feature branches were clearly named and branch off of a `dev` branch
  - The applicant demonstrates a strong understanding of version control 

3. Robust error handling
  - Custom Error classes were made, that were thrown/caught in proper places.

4. Code Modularity
  - An indepth understanding of Object Oriented Design principles, encapsulation
    and abstraction was demonstrated.
  - The code flow is easily understandable, variable names are descriptive, and the code
    was well documented with comments.

5. Typescripts static typing features were used.
  - The applicant clearly understands statically typed methodologies.
    - Interfaces were used to create custom types.
  - The applicant *did not* simply rename javascript files with the `.ts` extension
  - The applicant clearly shows understanding of async/await and Promises.

6. Unit tests
  - The backend code base was unit tested with `jest`
  - :no_entry_sign: **Do not write tests for the front-end**

7. React Component resusability
  - Component props abstracted into classes/objects

8. React Hooks
  - Components are rendered efficiently, and a deep understanding of react hooks
    was demonstrated.


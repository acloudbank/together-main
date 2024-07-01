# Real Time Voting

# This platform is integrated with the VOTELLY voting system that is hack proof because of the blockchaine databes.

Online voting platform using BlockChain database, AI, and Biodata End to end verifiable blockchain voting software for a variety of use cases

voting services that maximize transparency, reduce costs, and mitigate risks.

Why Cryptographic Encryption? Tallying Votes are tallied real-time, without decrypting individual votes. Only the final tally will be decrypted for all to see.

Verifiability The ciphered final tally will be released into the public, along with everyone's encrypted votes. Anyone with a computer will be able to tally the results themselves, to verify or disprove the final tally.

Accessibility Civic duties made easy. Let your vote be cast from the comfort of your own home, using nothing but a personal device, and know they will be securely delivered, processed and stored.


![image](https://homepesa.com/images/2023-03-m7.jpeg)

This project is built using the following technologies:

- [Antd UI](https://ant.design/)
- [GraphQL](https://graphql.org/)
- [Apollo](https://www.apollographql.com/)
- [NextAuth](https://next-auth.js.org/)
- [TypeScript](https://www.typescriptlang.org/)

It supports GraphQL Query, Mutation and Subscription out of the box.

## Requirements

- [Node.js-v18](https://nodejs.org/)
- [yarn-1.22.19](https://yarnpkg.com/)
- [Docker and docker compose](https://docs.docker.com/compose/install/)

## Packages

- [**Frontend**](): Next.js application

This application is the primary user-facing application. Once it’s up and running (see Development section), it’s available on [http://localhost:3000](http://localhost:3000/).

- [**Backend**](): Dockerized Hasura application

[Hasura](https://hasura.io/) is an open source engine that connects to our databases & micro-services and auto-generates a production-ready GraphQL backend. It’s very easy to get Hasura up and running on our local system. 

## Installation

1. Clone the application:

   ```bash
      git clone git@gitlab.com:acloudbank/together/togetherapp.git
   ```
   .....

2. Copy and adjust .env.local
   # Best ask team mates for default env vars.
   ```bash
      cp .env.example .env.local
   ```
3. Run the bootstrap script by running the following command from the root of your project:

   ```bash
      yarn bootstrap
   ```

4. Start Docker and run both the applications by running the following command from the root of your project:

   ```bash
      yarn dev
   ```

The Hasura GraphQL endpoint will be up and running on [http://localhost:8080/v1/graphql](http://localhost:8080/v1/graphql). The Next.js application will be available at [http://localhost:3000/](http://localhost:3000/).

5. Apply migrations: 

   ```bash
      yarn migrate:apply
   ```

6. Apply metadata (for actions and events): 

   ```bash
      yarn metadata:apply
   ```



7. Run and access hasura console on [http://localhost:9695] by running the following command from the root of your project: 

   ```bash
      yarn hasura:console
   ```


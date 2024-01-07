# CORD.js <!-- omit in toc -->

CORD.js is a JavaScript SDK that provides a collection of classes and methods to interact with the Cord network.

## Table of Contents

- [Build to see changes](#build-to-see-changes)
- [Experiment with SDK methods](#experiment-with-sdk-methods)
- [To consume SDK in your project](#to-consume-sdk-in-your-project)

## Build to see changes

To get started with CORD.js and see the latest changes, follow these steps:

1. Clone this repository and navigate into it:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the necessary dependencies:

    ```bash
    yarn
    ```

3. Build the SDK to see the changes:

    ```bash
    yarn run build
    ```
## To consume SDK in your project

To use CORD.js in your project, follow these steps:

1. Install the SDK using yarn:

    ```bash
    yarn add @cord.network/sdk
    ```

2. You can now import and use the SDK in your project.
   
## Experiment with SDK methods

After building the package, you can experiment with the SDK methods using the provided demo scripts. Ensure that the Cord instance is running locally by following the instructions in the README.md under the CORD repository, specifically under the topic "Run the node."

Run the demo scripts using the following commands:

```bash
npx tsx demo/src/func-test.ts
npx tsx demo/src/network-score-test.ts

or with `yarn`
yarn tsx demo/src/func-test.ts
yarn tsx demo/src/network-score-test.ts




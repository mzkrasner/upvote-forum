# SimpleDeploy - Account Attestation Version

This repository was tailored specifically for setting up a new ComposeDB node in the cloud and launching a predefined `Account Attestation` definition onto it. If you are simply looking to get started running Ceramic in the cloud, please reference the generalized [simpledeploy](https://github.com/ceramicstudio/simpledeploy) repository.

This guide explains how to run a pre-built cloud deployment, which references [this guide](https://developers.ceramic.network/docs/composedb/guides/composedb-server/running-in-the-cloud).

As explained in the guide, you will need to install the command line tools for Kubernetes ([kubectl](https://kubernetes.io/docs/tasks/tools/)) and DigitalOcean ([doctl](https://docs.digitalocean.com/reference/doctl/how-to/install/)).

You must then create a Kubernetes Cluster [guide here](https://docs.digitalocean.com/products/kubernetes/how-to/create-clusters/)

Follow each step carefully to make sure you're able to successfully authenticate yourself based on your personal access token.

Continue following the guide (and ignore #1 of the "Clone the simpledeploy repository" section since the repository you are current in replaces that).

Once you arrive at the sentence starting with "You can now follow the existing guides" use the following steps:

1. Run `npm install` within the root directory to download the required dependencies
2. Run `npm run dev` after your dependencies have been installed
3. You can now perform your GraphQL queries using the following endpoint: `http://localhost:5005/graphql`

You can now use your new endpoint as a replacement for the `http://localhost:7007` local endpoint, or another production endpoint in your application code.

## Ansible

In the [ansible](ansible) directory you will find a set of Ansible playbooks to deploy Ceramic nodes on a set of servers.

Refer to the [README](ansible/README.md) in that directory for more information.

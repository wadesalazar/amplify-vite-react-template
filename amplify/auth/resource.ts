import { defineAuth } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      saml: {
        name: 'MicrosoftEntraIDSAML',
        metadata: {
          metadataContent: 'https://portal.sso.us-east-1.amazonaws.com/saml/metadata/NjQwMTY4NDMxNjQwX2lucy1lMGI3MzBiMGNlZGU1ZTU0', // or content of the metadata file
          metadataType: 'URL', // or 'FILE'
        },
      },
      logoutUrls: ['http://localhost:3000/', 'https://mywebsite.com'],
      callbackUrls: [
        'http://localhost:3000/profile',
        'https://mywebsite.com/profile',
      ],
    },
  },
});

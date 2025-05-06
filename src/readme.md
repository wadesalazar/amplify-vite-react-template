Auth: {
      Cognito: {
        userPoolId: "us-east-1_QOJ48geff",
        userPoolClientId: "20aqflob7v4fnkj6mi71ikfnu0",
        loginWith : {
          oauth : {
            domain : "https://us-east-1sd9aiim04.auth.us-east-1.amazoncognito.com/saml2/idpresponse",
            scopes : ["email"] ,
            redirectSignIn: [window.location.origin], 
            redirectSignOut: [window.location.origin], 
            responseType : "code"
          }
        }
       }
    }
  }


  npx ampx sandbox --profile amplify-policy-640168431640


  
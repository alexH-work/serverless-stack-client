const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-api-upload-s3",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://73dmihamy3.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_iYaTrPrOC",
      APP_CLIENT_ID: "228ubvaipj73fikil9h98ioc71",
      IDENTITY_POOL_ID: "us-east-1:de161027-56ed-420b-9ccf-3a7eb46df6c3",
    },
  };
  
  export default config;
export default {
  async fetch(request) {
      const destinationURL = "https://google.com";
          const statusCode = 301;
              return Response.redirect(destinationURL, statusCode);
                },
                };

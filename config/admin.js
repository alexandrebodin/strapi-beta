module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8a406eaa1a724cf7cfa34baafa68ac1c'),
  },
});

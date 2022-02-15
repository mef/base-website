module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e8011ca6ac6fb119da48015040881bbb'),
  },
});

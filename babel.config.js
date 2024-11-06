module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'], // root points to the project root directory
          alias: {
            '@': './', // map '@' to the project root
          },
        },
      ],
    ],
  };
};

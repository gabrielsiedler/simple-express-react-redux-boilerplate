module.exports = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react', 'stage-0'] },
        },
      ],
    },
    {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader?minimize', 'sass-loader'],
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.json$/,
      use: 'json-loader',
    },
    {
      test: /\.(png|jpg|gif)(.*)$/,
      use: 'file-loader',
    },
    {
      test: /\.svg(\?[a-z0-9#=&.]+)?$/,
      use: 'url-loader?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]',
    },
    {
      test: /\.woff(\?[a-z0-9#=&.]+)?$/,
      use: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]',
    },
    {
      test: /\.woff2(\?[a-z0-9#=&.]+)?$/,
      use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]',
    },
    {
      test: /\.[ot]tf(\?[a-z0-9#=&.]+)?$/,
      use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]',
    },
    {
      test: /\.eot(\?[a-z0-9#=&.]+)?$/,
      use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]',
    }
  ],
};

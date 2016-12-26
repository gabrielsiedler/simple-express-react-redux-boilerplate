module.exports = (req, res) => {
  const repositories = [
    { author: 'brunolm', url: 'https://github.com/brunolm/ts-react-redux-startup', name: 'ts-react-redux-startup' },
    { author: 'jpsierens', url: 'https://github.com/jpsierens/webpack-react-redux', name: 'webpack-react-redux' },
    { author: 'pirenelito', url: 'https://github.com/saguijs/sagui', name: 'sagui' },
    { author: 'esnunes', url: 'https://github.com/sqlectron/sqlectron-term', name: 'sqlectron-term' },
    { author: 'maxcnunes', url: 'https://github.com/sqlectron', name: 'sqlectron' },
  ].sort((a, b) => a.name.localeCompare(b.name));

  res.json({ repositories });
};

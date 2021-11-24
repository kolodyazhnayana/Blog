/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

const { withEffectorReactAliases } = require("effector-next/tools");

const enhance = withEffectorReactAliases();

module.exports = enhance({});

